// service/timeset.js
const {Timetable} = require('../models');
const UsersService = require('./users');
const TimeSetService = require('./timeset');

class TimetableService {
  static async createTimetable() {
    const userId = UsersService.getUserId();
    const timesetId = TimeSetService.getTimesetId();
    return await Timeset.create({
        userId: userId,
        timesetId: timesetId
    });
  }
}

module.exports = TimetableService;

