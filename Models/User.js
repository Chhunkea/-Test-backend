const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        isEmail : true
      }
    },
  },
  {
    indexes: [
      {
        // email : is a column which requires unique values
        unique: true,
        fields: ["email"],
      },
    ],
  }
);

// export
module.exports = User;
