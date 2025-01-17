'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cities.hasMany(models.Publications, {as: 'city', foreignKey: 'city_id'})
      Cities.hasMany(models.States, {as: 'city', foreignKey: 'state_id'})
    }
  }
  Cities.init({
    name: DataTypes.STRING,
    stateId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Cities',
    tableName: 'cities'
  });
  return Cities;
};