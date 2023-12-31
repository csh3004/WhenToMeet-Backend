var express = require('express');
var router = express.Router();
const TimeSetService = require('../service/timeset');
const TimetableService = require('../service/timetable');

router.get('/getList', async (req, res) =>{
  try{
    const myTimetableList = await TimetableService.getMyList();
    res.send(myTimetableList);
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

router.post('/create', async (req,res) => {
  try{
    await TimetableService.createTimetable();
    res.send({ message: '시간표 생성 완료'})
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
})

router.post('/delete', async (req,res) => {
  try{
    await TimetableService.deleteTimetable(req.body);
    res.send({ message: '시간표 삭제 완료'})
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
})

module.exports = router;