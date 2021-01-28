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