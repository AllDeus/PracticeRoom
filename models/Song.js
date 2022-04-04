const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// extends off Sequelize's Model class
class Song extends Model { }

// fields and rules for Blog model
Song.init(

    {

        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        url: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'song'
    }
);

module.exports = Song; 