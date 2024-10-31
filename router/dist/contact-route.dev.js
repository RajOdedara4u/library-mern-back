"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _messageModel = _interopRequireDefault(require("../models/message-model.js"));

var _validateMiddleware = _interopRequireDefault(require("../middlewares/validate-middleware.js"));

var _contactValidator = require("../validator/contact-validator.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Importing express
var contactRouter = _express["default"].Router(); // Creating a new router instance


contactRouter.route("/contact").post((0, _validateMiddleware["default"])(_contactValidator.messageSchema), function _callee(req, res) {
  var _req$body, email, subject, message, msg;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, subject = _req$body.subject, message = _req$body.message;
          _context.next = 3;
          return regeneratorRuntime.awrap(_messageModel["default"].create({
            email: email,
            subject: subject,
            message: message
          }));

        case 3:
          msg = _context.sent;
          res.status(200).json(msg);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
var _default = contactRouter; // Exporting the router using ES6 syntax

exports["default"] = _default;