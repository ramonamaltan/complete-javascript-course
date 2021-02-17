// Dolphins score 44, 23 and 71
// Koalas score 65, 54 and 49

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

// each team competes 3 times
// calculate average of the 3 scores
// win if min double the score of other team
