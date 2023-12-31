// service/users.js
const { User } = require('../models');


class UserService {
  static async checkDuplicateUserId(userId) {
    return await User.findOne({
      where: { userId: userId }
    });
  }

  static async createUser(name, userId, userPw, age) {
    return await User.create({
      name: name,
      userId: userId,
      userPw: userPw,
      age: age
    });
  }
  
  static async findUserById(userId) {
    return await User.findOne({
      where: { userId: userId }
    });
  }

  static async signin(userId, userPw) {
    const user = await User.findOne({
      where: { userId: userId, userPw: userPw }
    });
    if (user) {
      const userNum = user.userNum; // 해당 사용자의 userNum 가져오기
      this.userNum = userNum;
      console.log(this.userNum + "유저넘")
      return user; // 로그인 성공 시 사용자 객체 반환
    } else {
      return null; // 로그인 실패 시 null 반환
    }
  }

  static getUserNum() {
    return this.userNum;
  }

  static async findUserByPassword(userPw) {
    return await User.findOne({
      where: { userPw: userPw }
    });
  }
}

module.exports = UserService;
