const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Note = sequelize.define('note',{
    id:{
        type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: Sequelize.STRING,
    idFolder: Sequelize.INTEGER,
    data: Sequelize.BLOB,
    name: Sequelize.STRING,
    type:Sequelize.STRING,
}    
);

module.exports = Note