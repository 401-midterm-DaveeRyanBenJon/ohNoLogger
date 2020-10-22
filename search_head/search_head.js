'use strict';

class SearchHead {

  getAll(){
    // will need to grab everything from database
    console.log('Get all is called');
  }

  getByUserId(id) {
    // query the database by the id
    // will need to account for ID not present in database
    console.log('GetByUserId is called with ', id);
  }

  getbyDate(date) {

    console.log('getbyDate is called with', date);
  }

  delete(errorID) {
    // will need to delete error by id
    console.log('delete is called with', errorID);
  }

}

module.exports = new SearchHead();
