'use strict';

const events = require('./events.js');
const forwarder = require('./forwarder/forwarder');



/**
  * Class ErrorHub
  *
  */
class ErrorHub {
/**
 * logError - SlipUp method
 * @param {*} e - OBJECT: Takes standard error object.
 * @param {*} userid - STRING: Takes a string value to identify programmer.
 * @param {*} userparam - VARIABLE: Designed to receive parameter from parent function. It identifies which parameter caused the error.
 * @param {*} usernote - STRING: Takes a custom user defined string.
 */
  logError(e, userid = null, userparam = null, usernote = null) {
    let payload = {
      err: e,
      userid: userid,
      userparam: userparam,
      usernote: usernote,
    };
    events.emit('errEvent', payload);
  }
/**
 * logError1
 * @param {*} e - Error object
 * @param {*} obj - Meta data option
 */
  logError1(e, obj={}) {
    let payload = {
      err: e,
      metadata: obj
    };
    events.emit('errEvent', payload);
  }
}

module.exports = new ErrorHub();
