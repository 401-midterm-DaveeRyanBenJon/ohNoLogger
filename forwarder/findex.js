'use strict';


//WORK

//FORWARDER=======================================================
require('../test');
const events = require('../events.js');

// JOB1: listen for error event emitted from test file
events.on('test', forwardError);

function forwardError(payload){
  console.log('this is from findex', payload);
}

// STEP 2: on error event, take in error payload, and create an event schema? research this
// step 3: emit an 'index' event, send in event as a model instance to hub via payload
// I don't think we need to export anything?


// the forwarder will listen to our system to detect an error
// does minimal work like timestamp or normalize data and passes to indexer




//WHAT THIS SHOULD FEED TO INDEX:

//AN OBJECT, WITH THESE PARAMS, FORMATTED LIKE THIS

// module.exports = Event;

/**
 * DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
 id SERIAL PRIMARY KEY,
 search_query VARCHAR(255),
 formatted_query VARCHAR(255),
 latitude DECIMAL(12,8),
 longitude DECIMAL(12,8)
);
INSERT INTO locations ( search_query, formatted_query, latitude, longitude) VALUES ('seattle', 'usa', 13.2,12);
SELECT * FROM locations;
 */



 //INDEXER=======================================================

//STEP 1 PARSE:

//1: listen for 'index' event emitted from hub file
// 2: on index event, take in event payload and make any changes.  What do we want to do to format it? Add an ID?
// 3: after transforming event, emit a 'save' event and pass to indexer




//STEP 2 INDEX/SAVE

//1: listen for 'save' event emitted from hub file
// 2: on save event, take in event payload and JUST CONSOLE LOG TO TEST, ONCE WORKING ==>
// 2: on save event, take in event payload and save to our SQL database
