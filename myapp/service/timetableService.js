// service/timeset.js
const {Timetable} = require('../models');
const {ScheduleLine} = require('../models')
const UserService = require('./usersService');

class TimetableService {
  static async createTimetable(userNum) {
    return await Timetable.create({
        userNum: userNum
    });
  }

  static async deleteTimetable(req, userNum) {
    const timetableNum = req.timetableNum;
    return await Timetable.destroy({
      where:{
        userNum: userNum,
        timetableNum: timetableNum
      }
    });
  }

  static async getMyList(userNum){
    const timetables = await Timetable.findAll({
      where: { userNum: userNum }
    });
    const timesetIds = timetables.map(timetable => timetable.timetableNum);
    return timesetIds;
  }
  
  static async getMyTimeTable(timetableNum){
    const scheduleLines = await ScheduleLine.findAll({
      where: { timetableNum: timetableNum }
    });
    const schedules = scheduleLines.map(scheduleLine => scheduleLine.scheduleNum);
    return schedules;
  }

  static async checkTimetable(timetableNum, userNum){
    const timetables = await Timetable.findOne({
      where: { 
        userNum: userNum,
        timetableNum: timetableNum
        }
    });
    if(timetables){
      console.log("dd")
      return true;
    } 
    console.log("false")
    return false;
  }
  
}

module.exports = TimetableService;

