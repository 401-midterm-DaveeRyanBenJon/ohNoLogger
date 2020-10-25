'use strict';

const errorHub = require('./hub.js');


// test1('testParam1');
// test2('testParam2');
// test3('JONNY');
test4('daveeParam4')
test5('daveeParam5')
test6()


function test1(param) {
  try {
    // throw new ReferenceError('test1', 'index.js', 10);
    let num = 123;
    return num.toUpperCase();
  } catch (e) {
    errorHub.logError(e, 'ryan987', '', 'This is ben1243s note');
  }
}

function test2(param) {
  try {
    throw new SyntaxError('test2', 'someFile.js', 10);
  } catch (e) {
    errorHub.logError(e, 'davee1234', param, 'this is notes from test 2 function');
  }
}

function test3(person) {
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    errorHub.logError(e, 'ben6789', person, 'Will this note work? TRY AGAIN');
  }
}


function test4(param) {
  try {
    let num = 123;
    return num.toUpperCase();
  } catch (e) {
    let metadata = {
      userid: 'ben123',
      userparam: param,
      usernote: 'This is ben1243s note'
    }
    errorHub.logError1(e, metadata);
  }
}

function test5(param) {
  try {
    throw new SyntaxError('test2', 'someFile.js', 10);
  } catch (e) {
    let metadata = {
      userid: 'ryan123',
      userparam: param,
    }
    errorHub.logError1(e, metadata);
  }
}

function test6(person) {
  try {
    throw new ReferenceError('test3', 'index.js', 10);
  } catch (e) {
    let metadata = {
      userid: 'ryan123',
    }
    errorHub.logError1(e, metadata);
  }
}

