"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authMiddleware = _interopRequireDefault(require("../middlewares/auth-middleware.js"));

var _authControllers = require("../controllers/authControllers.js");

var _validateMiddleware = _interopRequireDefault(require("../middlewares/validate-middleware.js"));

var _authValidator = require("../validator/auth-validator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing express
var authRouter = _express["default"].Router(); // Creating a new router instance


authRouter.route("/").get(_authControllers.home);
authRouter.route("/addproduct").post((0, _validateMiddleware["default"])(_authValidator.addProductSchema), _authControllers.addproduct);
authRouter.route("/getproduct").get(_authControllers.getproduct);
authRouter.route("/delateproduct").post(_authControllers.delateproduct);
authRouter.route("/userVerify").get(_authMiddleware["default"], _authControllers.userVerify);
authRouter.route("/getusers").get(_authControllers.getusers);
authRouter.route("/delateuser").post(_authControllers.delateuser);
authRouter.route("/getmessage").get(_authControllers.getmessage);
authRouter.route("/getorders").get(_authControllers.getorders);
authRouter.route("/getorderdetail").post(_authControllers.getorderdetail);
var _default = authRouter; // Exporting the router using ES6 syntax

exports["default"] = _default;