'use strict';

const events = require('../events');
require('../indexer/indexer.js');

events.on('toParser', parse);

function parse(payload) {

  if(!payload.metadata) {
    let data = {
      date: new Date(),
      time: new Date(),
      userid: payload.userid,
      errortype: payload.err.name,
      errormessage: payload.err.message,
      userparam: JSON.stringify(payload.userparam),
      usernote: payload.usernote,
      stack: payload.err.stack,
    };
    events.emit('toIndexer', data);

  } else if (payload.metadata) {
    let data = {
      date: new Date(),
      time: new Date(),
      userid: payload.metadata.userid || null,
      errortype: payload.err.name,
      errormessage: payload.err.message,
      userparam: JSON.stringify(payload.metadata.userparam) || null,
      usernote: payload.metadata.usernote || null,
      stack: payload.err.stack,
    };
    events.emit('toIndexer', data);
  }

}
