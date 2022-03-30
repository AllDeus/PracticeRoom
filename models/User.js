const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    googleId: {
        type: String,
        allowNull: false,

    },
    displayName: {
        type: String,
        allowNull: false,
    },
    firstName: {
        type: String,
        allowNull: false,
    },
    lastName: {
        type: String,
        allowNull: false,
    },
    image: {
        type: String,
    },

    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
    })

    module.exports = User;