const Post = require('./Post'),
      Comment = require('./Comment'),
      User = require('./User');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
Post.belongsTo(User, {
    foreignKey: 'id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
Comment.belongsTo(User, {
    foreignKey: 'id'
});

User.hasMany(Post, {
    foreignKey: 'id'
});
User.hasMany(Comment, {
    foreignKey: 'id'
});


module.exports = { Post, Comment, User };