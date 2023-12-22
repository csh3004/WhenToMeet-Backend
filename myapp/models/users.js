const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,
            },
            userId : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true
            },
            userPw : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : false
            },
            age : {
                type : Sequelize.INTEGER.UNSIGNED,
                allowNull : false,
            },
            created_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW
            }
        },
        {
            sequelize,
            timestamps : false,
            underscored : true,
            modelName : "User",
            tableName : "users",
            paranoid : false,
            collate : "utf8_general_ci",
            charset : "utf8",
        })
    }
};