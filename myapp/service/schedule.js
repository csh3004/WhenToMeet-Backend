// service/timeset.js
const {Schedule} = require('../models');
const UsersService = require('./users');


class ScheduleService {
  static async createSchedule(req){
    const createSchedule = await Schedule.create({
        name: req.name,
        day: req.day,
        startTime: req.startTime,
        endTime: req.endTime
    })
    createSchedule;
    return createSchedule.scheduleNum;
  }

}

module.exports = ScheduleService;

