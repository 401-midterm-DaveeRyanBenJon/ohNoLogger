'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {

  let data = {
    datetime: new Date(),
    userid: payload.userid,
    errortype: payload.err.name,
    errormessage: payload.err.message,
    stack: payload.err.stack,
    userparam: payload.userparam,
    usernote: payload.usernote,
  };
  events.emit('toIndexer', data);
}
