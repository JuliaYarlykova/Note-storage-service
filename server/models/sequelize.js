const Sequelize = require('sequelize')

const sequelize = new Sequelize('noteservice', "root", '1234', {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
  define: {
    timestamps: false
  }
});


module.exports = sequelize
