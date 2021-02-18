// FUNCTIONS CHALLENGE
// Dolphins score 44, 23 and 71
// Koalas score 65, 54 and 49
// each team competes 3 times
// calculate average of the 3 scores
// win if min double the score of other team

const calcAverage = (a, b, c) => (a + b + c) / 3;

const scoreDolphins = calcAverage(144, 123, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas) {
  if(avgDolphins > avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas}`);
  } else if(avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins}`);
  } else {
      console.log('Noone wins');
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// ARRAY CHALLENGE
// Tip Calculator:
// if bill value between 50 and 300 -> 15% Tip
// else 20% Tip

const calcTip = function(billValue) {
  if(billValue > 50 && billValue < 301) {
    return billValue * 0.15
  } else {
    return billValue * 0.2
  }
}

const bills = [125, 255, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips)

// OBJECT CHALLENGE
// BMI = mass / (height * height)
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() { 
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() { 
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
}

if (john.calcBMI() > mark.calcBMI()) {
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}), is higher than ${mark.fullName}'s BMI ${mark.calcBMI()}`)
} else {
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}), is higher than ${john.fullName}'s BMI ${john.calcBMI()}`)
}

// LOOPS CHALLENGE
const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips2 = [];

const calcTip2 = function(billValue) {
  if(billValue > 50 && billValue < 301) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

for (i = 0; i < bills2.length; i++) {
  tips2.push(calcTip2(bills2[i]));
}

const calcAvg = function(arr) {
  sum = 0
  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
