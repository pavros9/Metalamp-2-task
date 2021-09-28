"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["analytics"],{

/***/ "./analytics.js":
/*!**********************!*\
  !*** ./analytics.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


function createAnalytics() {
  var counter = 0;
  var destroyed = false;

  var listener = function listener() {
    return counter++;
  };

  jquery__WEBPACK_IMPORTED_MODULE_0__(document).on("click", listener);
  return {
    destroy: function destroy() {
      jquery__WEBPACK_IMPORTED_MODULE_0__(document).off("click", listener);
      isDestroyed = true;
    },
    getClicks: function getClicks() {
      if (isDestroyed) {
        return "Analytics is destroyed. Total clicks = ".concat(counter);
      }

      return counter;
    }
  };
}

window.analytics = createAnalytics();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_jquery_dist_jquery_js"], function() { return __webpack_exec__("./analytics.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=analytics.js.map