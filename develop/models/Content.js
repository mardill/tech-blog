const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Content extends Model {}

Content.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    publish_date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'content',
  }
);

module.exports = Content;