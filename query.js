'use strict';

const yargs = require('yargs');
const searchHead = require('./search_head/search_head.js');

yargs.version('1.1.0');


////// List errors by user Id or date
yargs.command({
  command: 'getRecord',
  describe: 'Get records based on a userID and/or date',
  builder: {
    userID: {
      describe: 'Programmer\'s ID',
      demandOption: false,
      type: 'string'
    },
    date: {
      describe: 'Enter specific date',
      demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    let userID = argv.userID || null;
    let date = argv.date || null;
    searchHead.getRecord(userID, date);
  }
});


///////////    Delete Errors by ID
yargs.command({
  command: 'delete',
  describe: 'Delete a record based on the id',
  builder: {
    recordID: {
      describe: 'recordID',
      demandOption: true,
      type: 'Int'
    }
  },
  handler(argv) {
    searchHead.delete(argv.recordID);
    console.log('This is argv.recordID:', argv.recordID);
  }
});


yargs.parse();
