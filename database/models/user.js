const dbConnect = require ('../dbConnect')
const {Sequelize , DataTypes} = require ('sequelize')

const user = dbConnect.define('user',{
    id : {
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    fullName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    birthDate : {
        type : DataTypes.DATE,
        allowNull : false
    },
    gender : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Class : {
        type : DataTypes.STRING,
        allowNull : false
    },
    password : {
        type : DataTypes.TEXT,
        allowNull : false
    }

})

user.sync({alter: true})

module.exports = user