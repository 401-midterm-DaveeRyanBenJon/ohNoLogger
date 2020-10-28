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
      allPresent = false;
    }
  })
  return allPresent;
}


xdescribe('First errorHub method should work correctly with valid inputs', () => {

  afterEach( async () => {
    console.log('aftereach got triggered');
    let emptyDB = await prisma.errevents.deleteMany();
    await prisma.$disconnect();
  })
  
  let fakeError = {
    name: 'fake errortype',
    message: 'fake message',
    stack: 'fake string of erorr stack'
  }

  it('Should account for an array as param',  async() => {
    errorHub.logError(fakeError, 'ryan987', [1,2,3,4], 'This is ben1243s note');
    const result = await prisma.errevents.findMany({
      where: {},
    });

    await prisma.$disconnect();
    console.log('This is result ', result);
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })

  it('Should account for boolean as param',  async() => {
    errorHub.logError(fakeError, 'davee1234', true, 'this is notes from test 2 function');
    let result = await prisma.errevents.findMany({})
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })

  it('Should account for param being a number',  async() => {
    errorHub.logError1(fakeError, 'ben6789', 5, 'Will this note work? TRY AGAIN');
    let result = await prisma.errevents.findMany({})
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })
});


xdescribe('Second errorHub1 method should work correctly with valid inputs', () => {

  // afterEach( async () => {
  //   console.log('aftereach got triggered');
  //   let emptyDB = await prisma.errevents.deleteMany();
  //   await prisma.$disconnect();
  // })

  let fakeError = {
    name: 'fake errortype',
    message: 'fake message',
    stack: 'fake string of erorr stack'
  }

  it('Should send data if given just the error object',  async() => {

    errorHub.logError1(fakeError);
    let result = await prisma.errevents.findMany({
      where : {}
    });
    console.log('This is result ', result);
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid property',  async() => {

    let metaData = {
      userid: 'ben345',
    };

    errorHub.logError1(fakeError, metaData);
    let result = await prisma.errevents.findMany({})
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid and userparam property',  async() => {

    let metaData = {
      userid: 'ryan234',
      userparam: 'param',
    };

    errorHub.logError1(fakeError, metaData);
    let result = await prisma.errevents.findMany({})
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })

  it('Should send data if given error object and metadata with userid, userparam, and usernote property',  async() => {

    let metaData = {
      userid: 'dave123',
      userparam: 5,
      usernote: 'This is dave123 notes'
    };

    errorHub.logError1(fakeError, metaData);
    let result = await prisma.errevents.findMany({})
    await prisma.$disconnect();
    // expect(allPropertiesPresent(result[0])).toEqual(true);
  })
});
