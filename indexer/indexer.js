'use strict';

const events = require('../events');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();
const chalk = require('chalk');

events.on('toIndexer', saveIndexer);

async function saveIndexer(payload) {
  try {
    const event = await prisma.errevents.create({ data: payload })
    console.log(chalk.bold.green('An Error was added to ErrorHub:'), payload.date.toString());
    console.log(chalk.red('-----------------------------------------------------------------------------------------'));
  } catch (e) {
    console.log(chalk.bold.red('Something wrong happened in indexer:'), e);
  } finally {
    await prisma.$disconnect();
  }
}

