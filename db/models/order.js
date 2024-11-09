'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      order.belongsTo(models.user, {foreignKey: 'createdBy'});
      order.belongsTo(models.courier, {foreignKey: 'courierInfo'});
    }
  }
  order.init({
    pickUpLocation: DataTypes.STRING,
    dropOffLocation: DataTypes.STRING,
    packageDetails: DataTypes.STRING,
    deliveryTime: DataTypes.DATE,
    createdBy: DataTypes.INTEGER,
    orderStatus: DataTypes.STRING,
    courierInfo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'order',
    tableName: 'order',
  });
  return order;
};