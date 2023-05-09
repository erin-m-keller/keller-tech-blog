const { Model, DataTypes } = require('sequelize'),
      sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'User', 
            key: 'id', 
            unique: true 
        },
        validate: {
            is: /^\d+$/ 
        }
    },
    post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Post',
            key: 'id', 
            unique: true 
        }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comment',
  }
);

module.exports = Comment;