const Sequelize = require('sequelize');

module.exports = class Timeset extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            userId : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,
                primaryKey : true
            },
            day : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : false
            },
            time : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : false
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
            modelName : "Timeset",
            tableName : "timeset",
            paranoid : false,
            collate : "utf8_general_ci",
            charset : "utf8",
        })
    }
};