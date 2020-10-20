'use strict';


//WORK

//FORWARDER=======================================================
require('../test.js');
require('../parser/parser.js');
const events = require('../events.js');

// JOB1: listen for error event emitted from test file
events.on('errEvent', forwardError);

function forwardError(payload) {
  events.emit('toParser', payload);
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

