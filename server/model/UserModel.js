const db = require("../config/dataBase");
const Sequelize = require("sequelize");

const User = db.define(
  "userdata",
  {
    firstname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: Sequelize.DataTypes.ENUM("admin", "user"),
      defaultValue: "user",
    },
    is_active: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_deleted: {
      type: Sequelize.DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  { timestamps: true }
);

// User.sync({ alter: true }).then(() => {
//   console.log("User table created");
// });

module.exports = User;
