// service/timeset.js
const {Timeset} = require('../models');
const UsersService = require('./users');

class TimeSetService {
  static async createTimeSet(timeset) {
    const userId = UsersService.getUserId();
    if (!userId) {
      throw new Error('사용자 정보를 찾을 수 없습니다.');
    }
    return await Timeset.create({
      userId: userId,
      timeset: timeset,
      Number: 1
    });
  }
}

module.exports = TimeSetService;
