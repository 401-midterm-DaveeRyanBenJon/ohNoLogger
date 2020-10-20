'use strict';

const Events = require('events');
const events = new Events();

// Export ONE instance of events that all modules can share
module.exports = events;
