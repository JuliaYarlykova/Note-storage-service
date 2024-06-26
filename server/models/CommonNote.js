const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const CommonNote = sequelize.define('commonnotes',{
    id:{
        type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: Sequelize.STRING,
    author: Sequelize.STRING
}    
);

module.exports = CommonNote