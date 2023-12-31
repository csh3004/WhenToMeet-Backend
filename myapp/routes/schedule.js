var express = require('express');
var router = express.Router();
const ScheduleService = require('../service/schedule')

router.post('/create', async (req,res) => {
    try{
        const scheduleNum = await ScheduleService.createSchedule(req.body)
        res.send({ message : '일정 추가 완료, 일정번호 = ' + scheduleNum})
    } catch(error){
        console.error(error);
        res.status(500).send('서버 오류');
    }
})


module.exports = router;