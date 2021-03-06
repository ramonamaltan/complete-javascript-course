// Activating Strict Mode
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// Functions
// function keyword descriptive function-name(parameters) {function body}
function logger() {
  console.log('My name is Ramona');
}

// calling/running/invoking the function to run function body
logger();
// output: My name is Ramona

// Function with parameters, returning a value
function fruitProcessors(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} bananas`;
  return juice;
}

// function is begin called with arguments
const appleJuice = fruitProcessors(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessors(3, 3);
console.log(appleOrangeJuice);

// Function Declarations
function calAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}
// same as this Function Declarations
function calAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calAge1(1991);

// Function Expressions
const calcAge2 = function(birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// Function Declarations vs. Expressions:
// Declarations can be called before being defined - Expressions can't

// Arrow Functions:
// One Liner: Easier and faster to write, return happens explicitely
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991)
console.log(age3);

//with Codeblock and more than 1 parameters
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));

// call Function within a Function
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessors(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} bananas`;
  return juice;
}

console.log(fruitProcessors(2, 3));


// Arrays
const friends1 = ['Lina', 'Pia', 'Chantal'];
const friends2 = new Array('Lina', 'Pia');

// retrieve element in array
console.log(friends1[0]);
// array length
console.log(friends2.length);
// retrieve last element in array
console.log(friends2.length - 1);

// mutate arrays
friends1[2] = 'Linda';
console.log(friends1);

const ramona = ['Ramona', 'Maltan', 1995, friends1];
console.log(ramona);

// Exercise
const calcAge = function(birthyear) {
  return 2037 - birthyear;
}

const years = [1990, 1995, 1965, 2000];
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
console.log(ages);

// Basic Array Operations
const friends = ['Lina', 'Pia', 'Chantal'];

// add element to end of array
friends.push('Jay');
// add element to beginning of array
friends.unshift('John');

// remove element from end of array
friends.pop();
// remove element for beginning of array
friends.shift();

console.log(friends);

// return index of an element
friends.indexOf('Pia');

// return boolean value checking if element exists in array
friends.includes('Bob');
// => false
friends.includes('Pia');
// => true

// OBJECTS: key-value pairs
// order doesn't matter here
const ramonaMaltan = {
  firstName: 'Ramona',
  lastName: 'Maltan',
  birthYear: 1995,
  friends: ['Lina', 'Pia', 'Chantal']
}

// retrieve data from objects
// Dot Notation
ramonaMaltan.lastName;
// Bracket Notation
ramonaMaltan['lastName'];
const nameKey = 'Name'
ramonaMaltan['first' + nameKey];
ramonaMaltan['last' + nameKey];

// add new properties to the object
ramonaMaltan.location = 'Berlin'
ramonaMaltan['location'] = 'Berlin'

// Object Methods
// add functions to Objects
const ramonaNew = {
  firstName: 'Ramona',
  lastName: 'Maltan',
  birthYear: 1995,
  friends: ['Lina', 'Pia', 'Chantal'],
  hasDriversLicense: true,
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // reference the object itself to keep code DRY
  // calcAge: function() {
  //   return 2037 - this.birthYear;
  // }  

  // add age to Object
  calcAge: function() {
    this.age = 2037 - this.birthYear;
    return this.age;
  }  
}

// ramonaNew['calcAge'](1995);
ramonaNew.calcAge();
ramonaNew.age;

// ITERATIONS
// for Loop keeps running while condition is true
for(let rep = 1; rep <= 10; rep++) {
  `Lifting weigths repetition ${rep}`;
}

const ramonaM = ['Ramona', 'Maltan', 1995, friends1];
const types = [];

for (let i = 0; i < ramonaM.length; i++) {
  // console.log(ramonaM[i]);
  types.push(typeof ramonaM[i]);
}

console.log(types);

// continue and break statements
// with continue exit the current iteration in the loop
// with break exit the whole loop
for (let i = 0; i < ramonaM.length; i++) {
  if(typeof ramonaM[i] !== 'string') continue;
  console.log(ramonaM[i])
}

for (let i = 0; i < ramonaM.length; i++) {
  if(typeof ramonaM[i] === 'number') break;
}

// Looping Backwards
for(let i = ramonaM.length - 1; i >= 0; i--) {
  console.log(i, ramonaM[i])
}

// Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weights rep ${rep}`);
  }
}

// While Loop: runs while condition is true
// doesn't need counter variables
//use if you don't know how many time loop will run
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights rep ${rep}`);
  rep++;
}

// randomn decimal number
let dice = Math.trunc(Math.random() * 6) + 1;

while (dice != 6) {
 console.log(`You rolled a ${dice}`);
 dice = Math.trunc(Math.random() * 6) + 1;
}
