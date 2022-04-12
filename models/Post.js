// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection.js');

// // extends off Sequelize's Model class
// class Post extends Model { }

// // fields and rules for Blog model
// Post.init(

//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true
//         },

//         title: {
//             type: DataTypes.STRING,
//             allowNull: false,

//         },
//         date_created: {
//             type: DataTypes.DATE,
//             allowNull: false,
//             defaultValue: DataTypes.NOW,
//         },

//         content: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },

//         user_id: {
//             type: DataTypes.INTEGER,

//             references: {
//                 model: 'user',
//                 key: 'id',
//                 unique: false
//             }
//         }
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'post'
//     }
// );

// module.exports = Post; 


const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(2000),
      
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;