const scheduleService = require('../service/scheduleService')
const timetableService = require('../service/timetableService')
const usersService = require('../service/usersService')

module.exports.create = async(req, res, next) => {
    try{
       const scheduleNum = await scheduleService.createSchedule(req.body);
       return res.send({ message : '일정 추가 완료, 일정번호 = ' + scheduleNum})
    } catch(error){
        console.error(error);
       return res.status(500).send('서버 오류');
    }
}

module.exports.insert = async(req, res, next) => {
    try {
        const timetableNum = req.body.timetableNum;
        const scheduleList = req.body.scheduleList;
        const userNum = usersService.getUserNum();
        console.log(userNum)
        const checkTimetable = await timetableService.checkTimetable(timetableNum, userNum);
        if(!checkTimetable) return res.send({
            message: 'time table 없음',
            success: false
        })
        console.log(checkTimetable)
        const checkSchedule = await scheduleService.checkSchedule(scheduleList);
        if(!checkSchedule)  return res.send({
            message: 'schedule 없음',
            success: false
        })
        const insertSchedule = await scheduleService.insertSchedule(timetableNum, scheduleList);
        if(!insertSchedule)  return res.send({
            message: '일정 삽입 실패',
            success: false
        });
        return res.send({
            message : '일정표에 일정 추가 완료',
            success: true
        })
    } catch (error) {
        console.error(error);
        return res.status(500).send('서버 오류');
    }
}