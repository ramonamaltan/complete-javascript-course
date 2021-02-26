'use strict';

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
