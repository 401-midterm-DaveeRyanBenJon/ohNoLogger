'use strict';
//this will act as our 'hub', similar to server.js in our auth server

const forwarder = require('./forwarder/forwarder')
const indexer = require('./indexer/indexerRoot')
//create ohNo

module.exports = ohNo;


class OHno {
  constructor(e)

  saveError(e) {
    this.emit('error', e)
  }
}
