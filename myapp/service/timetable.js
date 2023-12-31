// service/timeset.js
const {Timetable} = require('../models');
const UsersService = require('./users');
const TimeSetService = require('./timeset');

class TimetableService {
  static async createTimetable() {
    const userNum = UsersService.getUserNum();
    return await Timetable.create({
        userNum: userNum
    });
  }

  static async deleteTimetable(req) {
    const userNum = UsersService.getUserNum();
    const timetableNum = req.timetableNum;
    return await Timetable.destroy({
      where:{
        userNum: userNum,
        timetableNum: timetableNum
      }
    });
  }

  static async getMyList(){
    const userNum = UsersService.getUserNum();
    const timetables = await Timetable.findAll({
      where: { userNum: userNum }
    });
    const timesetIds = timetables.map(timetable => timetable.timetableNum);
    return timesetIds;
  }
  
}

module.exports = TimetableService;

