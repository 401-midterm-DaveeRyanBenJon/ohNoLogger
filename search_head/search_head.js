'use strict';

const chalk = require('chalk');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class SearchHead {


  async getRecord(user_id, date_time, error_type, user_param) {
    try {
      let queryObj = {};
      if(user_id !== null) {queryObj.userid = user_id};
      if(date_time !== null) {queryObj.datetime = date_time};
      if(error_type !== null) {queryObj.errortype = error_type};
      if(user_param !== null) {queryObj.userparam = user_param};
      const errors = await prisma.errevents.findMany({
        where: queryObj,
      });
      if(!errors.length) {
        console.log(chalk.red('=================================  ERROR RECORD  ================================='));
        console.log('NOTHING RETURNED FROM DATABASE. TRY USING LESS FILTERS OR CHECK YOUR SPELLING');
        console.log(chalk.red('=================================================================================='));
      } else {
          errors.forEach(err => {
          console.log(chalk.green('=================================  ERROR RECORD  ================================='));
          console.log('RECORD_ID:', err.id);
          console.log('USER_ID:', err.userid);
          console.log('DATE_TIME:', err.datetime);
          console.log('ERROR_TYPE:', err.errortype);
          console.log('ERROR_MESSAGE:', err.errormessage);
          console.log('STACK:', err.stack);
          console.log(chalk.green('=================================================================================='));
      })
    }
    } catch (e) {
      console.log('Something went wrong getting data:', e);
    } finally {
      await prisma.$disconnect();
    }
  }


  async delete(record_id) {
    try {
      const deleted = await prisma.errevents.delete({
        where: { id: record_id },
      });
      console.log(chalk.green('===============================  DELETED RECORD  ==============================='))
      console.log(deleted);
      console.log(chalk.green('================================================================================'))
    } catch (e) {
      console.log('Something went wrong when deleting from database:', e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

module.exports = new SearchHead();
