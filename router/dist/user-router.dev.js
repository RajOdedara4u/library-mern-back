"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _validateMiddleware = _interopRequireDefault(require("../middlewares/validate-middleware.js"));

var _userControllers = require("../controllers/userControllers.js");

var _authValidator = require("../validator/auth-validator.js");

var _userValidator = require("../validator/user-validator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing express
var Userrouter = _express["default"].Router(); // Creating a new router instance


Userrouter.route("/login").post((0, _validateMiddleware["default"])(_authValidator.loginSchema), _userControllers.login);
Userrouter.route("/registration").post((0, _validateMiddleware["default"])(_authValidator.registerSchema), _userControllers.registration);
Userrouter.route("/contact").post((0, _validateMiddleware["default"])(_userValidator.messageSchema), _userControllers.contact);
Userrouter.route("/orderPlace").post((0, _validateMiddleware["default"])(_userValidator.checkoutSchema), _userControllers.placeOrderRoute);
var _default = Userrouter; // Exporting the router using ES6 syntax

exports["default"] = _default;