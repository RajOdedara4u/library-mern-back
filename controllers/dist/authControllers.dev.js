"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delateuser = exports.getorderdetail = exports.getproduct = exports.addproduct = exports.getorders = exports.getmessage = exports.userVerify = exports.getusers = exports.home = exports.delateproduct = void 0;

var _userModel = _interopRequireDefault(require("../models/user-model.js"));

var _messageModel = _interopRequireDefault(require("../models/message-model.js"));

var _orderPlacedModel = _interopRequireDefault(require("../models/orderPlaced-model.js"));

var _productModel = _interopRequireDefault(require("../models/product-model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var home = function home(req, res) {
  return regeneratorRuntime.async(function home$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.status(200).send("It's home here....");
          } catch (error) {
            res.status(200).send(error);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
}; //SEND USER DATA LOGIC---------------------------------------------------------------------------------------------


exports.home = home;

var userVerify = function userVerify(req, res) {
  var userData;
  return regeneratorRuntime.async(function userVerify$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          userData = req.user; // accessing the custom data from request

          return _context2.abrupt("return", res.status(200).json(userData));

        case 5:
          _context2.prev = 5;
          _context2.t0 = _context2["catch"](0);
          res.status(401).send(_context2.t0);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 5]]);
}; //------------------------------------------------------------------------------------------------------------------------
//GETING USER DATA FROM DB LOGIC----------


exports.userVerify = userVerify;

var getusers = function getusers(req, res) {
  var users;
  return regeneratorRuntime.async(function getusers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_userModel["default"].find());

        case 3:
          users = _context3.sent;
          res.json(users);
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//Delate product DATA FROM DB LOGIC----------


exports.getusers = getusers;

var delateproduct = function delateproduct(req, res) {
  var _id, _delateproduct;

  return regeneratorRuntime.async(function delateproduct$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _id = req.body._id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(_productModel["default"].findByIdAndDelete(_id));

        case 4:
          _delateproduct = _context4.sent;

          if (_delateproduct) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          res.status(200).json({
            message: "Product deleted successfully"
          });
          _context4.next = 14;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.error("Error deleting user:", _context4.t0);
          res.status(500).json({
            message: "Server error",
            error: _context4.t0
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//Delate USER DATA FROM DB LOGIC----------


exports.delateproduct = delateproduct;

var delateuser = function delateuser(req, res) {
  var _id, deletedUser;

  return regeneratorRuntime.async(function delateuser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _id = req.body._id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(_userModel["default"].findByIdAndDelete(_id));

        case 4:
          deletedUser = _context5.sent;

          if (deletedUser) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: "User not found"
          }));

        case 7:
          res.status(200).json({
            message: "User deleted successfully",
            user: deletedUser
          });
          _context5.next = 14;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](1);
          console.error("Error deleting user:", _context5.t0);
          res.status(500).json({
            message: "Server error",
            error: _context5.t0
          });

        case 14:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 10]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//GETING USER DATA FROM DB LOGIC----------


exports.delateuser = delateuser;

var getmessage = function getmessage(req, res) {
  var messages;
  return regeneratorRuntime.async(function getmessage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_messageModel["default"].find());

        case 3:
          messages = _context6.sent;
          res.json(messages);
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.log(_context6.t0);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//ADD PRODUCT----------


exports.getmessage = getmessage;

var addproduct = function addproduct(req, res) {
  var _req$body, author, catagory, description, image, name, rating, realPrice, sellPrice, year, done;

  return regeneratorRuntime.async(function addproduct$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _req$body = req.body, author = _req$body.author, catagory = _req$body.catagory, description = _req$body.description, image = _req$body.image, name = _req$body.name, rating = _req$body.rating, realPrice = _req$body.realPrice, sellPrice = _req$body.sellPrice, year = _req$body.year;
          _context7.next = 4;
          return regeneratorRuntime.awrap(_productModel["default"].create({
            name: name,
            author: author,
            catagory: catagory,
            description: description,
            image: image,
            rating: rating,
            realPrice: realPrice,
            sellPrice: sellPrice,
            year: year
          }));

        case 4:
          done = _context7.sent;
          res.status(200).json({
            message: "Sucess.."
          });
          _context7.next = 11;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          res.status(200).send("sorry", _context7.t0);

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 8]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//GETING USER DATA FROM DB LOGIC----------


exports.addproduct = addproduct;

var getproduct = function getproduct(req, res) {
  var products;
  return regeneratorRuntime.async(function getproduct$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].find());

        case 3:
          products = _context8.sent;
          res.status(200).json(products);
          _context8.next = 10;
          break;

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          console.log(_context8.t0);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//GETING USER DATA FROM DB LOGIC----------


exports.getproduct = getproduct;

var getorders = function getorders(req, res) {
  var orders;
  return regeneratorRuntime.async(function getorders$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(_orderPlacedModel["default"].find());

        case 3:
          orders = _context9.sent;
          res.status(200).json(orders);
          _context9.next = 10;
          break;

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json(found);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
//GETING USER DATA FROM DB LOGIC----------


exports.getorders = getorders;

var getorderdetail = function getorderdetail(req, res) {
  var data, _found;

  return regeneratorRuntime.async(function getorderdetail$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          data = req.body;
          _context10.prev = 1;
          _context10.next = 4;
          return regeneratorRuntime.awrap(_orderPlacedModel["default"].find({
            _id: data.id
          }));

        case 4:
          _found = _context10.sent;

          if (_found) {
            res.status(200).json(_found);
          } else {
            res.status(500).json({
              message: "Not Found"
            });
          }

          _context10.next = 11;
          break;

        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](1);
          res.status(500).json({
            message: "Not Found"
          });

        case 11:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; //----------------------------------------------------------------------------------------------------------------------------------


exports.getorderdetail = getorderdetail;