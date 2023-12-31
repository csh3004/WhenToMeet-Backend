var express = require('express');
var router = express.Router();
const TimetableService = require('../service/timetable');
const UserService = require('../service/users')

router.get('/getList', async (req, res) =>{
  try{
    const userNum = UserService.getUserNum();
    const myTimetableList = await TimetableService.getMyList(userNum);
    res.send(myTimetableList);
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

router.post('/create', async (req,res) => {
  try{
    const userNum = UserService.getUserNum();
    await TimetableService.createTimetable(userNum);
    res.send({ message: '시간표 생성 완료'})
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
})

router.post('/delete', async (req,res) => {
  try{
    const userNum = UserService.getUserNum();
    await TimetableService.deleteTimetable(req.body,userNum);
    res.send({ message: '시간표 삭제 완료'})
  } catch(error){
    console.error(error);
    res.status(500).send('서버 오류');
  }
})

module.exports = router;