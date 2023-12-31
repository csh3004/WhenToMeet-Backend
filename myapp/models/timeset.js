// timeset.js
const Sequelize = require('sequelize');

module.exports = class Timeset extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        timesetId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          unique: true,
          autoIncrement: true,
          primaryKey: true,
          index: true
        },
        day: { //1234567
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: true,
        },
        start: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        end: {
          type: Sequelize.STRING,
          allowNull: true,
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
        modelName: 'Timeset',
        tableName: 'timeset',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }
  static associate(models) {
    Timeset.hasMany(models.Timetable, { foreignKey: 'timesetId' });
  }

};