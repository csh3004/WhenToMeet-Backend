const Sequelize = require('sequelize');

module.exports = class ScheduleLine extends Sequelize.Model {
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
        modelName: 'ScheduleLine',
        tableName: 'scheduleLine',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }

  static associate(models) {
    ScheduleLine.belongsTo(models.Schedule, { foreignKey: 'scheduleNum' });
    ScheduleLine.belongsTo(models.Timetable, { foreignKey: 'timetableNum' });
   }
};