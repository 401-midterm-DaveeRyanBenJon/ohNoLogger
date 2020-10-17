'use strict';


//WORK

// JOB1: listen for errors
// the forwarder will listen to our system to detect an error
// does minimal work like timestamp or normalize data and passes to indexer

//step 2: when it detects an error object send it to the indexer in the following format:

try {
  throw new ReferenceError('Hello', 'index.js', 10)
  

} catch (err) {
  //console.log(err instanceof ReferenceError)  // true
  let errorPayload = {
    message:err.message,
    clientid: 'user defined id'
  }
  errorhub.emit('error', errorPayload)

  //ALTERNATIVE:
  //just let coders send in params, then our function creates an object and sends it off
  const ohNo = require('ohNo');
  ohNo.recordError(type, time, string, stack, etc)


//declare a class called event

class Event(){

  constructor(){

  }

  send(){
    //on error event, create a new instance of event object?
  }

}


//WHAT THIS SHOULD FEED TO INDEX:

//AN OBJECT, WITH THESE PARAMS, FORMATTED LIKE THIS

module.exports = Event;
