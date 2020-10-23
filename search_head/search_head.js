'use strict';

const chalk = require('chalk');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

class SearchHead {

  async getAll() {
    try {
      const errors = await prisma.errevents.findMany();
      errors.forEach(err => {
        console.log(chalk.green('=================================   ERROR  =================================='));
        console.log('ERROR-ID:', err.id);
        console.log('USER-ID:', err.userid);
        console.log('DATE-TIME:', err.datetime);
        console.log('ERROR-TYPE:', err.errortype);
        console.log('ERROR-MESSAGE:', err.errormessage);
        console.log('STACK:', err.stack);
        console.log(chalk.green('============================================================================='));
      })
    } catch (e) {
      console.log('Something went wrong when gettingALL from database:', e);
    } finally {
      await prisma.$disconnect();
    }
  }

  getByUserId(id) {
    // query the database by the id
    // will need to account for ID not present in database
    console.log('GetByUserId is called with ', id);
  }

  getByDate(date) {

    console.log('getbyDate is called with', date);
  }

  async delete(id) {
    try {
      const deleted = await prisma.errevents.delete({
        where: { id: id },
      });
      console.log('This is what comes back for deleted: ', deleted);
      console.log('This ERROR was deleted:', id);
    } catch (e) {
      console.log('Something went wrong when deleting from database:', e);
    } finally {
      await prisma.$disconnect();
    }
  }
}

module.exports = new SearchHead();
