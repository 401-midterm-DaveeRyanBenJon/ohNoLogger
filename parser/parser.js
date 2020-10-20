'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {
  console.log('this is from parser', payload.message);
  events.emit('toIndexer', payload);
}




// This is where we manipulate the data

// 1: on toParser event, take in event payload and make any changes.  What do we want to do to format it? Add an ID?
// 2: after transforming event, emit a 'toIndexer' event and pass to indexer



