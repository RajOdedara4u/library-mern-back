"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = _mongoose["default"].Schema({
  name: {
    type: String,
    require: true
  },
  realPrice: {
    type: String,
    require: true
  },
  sellPrice: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  catagory: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  rating: {
    type: String,
    require: true
  },
  year: {
    type: String,
    require: true
  }
});

var Product = _mongoose["default"].model("product", productSchema); // Capitalized 'Product'


var _default = Product;
exports["default"] = _default;