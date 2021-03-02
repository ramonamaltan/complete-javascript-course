'use strict';
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
  },

  orderPizza: function(mainIngredient, ...otherIng) {
    console.log(mainIngredient);
    console.log(otherIng);
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

// REST pattern and parameters
// Spread because on right side of assignment operator
const ar = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Obj
const {sat, ...weekdays} = restaurant.openingHours;
console.log(weekdays);

// Functions [REST Parameters]
const add = function(...numbers) {
  let sum = 0;
  for(let i = 0; i<numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
}
add(2, 3);
add(5, 7, 9, 11);

const v = [22, 5, 8]
add(...v);

restaurant.orderPizza('mushrooms', 'cheese', 'artichoke');

// Short Circuiting
console.log(3 || 'ramona');

// Practical Example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// the nullish coalescing operator (??)
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish values: null and undefined
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

// Looping Arrays: the for-of loop
const nowMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of nowMenu) console.log(item);

// with index
for (const item of nowMenu.entries()) {
  console.log(item);
}

// [0, "Focaccia"]
// [1, "Bruschetta"]
// [2, "Garlic Bread"]
// [3, "Caprese Salad"]
// [4, "Pizza"]
// [5, "Pasta"]

// Optional Chaining
// console.log(restaurant.openingHours.mon.open);
// avoid error -> check if property exists
if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// checks only for monday plus openingHours might not exist
// solution: optional chaining
console.log(restaurant.openingHours?.mon?.open)

// real world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(open);
}
// mon
// closed
// tue
// closed
// wed
// closed
// thu
// 12
// fri
// 11
// sat
// 0
// sun
// closed

// Looping objects
// properties
const properties = Object.keys(openingHours);
for (const day of properties) {
  console.log(day);
}

// Property values
const values = Object.values(openingHours);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
for(const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

// Sets = collection of unique values
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(orderSet);

console.log(orderSet.size);

console.log(new Set('Jonas')); // letters

console.log(orderSet.has('Pizza')); // true
console.log(orderSet.has('Bread')); // false
// add element to Set
orderSet.add('Garlic Bread');
// delete element from SET
orderSet.delete('Risotto');
// delete all
// orderSet.clear();

//Looping
for (const order of orderSet) console.log(order);

// Spread Operator and turning sets into arrays
const staff = ['waiter', 'chef', 'waiter', 'manager'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// fill a Map
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze');
rest.set(2, 'Lisbon');
rest.set('open', 11);
rest.set('closed', 23);
rest.set(true, 'We are open');
rest.set(false, 'We are closed');
console.log(rest);

console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed')));

// Search Map
rest.has('category');
// Delete Entry
rest.delete(2);
// size of Map
rest.size;
// remove all elements
rest.clear();

// Maps iteration
const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C' ],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct'],
  [false, 'try again'],
]);
console.log(question);

for (const [key, value] of question) {
  if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

console.log("--------CODING CHALLENGES---------")
// Coding Challenge 1: Football betting app
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// player array for each team
const [players1, players2] = game.players;
console.log(players1, players2);

// first plaer is goalkeeper, rest is field players
const [gt, ...fieldPlayers] = players1;
console.log(gt, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

const printGoals = function(...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`)
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

// team more likely to win (lower odd number)
team1 < team2 && console.log("Team 1 is more likely to win");
team2 < team1 && console.log("Team 2 is more likely to win");

// Challenge 2
for (const [num, score] of game.scored.entries()) {
  console.log(`Goal ${num}: ${score}`);
}

let avg = 0;
for (const odd of Object.values(game.odds))
  console.log(avg += odd);
avg /= Object.values(game.odds).length;
console.log(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);

const eventsArr = [...new Set(gameEvents.values())];
console.log(eventsArr);

gameEvents.delete(64);

console.log(gameEvents.keys())


const average = 90/gameEvents.size
console.log(`An event happened, on average, every ${average} minutes`)

for (const [mins, event] of gameEvents) {
  if (mins < 46) {
    console.log(`[FIRST HALF] ${mins}: ${event}`)
  } else {
    console.log(`[SECOND HALF] ${mins}: ${event}`)
  }
}

// Working with strings
const airline = 'TAP Air Portugal';
const plane = 'A320';

// String Methods
console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('a')); // 14
console.log(airline.lastIndexOf('Portugal')); // -1

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(1, -1)); // AP Air Portugal

const checkMiddleSeat = function(seat) {
  // B and E are middle seats
  const s = seat.slice(-1)
  if (s === 'B' || s == 'E') {
    console.log('You got the middle seat')
  } else {
    console.log('You got lucky')
  }
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('5E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// get rid of whitespace
const email = '    hello@gmail.com \n'
console.log(email.trim());

// replacing
const priceEU = '288,97€';
const priceUS = priceEU.replace(',', '.').replace('€', '$');
console.log(priceUS);

// replace all for replacing all ccurancences not only the first one

// Booleans
const newPlane = 'A320neo';
console.log(newPlane.includes('neo'));
console.log(newPlane.startsWith('A3') && newPlane.endsWith('neo'));

// get array by divider string
console.log('a+ver+nice+string'.split('+'));

const [firstName, lastName] = 'Ramona Maltan'.split(' ');
console.log(firstName)

const newName = ['Mr', 'Jonas', 'Müller'].join(' ');
console.log(newName);

// padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+'));

// repeat
const message2 = 'Bad weather, all departures delayed';
console.log(message2.repeat(5));

// Coding Challenge #4
const teststring = 'underscore_case'
const teststring2 = 'underscore_case \n first_name'
const teststring3 = 'underscore_case \n first_name \n Some_Variable \n calculate_AGE \n delayed_departure'
const splitted = teststring3.split("\n")

for (let ab = 0; ab < splitted.length; ab++) {
  const splitted2 = splitted[ab].trim().split('_');
  console.log(splitted2[0] + splitted2[1][0].toUpperCase() + splitted2[1].slice(1))
}

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';