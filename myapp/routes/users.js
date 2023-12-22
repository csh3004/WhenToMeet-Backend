var express = require('express');
var router = express.Router();
const {User} = require('../models')


const users = [];


router.post('/signup', async (req, res) => {
  // const { name, userId, userPw, age } = req.body;

  try {
    const exUser = await User.findOne({
      where: { userId: req.body.userId }
    });
    if (exUser) return res.status(400).send('이미 존재하는 아이디.');

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


router.post('/signin', (req, res) =>{
  const {id, password} = req.body;
  const user = users.find((user) => user.id === id);
  if (!user) {
    res.status(400).send({ message: '존재하지 않는 아이디입니다.' });
    return;
  }
  if(!(user.password === password)){
    res.status(400).send({ message: '비밀번호가 일치하지 않습니다.' });
    return;
  }
  res.send("로그인 성공")
})

module.exports = router;
