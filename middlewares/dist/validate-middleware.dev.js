"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var validate = function validate(schema) {
  return function _callee(req, res, next) {
    var parseBody, message, status, err;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(schema.parseAsync(req.body));

          case 3:
            parseBody = _context.sent;
            req.body = parseBody;
            next();
            _context.next = 15;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            message = _context.t0.errors[0].message;
            status = 422;
            console.log(message);
            err = {
              message: message,
              status: status
            };
            next(err);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

var _default = validate;
exports["default"] = _default;