// models/index.js
const Sequelize = require('sequelize');
const User = require('./users');
const Schedule = require('./schedule');
const ScheduleLine = require('./scheduleLine');
const Timetable = require('./timetable');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

const db = {
  User: User.init(sequelize),
  Schedule: Schedule.init(sequelize),
  Timetable: Timetable.init(sequelize),
  ScheduleLine: ScheduleLine.init(sequelize)
};

Object.values(db).forEach(model => {
  if (model.associate) {
    model.associate(db);
  }
});

sequelize.sync({ force: true }).then(() => {
  console.log('데이터베이스가 성공적으로 동기화되었습니다.');
}).catch(err => {
  console.error('데이터베이스 동기화 중 오류 발생:', err);
});


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
