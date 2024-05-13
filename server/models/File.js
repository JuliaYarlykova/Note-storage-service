const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const File = sequelize.define('file',{
    id:{
        type: Sequelize.STRING,
      primaryKey: true,
      allowNull: false,
    },
    data: Sequelize.BLOB,
    name: Sequelize.STRING,
    type:Sequelize.STRING,
    idnote: Sequelize.STRING
}    
);

module.exports = File