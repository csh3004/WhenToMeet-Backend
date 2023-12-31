var express = require('express');
var router = express.Router();
const UsersService = require('../service/users');

router.post('/signup', async (req, res) => {
  try {
    const idDuplecationCheck = await UsersService.checkDuplicateUserId(req.body.userId);
    if (idDuplecationCheck) return res.status(400).send('이미 존재하는 아이디.');

    await UsersService.createUser(req.body.name, req.body.userId, req.body.userPw, req.body.age);
    res.send({ message: '사용자를 등록했습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

router.post('/signin', async (req, res) => {
  try {
    const idCheck = await UsersService.findUserById(req.body.userId);
    if (!idCheck) return res.status(400).send('존재하지 않는 아이디입니다.');

    const pwCheck = await UsersService.findUserByPassword(req.body.userPw);
    if (!pwCheck) return res.status(400).send('비밀번호가 틀렸습니다.');

    const user = await UsersService.signin(req.body.userId, req.body.userPw);
    if(user) {
      res.send("로그인 성공")
    } else{
      res.status(500).send('서버 오류');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('서버 오류');
  }
});

module.exports = router;