var express = require('express');
var router = express.Router();
const {User} = require('../models')

router.post('/signup', async (req, res) => {
  try {
    const idDuplecationCheck = await User.findOne({
      where: { userId: req.body.userId }
    });
    if (idDuplecationCheck) return res.status(400).send('이미 존재하는 아이디.');

    await User.create({
      name: req.body.name,
      userId: req.body.userId,
      userPw: req.body.userPw,
      age: req.body.age
    });
    res.send({ message: '사용자를 등록했습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});


router.post('/signin', async (req, res) =>{
  try {
    const idCheck = await User.findOne({
      where: { userId: req.body.userId }
    });
    if (!idCheck) return res.status(400).send('존재하지 않는 아이디 입니다.');
    const pwCheck = await User.findOne({
      where: { userPw: req.body.userPw }
    });
    if (!pwCheck) return res.status(400).send('비밀번호가 틀렸습니다.');
    res.send({ message: '로그인에 성공했습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
})

module.exports = router;
