const { DataTypes } = require('sequelize');
const database = require('../db');

module.exports = database.define('Task', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    
    title: {
      type: DataTypes.STRING 
    },
    time: {
      type: DataTypes.INTEGER
    },
    icon: {
      type: DataTypes.INTEGER 
    },
    documentId: {
      type: DataTypes.INTEGER
    }
});;

