const Sequelize = require("sequelize");

//database connection details
const db = new Sequelize("pratice_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
  //   operatorsAliases: false,
});

module.exports = db;
