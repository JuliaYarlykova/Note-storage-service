const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Note = sequelize.define('note',{
    id:{
        type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    title: Sequelize.STRING,
    idFolder: Sequelize.INTEGER
}    
);

module.exports = Note