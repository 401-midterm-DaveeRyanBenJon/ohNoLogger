'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {
  console.log('this is from parser', payload.message);

  let error = {
    message: payload.message,
    name: payload.name,
    filename: payload.fileName,
    linenumber: payload.lineNumber,
    columnnumber: payload.columnNumber,
    stack: payload.stack,
    clientid: 'user defined id'
  };

  console.log('Parse can read', error);

  events.emit('toIndexer', payload);
}




// This is where we manipulate the data

// 1: on toParser event, take in event payload and make any changes.  What do we want to do to format it? Add an ID?




