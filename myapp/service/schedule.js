// service/timeset.js
const {Schedule} = require('../models');
const UsersService = require('./users');
const {ScheduleLine} = require('../models');


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

  static async checkSchedule(scheduleList) {
    const schedules = Array.isArray(scheduleList) ? scheduleList : [scheduleList];
    for (const scheduleNum of schedules) {
        const checkSchedule = await Schedule.findOne({
            where: {
                scheduleNum: scheduleNum
            }
        });
        if (!checkSchedule) {
            return false;
        }
    }
    return true;
}

static async insertSchedule(timetableNum, scheduleList) {
  try {
      // scheduleList가 문자열인 경우 배열로 변환
      const schedules = Array.isArray(scheduleList) ? scheduleList : scheduleList.split(',');

      // 일정을 데이터베이스에 삽입하는 로직 수행
      const insertResult = await ScheduleLine.bulkCreate(
          schedules.map(scheduleNum => ({
              timetableNum: timetableNum,
              scheduleNum: scheduleNum
          }))
      );
      if (insertResult) {
          return true; // 일정 삽입 성공
      } else {
          return false; // 일정 삽입 실패
      }
  } catch (error) {
      console.error(error);
      throw new Error('일정 삽입 중 오류가 발생했습니다.');
  }
}




}

module.exports = ScheduleService;

