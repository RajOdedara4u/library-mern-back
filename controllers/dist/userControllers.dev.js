"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeOrderRoute = exports.contact = exports.login = exports.registration = void 0;

var _userModel = _interopRequireDefault(require("../models/user-model.js"));

var _messageModel = _interopRequireDefault(require("../models/message-model.js"));

var _orderPlacedModel = _interopRequireDefault(require("../models/orderPlaced-model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//REGISTRATION LOGIC----------
// GET DATA FROM REQUEST, CHECK EMAIL IS NOT AVALABLE IN DB AFTER => ENCRYPT THE PASSWORD AND STORE TO DB
var registration = function registration(req, res) {
  var _req$body, name, email, password, isAdmin, userExsit, userCreated;

  return regeneratorRuntime.async(function registration$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password, isAdmin = _req$body.isAdmin;
          _context.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 4:
          userExsit = _context.sent;

          if (!userExsit) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            message: "User Alredy Exist!"
          }));

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(_userModel["default"].create({
            name: name,
            email: email,
            password: password,
            isAdmin: isAdmin
          }));

        case 9:
          userCreated = _context.sent;
          _context.t0 = res.status(200);
          _context.next = 13;
          return regeneratorRuntime.awrap(userCreated.genrateToken());

        case 13:
          _context.t1 = _context.sent;
          _context.t2 = userCreated._id.toString();
          _context.t3 = {
            message: "Registration Success...",
            stetus: "Sucess",
            token: _context.t1,
            userId: _context.t2
          };

          _context.t0.json.call(_context.t0, _context.t3);

          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t4 = _context["catch"](0);
          res.status(400).send("sorry", _context.t4);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//LOGIN LOGIC----------------------------------------------------------------------------------------------------------------------------------


exports.registration = registration;

var login = function login(req, res) {
  var _req$body2, email, password, userExsit, userValid;

  return regeneratorRuntime.async(function login$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findOne({
            email: email
          }));

        case 4:
          userExsit = _context2.sent;

          if (userExsit) {
            _context2.next = 9;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "email is not found"
          }));

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(userExsit.checkPassword(password));

        case 11:
          userValid = _context2.sent;

          if (!userValid) {
            _context2.next = 22;
            break;
          }

          _context2.t0 = res.status(200);
          _context2.next = 16;
          return regeneratorRuntime.awrap(userExsit.genrateToken());

        case 16:
          _context2.t1 = _context2.sent;
          _context2.t2 = userExsit._id.toString();
          _context2.t3 = {
            message: "Login Sucess...",
            token: _context2.t1,
            userId: _context2.t2
          };

          _context2.t0.json.call(_context2.t0, _context2.t3);

          _context2.next = 23;
          break;

        case 22:
          res.status(400).json({
            message: "invalid password"
          });

        case 23:
          _context2.next = 29;
          break;

        case 25:
          _context2.prev = 25;
          _context2.t4 = _context2["catch"](0);
          res.status(400).send(_context2.t4);
          console.log(_context2.t4);

        case 29:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 25]]);
};

exports.login = login;

var contact = function contact(req, res) {
  var _req$body3, email, subject, message, msg;

  return regeneratorRuntime.async(function contact$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, email = _req$body3.email, subject = _req$body3.subject, message = _req$body3.message;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_messageModel["default"].create({
            email: email,
            subject: subject,
            message: message
          }));

        case 3:
          msg = _context3.sent;
          res.status(200).json(msg);

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.contact = contact;

var placeOrderRoute = function placeOrderRoute(req, res) {
  var _req$body4, address, city, contact, email, name, paymentMethod, pinCode, reachMethod, amount, items, arrayObj, msg;

  return regeneratorRuntime.async(function placeOrderRoute$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _req$body4 = req.body, address = _req$body4.address, city = _req$body4.city, contact = _req$body4.contact, email = _req$body4.email, name = _req$body4.name, paymentMethod = _req$body4.paymentMethod, pinCode = _req$body4.pinCode, reachMethod = _req$body4.reachMethod, amount = _req$body4.amount, items = _req$body4.items, arrayObj = _req$body4.arrayObj;
          console.log(req.body);
          _context4.next = 4;
          return regeneratorRuntime.awrap(_orderPlacedModel["default"].create({
            address: address,
            city: city,
            contact: contact,
            email: email,
            name: name,
            paymentMethod: paymentMethod,
            pinCode: pinCode,
            reachMethod: reachMethod,
            amount: amount,
            items: items,
            arrayObj: arrayObj
          }));

        case 4:
          msg = _context4.sent;
          res.status(200).json(msg);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.placeOrderRoute = placeOrderRoute;