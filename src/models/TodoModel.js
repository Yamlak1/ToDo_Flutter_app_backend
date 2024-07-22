const { sequelize } = require("../config/db");
const { DataTypes } = require("sequelize");

const ToDo = sequelize.define(
  "Task",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: true,
    },
    task: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  { tableName: "Tasks" }
);

module.exports = { ToDo };
