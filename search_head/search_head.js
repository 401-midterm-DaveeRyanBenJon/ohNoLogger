'use strict';

const chalk = require('chalk');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class SearchHead {


  async getRecord(userid, datetime, errortype, userparam) {
    try {
      let queryObj = {};
      if(userid !== null) {queryObj.userid = userid};
      if(datetime !== null) {queryObj.datetime = datetime};
      if(errortype !== null) {queryObj.errortype = errortype};
      if(userparam !== null) {queryObj.userparam = userparam};
      const errors = await prisma.errevents.findMany({
        where: queryObj,
      });
      if(!errors.length) {
        console.log(chalk.red('=================================  ERROR RECORD  ================================='));
        console.log('NOTHING RETURNED FROM DATABASE. TRY USING LESS FILTERS OR CHECK YOUR SPELLING');
        console.log(chalk.red('=================================================================================='));
      } else {
          errors.forEach(err => {
          console.log(chalk.blue('=================================  ERROR RECORD  ================================='));
          console.log(err);
          console.log(chalk.blue('=================================================================================='));
      })
    }
    } catch (e) {
      console.log('Something went wrong getting data:', e);
    } finally {
      await prisma.$disconnect();
    }
  }


  async update(id, usernote) {
    try {
      const updated = await prisma.errevents.update({
        where: { id: id },
        data: {usernote: usernote}
      });
      console.log(chalk.blue('===============================  UPDATED RECORD  ==============================='))
      console.log(updated);
      console.log(chalk.blue('================================================================================'))
    } catch (e) {
      console.log('Something went wrong when updating from database:',e);
    } finally {
      await prisma.$disconnect();
    }
  }


  async delete(id) {
    try {
      const deleted = await prisma.errevents.delete({
        where: { id: id },
      });
      console.log(chalk.red('===============================  DELETED RECORD  ==============================='))
      console.log(deleted);
      console.log(chalk.red('================================================================================'))
    } catch (e) {
      console.log('Something went wrong when deleting from database:');
      console.log(e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

module.exports = new SearchHead();
