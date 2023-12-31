var express = require('express');
var router = express.Router();
const TimeSetService = require('../service/timeset');
const TimetableService = require('../service/timetable');

const timeset = [];

router.post('/edit', async (req, res) =>{
  try {
    const newTimeSet = req.body;
    timeset.push(newTimeSet);
    if(!timeset) return res.status(400).send('날짜와 시간을 올바르게 선택하세요')
    await TimeSetService.editTimeset(req.body);
    res.send({ message: '수정 완료' });
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

router.get('/getList', async (req, res) =>{
  try{
    const myList = await TimetableService.getMyList();
    res.send(myList);
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



module.exports = router;