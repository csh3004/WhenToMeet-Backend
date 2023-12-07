var express = require('express');
var router = express.Router();

const timeset = [];

router.post('/send', (req, res) =>{
    const {day, time} = req.body;
    
    if (!day || !time) {
        res.status(400).send({ message: '요일과 시간을 선택해주세요' });
        return;
      }

    timeset.push(req.body);
    console.log(timeset)
    res.send("일정 저장 완료 완료")
  })

  router.get('/get', (req, res) => {
    res.send(timeset);
  })


  module.exports = router;