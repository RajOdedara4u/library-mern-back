"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addProductSchema = exports.loginSchema = exports.registerSchema = void 0;

var _zod = require("zod");

var registerSchema = _zod.z.object({
  name: _zod.z.string({
    message: "Name Required"
  }).trim().min(3, {
    message: "name Required at least 3 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  }),
  email: _zod.z.string({
    message: "Email Required"
  }).trim().email({
    message: "Invalid email format"
  }).min(5, {
    message: "email Required at least 5 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  }),
  password: _zod.z.string({
    message: "Password Required"
  }).trim().min(8, {
    message: "password Required at least 8 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  }),
  isAdmin: _zod.z["boolean"]().optional()["default"](false) // Set default value

});

exports.registerSchema = registerSchema;

var loginSchema = _zod.z.object({
  email: _zod.z.string({
    message: "Email Required"
  }).trim().email({
    message: "Invalid email format"
  }).min(5, {
    message: "Required at least 5 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  }),
  password: _zod.z.string({
    message: "Password Required"
  }).trim().min(8, {
    message: "Password Contain at least 8 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  })
});

exports.loginSchema = loginSchema;

var addProductSchema = _zod.z.object({
  name: _zod.z.string({
    message: "Name Required"
  }).trim().min(3, {
    message: "Name must be at least 3 characters"
  }).max(255, {
    message: "Max 255 characters allowed"
  }),
  image: _zod.z.string({
    message: "Image URL Required"
  }).trim().url({
    message: "Invalid URL format"
  }),
  description: _zod.z.string({
    message: "Description Required"
  }).trim().min(10, {
    message: "Description must be at least 10 characters"
  }).max(1000, {
    message: "Max 1000 characters allowed"
  }),
  realPrice: _zod.z.string({
    message: "Real price Required"
  }).trim().min(2, {
    message: "realPrice must be at least 2 characters"
  }).max(10, {
    message: "realPrice Max 10 characters allowed"
  }),
  sellPrice: _zod.z.string({
    message: "sell price Required"
  }).trim().min(2, {
    message: "sellPrice must be at least 2 characters"
  }).max(10, {
    message: "sellPrice Max 10 characters allowed"
  }),
  author: _zod.z.string({
    message: "Author Required"
  }).trim().min(3, {
    message: "Author name must be at least 3 characters"
  }).max(100, {
    message: "Max 100 characters allowed"
  }),
  year: _zod.z.string({
    message: "Year Required"
  }).trim().length(4, {
    message: "Year must be 4 digits"
  }).regex(/^\d{4}$/, {
    message: "Year must be a valid 4-digit number"
  }),
  rating: _zod.z.string({
    message: "Rating Required"
  }).min(1, {
    message: "Rating must be at least 1"
  }).max(5, {
    message: "Rating must not exceed 5"
  }),
  catagory: _zod.z.string({
    message: "Category Required"
  }).trim().min(2, {
    message: "Category must be at least 2 characters"
  }).max(50, {
    message: "Max 50 characters allowed"
  })
});

exports.addProductSchema = addProductSchema;