'use strict';

const errorHub = require('../hub');

describe('proof of life test', () => {
  it('proof of life test', () => {
    expect(true).toBeTruthy();
  })
})

describe('Test works with all params', () => {
  it('Should return ErrorHub with payload', () => {
    let e = new SyntaxError('test2', 'someFile.js', 10);
    // const errorHub.logError()
  })
})



