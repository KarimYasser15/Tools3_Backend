'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const order = require('./order');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.order,{foreignKey: 'createdBy'});
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: {type: DataTypes.STRING,
      set(value) {
        const hashPassword = bcrypt.hashSync(value, 10);
        this.setDataValue('password', hashPassword);
      }
    },
  }, {
    sequelize,
    modelName: 'user',
    tableName: 'user',
  });
  return user;
};
