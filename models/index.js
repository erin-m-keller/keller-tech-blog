const Post = require('./Post'),
      Comment = require('./Comment'),
      Users = require('./Users');

Users.hasMany(Post, {
  foreignKey: 'user_id'
});
Users.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.belongsTo(Users, {
  foreignKey: 'user_id'
});
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Users, {
  foreignKey: 'user_id'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { Post, Comment, Users };