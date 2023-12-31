var express = require('express');
var router = express.Router();
const ScheduleService = require('../service/schedule');
const UsersService = require('../service/users');
const TimetableService = require('../service/timetable')


router.post('/create', async (req,res) => {
    try{
        const scheduleNum = await ScheduleService.createSchedule(req.body)
        res.send({ message : '일정 추가 완료, 일정번호 = ' + scheduleNum})
    } catch(error){
        console.error(error);
        res.status(500).send('서버 오류');
    }
})

router.post('/insert', async (req,res)=>{
    try {
        const timetableNum = req.body.timetableNum;
        const scheduleList = req.body.scheduleList;
        const userNum = UsersService.getUserNum();
        console.log(userNum)
        const checkTimetable = await TimetableService.checkTimetable(timetableNum, userNum);
        if(!checkTimetable) res.send('time table 없음')
        console.log(checkTimetable)
        const checkSchedule = await ScheduleService.checkSchedule(scheduleList);
        if(!checkSchedule) res.send('schedule 없음')
        const insertSchedule = await ScheduleService.insertSchedule(timetableNum, scheduleList);
        if(!insertSchedule) res.send('일정 삽입 실패');
        res.send({ message : '일정표에 일정 추가 완료'})
    } catch (error) {
        console.error(error);
        res.status(500).send('서버 오류');
    }
})
module.exports = router;