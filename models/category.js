'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Category.hasMany(models.Product)
    }
  };
  Category.init({
    name: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Category has already been registered earlier'
      },
      validate: {
        notEmpty: {
          msg: 'Category name required'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};