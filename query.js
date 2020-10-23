'use strict';

const yargs = require('yargs');
const searchHead = require('./search_head/search_head.js');

yargs.version('1.1.0');


//////   getRecord
yargs.command({
  command: 'getRecord',
  describe: 'Get records based on a userid, datetime, errortype, userparam',
  builder: {
    userid: {
      describe: 'Programmer\'s user ID',
      demandOption: false,
      type: 'string'
    },
    datetime: {
      describe: 'Enter specific date',
      demandOption: false,
      type: 'DateTime'
    },
    errortype: {
      describe: 'Enter Error Type. ex ReferenceError, TypeError, SyntaxError',
      demandOption: false,
      type: 'string'
    },
    userparam: {
      describe: 'Enter param that threw the error',
      demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    let userid = argv.userid || null;
    let datetime = argv.datetime || null;
    let errortype = argv.errortype || null;
    let userparam = argv.userparam || null;
    searchHead.getRecord(userid, datetime, errortype, userparam);
  }
});


///////////    delete
yargs.command({
  command: 'delete',
  describe: 'Delete a record based on the id',
  builder: {
    id: {
      describe: 'id',
      demandOption: true,
      type: 'Int'
    }
  },
  handler(argv) {
    searchHead.delete(argv.id);
  }
});


yargs.parse();
