webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/hooks/useInfura */ \"./src/shared/hooks/useInfura.js\");\n/* harmony import */ var _features_EthereumData_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../features/EthereumData/component */ \"./src/features/EthereumData/component.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ \"./node_modules/bignumber.js/bignumber.js\");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _shared_abis_ropsten_oracle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/abis/ropsten.oracle */ \"./src/shared/abis/ropsten.oracle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/tgreco/g-drive/fleek-apps/nextjs-fleek/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar fromDecimal = function fromDecimal(decimal) {\n  return function (number) {\n    return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(number).shiftedBy(decimal);\n  };\n};\n\nvar fromEth = fromDecimal(-18);\n\nvar formatNumber = function formatNumber(x) {\n  return new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(x).toFixed(2);\n};\n\nvar getOracleData = function getOracleData(oracle) {\n  return function () {\n    oracle.methods.latestAnswer().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      console.log(\"Latest price was:\", res);\n      return bignumber_js__WEBPACK_IMPORTED_MODULE_3___default()(res).shiftedBy(-8).toFixed(2);\n    });\n  };\n};\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"NextJS IPFS Application\" : _ref$title;\n\n  var _useInfura = Object(_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n    currentChain: \"https://ropsten.infura.io/v3/\",\n    oracleAddress: _shared_abis_ropsten_oracle__WEBPACK_IMPORTED_MODULE_4__[\"ETHEREUM_ORACLE_ADDRESS\"]\n  }),\n      oracle = _useInfura.oracle,\n      getLatestData = _useInfura.getLatestData;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"\"),\n      priceData = _useState[0],\n      setPriceData = _useState[1];\n\n  var updateData = function updateData() {\n    setPriceData(getOracleData());\n  };\n\n  console.log({\n    oracle: oracle\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    updateData();\n  }, []);\n  console.log({\n    priceData: priceData\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, title), __jsx(_features_EthereumData_component__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    coin: \"ETH\",\n    price: priceData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(\"button\", {\n    onClick: updateData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }, \"Update Price\"));\n};\n\n_s(Index, \"Ex4xy+2sU+ZNfFtuvze8CABIJVA=\", false, function () {\n  return [_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiZnJvbURlY2ltYWwiLCJkZWNpbWFsIiwibnVtYmVyIiwiQmlnTnVtYmVyIiwic2hpZnRlZEJ5IiwiZnJvbUV0aCIsImZvcm1hdE51bWJlciIsIngiLCJ0b0ZpeGVkIiwiZ2V0T3JhY2xlRGF0YSIsIm9yYWNsZSIsIm1ldGhvZHMiLCJsYXRlc3RBbnN3ZXIiLCJjYWxsIiwiZXJyb3IiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiSW5kZXgiLCJ0aXRsZSIsInVzZUluZnVyYSIsImN1cnJlbnRDaGFpbiIsInByb2Nlc3MiLCJvcmFjbGVBZGRyZXNzIiwiRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MiLCJnZXRMYXRlc3REYXRhIiwidXNlU3RhdGUiLCJwcmljZURhdGEiLCJzZXRQcmljZURhdGEiLCJ1cGRhdGVEYXRhIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsT0FBRDtBQUFBLFNBQWEsVUFBQ0MsTUFBRDtBQUFBLFdBQy9CLElBQUlDLG1EQUFKLENBQWNELE1BQWQsRUFBc0JFLFNBQXRCLENBQWdDSCxPQUFoQyxDQUQrQjtBQUFBLEdBQWI7QUFBQSxDQUFwQjs7QUFFQSxJQUFNSSxPQUFPLEdBQUdMLFdBQVcsQ0FBQyxDQUFDLEVBQUYsQ0FBM0I7O0FBRUEsSUFBTU0sWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsQ0FBRDtBQUFBLFNBQU8sSUFBSUosbURBQUosQ0FBY0ksQ0FBZCxFQUFpQkMsT0FBakIsQ0FBeUIsQ0FBekIsQ0FBUDtBQUFBLENBQXJCOztBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsTUFBRDtBQUFBLFNBQVksWUFBTTtBQUN0Q0EsVUFBTSxDQUFDQyxPQUFQLENBQWVDLFlBQWYsR0FBOEJDLElBQTlCLENBQW1DLEVBQW5DLEVBQXVDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNyRCxVQUFJRCxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQkUsZUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQTtBQUNEOztBQUNERSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsR0FBakM7QUFDQSxhQUFPWixtREFBUyxDQUFDWSxHQUFELENBQVQsQ0FBZVgsU0FBZixDQUF5QixDQUFDLENBQTFCLEVBQTZCSSxPQUE3QixDQUFxQyxDQUFyQyxDQUFQO0FBQ0QsS0FQRDtBQVFELEdBVHFCO0FBQUEsQ0FBdEI7O0FBV0EsSUFBTVUsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBMkM7QUFBQTs7QUFBQSx3QkFBeENDLEtBQXdDO0FBQUEsTUFBeENBLEtBQXdDLDJCQUFoQyx5QkFBZ0M7O0FBQUEsbUJBQ3JCQyx1RUFBUyxDQUFDO0FBQzFDQyxnQkFBWSxFQUFFQywrQkFENEI7QUFFMUNDLGlCQUFhLEVBQUVDLG1GQUF1QkE7QUFGSSxHQUFELENBRFk7QUFBQSxNQUMvQ2QsTUFEK0MsY0FDL0NBLE1BRCtDO0FBQUEsTUFDdkNlLGFBRHVDLGNBQ3ZDQSxhQUR1Qzs7QUFBQSxrQkFNckJDLHNEQUFRLENBQUMsRUFBRCxDQU5hO0FBQUEsTUFNaERDLFNBTmdEO0FBQUEsTUFNckNDLFlBTnFDOztBQVF2RCxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRCxnQkFBWSxDQUFDbkIsYUFBYSxFQUFkLENBQVo7QUFDRCxHQUZEOztBQUlBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFFUCxVQUFNLEVBQU5BO0FBQUYsR0FBWjtBQUNBb0IseURBQVMsQ0FBQyxZQUFNO0FBQ2RELGNBQVU7QUFDWCxHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUFiLFNBQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVVLGFBQVMsRUFBVEE7QUFBRixHQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLUixLQUFMLENBREYsRUFFRSxNQUFDLHdFQUFEO0FBQWEsUUFBSSxFQUFDLEtBQWxCO0FBQXdCLFNBQUssRUFBRVEsU0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBUSxXQUFPLEVBQUVFLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEYsQ0FERjtBQU9ELENBekJEOztHQUFNWCxLO1VBQzhCRSwrRDs7O0tBRDlCRixLO0FBMkJTQSxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VJbmZ1cmEgZnJvbSBcIi4uL3NoYXJlZC9ob29rcy91c2VJbmZ1cmFcIjtcbmltcG9ydCBMYXRlc3RQcmljZSBmcm9tIFwiLi4vZmVhdHVyZXMvRXRoZXJldW1EYXRhL2NvbXBvbmVudFwiO1xuaW1wb3J0IEJpZ051bWJlciBmcm9tIFwiYmlnbnVtYmVyLmpzXCI7XG5pbXBvcnQge1xuICBFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyxcbiAgTElOS19PUkFDTEVfQUREUkVTUyxcbn0gZnJvbSBcIi4uL3NoYXJlZC9hYmlzL3JvcHN0ZW4ub3JhY2xlXCI7XG5jb25zdCBmcm9tRGVjaW1hbCA9IChkZWNpbWFsKSA9PiAobnVtYmVyKSA9PlxuICBuZXcgQmlnTnVtYmVyKG51bWJlcikuc2hpZnRlZEJ5KGRlY2ltYWwpO1xuY29uc3QgZnJvbUV0aCA9IGZyb21EZWNpbWFsKC0xOCk7XG5cbmNvbnN0IGZvcm1hdE51bWJlciA9ICh4KSA9PiBuZXcgQmlnTnVtYmVyKHgpLnRvRml4ZWQoMik7XG5cbmNvbnN0IGdldE9yYWNsZURhdGEgPSAob3JhY2xlKSA9PiAoKSA9PiB7XG4gIG9yYWNsZS5tZXRob2RzLmxhdGVzdEFuc3dlcigpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJMYXRlc3QgcHJpY2Ugd2FzOlwiLCByZXMpO1xuICAgIHJldHVybiBCaWdOdW1iZXIocmVzKS5zaGlmdGVkQnkoLTgpLnRvRml4ZWQoMik7XG4gIH0pO1xufTtcblxuY29uc3QgSW5kZXggPSAoeyB0aXRsZSA9IFwiTmV4dEpTIElQRlMgQXBwbGljYXRpb25cIiB9KSA9PiB7XG4gIGNvbnN0IHsgb3JhY2xlLCBnZXRMYXRlc3REYXRhIH0gPSB1c2VJbmZ1cmEoe1xuICAgIGN1cnJlbnRDaGFpbjogcHJvY2Vzcy5lbnYuSU5GVVJBX1JPUFNURU4sXG4gICAgb3JhY2xlQWRkcmVzczogRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MsXG4gIH0pO1xuXG4gIGNvbnN0IFtwcmljZURhdGEsIHNldFByaWNlRGF0YV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCB1cGRhdGVEYXRhID0gKCkgPT4ge1xuICAgIHNldFByaWNlRGF0YShnZXRPcmFjbGVEYXRhKCkpO1xuICB9O1xuXG4gIGNvbnNvbGUubG9nKHsgb3JhY2xlIH0pO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZURhdGEoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKHsgcHJpY2VEYXRhIH0pO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8TGF0ZXN0UHJpY2UgY29pbj1cIkVUSFwiIHByaWNlPXtwcmljZURhdGF9IC8+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VwZGF0ZURhdGF9PlVwZGF0ZSBQcmljZTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})