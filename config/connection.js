const Sequelize = require('sequelize');
require('dotenv').config();

console.log("db name: " + process.env.DB_NAME);
console.log("db user: " + process.env.DB_USER);
console.log("db pw: " + process.env.DB_PW);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

module.exports = sequelize;