const ohNo = require('./hub');

//we'll require in ohNo as a module
//then run it somehow and listen to see what events it catches
//it should spit the below 3 errors into our DB

test1();
test2();
test3();


function test1() {

try {
  throw new ReferenceError('Hello', 'index.js', 10)
} catch (e) {
  console.log(e instanceof ReferenceError)  // true
  let error = {
    message:e.message,
    name: e.name,
    fileName: e.fileName,
    lineNumber: e.lineNumber,
    columnNumber: e.columnNumber,
    stack: e.stack,
    clientid: 'user defined id'
  }
  errorhub.emit('error', error)
}

}

function test2(){

  try {
    throw new SyntaxError('Hello', 'someFile.js', 10);
  } catch (e) {
    let error = {
      message:e.message,
      name: e.name,
      fileName: e.fileName,
      lineNumber: e.lineNumber,
      columnNumber: e.columnNumber,
      stack: e.stack,
      clientid: 'user defined id'
    }
    errorhub.emit('error', error)
  }
}
  
  

function test3(){

  try {
    throw new ReferenceError('Hello', 'index.js', 10)
  } catch (e) {
    console.log(e instanceof ReferenceError)  // true
    let error = {
      message:e.message,
      clientid: 'user defined id'
    }
    errorhub.emit('error', error)
  }

}
