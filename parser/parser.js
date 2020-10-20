'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {
  console.log('this is from parser', payload.message);
  events.emit('toIndexer', payload);
}


//INDEXER=======================================================
//STEP 1 PARSE:

//1: listen for 'index' event emitted from hub file
// 2: on index event, take in event payload and make any changes.  What do we want to do to format it? Add an ID?
// 3: after transforming event, emit a 'save' event and pass to indexer



