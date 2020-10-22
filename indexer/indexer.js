'use strict';

const events = require('../events');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

events.on('toIndexer', saveIndexer);

async function saveIndexer(payload) {
  console.log('PAYLOAD from parser:', payload);
  const event = await prisma.errevents.create({
    data: payload,
  })
  await prisma.$disconnect();
}




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