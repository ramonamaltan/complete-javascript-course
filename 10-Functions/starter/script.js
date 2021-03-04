'use strict';

// Default Values
const bookings = [];

const createBooking = function(flightNum, numPassengers = 1, price = 199 * numPassengers) {
  // ES5 old way of setting default values
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price
  }
  console.log(booking);
  bookings.push(booking);
}

createBooking('LM123', 2);

const flight = 'LM234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 23897248274
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if(passenger.passport == 23897248274) {
    // alert('Check in');
  } else {
    // alert('Wrong passport');
  }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);
// flight not changed (defined value) but jonas object changed (object reference (memory address))

const newPassport = function(person) {
  person.passport = Math.trunc(Math.random() * 100000000);
}

newPassport(jonas);
checkIn(flight, jonas);
// Wrong passport!!

// First-class and Higher order functions
const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function(str, fn) {
  console.log(`Origingal string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);
  console.log(`transformed by ${fn.name}`);
}

transformer('Javascript is the best', upperFirstWord);

const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`)
  }
}

const greeterHey = greet('Hey');
greeterHey('Ramona');

greet('Hello')('Ramona');

// with arrow functions
const greet2 = greeting => name => console.log(`${greeting} ${name}`)
greet2('Moin')('Ramona');

// The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.code} ${flightNum}`);
    this.bookings.push({flight: `${this.code} ${flightNum}`, name});
  },
}

lufthansa.book(239, 'Ramona Maltan');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  code: 'EW',
  bookings: [],
}

const book = lufthansa.book;
// book is a function and this points to undefined
// book(23, 'Sara'); -> DOES NOT WORK

// call method
book.call(eurowings, 23, 'Sarah');
console.log(eurowings);

// apply method (takes array)
book.apply(lufthansa, [58, 'George']);
console.log(lufthansa.bookings);

// bind method
const bookEW = book.bind(eurowings);
bookEW('23', 'Steven');

const bookEW23 = book.bind(eurowings, 23);

// with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

// this keyword is now the button element
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// set null because no this keyword involved but set rate value in stone
const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(200));

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function() {
  console.log('This will never run again')
}
runOnce();

(function() {
  console.log('This will never run again')
})();

(() => {
  console.log('This will ALSO never run again')
})();

// Closures
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();
booker();
booker();

// Challenge 1
const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer: function() {
    const answer = Number(prompt(`${this.question} \n${this.options.join('\n')}`));
    if (typeof answer === 'number' && answer >= 0 && answer < 4) {
      this.answers[answer]++;
      this.displayResults('string');
    } else {
      console.log('Your answer is not in our language options.')
    }
  },
  displayResults: function(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    } else {
      console.log(this.answers);
    }
  }
};

document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({answers: [5, 2, 3]});

// Challenge 2
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', () => {
    header.style.color = 'blue';
  }) 
})();
