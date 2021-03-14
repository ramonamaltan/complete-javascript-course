'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `        
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
    </div>
  </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errMsg = 'Something went wrong') {
  return fetch(url)
    .then(response => {
      // Throwing errors manually
      if(!response.ok) 
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
}
// ///////////////////////////////////////
// // XMLHttpRequest
// const getCountryData = (country) =>  {
//   const request = new XMLHttpRequest();

//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
//   request.send();

//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
  
//     const html = `        
//     <article class="country">
//       <img class="country__img" src="${data.flag}" />
//       <div class="country__data">
//         <h3 class="country__name">${data.name}</h3>
//         <h4 class="country__region">${data.region}</h4>
//         <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)}</p>
//         <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//         <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//       </div>
//     </article>
//     `;
//     console.log(html)
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   })  
// }

// // getCountryData('portugal');
// // getCountryData('usa');


// // const getCountryAndNeighbour = (country) =>  {
// //   // AJAX call country 1
// //   const request = new XMLHttpRequest();

// //   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`)
// //   request.send();

// //   request.addEventListener('load', function() {
// //     const [data] = JSON.parse(this.responseText);
// //     // render country 1
// //     renderCountry(data);   

// //     // get neighbor country (2)
// //     const [neighbour] = data.borders;

// //     if (!neighbour) return;
// //     // AJAX call country 2
// //     const request2 = new XMLHttpRequest();

// //     request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`)
// //     request2.send();

// //     request2.addEventListener('load', function() {
// //       const data2 = JSON.parse(this.responseText);
// //       renderCountry(data2, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('germany');

// // Promises and Fetch API
// const request = fetch(`https://restcountries.eu/rest/v2/name/portugal`);

// // console.log(request)

// const fetchCountryData = function(country) {
//   getJSON(`https://restcountries.eu/rest/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0]

//       if (!neighbour) throw new Error('No neighbour found');

//       getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`, 'Country not found')
//     })
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
//         renderError(`Something went wrong :( ${err.message}. Try again!`)
//       }) // Handle promise rejections
//       .finally(() => {
//         countriesContainer.style.opacity = 1;
//       })
// }

// // fetchCountryData('portugal');

// btn.addEventListener('click', function() {
//   fetchCountryData('portugal');
// })

// // fetchCountryData('australia');

// // Event loop in practice
// // console.log('test start');
// // setTimeout(() => console.log('0 sec timer'), 0); // will be put on callback queue -> can take longer than 0 secs
// // Promise.resolve('Resolved promise 1').then(response => console.log(response)); // will be put on microtasks queue
// // Promise.resolve('Resolved promise 2').then(res => {
// //   for(let i = 0; i < 100000; i++) {}
// //   console.log(res);
// // })
// // console.log('test end');
// // order of execution: test start -> test end -> promise -> timeout

// // Building a simple promise
// // const lotteryPromise = new Promise(function(resolve, reject) {
// //   console.log('Lottery draw is happening!')

// //   setTimeout(function() {
// //     if (Math.random() >= 0.5) {
// //       resolve('You WIN :)');
// //     } else {
// //       reject(new Error('You lost :('));
// //     }
// //   }, 2000)
// // })

// // lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function(seconds) {
//   return new Promise(function(resolve) {
//     setTimeout(resolve, seconds * 1000)
//   })
// }

// // wait(2).then(() => {
// //   console.log('I waited for 2 seconds');
// //   return wait(1);
// // }).then(() => {
// //   console.log('I waited for 2 seconds');
// //   return wait(1);
// // }).then(() => {
// //   console.log('I waited for 3 seconds');
// //   return wait(1);
// // })
// // .then(() => console.log('I waited for 4 second'));

// // Promise.resolve('abc').then(res => console.log(res))

// //// Promisifying the geolocation API
// const getPosition = () => {
//   return new Promise(function(resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   })
// }
// // getPosition().then(pos => console.log(pos));

// /////////////// CODING CHALLENGES /////////////
// const whereAmI = function() {
//   getPosition().then(pos => {
//     const { latitude: lat, longitude: lng } = pos.coords;

//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//   })
//     .then(response => {
//       if(!response.ok)
//         throw new Error(`${response.status}! Problem with geocoding.`)
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data.city}, ${data.country}`)

//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]))
//     .catch(err => console.log(err.message))
// }

// // whereAmI(52.508, 13.381)
// // whereAmI(19.037, 72.873)
// // whereAmI(-33.933, 18.474)

// btn.addEventListener('click', whereAmI);

// // CHALLENGE #2
// const imageContainer = document.querySelector('.images');

// const createImage = function(imgPath) {
//   return new Promise(function(resolve, reject) {
//     const image = document.createElement('img')
//     image.src = imgPath;
//     image.addEventListener('load', function() {
//       imageContainer.append(image);
//       resolve(image);
//     })

//     image.addEventListener('error', function() {
//       reject(new Error('Image not found'))
//     })
//   }) 
// }

// let currentImage;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImage = img;
//     console.log('Image 1 loaded')
//     return wait(2)
//   })
//   .then(() => {
//     currentImage.style .display= 'none';
//     return createImage('img/img-2.jpg')
//   })
//   .then((img) => {
//     currentImage = img;
//     console.log('Image 2 loaded')
//     return wait(2)
//   })
//   .then(() => {
//     currentImage.style .display= 'none';
//   })
//   .catch(err => console.error(err))

  // ASYNCH AWAIT and
  const whereAmI = async function(country) {
    try {
      const res = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
      console.log(res);
      const data = await res.json();
      console.log(data);
      renderCountry(data[0]);
    } catch(err) {
      console.log(err);
      renderError(`Something went wrong ${err.message}`);
    }
  }

  console.log('1:willgetlocation')
  whereAmI('portugal');
  console.log('2:finished getting location');

// Error handling with try...catch
// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch(err) {
//   alert(err.message);
// }

const get3Countries = async function(c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`)
    // const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`)
    // const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)

    const data = Promise.all([getJSON(`https://restcountries.eu/rest/v2/name/${c1}`), getJSON(`https://restcountries.eu/rest/v2/name/${c2}`), getJSON(`https://restcountries.eu/rest/v2/name/${c3}`)])
    console.log(data.map(d => d[0].capital));
    // console.log([data1.capital, data2.capital, data3.capital])
  } catch(err) {
    console.error(err)
  }
}

get3Countries('portugal', 'tanzania', 'canada');


(async function() {
  const res = await Promise.race([
    getJSON(`https://restcountries.eu/rest/v2/name/italy`),
    getJSON(`https://restcountries.eu/rest/v2/name/egypt`),
    getJSON(`https://restcountries.eu/rest/v2/name/germany`)
  ])
  console.log(res[0])
})()
