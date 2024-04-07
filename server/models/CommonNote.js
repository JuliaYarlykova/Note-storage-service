const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const CommonNote = sequelize.define('commonNote',{
    id:{
        type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idNote: Sequelize.INTEGER
}    
);

module.exports = CommonNote