'use strict';

// Scopes
function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age} born in ${birthYear}`;
    console.log(output);

    if(birthYear >= 1981 && birthYear < 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`
      var millenial = true;
      console.log(str)
    }
    // console.log(str);
    console.log(millenial);

  }
  printAge();

  return age;
}

const firstName = "Ramona";
calcAge(1995);

// Hoisting and TDZ
// variables
console.log(me); // undefined
// console.log(job); uninitialized -> job variable still in TDZ at that time
// console.log(year); same as job

var me = "Ramona";
let job = "Engineer";
const year = 1995;

// functions
console.log(addDecl(2, 3));
// console.log(addExp(2, 3)); -> uninitialized 
// console.log(addArr(2, 3)); -> uninitialized 
// addExp or addArr declared with var: addArr/ addExp is not a function because we try to call undefined(2,3) and that's not a function

function addDecl(a, b) {
  return a + b;
}

const addExp = function(a,b) {
  return a + b;
}

const addArr = (a,b) => a + b;

// Example
// will delete all products because numProducts is undefined and function is triggered
if(!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log("All products deleted")
}
