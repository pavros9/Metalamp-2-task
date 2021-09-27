/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Post = /*#__PURE__*/function () {\n  function Post(title, img) {\n    _classCallCheck(this, Post);\n\n    this.title = title;\n    this.img = img;\n    this.date = new Date();\n  }\n\n  _createClass(Post, [{\n    key: \"toString\",\n    value: function toString() {\n      return JSON.stringify({\n        title: this.title,\n        date: this.date.toJSON(),\n        img: this.img\n      }, null, 2);\n    }\n  }, {\n    key: \"uppercaseTitle\",\n    get: function get() {\n      return this.title.toUpperCase();\n    }\n  }]);\n\n  return Post;\n}();\n\n\n\n//# sourceURL=webpack:///./Post.js?");

/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/***/ (function() {

eval("function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction start() {\n  return _start.apply(this, arguments);\n}\n\nfunction _start() {\n  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Promise.resolve(\"async is working\");\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _start.apply(this, arguments);\n}\n\nstart().then(console.log);\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ \"../node_modules/jquery/dist/jquery.js\");\n/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ \"./Post.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./babel */ \"./babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/json */ \"./assets/json.json\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.xml */ \"./assets/data.xml\");\n/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.csv */ \"./assets/data.csv\");\n/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo.png */ \"./assets/logo.png\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/style.css */ \"./styles/style.css\");\n/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/scss.scss */ \"./styles/scss.scss\");\n\n\n\n\n\n\n\n\n\nvar post = new _Post__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"Webpack Post Title\", _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);\njquery__WEBPACK_IMPORTED_MODULE_0__(\"pre\").html(post.toString());\nconsole.log(\"Post to String\", post.toString());\nconsole.log(\"JSON:\", _assets_json__WEBPACK_IMPORTED_MODULE_3__);\nconsole.log(\"XML:\", (_assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default()));\nconsole.log(\"CSV:\", (_assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default()));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/***/ (function(module) {

eval("module.exports = [[\"name\",\"sku\",\"subtitle\",\"ribbon\",\"ribbonColor\",\"description\",\"showOnFrontpage\",\"category1\",\"category2\",\"category3\",\"image\",\"weight\",\"price\",\"recommended_price\",\"quantity\",\"enabled\",\"shippingType\",\"shippingMethodMarkup\",\"shippingFlatRate\",\"shippingDisabledMethods\",\"shippingEnabledMethods\",\"length\",\"width\",\"height\",\"upc\",\"brand\",\"seo_title\",\"seo_description\"],[\"Billabong Tribong Bungalow Lo Tides 19' Boardshorts\",\"M115GTLE\",\"Pre-order available\",\"New arrivals!\",\"#7713FA\",\"<h3>About Billabong Tribong Bungalow Lo Tides 19' Boardshorts in Ice</h3>On seam pockets.<br>Lasso waist.<br>Cut-and-sew colorblocked panelling.<br>Back right patch pocket with flap.<br>Outseam: 19 inches.<p>51% Cotton, 43% Polyester, 6% Elastane.<br></p><p><em>This site is a demo site only. This product is not available for sale from us but can be purchased at <a href=\\\"http://surfride.com/\\\" target=\\\"_blank\\\">SurfRide.com</a>. The product images and descriptions have been provided by Surf Ride.</em><br/></p>\",\"1\",\"Mens Apparel\",\"\",\"\",\"https://dpbfm6h358sh7.cloudfront.net/images/1003/414464001.jpg\",\"0.3\",\"55\",\"59.99\",\"10\",\"yes\",\"GLOBAL_METHODS\",\"0\",\"0\",\"\",\"\",\"4\",\"3\",\"1\",\"\",\"\",\"Billabong Tribong Bungalow Lo Tides 19' Boardshorts\",\"Billabong Tribong Bungalow Lo Tides 19' Boardshorts\"]]\n\n//# sourceURL=webpack:///./assets/data.csv?");

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/style.css?");

/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/scss.scss?");

/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/***/ (function(module) {

eval("module.exports = {\"email\":{\"to\":[\"Roman\"],\"from\":[\"Webpack\"],\"body\":[\"Hello, my friends\"]}}\n\n//# sourceURL=webpack:///./assets/data.xml?");

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("module.exports = __webpack_require__.p + \"547cd188fac18615d5f1.png\";\n\n//# sourceURL=webpack:///./assets/logo.png?");

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse('{\"title\":\"i am JSON title\"}');\n\n//# sourceURL=webpack:///./assets/json.json?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);