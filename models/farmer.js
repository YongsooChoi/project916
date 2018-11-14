module.exports = (sequelize, DataTypes) => (
	sequelize.define('farmer', {
		owner: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		farmname: {
			type: DataTypes.STRING(50),
			allowNull: true,
		},
		latitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,	
		},
		longitude: {
			type: DataTypes.DOUBLE,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING(20),
			allowNull: false,	
		},
		email: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		created_at: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('now()'),
		},
	}, {
		timestamps: false,
		charset: 'utf8',
		collate: 'utf_general_ci',
	})
);