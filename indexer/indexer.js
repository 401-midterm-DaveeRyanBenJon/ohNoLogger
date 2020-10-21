'use strict';

const events = require('../events');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

events.on('toIndexer', saveIndexer);

async function saveIndexer(payload) {
  console.log('this is from indexer:', payload.message);
  const event = await prisma.errevents.create({
    data: {
      message: payload.message,
      name: payload.name,
      filename: payload.filename,
      linenumber: payload.linenumber,
      columnnumber: payload.columnnumber,
      stack: 'stack'
    }
  })
}



//------ This is where we save to db -------/
//1: listen for 'save' event emitted from hub file
// 2: on save event, take in event payload and JUST CONSOLE LOG TO TEST, ONCE WORKING ==>
// 2: on save event, take in event payload and save to our SQL database


/***** Example from Docs ******

const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()
async function main() {
  // ... you will write your Prisma Client queries here
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

********************************/