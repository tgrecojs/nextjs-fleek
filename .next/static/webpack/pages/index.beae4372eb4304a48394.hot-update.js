webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hooks/useInfura */ \"./src/shared/hooks/useInfura.js\");\n/* harmony import */ var _features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../features/EthereumData/component */ \"./src/features/EthereumData/component.js\");\n/* harmony import */ var _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/abis/mainnet.oracle */ \"./src/shared/abis/mainnet.oracle.js\");\n/* harmony import */ var _shared_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/layout/component */ \"./src/shared/layout/component.js\");\n/* harmony import */ var _shared_utils_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utils/index */ \"./src/shared/utils/index.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/tgreco/g-drive/fleek-apps/nextjs-fleek/src/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Index = function Index(_ref) {\n  _s();\n\n  var _ref$title = _ref.title,\n      title = _ref$title === void 0 ? \"NextJS IPFS Application\" : _ref$title;\n\n  var _useInfura = Object(_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    currentChain: \"https://mainnet.infura.io/v3/\",\n    oracleAddress: _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_5__[\"ETHEREUM_ORACLE_ADDRESS\"]\n  }),\n      oracle = _useInfura.oracle;\n\n  var _useInfura2 = Object(_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n    currentChain: \"https://mainnet.infura.io/v3/\",\n    oracleAddress: _shared_abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_5__[\"LINK_ORACLE_ADDRESS\"]\n  }),\n      linkOracle = _useInfura2.oracle;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      ethPriceData = _useState[0],\n      setEthPriceData = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      linkPriceData = _useState2[0],\n      setLinkPriceData = _useState2[1];\n\n  var updateLink = function updateLink() {\n    linkOracle.methods.latestAnswer().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      setLinkPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          price: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"formatBigNumberFn\"])(res)\n        });\n      });\n    });\n  };\n\n  var updateData = function updateData() {\n    oracle.methods.latestAnswer().call({}, function (error, res) {\n      if (error != null) {\n        console.log(error);\n        return;\n      }\n\n      setEthPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          price: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"formatBigNumberFn\"])(res)\n        });\n      });\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"getLatestTimestamp\"])(linkOracle).then(function (res) {\n      setLinkPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          lastUpdate: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"formatUnixTimestamp\"])(res)\n        });\n      });\n    });\n  }, [linkPriceData.price]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"getLatestTimestamp\"])(oracle).then(function (res) {\n      setEthPriceData(function (x) {\n        return _objectSpread(_objectSpread({}, x), {}, {\n          lastUpdate: Object(_shared_utils_index__WEBPACK_IMPORTED_MODULE_7__[\"formatUnixTimestamp\"])(res)\n        });\n      });\n    });\n  }, [ethPriceData.price]);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    updateData();\n    updateLink();\n  }, []);\n  return __jsx(_shared_layout_component__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    style: {\n      textAlign: \"center\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, title), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }\n  }, \"Using\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://chain.link\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 9\n    }\n  }, \"Chain.link\"), \" \", \"for pricing data below.\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }, \" \", \"Learn more about Chainlink Price Feeds:\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://docs.chain.link/docs/using-chainlink-reference-contracts\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 9\n    }\n  }, \"Chainlink Docs\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 7\n    }\n  }, \" \", \"Learn more about IPFS:\", \" \", __jsx(\"a\", {\n    target: \"_blank\",\n    rel: \"noreferrer\",\n    href: \"https://ipfs.io\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 9\n    }\n  }, \"IPFS.io\")), __jsx(_features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    coin: \"ETH\",\n    lastUpdated: ethPriceData.lastUpdate,\n    price: ethPriceData.price,\n    onClick: updateData,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 7\n    }\n  }), __jsx(_features_EthereumData_component__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    coin: \"Link\",\n    lastUpdated: linkPriceData.lastUpdate,\n    price: linkPriceData.price,\n    onClick: updateLink,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Index, \"EeRoTvINHM1nWfmcbXI3bgcGKR4=\", false, function () {\n  return [_shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _shared_hooks_useInfura__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Index;\nIndex.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_2__[\"string\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJ0aXRsZSIsInVzZUluZnVyYSIsImN1cnJlbnRDaGFpbiIsInByb2Nlc3MiLCJvcmFjbGVBZGRyZXNzIiwiRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MiLCJvcmFjbGUiLCJMSU5LX09SQUNMRV9BRERSRVNTIiwibGlua09yYWNsZSIsInVzZVN0YXRlIiwiZXRoUHJpY2VEYXRhIiwic2V0RXRoUHJpY2VEYXRhIiwibGlua1ByaWNlRGF0YSIsInNldExpbmtQcmljZURhdGEiLCJ1cGRhdGVMaW5rIiwibWV0aG9kcyIsImxhdGVzdEFuc3dlciIsImNhbGwiLCJlcnJvciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ4IiwicHJpY2UiLCJmb3JtYXRCaWdOdW1iZXJGbiIsInVwZGF0ZURhdGEiLCJ1c2VFZmZlY3QiLCJnZXRMYXRlc3RUaW1lc3RhbXAiLCJ0aGVuIiwibGFzdFVwZGF0ZSIsImZvcm1hdFVuaXhUaW1lc3RhbXAiLCJ0ZXh0QWxpZ24iLCJwcm9wVHlwZXMiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQU1BLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTJDO0FBQUE7O0FBQUEsd0JBQXhDQyxLQUF3QztBQUFBLE1BQXhDQSxLQUF3QywyQkFBaEMseUJBQWdDOztBQUFBLG1CQUNwQ0MsdUVBQVMsQ0FBQztBQUMzQkMsZ0JBQVksRUFBRUMsK0JBRGE7QUFFM0JDLGlCQUFhLEVBQUVDLG1GQUF1QkE7QUFGWCxHQUFELENBRDJCO0FBQUEsTUFDL0NDLE1BRCtDLGNBQy9DQSxNQUQrQzs7QUFBQSxvQkFNeEJMLHVFQUFTLENBQUM7QUFDdkNDLGdCQUFZLEVBQUVDLCtCQUR5QjtBQUV2Q0MsaUJBQWEsRUFBRUcsK0VBQW1CQTtBQUZLLEdB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QUUwQyxHQUYxQyxFQUdFO0FBQ0UsVUFBTSxFQUFDLFFBRFQ7QUFFRSxPQUFHLEVBQUMsWUFGTjtBQUdFLFFBQUksRUFBQyxrRUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhGLENBVEYsRUFvQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLEdBREgsNEJBRXlCLEdBRnpCLEVBR0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFtQixPQUFHLEVBQUMsWUFBdkI7QUFBb0MsUUFBSSxFQUFDLGlCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsQ0FwQkYsRUEyQkUsTUFBQyx3RUFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsZUFBVyxFQUFFVSxZQUFZLENBQUNtQixVQUY1QjtBQUdFLFNBQUssRUFBRW5CLFlBQVksQ0FBQ2EsS0FIdEI7QUFJRSxXQUFPLEVBQUVFLFVBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCRixFQWlDRSxNQUFDLHdFQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxlQUFXLEVBQUViLGFBQWEsQ0FBQ2lCLFVBRjdCO0FBR0UsU0FBSyxFQUFFakIsYUFBYSxDQUFDVyxLQUh2QjtBQUlFLFdBQU8sRUFBRVQsVUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakNGLENBREY7QUEwQ0QsQ0F4R0Q7O0dBQU1mLEs7VUFDZUUsK0QsRUFLWUEsK0Q7OztLQU4zQkYsSztBQTBHTkEsS0FBSyxDQUFDaUMsU0FBTixHQUFrQjtBQUNoQmhDLE9BQUssRUFBRWlDLGlEQUFNQTtBQURHLENBQWxCO0FBSWVsQyxvRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdXNlSW5mdXJhIGZyb20gXCIuLi9zaGFyZWQvaG9va3MvdXNlSW5mdXJhXCI7XG5pbXBvcnQgTGF0ZXN0UHJpY2UgZnJvbSBcIi4uL2ZlYXR1cmVzL0V0aGVyZXVtRGF0YS9jb21wb25lbnRcIjtcbmltcG9ydCB7XG4gIEVUSEVSRVVNX09SQUNMRV9BRERSRVNTLFxuICBMSU5LX09SQUNMRV9BRERSRVNTLFxufSBmcm9tIFwiLi4vc2hhcmVkL2FiaXMvbWFpbm5ldC5vcmFjbGVcIjtcbmltcG9ydCBXcmFwcGVyIGZyb20gXCIuLi9zaGFyZWQvbGF5b3V0L2NvbXBvbmVudFwiO1xuaW1wb3J0IHtcbiAgZm9ybWF0QmlnTnVtYmVyRm4sXG4gIGZvcm1hdFVuaXhUaW1lc3RhbXAsXG4gIGdldExhdGVzdFRpbWVzdGFtcCxcbn0gZnJvbSBcIi4uL3NoYXJlZC91dGlscy9pbmRleFwiO1xuXG5jb25zdCBJbmRleCA9ICh7IHRpdGxlID0gXCJOZXh0SlMgSVBGUyBBcHBsaWNhdGlvblwiIH0pID0+IHtcbiAgY29uc3QgeyBvcmFjbGUgfSA9IHVzZUluZnVyYSh7XG4gICAgY3VycmVudENoYWluOiBwcm9jZXNzLmVudi5JTkZVUkFfTUFJTk5FVCxcbiAgICBvcmFjbGVBZGRyZXNzOiBFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyxcbiAgfSk7XG5cbiAgY29uc3QgeyBvcmFjbGU6IGxpbmtPcmFjbGUgfSA9IHVzZUluZnVyYSh7XG4gICAgY3VycmVudENoYWluOiBwcm9jZXNzLmVudi5JTkZVUkFfTUFJTk5FVCxcbiAgICBvcmFjbGVBZGRyZXNzOiBMSU5LX09SQUNMRV9BRERSRVNTLFxuICB9KTtcblxuICBjb25zdCBbZXRoUHJpY2VEYXRhLCBzZXRFdGhQcmljZURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsaW5rUHJpY2VEYXRhLCBzZXRMaW5rUHJpY2VEYXRhXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IHVwZGF0ZUxpbmsgPSAoKSA9PiB7XG4gICAgbGlua09yYWNsZS5tZXRob2RzLmxhdGVzdEFuc3dlcigpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgICBpZiAoZXJyb3IgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldExpbmtQcmljZURhdGEoKHgpID0+ICh7XG4gICAgICAgIC4uLngsXG4gICAgICAgIHByaWNlOiBmb3JtYXRCaWdOdW1iZXJGbihyZXMpLFxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZURhdGEgPSAoKSA9PiB7XG4gICAgb3JhY2xlLm1ldGhvZHMubGF0ZXN0QW5zd2VyKCkuY2FsbCh7fSwgKGVycm9yLCByZXMpID0+IHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0RXRoUHJpY2VEYXRhKCh4KSA9PiAoe1xuICAgICAgICAuLi54LFxuICAgICAgICBwcmljZTogZm9ybWF0QmlnTnVtYmVyRm4ocmVzKSxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldExhdGVzdFRpbWVzdGFtcChsaW5rT3JhY2xlKS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldExpbmtQcmljZURhdGEoKHgpID0+ICh7XG4gICAgICAgIC4uLngsXG4gICAgICAgIGxhc3RVcGRhdGU6IGZvcm1hdFVuaXhUaW1lc3RhbXAocmVzKSxcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfSwgW2xpbmtQcmljZURhdGEucHJpY2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldExhdGVzdFRpbWVzdGFtcChvcmFjbGUpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0RXRoUHJpY2VEYXRhKCh4KSA9PiAoe1xuICAgICAgICAuLi54LFxuICAgICAgICBsYXN0VXBkYXRlOiBmb3JtYXRVbml4VGltZXN0YW1wKHJlcyksXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0sIFtldGhQcmljZURhdGEucHJpY2VdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHVwZGF0ZURhdGEoKTtcbiAgICB1cGRhdGVMaW5rKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8V3JhcHBlcj5cbiAgICAgIDxoMiBzdHlsZT17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+e3RpdGxlfTwvaDI+XG4gICAgICA8cD5cbiAgICAgICAgVXNpbmd7XCIgXCJ9XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vcmVmZXJyZXJcIiBocmVmPVwiaHR0cHM6Ly9jaGFpbi5saW5rXCI+XG4gICAgICAgICAgQ2hhaW4ubGlua1xuICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICBmb3IgcHJpY2luZyBkYXRhIGJlbG93LlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBDaGFpbmxpbmsgUHJpY2UgRmVlZHM6e1wiIFwifVxuICAgICAgICA8YVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZG9jcy5jaGFpbi5saW5rL2RvY3MvdXNpbmctY2hhaW5saW5rLXJlZmVyZW5jZS1jb250cmFjdHNcIlxuICAgICAgICA+XG4gICAgICAgICAgQ2hhaW5saW5rIERvY3NcbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgTGVhcm4gbW9yZSBhYm91dCBJUEZTOntcIiBcIn1cbiAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiIGhyZWY9XCJodHRwczovL2lwZnMuaW9cIj5cbiAgICAgICAgICBJUEZTLmlvXG4gICAgICAgIDwvYT5cbiAgICAgIDwvcD5cbiAgICAgIDxMYXRlc3RQcmljZVxuICAgICAgICBjb2luPVwiRVRIXCJcbiAgICAgICAgbGFzdFVwZGF0ZWQ9e2V0aFByaWNlRGF0YS5sYXN0VXBkYXRlfVxuICAgICAgICBwcmljZT17ZXRoUHJpY2VEYXRhLnByaWNlfVxuICAgICAgICBvbkNsaWNrPXt1cGRhdGVEYXRhfVxuICAgICAgLz5cbiAgICAgIDxMYXRlc3RQcmljZVxuICAgICAgICBjb2luPVwiTGlua1wiXG4gICAgICAgIGxhc3RVcGRhdGVkPXtsaW5rUHJpY2VEYXRhLmxhc3RVcGRhdGV9XG4gICAgICAgIHByaWNlPXtsaW5rUHJpY2VEYXRhLnByaWNlfVxuICAgICAgICBvbkNsaWNrPXt1cGRhdGVMaW5rfVxuICAgICAgLz5cbiAgICA8L1dyYXBwZXI+XG4gICk7XG59O1xuXG5JbmRleC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})