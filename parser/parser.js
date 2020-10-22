'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {

  let data = {
    message: payload.err.message,
    name: payload.err.name,
    datetime: new Date(),
    stack: payload.err.stack,
    clientid: payload.clientid,
    userparam: payload.userparam,
    usernote: payload.usernote,
  };
  events.emit('toIndexer', data);
}
