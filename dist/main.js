(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./Post.js":
/*!*****************!*\
  !*** ./Post.js ***!
  \*****************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Post = /*#__PURE__*/function () {
  function Post(title, img) {
    _classCallCheck(this, Post);

    this.title = title;
    this.img = img;
    this.date = new Date();
  }

  _createClass(Post, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        title: this.title,
        date: this.date.toJSON(),
        img: this.img
      }, null, 2);
    }
  }, {
    key: "uppercaseTitle",
    get: function get() {
      return this.title.toUpperCase();
    }
  }]);

  return Post;
}();



/***/ }),

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/***/ (function() {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve("async is working");

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _start.apply(this, arguments);
}

start().then(console.log);

var Util = function Util() {
  _classCallCheck(this, Util);
};

_defineProperty(Util, "id", Date.now());

console.log("Util Id:", Util.id);

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Post */ "./Post.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./babel */ "./babel.js");
/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/json */ "./assets/json.json");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/data.xml */ "./assets/data.xml");
/* harmony import */ var _assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_data_xml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/data.csv */ "./assets/data.csv");
/* harmony import */ var _assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_data_csv__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/logo.png */ "./assets/logo.png");
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/style.css */ "./styles/style.css");
/* harmony import */ var _styles_scss_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/scss.scss */ "./styles/scss.scss");









var post = new _Post__WEBPACK_IMPORTED_MODULE_1__["default"]("Webpack Post Title", _assets_logo_png__WEBPACK_IMPORTED_MODULE_6__);
jquery__WEBPACK_IMPORTED_MODULE_0__("pre").html(post.toString());
console.log("Post to String", post.toString());
console.log("JSON:", _assets_json__WEBPACK_IMPORTED_MODULE_3__);
console.log("XML:", (_assets_data_xml__WEBPACK_IMPORTED_MODULE_4___default()));
console.log("CSV:", (_assets_data_csv__WEBPACK_IMPORTED_MODULE_5___default()));

/***/ }),

/***/ "./assets/data.csv":
/*!*************************!*\
  !*** ./assets/data.csv ***!
  \*************************/
/***/ (function(module) {

module.exports = [["name","sku","subtitle","ribbon","ribbonColor","description","showOnFrontpage","category1","category2","category3","image","weight","price","recommended_price","quantity","enabled","shippingType","shippingMethodMarkup","shippingFlatRate","shippingDisabledMethods","shippingEnabledMethods","length","width","height","upc","brand","seo_title","seo_description"],["Billabong Tribong Bungalow Lo Tides 19' Boardshorts","M115GTLE","Pre-order available","New arrivals!","#7713FA","<h3>About Billabong Tribong Bungalow Lo Tides 19' Boardshorts in Ice</h3>On seam pockets.<br>Lasso waist.<br>Cut-and-sew colorblocked panelling.<br>Back right patch pocket with flap.<br>Outseam: 19 inches.<p>51% Cotton, 43% Polyester, 6% Elastane.<br></p><p><em>This site is a demo site only. This product is not available for sale from us but can be purchased at <a href=\"http://surfride.com/\" target=\"_blank\">SurfRide.com</a>. The product images and descriptions have been provided by Surf Ride.</em><br/></p>","1","Mens Apparel","","","https://dpbfm6h358sh7.cloudfront.net/images/1003/414464001.jpg","0.3","55","59.99","10","yes","GLOBAL_METHODS","0","0","","","4","3","1","","","Billabong Tribong Bungalow Lo Tides 19' Boardshorts","Billabong Tribong Bungalow Lo Tides 19' Boardshorts"]]

/***/ }),

/***/ "./styles/style.css":
/*!**************************!*\
  !*** ./styles/style.css ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./styles/scss.scss":
/*!**************************!*\
  !*** ./styles/scss.scss ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/data.xml":
/*!*************************!*\
  !*** ./assets/data.xml ***!
  \*************************/
/***/ (function(module) {

module.exports = {"email":{"to":["Roman"],"from":["Webpack"],"body":["Hello, my friends"]}}

/***/ }),

/***/ "./assets/logo.png":
/*!*************************!*\
  !*** ./assets/logo.png ***!
  \*************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "547cd188fac18615d5f1.png";

/***/ }),

/***/ "./assets/json.json":
/*!**************************!*\
  !*** ./assets/json.json ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"title":"i am JSON title"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js","vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_exec__("../node_modules/@babel/polyfill/lib/index.js"), __webpack_exec__("./index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map