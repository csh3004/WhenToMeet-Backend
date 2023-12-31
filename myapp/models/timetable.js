const Sequelize = require('sequelize');

module.exports = class Timetable extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        timetableNum: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
          index: true
        },
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
        modelName: 'Timetable',
        tableName: 'timetable',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }
  static associate(models) {
    Timetable.belongsTo(models.User, {foreignKey: 'userNum'})
    Timetable.hasMany(models.ScheduleLine, { foreignKey: 'timetableNum' });
  }

};