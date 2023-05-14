const { Model, DataTypes } = require('sequelize'),
      sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    post_date: {
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
        unique: true,
        onDelete: 'CASCADE',
      },
      validate: {
        is: /^\d+$/,
      },
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Post',
    updatedAt: 'updated_at', 
  }
);

module.exports = Post;
