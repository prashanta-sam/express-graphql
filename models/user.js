const { Sequelize, DataTypes } = require('sequelize');
const { sequelize }=require('./index')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
  },
});

module.exports = { User, sequelize };
