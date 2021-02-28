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

// this keyword
console.log(this); // window object

const calcAge3 = function(birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge3(1995); //undefined

const calcAge4 = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
}
calcAge4(1997); //window object

const jonas = {
	name: 'Jonas',
	year: 1989,
	calcAge: function() {
		console.log(this);
	}
}
jonas.calcAge(); // jonas object {name: "Jonas", year: 1989, calcAge: ƒ}

// primitives (nums, strings, booleans) vs. objects
let age = 30;
let oldAge = age;
age = 31;
console.log(age); // 31
console.log(oldAge); // 30

const myself = {
  name: 'Jonas',
  age: 30
};
const friend = myself;
friend.age = 27;

console.log('Friend:', friend);
console.log('Me', myself);
// both ages 27
