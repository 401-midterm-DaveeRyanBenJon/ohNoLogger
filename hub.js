'use strict';
//this will act as our 'hub', similar to server.js in our auth server

const forwarder = require('./forwarder/findex')
const indexer = require('./indexer/iindex')
//create ohNo

module.exports = ohNo;


class OHno {
  constructor(e)

  saveError(e) {
    this.emit('error', e)
  }
}