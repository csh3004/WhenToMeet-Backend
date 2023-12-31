const Sequelize = require('sequelize');

module.exports = class Schedule extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        scheduleNum: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        day: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
        },
        startTime: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: false,
        },
        endTime: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
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
        modelName: 'Schedule',
        tableName: 'schedules',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }
  static associate(models) {
    Schedule.hasMany(models.ScheduleLine, { foreignKey: 'scheduleNum' });
  }

};
