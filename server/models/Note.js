const sequelize = require('./sequelize')
const Sequelize = require('sequelize')

const Note = sequelize.define('note', {
	id: {
		type: Sequelize.STRING,
		primaryKey: true,
		allowNull: false,
	},
	title: Sequelize.STRING,
	idFolder: Sequelize.INTEGER,
	text: Sequelize.STRING,
	colorText: Sequelize.STRING,
})

module.exports = Note
