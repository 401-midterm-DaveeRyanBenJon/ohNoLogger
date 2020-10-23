'use strict';

const yargs = require('yargs');
const searchHead = require('./search_head/search_head.js');

yargs.version('1.1.0');

///////////   List all Errors
yargs.command({
  command: 'list',
  describe: 'Get a List of All Errors',
  handler() {
    searchHead.getAll();
  }
});


///////////   List all Errors by User
yargs.command({
  command: 'listByUser',
  describe: 'Get a list of all errors based on the users ID. In the terminal enter: `--userID=A_USER_ID`',
  builder: {
    userID: {
      describe: 'Programmer\'s ID',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    searchHead.getByUserId(argv.userID);
  }
});


///////////   List all Errors by Date
yargs.command({
  command: 'listbyDate',
  describe: 'Get a list of all errors based on the date. Please enter date',
  builder: {
    date: {
      describe: 'date',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    searchHead.getByDate(argv.date);
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
