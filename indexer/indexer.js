'use strict';

const events = require('../events');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const chalk = require('chalk');

events.on('toIndexer', saveIndexer);

async function saveIndexer(payload) {
  // console.log('PAYLOAD from parser:', payload);
  try {
    const event = await prisma.errevents.create({ data: payload })
    console.log('An Error was added to ErrorHub:', payload.datetime.toString());
    console.log(chalk.red('-----------------------------------------------------------------------------------------'));
  } catch (e) {
    console.log('Something wrong happened in indexer:', e);
  } finally {
    await prisma.$disconnect();
  }
}

