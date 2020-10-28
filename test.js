'use strict';

const errorHub = require('./hub.js');


test4('testParam4');
test5('testParam5');
test6('testParam6');

test7('hello');

////// Testing with original method
function test1(param) {
  try {
    let num = 123;
    return num.toUpperCase();
  } catch (e) {
    errorHub.logError(e, 'ryan987', [1, 2, 3, 4], 'This is ben1243s note');
  }
}

function test2(param) {
  try {
    throw new SyntaxError('test2', 'someFile.js', 10);
  } catch (e) {
    errorHub.logError(e, 'davee1234', true, 'this is notes from test 2 function');
  }
}

function test3(person) {
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    errorHub.logError1(e, 'ben6789', person, 'Will this note work? TRY AGAIN');
  }
}

/////// Testing using metadata Obj
function test4(param) {
  try {
    let num = 123;
    return num.toUpperCase();
  } catch (e) {
    let metaData = {
      userid: 'dave123',
      userparam: { hello: 'hello' },
      usernote: 'This is dave123 notes'
    };
    errorHub.logError1(e, metaData);
  }
}

function test5(param) {
  try {
    throw new SyntaxError('test2', 'someFile.js', 10);
  } catch (e) {
    let metaData = {
      userid: 'ryan234',
      userparam: 1000,
    };
    errorHub.logError1(e, metaData);
  }
}


function test6(person) {
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    let metaData = {
      userid: 'ben345',
    };
    errorHub.logError1(e, metaData);
  }
}

function test7(person) {
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    errorHub.logError1(e);
  }
}
