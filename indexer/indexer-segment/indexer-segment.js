'use strict';

const events = require('../../events.js');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

events.on('toIndexer',saveIndexer);

async function saveIndexer(payload){
  console.log('this is indexer-seg toIndexer:', payload.message);
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
//STEP 2 INDEX/SAVE
// this is where we save to db
//1: listen for 'save' event emitted from hub file
// 2: on save event, take in event payload and JUST CONSOLE LOG TO TEST, ONCE WORKING ==>
// 2: on save event, take in event payload and save to our SQL database
