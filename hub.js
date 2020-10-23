'use strict';

const events = require('./events.js');
const forwarder = require('./forwarder/forwarder');


class ErrorHub {

  logError(e, clientid = null, userparam = null, usernote = null) {
    let payload = {
      err: e,
      clientid: clientid,
      userparam: userparam,
      usernote: usernote,
    };
    events.emit('errEvent', payload);
  }
}

module.exports = ErrorHub;
