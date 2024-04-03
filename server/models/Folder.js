const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Folder = sequelize.define('folder', {
    id_folder:{
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: Sequelize.STRING,
    id_user:{
      type:Sequelize.INTEGER,
      foreignKey: true
    }
  })

module.exports = Folder