// service/timeset.js
const {Timeset} = require('../models');
const UsersService = require('./users');

class TimeSetService {
    
  static async createTimeSet(timeset) {
    const createdTimeset = await Timeset.create({
    });
    this.timesetId = createdTimeset.timesetId;
    return this.timesetId;
  }

  static async getTimesetId(){
    return this.timesetId;
  }

  static async editTimeset(){

  }

}

module.exports = TimeSetService;

