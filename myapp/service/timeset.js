// service/timeset.js
const {Timeset} = require('../models');
const UsersService = require('./users');

class TimeSetService {
    
  static async createTimeSet(timeset) {
    const userId = UsersService.getUserNum();
    // const timesetId = timeset.timesetId;
    // this.timesetId = timeset.timesetId;
    const createdTimeset = await Timeset.create({
      // timesetId : timeset.timesetId,
      // day: timeset.day,
      // start: timeset.start,
      // end: timeset.end
    });

    // createdTimeset 에서 timesetId 값을 가져옴
    this.timesetId = createdTimeset.timesetId;
    return this.timesetId;
  }

  static async getTimesetId(){
    return this.timesetId;
  }
}

module.exports = TimeSetService;

