'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////////////////////////////////////////////
// Array methods
let arr = ['a' , 'b', 'c', 'd', 'e']

// SLICE -> returns new array with extracted parts
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd']
console.log(arr.slice(-1)); // ['e']

// create shallow copy of array
console.log(arr.slice()); // ['a' , 'b', 'c', 'd', 'e']

// SPLICE -> mutates the original array
console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // ['a', 'b']

arr = ['a' , 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

// REVERSE -> mutates original array
console.log(arr2.reverse()); //["f", "g", "h", "i", "j"]
console.log(arr2); //["f", "g", "h", "i", "j"]

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
// same as (...arr, ...arr2)

// foreach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function(movement, i, arr) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
})

// forEach on MAP
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
})

// SET
const currArr = Array.from(currencies.values());
const currenciesUnique = new Set(currArr);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}`);
})

// map, filter and reduce methods
// map loops over original array but creates a new array containing the results
// filter loops over original array with an condition and creates a new array with elements that meet the condition
// reduce reduces all array elements down into a single value (e.g. adding all elements together)

const movements2 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroUsd = 1.1;
const movementsUsd = movements2.map(mov => mov * euroUsd)
console.log(movementsUsd);

const movDescr = movements2.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `You withdrew ${Math.abs(mov)}`;
  }
})

console.log(movDescr);

const deposits = movements2.filter(function(mov) {
  return mov > 0;
})
console.log(deposits)

const withdrawls = movements2.filter(mov => mov < 0);
console.log(withdrawls);

const balance = movements2.reduce(function(accumulator, mov, i, arr) {
  return accumulator + mov;
}, 0) // start at 0
console.log(balance);

// max value
const max = movements2.reduce(function(acc, mov) {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements2[0])

console.log(max);

const dogs = [5, 2, 4, 1, 15, 8, 3]
const calcAverageHumanAge = function(ages) {
  const humanAge = ages.map(function(age) {
    if (age <= 2) return 2* age;
    else return 16 + age * 4;
  })
  console.log(humanAge);
  const adults = humanAge.filter(age => age >= 18);
  console.log(adults);
  const average = adults.reduce((acc, age, i, arr) => acc + age/arr.length, 0);
  console.log(average);
}
calcAverageHumanAge(dogs);

const totalDepositsUsd = movements2.filter(mov => mov > 0).map(mov => mov * euroUsd).reduce((acc, mov) => acc + mov, 0);
console.log(Math.round(totalDepositsUsd));

const calcAverageHumanAge2 = ages =>
  ages
    .map(age => (age <= 2) ? 2* age : 16 + age * 4)
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age/arr.length, 0);

console.log(calcAverageHumanAge2(dogs));