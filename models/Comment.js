const { Model, DataTypes } = require('sequelize'),
      sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    comment_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    comment_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: { 
        type: DataTypes.INTEGER, 
        allowNull: false, 
        references: {
            model: 'Users', 
            key: 'id', 
            unique: true ,
            onDelete: 'CASCADE'
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
            unique: true ,
            onDelete: 'CASCADE'
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