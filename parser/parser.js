'use strict';

const uuid = require('uuid').v4;
const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {

  let data = {
    errorid: uuid(),
    datetime: new Date(),
    userid: payload.userid,
    errortype: payload.err.name,
    errormessage: payload.err.message,
    stack: payload.err.stack,
    userparam: payload.userparam,
    usernote: payload.usernote,
  };
  console.log('typeof errorid', typeof data.errorid);
  events.emit('toIndexer', data);
}
