// service/users.js
const { User } = require('../models');

class UsersService {
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

  static async findUserByPassword(userPw) {
    return await User.findOne({
      where: { userPw: userPw }
    });
  }
}

module.exports = UsersService;
