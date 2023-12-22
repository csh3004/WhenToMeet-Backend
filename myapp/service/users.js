// service/users.js
const { User } = require('../models');


class UsersService {
    constructor() {
        this.gUserId = null;
      }
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
    this.userId = userId;
      return user; // 로그인 성공 시 사용자 객체 반환
    } else {
      return null; // 로그인 실패 시 null 반환
    }
  }

  static getUserId() {
    return this.userId;
  }

  static async findUserByPassword(userPw) {
    return await User.findOne({
      where: { userPw: userPw }
    });
  }
}

module.exports = UsersService;
