const Sequelize = require("sequelize");

//------------Database------------//
const dbConfig = require("../constants/db.config");

//Database connection
const db = new Sequelize(
    dbConfig.DB,
    dbConfig.USER, 
    dbConfig.PASSWORD,
    {
      dialect: dbConfig.DIALECT,
      host: dbConfig.HOST
  });
  
  
  db.authenticate().then(() => {
    console.log('Database connected');
  }).catch(err => {
    console.log('Error: ' + err);
  })
  
  
  module.exports = db;