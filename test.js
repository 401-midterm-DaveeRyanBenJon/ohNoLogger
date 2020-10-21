'use strict';

const events = require('./events');
require('./hub.js');
const ErrorHub = require('./hub.js');
const errorHub = new ErrorHub();

test1();
test2();
test3();

function test1() {
  try {
    throw new ReferenceError('test1', 'index.js', 10);
  } catch (e) {
    // console.log(e instanceof ReferenceError); // true
    // let error = {
    //   message:e.message,
    //   name: e.name,
    //   fileName: e.fileName,
    //   lineNumber: e.lineNumber,
    //   columnNumber: e.columnNumber,
    //   stack: e.stack,
    //   clientid: 'user defined id'
    // };
    errorHub.logError(e);
  }
}

function test2(){
  try {
    throw new SyntaxError('test2', 'someFile.js', 10);
  } catch (e) {
    errorHub.logError(e);
  }
}


function test3(){
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    errorHub.logError(e);
  }
}


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
