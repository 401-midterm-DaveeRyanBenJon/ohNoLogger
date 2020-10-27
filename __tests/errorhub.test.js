'use strict';

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const errorHub = require('../hub.js');


///// Helper Test Function
function allPropertiesPresent(dbResults) {

  let allPresent = true;
  let properties = ['id','date','time','errortype','errormessage','userparam','usernote','stack']

  properties.forEach(property => {
    if (!dbResults[property]) {
      allPresent = false
    }
  })
  return allPresent;
}


describe('ErrorHub should work correctly with valid inputs', () => {

  it('Should send data if given just the error object',  async() => {
    let result = await errorHub.logError(e);
    // expect result to have id, date, time, userid, errortype, errormessage, userparam, usernote, and stack property
    /////////    this is our goal??    //////////
    expect(allPropertiesPresent(result)).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid property',  async() => {

    let metaData = {
      userid: 'ben345',
    };

    let result = await errorHub.logError(e, metaData);
    // expect result to have id, date, time, userid, errortype, errormessage, errormessage, userparam, usernote, and stack property
    expect(allPropertiesPresent(result)).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid and userparam property',  async() => {

    let metaData = {
      userid: 'ryan234',
      userparam: 'param',
    };

    let result = await errorHub.logError(e, metaData);
    expect(allPropertiesPresent(result)).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid, userparam, and usernote property',  async() => {

    let metaData = {
      userid: 'dave123',
      userparam: param,
      usernote: 'This is dave123 notes'
    };

    let result = await errorHub.logError(e, metaData);
    expect(allPropertiesPresent(result)).toEqual(true);
  })
});
