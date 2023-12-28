// // models/Timetable.js
// const Timetable = sequelize.define('Timetable', {
//     // 다른 필드들...
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     // 다른 필드들...
//   });
  
//   // 관계 설정
//   Timetable.belongsTo(User, { foreignKey: 'userId' });
//   Timetable.belongsTo(Time, { foreignKey: 'timeId' });
  
//   module.exports = Timetable;
  // timeset.js
const Sequelize = require('sequelize');

module.exports = class Timetable extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'Timeset',
        tableName: 'timeset',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }

  static associate(models) {
    Timetable.belongsTo(models.User, { foreignKey: 'userNum' });
    Timetable.belongsTo(models.Timeset, { foreignKey: 'timesetId' });
   }
};