'use strict';

const yargs = require('yargs');
const searchHead = require('./search_head/search_head.js');

yargs.version('1.1.0');


////// List errors by user Id or date
yargs.command({
  command: 'getRecord',
  describe: 'Get records based on a userID and/or date',
  builder: {
    user_id: {
      describe: 'Programmer\'s ID',
      demandOption: false,
      type: 'string'
    },
    date_time: {
      describe: 'Enter specific date',
      demandOption: false,
      type: 'string'
    },
    error_type: {
      describe: 'Enter Error Type',
      demandOption: false,
      type: 'string'
    },
    user_param: {
      describe: 'Enter tested params',
      demandOption: false,
      type: 'string'
    }
  },
  handler(argv) {
    let user_id = argv.user_id || null;
    let date_time = argv.date_time || null;
    let error_type = argv.error_type || null;
    let user_param = argv.user_param || null;
    searchHead.getRecord(user_id, date_time, error_type, user_param);
  }
});


///////////    Delete Errors by ID
yargs.command({
  command: 'delete',
  describe: 'Delete a record based on the id',
  builder: {
    record_id: {
      describe: 'record_id',
      demandOption: true,
      type: 'Int'
    }
  },
  handler(argv) {
    searchHead.delete(argv.record_id);
    console.log('This is argv.record_id:', argv.record_id);
  }
});


yargs.parse();
