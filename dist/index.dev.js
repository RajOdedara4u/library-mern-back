"use strict";

var _express = _interopRequireDefault(require("express"));

var _authRouter = _interopRequireDefault(require("./router/auth-router.js"));

var _userRouter = _interopRequireDefault(require("./router/user-router.js"));

var _db = _interopRequireDefault(require("./utils/db.js"));

var _dotenv = require("dotenv");

var _errorMiddleware = _interopRequireDefault(require("./middlewares/error-middleware.js"));

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var coreOptions = {
  origin: "http://localhost:5173",
  methoda: "GET , POST , PUT , DELATE , PATCH , HEAD ",
  Credential: true
};
app.use((0, _cors["default"])(coreOptions));
(0, _dotenv.config)();
app.use(_express["default"].json());
app.use("", _authRouter["default"]);
app.use("", _userRouter["default"]);
app.use(_errorMiddleware["default"]);
(0, _db["default"])().then(function () {
  app.listen(process.env.PORT, function () {
    console.log("Running...");
  });
});