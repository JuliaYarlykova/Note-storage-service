const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const User = sequelize.define('user', {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    login: Sequelize.STRING,
    password: Sequelize.STRING,
    username: Sequelize.STRING
  })


  module.exports = User