'use strict';

const forwarder = require('./forwarder/forwarder')
const indexer = require('./indexer/indexerRoot')


class ErrorHub {
  constructor(e)
  
  saveError(e) {
    this.emit('error', e)
  }
}

module.exports = ErrorHub;