'use strict';

const events = require('./events.js');
const forwarder = require('./forwarder/forwarder');


class ErrorHub {

  logError(e) {
    events.emit('errEvent', e);
  }
}

module.exports = ErrorHub;
