'use strict';

const events = require('./events.js');
const forwarder = require('./forwarder/forwarder');


class ErrorHub {

  logError(e, userid = null, userparam = null, usernote = null) {
    let payload = {
      err: e,
      userid: userid,
      userparam: userparam,
      usernote: usernote,
    };
    events.emit('errEvent', payload);
  }

  logError1(e, metadata) {
    let payload = {
      err: e,
      metadata: metadata
    }
    events.emit('errEvent', payload)
  }
}

module.exports = new ErrorHub();

