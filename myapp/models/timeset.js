// timeset.js
const Sequelize = require('sequelize');

module.exports = class Timeset extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(20),
          allowNull: false,
          unique: true,
          primaryKey: true,
        },
        timeset: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        number: {
          type: Sequelize.STRING(20),
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
        modelName: 'Timeset',
        tableName: 'timeset',
        paranoid: false,
        collate: 'utf8_general_ci',
        charset: 'utf8',
      }
    );
  }

  static associate(models) {
    // Timeset 모델과 User 모델 간의 다대일(Many-to-One) 관계 설정
    this.belongsTo(models.User, { foreignKey: 'userId', targetKey: 'userId' });
  }
};
