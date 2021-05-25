// IMPORT THE SEQUELIZE CONSTRUCTOR FROM THE LIBRARY
const Sequelize = require('sequelize');

// NOTICE HOW WE DON'T HAVE TO SAVE THE REQUIRE('DOTENV') TO A VARIABLE? 
//ALL WE NEED IT TO DO HERE IS EXECUTE WHEN WE USE CONNECTION.JS AND ALL OF THE DATA IN THE .ENV FILE WILL BE MADE AVAILABLE AT PROCESS.ENV.<ENVIRONMENT-VARIABLE-NAME>.
require('dotenv').config();

// CREATE CONNECTION TO OUR DB
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;