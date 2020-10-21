'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

//---- This is where we manipulate the data ----//
// What do we want to do to format the data???

function parse(payload) {
  console.log('this is from parser', payload.message);

  let error = {
    message: payload.message,
    name: payload.name,
    filename: payload.fileName,
    linenumber: payload.lineNumber,
    columnnumber: payload.columnNumber,
    stack: payload.stack,
    clientid: 'user defined id',

  };

  console.log('This is Error Object:', payload);
  console.log('This is our error:', error);

  events.emit('toIndexer', payload);
}






