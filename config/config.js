require('dotenv').config();

module.exports = {
	development: {
		username: 'root',
		password: process.env.SEQUELIZE_PASSWORD,
		database: 'farm',
		host:'13.124.1.78',
		dialect: 'mysql',
operatorsAliases: 'false',
	},
	production: {
		username: 'root',
		password: process.env.SEQUELIZE_PASSWORD,
		database: 'farm',
		host:'13.124.1.78',
		dialect: 'mysql',
operatorsAliases: 'false',
		logging: false,
	},
};