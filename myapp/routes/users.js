var express = require('express');
var router = express.Router();

const users = [];

router.post('/signup', (req, res) => {
  const { id, password, name } = req.body;
  // TODO id, password, name이 있는지 체크한다.
  if (!id || !password || !name) {
    res.status(400).send({ message: 'id, password, name은 필수입력 사항입니다.' });
    return;
  }
  
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(400).send({ message: '이미 존재하는 아이디입니다.' });
    return;
  }

  users.push(req.body);
  res.send({ message: '사용자를 등록했습니다.' });
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
