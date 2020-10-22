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

