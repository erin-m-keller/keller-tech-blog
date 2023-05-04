const Post = require('./Post'),
      Comment = require('./Comment'),
      Author = require('./Author');

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});
Post.belongsTo(Author, {
    foreignKey: 'author_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});
Comment.belongsTo(Author, {
    foreignKey: 'author_id'
});

Author.hasMany(Post, {
    foreignKey: 'author_id'
});
Author.hasMany(Comment, {
    foreignKey: 'author_id'
});


module.exports = { Post, Comment, Author };