// service/timeset.js
const {Timeset} = require('../models');
const UsersService = require('./users');

class TimeSetService {
    
  static async createTimeSet() {
    const createdTimeset = await Timeset.create({
    });
    this.timesetId = createdTimeset.timesetId;
    return this.timesetId;
  }

  static async getTimesetId(){
    return this.timesetId;
  }

  static async editTimeset(req) {
    const timesetId = req.timesetId;
    const timesetsData = req.timeset;
  
    // 첫 번째 timeset을 update
    const firstTimeset = timesetsData.shift(); // 첫 번째 timeset을 추출하고 배열에서 제거
    const firstUpdatePromise = Timeset.update(
      {
        day: firstTimeset.day,
        start: firstTimeset.start,
        end: firstTimeset.end
      },
      {
        where: { timesetId: timesetId }
      }
    );
  
    // 나머지 timeset들을 create
    const createPromises = timesetsData.map(async (timesetData) => {
      const newTimeset = await Timeset.create({
        day: timesetData.day,
        start: timesetData.start,
        end: timesetData.end
      });
  
      // 생성된 timeset의 ID나 필요한 다른 정보를 반환할 수도 있습니다.
      return newTimeset;
    });
  
    // update와 create 모두 완료될 때까지 기다림
    await Promise.all([firstUpdatePromise, ...createPromises]);
  
    // 업데이트 후의 모든 timeset 데이터를 검색하여 반환
    const updatedTimesets = await Timeset.findAll({
      where: { timesetId: timesetId }
    });
  
    return updatedTimesets;
  }
  
}

module.exports = TimeSetService;

