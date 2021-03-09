'use strict';

// Constructor Functions
// convention to capitalize function name
const Person = function(firstName, birthYear) {
  // instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
}

// call the constructor function with new operator
// 1. new {empty object} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}
const jonas = new Person('Jonas', 1991);
const ramona = new Person('Ramona', 1995)
console.log(jonas instanceof Person);

// Prototypes & prototypal inheritance
console.log(Person.prototype);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

jonas.calcAge();
console.log(jonas.__proto__ === Person.prototype); // true
console.log(Person.prototype.isPrototypeOf(jonas)); // true

Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, ramona.species); // Homo Sapiens Homo Sapiens

console.log(jonas.hasOwnProperty('firstName')); // true
console.log(jonas.hasOwnProperty('species')); // false

console.log(jonas)

console.log(jonas.__proto__.__proto__); // Object.prototype

const arr = [3, 4, 7, 9, 9 , 4, 3];
console.log(arr.__proto__ === Array.prototype); // true

// can lead to bugs in practice
Array.prototype.unique = function() {
  return [...new Set(this)];
}
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///// ES6 Classes /////////////
// class Expression
const PersonClExp = class {}

// class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear)
  }

  get age() {
    return 2037 - this.birthYear
  }

  set fullName(name) {
    console.log(name)
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('🖐🖐🖐');
    console.log(this); // entire constructor function
  }
}

PersonCl.hey();
const jessica = new PersonCl('Jessica Davis', 2000);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype)

console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);
// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

////////////// GETTERS AND SETTERS //////////////
const account = {
  owner: 'jonas',
  movements: [200, 500, 3000, 100],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov)
  },
}

// get
console.log(account.latest); // 100
// set
account.latest = 50;
console.log(account.movements); //[200, 500, 3000, 100, 50]

/////////// STATIC METHODS ////////////////
Person.hey = function() {
  console.log('🖐🖐🖐');
  console.log(this); // entire constructor function
}

Person.hey();


///////////////// OBJECT.CREATE ////////////////////
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear)
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
}

const steven = Object.create(PersonProto);
console.log(steven); // {} but with __proto__ with calcAge

steven.name = 'Steven';
steven.birthYear = 1995;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 2000);
console.log(sarah);

// Inheritance between 'classes' Constructor Functions
// Student inherits from Person
const Student = function(firstName, birthYear, course) {
  // same as in Person Class -> call Person
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  Person.call(this, firstName, birthYear);
  this.course = course;
}

// Linking Prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);

mike.introduce();
mike.calcAge();

console.log(mike.__proto__);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
console.log(mike instanceof Person); // true
console.log(mike instanceof Student); // true

//// INHERITANCE BETWEEN 'CLASSES' USING ES6 ////////////
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}.`);
  }

  calcAge() {
    console.log(`I am ${2037 - this.birthYear} years old.`)
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
console.log(martha);
martha.introduce();
martha.calcAge();

/////// INHERITANCE BETWEEN 'CLASSES' USING Object.creat() ////////
const StudentProto = Object.create(PersonProto);
const jay = Object.create(StudentProto);

StudentProto.init = function(firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}

jay.init('Jay', 1999, 'BWL');
console.log(jay);

/// ANOTHER EXAMPLE ///////////
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this._pin = pin;
    this._movements = [];
    this.locale = navigator.language;
  }

  // Public interface (API) -> exposed methods
  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val)
  }

  withdraw(val) {
    this.deposit(-val)
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved')
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(250);
acc1.withdraw(100);
acc1.requestLoan(1000); // privacy concern
acc1._approveLoan(1000) // shouldn't be private method!!
console.log(acc1._pin); // privacy concern
console.log(acc1.getMovements());

////////// ENCAPSULATION: Protected Properties & Methods ////////
// movements array change to _movements -> convention for protected property

///////////// Private Class Fields and Methods ///////////////
// Public Fields
// Private Fields
// Public Methods
// Private Methods

class AccPriv {
  // Public Fields
  locale = navigator.language;
  
  // Private Fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // Public interface (API) -> exposed methods
  // Public Methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val)
    return this;
  }

  withdraw(val) {
    this.deposit(-val)
    return this;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved')
    }
    return this
  }

  // Private Methods -> not yet available
  #approveLoan(val) {
    return true;
  }
}

const acc2 = new AccPriv('Ramona', 'EUR', 1111);
console.log(acc2);

// console.log(acc2.#movements); // ERROR can't access private field
// console.log(acc2.#pin); // ERROR can't access private field
acc2.deposit(250);
acc2.withdraw(100);
acc2.requestLoan(1000);
// acc2.#approveLoan(1000);

console.log(acc2.getMovements());

/////////////// CHAINING METOHDS ////////////////
acc2.deposit(300).deposit(500).withdraw(35).requestLoan(5000);
console.log(acc2.getMovements());


/////////////// CHALLENGE #1 //////////////////////
const Car = function(make, speed) {
  this.make = make;
  this.speed = speed;
}

Car.prototype.accelerate = function() {
  this.speed += 10
  console.log(this.speed);
}

Car.prototype.break = function() {
  this.speed -= 5
  console.log(this.speed);
}

const bmw = new Car('BMW', 120)
const mercedes = new Car('Mercedes', 95)
bmw.accelerate();
bmw.accelerate();
mercedes.break();

///////////////// CHALLENGE #2 //////////////////////////////
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  break() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw2 = new CarCl('BMW', 120);
bmw2.accelerate();

const mercedes2 = new CarCl('Mercedes', 95);
mercedes2.break();

mercedes2.speedUS = 60;
console.log(mercedes2);

///////////////////// CHALLENGE #3 ////////////////////////////
const EV = function(make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  return this.charge = chargeTo;
}

EV.prototype.accelerate = function() {
  this.speed += 20;
  this.charge *= 0.99;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}.`)
}

const carTesla = new EV('Tesla', 120, 23);

carTesla.accelerate();
carTesla.break();
console.log(carTesla.chargeBattery(90));

console.log(carTesla);

///////////////////// CHALLENGE #4 ////////////////////////////
class EVCl extends CarCl {
  // private
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    this.#charge *= 0.99;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}.`)
    return this;
  }

  break() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

rivian.accelerate().accelerate().break().chargeBattery(80).accelerate();
