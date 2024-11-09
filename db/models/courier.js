'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class courier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      courier.hasMany(models.order, {foreignKey: 'courierInfo'});
    }
  }
  courier.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: {type: DataTypes.STRING,
      set(value) {
        const hashPassword = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hashPassword);
      }
    },
    phone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'courier',
    tableName: 'courier',
  });
  return courier;
};