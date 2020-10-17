'use strict';
const fs = require('fs');



const ohhNoo = require('ohhNoo');


const errorHub = require('errorHub')(clientid)
clientid = process.env.toekn;



const myObject = {};
Error.captureStackTrace(myObject);
myObject.stack;  // Similar to `new Error().stack`


// fart
console.log('I AM BALD');

// new Error(message);
// console.log(message.toString());

// const err = new Error('The message');
// console.error(err.message);
let errvar;
try {
  throw new ReferenceError('Hello', 'index.js', 10)
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  let error = {
    message:e.message,
    clientid: 'user defined id'
  }
  errorhub.emit('error', error)

  //ALTERNATIVE:
  //just let coders send in params, then our function creates an object and sends it off
  errorhub.recordError(type, time, string, stack, etc)

  //step one, get above code working
  //step two, how do I write the above as a library 
  //that automatically does the above when calling 
  //a required library function, make an error class, it 
  //does all the work you example:
  //below library function should emit the rror event eventually
  errorhub.recordError(error);

  //errors could be code errors, could be credit card failing to buy tshirt,
  //not a code error still want to log it.  Let users define it.
  //


  console.log(e.message)                    // "Hello"
  console.log(e.name)                       // "ReferenceError"
  console.log(e.fileName)                   // "someFile.js"
  console.log(e.lineNumber)                 // 10
  console.log(e.columnNumber)               // 0
  console.log(e.stack)      
  errvar = e;
  console.log('THIS IS THE ERROR OBJECT:', errvar);                // "@Scratchpad/2:2:9\n"
}
console.log('THIS IS THE ERROR OBJECTOUTSIDE CATCH:', errvar);  

// depends upon user declaring errors in catch block appropriately
//process standard out and standard error, only available to the process itself
//


//TESTING
//either make an API or an event hub
//

//CLIENT LIBRARY
//would be connected with sockets
//