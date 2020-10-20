'use strict';

// const errorhub = require('./hub');

const events = require('./events');
require('./forwarder/forwarder');

//we'll require in ohNo as a module
//then run it somehow and listen to see what events it catches
//it should spit the below 3 errors into our DB

test1();
// test2();
// test3();


function test1() {

  try {
    throw new ReferenceError('Hello', 'index.js', 10);
  } catch (e) {
    // console.log(e instanceof ReferenceError)  // true
    let error = {
      message:e.message,
      name: e.name,
      fileName: e.fileName,
      lineNumber: e.lineNumber,
      columnNumber: e.columnNumber,
      stack: e.stack,
      clientid: 'user defined id'
    };
    events.emit('errEvent', error);
  }
}

// function test2(){

//   try {
//     throw new SyntaxError('Hello', 'someFile.js', 10);
//   } catch (e) {
//     let error = {
//       message:e.message,
//       name: e.name,
//       fileName: e.fileName,
//       lineNumber: e.lineNumber,
//       columnNumber: e.columnNumber,
//       stack: e.stack,
//       clientid: 'user defined id'
//     };
//     // console.log(error);
//     errorhub.emit('error', error);
//   }
// }



// function test3(){

//   try {
//     throw new ReferenceError('Hello', 'index.js', 10);
//   } catch (e) {
//     console.log(e instanceof ReferenceError); // true
//     let error = {
//       message:e.message,
//       clientid: 'user defined id'
//     };
//     // console.log(error);
//     // errorhub.emit('error', error)
//   }

// }


//// EXAMPLE API CALL
/*

function fetchLocationDataFromAPI(city, response) {
  const API = `https://us1.locationiq.com/v1/search.php`;
  let queryObject = {
    key: process.env.GEOCODE_API_KEY,
    q: city,
    format: 'json'
  };

  superagent
    .get(API)
    .query(queryObject)
    .then((apiData) => {
      let location = new Location(apiData.body[0], city);
      response.status(200).send(location);
    })
    .catch((e) => {
      response.status(500).send('Something went wrong in LOCATION Route using superagent');
      ohhNo.saveError(e)
    });
}

*/
