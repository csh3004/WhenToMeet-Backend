// service/timeset.js
const {Timetable} = require('../models');
const UsersService = require('./users');
const TimeSetService = require('./timeset');

class TimetableService {
  static async createTimetable() {
    const userNum = UsersService.getUserNum();
    const timesetId = await TimeSetService.createTimeSet();
    return await Timetable.create({
        userNum: userNum,
        timesetId: timesetId
    });
  }

  static async getMyList(){
    const userNum = UsersService.getUserNum();
    const timetables = await Timetable.findAll({
      where: { userNum: userNum }
    });
    const timesetIds = timetables.map(timetable => timetable.timesetId);
    return timesetIds;
  }
  
}

module.exports = TimetableService;

