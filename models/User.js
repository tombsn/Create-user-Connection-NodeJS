const { DataTypes } = require("sequelize");
const db = require('../config/database');

const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING(100), 
        allowNull: false
    }
},
    {tableName: 'user', timestamps: false, underscored: true}
);

module.exports = User;