const usersService = require('../service/usersService')

module.exports.signup = async (req, res, next) => {
    try {
        const idDuplecationCheck = await usersService.checkDuplicateUserId(req.body.userId);
        if (idDuplecationCheck) return res.json({ 
          message: '이미 존재하는 아이디입니다.',
          success: false
        });
        await usersService.createUser(req.body.name, req.body.userId, req.body.userPw, req.body.age);
        return res.json({ 
          message: '사용자를 등록했습니다.',
          success: true
        });
      } catch (error) {
        return res.status(500).send('서버 오류');
      }
}

module.exports.signin = async (req, res, next) => {
    try {
        const idCheck = await usersService.findUserById(req.body.userId);
        if (!idCheck) return res.json({
          message: '존재하지 않는 아이디입니다.',
          success: false
        });
        const pwCheck = await usersService.findUserByPassword(req.body.userPw);
        if (!pwCheck) return res.json({
          message: '비밀번호가 틀렸습니다.',
          success: false
        });
        const user = await usersService.signin(req.body.userId, req.body.userPw);
        if(user) {
          return res.json({ 
            message: '로그인에 성공했습니다.',
            success: true
          });
        } else{
          return res.status(500).send('서버 오류');
        }
      } catch (error) {
        console.error(error);
        return res.status(500).send('서버 오류');
      }
}