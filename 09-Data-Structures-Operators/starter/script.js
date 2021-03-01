'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`HEre is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// Array Destructuring
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring assignment
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second)

let [main, secondary] = restaurant.categories;
console.log(main, secondary);

// switch variables without destructuring
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// with destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested Destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r);

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // -> 8 9 1

// Object Destructuring
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = []} = restaurant;
console.log(menu, starters);

// mutating variables
// let d = 111;
// let e = 999;
// const obj = { d: 23, e: 7, f: 14 }

// ({d, e} = obj);
// console.log(d, e);

// nested objects
const { fri: {open, close} } = openingHours;
console.log(open, close);

// Spread Operator
const array = [7, 8, 9];
const badNewArray = [1, 2, array[0], array[1], array[2]];
console.log(badNewArray);

const goodNewArray = [1, 2, ...array];
console.log(goodNewArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// join arrays
const wholeMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// Iterables: arrays, strings, maps, sets, NOT Objects
const jonas = 'Jonas';
const letters = [...jonas];
console.log(letters);

// Real world example
// const ingredients = [prompt('Let\'s make pasts! Ingredient 1?'), prompt('Let\'s make pasts! Ingredient 2?'), prompt('Let\'s make pasts! Ingredient 3?')];

// restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = {...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);
