const sequelize = require('../config/connection'),
      { Users, Post, Comment } = require('../models'),
      userData = require('./userData.json'),
      postData = require('./postData.json'),
      commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0");
  await sequelize.sync({ force: true });

  // Create tables and seed data
  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await Post.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  });

  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1");
  process.exit(0);
};

seedDatabase();