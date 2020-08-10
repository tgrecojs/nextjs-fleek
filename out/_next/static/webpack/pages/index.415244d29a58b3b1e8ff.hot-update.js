webpackHotUpdate_N_E("pages/index",{

/***/ "./src/shared/hooks/useInfura.js":
/*!***************************************!*\
  !*** ./src/shared/hooks/useInfura.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/src/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abis/mainnet.oracle */ \"./src/shared/abis/mainnet.oracle.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar getLatestData = function getLatestData() {\n  var oracle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  oracle.methods.latestAnswer().call({}, function (error, res) {\n    if (error != null) {\n      console.log(error);\n      return;\n    }\n\n    console.log(\"Latest price was:\", res);\n    return res;\n  });\n};\n\nvar getLatestTimestamp = function getLatestTimestamp() {\n  var oracle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  oracle.methods.latestTimestamp().call({}, function (error, res) {\n    if (error != null) {\n      console.log(error);\n      return;\n    }\n\n    console.log(\"Latest timestamp for price was:\", res);\n    return res;\n  });\n};\n\nvar initWeb3 = function initWeb3(_ref) {\n  _s();\n\n  var _ref$currentChain = _ref.currentChain,\n      currentChain = _ref$currentChain === void 0 ? \"https://mainnet.infura.io/v3/\" : _ref$currentChain;\n  var web3 = new web3__WEBPACK_IMPORTED_MODULE_1___default.a(new web3__WEBPACK_IMPORTED_MODULE_1___default.a.providers.HttpProvider(\"\".concat(currentChain).concat(\"cc37f552c1354792b23c88d090c4a02f\")));\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    window.web3 = web3;\n  }, []);\n  return {\n    web3: web3\n  };\n};\n\n_s(initWeb3, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\nvar initializeOracle = function initializeOracle(_ref2) {\n  var _ref2$oracleAddress = _ref2.oracleAddress,\n      oracleAddress = _ref2$oracleAddress === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"ETHEREUM_ORACLE_ADDRESS\"] : _ref2$oracleAddress,\n      _ref2$aggregatorAbi = _ref2.aggregatorAbi,\n      aggregatorAbi = _ref2$aggregatorAbi === void 0 ? _abis_mainnet_oracle__WEBPACK_IMPORTED_MODULE_2__[\"DEFAULT_AGGREGATOR_ABI\"] : _ref2$aggregatorAbi;\n\n  var _initWeb = initWeb3({\n    currentChain: \"https://mainnet.infura.io/v3/\"\n  }),\n      web3 = _initWeb.web3;\n\n  var oracle = web3.eth.Contract(aggregatorAbi, oracleAddress);\n  return {\n    oracle: oracle\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (initializeOracle);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9ob29rcy91c2VJbmZ1cmEuanM/OWQ3MSJdLCJuYW1lcyI6WyJnZXRMYXRlc3REYXRhIiwib3JhY2xlIiwibWV0aG9kcyIsImxhdGVzdEFuc3dlciIsImNhbGwiLCJlcnJvciIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRMYXRlc3RUaW1lc3RhbXAiLCJsYXRlc3RUaW1lc3RhbXAiLCJpbml0V2ViMyIsImN1cnJlbnRDaGFpbiIsInByb2Nlc3MiLCJ3ZWIzIiwiV2ViMyIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciIsInVzZUVmZmVjdCIsIndpbmRvdyIsImluaXRpYWxpemVPcmFjbGUiLCJvcmFjbGVBZGRyZXNzIiwiRVRIRVJFVU1fT1JBQ0xFX0FERFJFU1MiLCJhZ2dyZWdhdG9yQWJpIiwiREVGQVVMVF9BR0dSRUdBVE9SX0FCSSIsIklORlVSQV9NQUlOTkVUIiwiZXRoIiwiQ29udHJhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU1BLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBaUI7QUFBQSxNQUFoQkMsTUFBZ0IsdUVBQVAsRUFBTztBQUNyQ0EsUUFBTSxDQUFDQyxPQUFQLENBQWVDLFlBQWYsR0FBOEJDLElBQTlCLENBQW1DLEVBQW5DLEVBQXVDLFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUNyRCxRQUFJRCxLQUFLLElBQUksSUFBYixFQUFtQjtBQUNqQkUsYUFBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQTtBQUNEOztBQUNERSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ0YsR0FBakM7QUFDQSxXQUFPQSxHQUFQO0FBQ0QsR0FQRDtBQVFELENBVEQ7O0FBV0EsSUFBTUcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFpQjtBQUFBLE1BQWhCUixNQUFnQix1RUFBUCxFQUFPO0FBQzFDQSxRQUFNLENBQUNDLE9BQVAsQ0FBZVEsZUFBZixHQUFpQ04sSUFBakMsQ0FBc0MsRUFBdEMsRUFBMEMsVUFBQ0MsS0FBRCxFQUFRQyxHQUFSLEVBQWdCO0FBQ3hELFFBQUlELEtBQUssSUFBSSxJQUFiLEVBQW1CO0FBQ2pCRSxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjtBQUNBO0FBQ0Q7O0FBQ0RFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaLEVBQStDRixHQUEvQztBQUNBLFdBQU9BLEdBQVA7QUFDRCxHQVBEO0FBUUQsQ0FURDs7QUFXQSxJQUFNSyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUFtRDtBQUFBOztBQUFBLCtCQUFoREMsWUFBZ0Q7QUFBQSxNQUFoREEsWUFBZ0Qsa0NBQWpDQywrQkFBaUM7QUFDbEUsTUFBTUMsSUFBSSxHQUFHLElBQUlDLDJDQUFKLENBQ1gsSUFBSUEsMkNBQUksQ0FBQ0MsU0FBTCxDQUFlQyxZQUFuQixXQUFtQ0wsWUFBbkMsU0FBa0RDLGtDQUFsRCxFQURXLENBQWI7QUFHQUsseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFVBQU0sQ0FBQ0wsSUFBUCxHQUFjQSxJQUFkO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUdBLFNBQU87QUFDTEEsUUFBSSxFQUFKQTtBQURLLEdBQVA7QUFHRCxDQVZEOztHQUFNSCxROztBQVlOLElBQU1TLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsUUFHbkI7QUFBQSxrQ0FGSkMsYUFFSTtBQUFBLE1BRkpBLGFBRUksb0NBRllDLDRFQUVaO0FBQUEsa0NBREpDLGFBQ0k7QUFBQSxNQURKQSxhQUNJLG9DQURZQywyRUFDWjs7QUFBQSxpQkFDYWIsUUFBUSxDQUFDO0FBQUVDLGdCQUFZLEVBQUVDLCtCQUEwQlk7QUFBMUMsR0FBRCxDQURyQjtBQUFBLE1BQ0lYLElBREosWUFDSUEsSUFESjs7QUFHSixNQUFNYixNQUFNLEdBQUdhLElBQUksQ0FBQ1ksR0FBTCxDQUFTQyxRQUFULENBQWtCSixhQUFsQixFQUFpQ0YsYUFBakMsQ0FBZjtBQUVBLFNBQU87QUFDTHBCLFVBQU0sRUFBTkE7QUFESyxHQUFQO0FBR0QsQ0FYRDs7QUFhZW1CLCtFQUFmIiwiZmlsZSI6Ii4vc3JjL3NoYXJlZC9ob29rcy91c2VJbmZ1cmEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IHtcbiAgQ0hBSU5MSU5LX09SQUNMRV9BQkksXG4gIEVUSEVSRVVNX09SQUNMRV9BRERSRVNTLFxuICBERUZBVUxUX0FHR1JFR0FUT1JfQUJJLFxufSBmcm9tIFwiLi4vYWJpcy9tYWlubmV0Lm9yYWNsZVwiO1xuXG5jb25zdCBnZXRMYXRlc3REYXRhID0gKG9yYWNsZSA9IHt9KSA9PiB7XG4gIG9yYWNsZS5tZXRob2RzLmxhdGVzdEFuc3dlcigpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJMYXRlc3QgcHJpY2Ugd2FzOlwiLCByZXMpO1xuICAgIHJldHVybiByZXM7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0TGF0ZXN0VGltZXN0YW1wID0gKG9yYWNsZSA9IHt9KSA9PiB7XG4gIG9yYWNsZS5tZXRob2RzLmxhdGVzdFRpbWVzdGFtcCgpLmNhbGwoe30sIChlcnJvciwgcmVzKSA9PiB7XG4gICAgaWYgKGVycm9yICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coXCJMYXRlc3QgdGltZXN0YW1wIGZvciBwcmljZSB3YXM6XCIsIHJlcyk7XG4gICAgcmV0dXJuIHJlcztcbiAgfSk7XG59O1xuXG5jb25zdCBpbml0V2ViMyA9ICh7IGN1cnJlbnRDaGFpbiA9IHByb2Nlc3MuZW52LklORlVSQV9NQUlOTkVUIH0pID0+IHtcbiAgY29uc3Qgd2ViMyA9IG5ldyBXZWIzKFxuICAgIG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoYCR7Y3VycmVudENoYWlufSR7cHJvY2Vzcy5lbnYuaW5mdXJhSUR9YClcbiAgKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cud2ViMyA9IHdlYjM7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHtcbiAgICB3ZWIzLFxuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbGl6ZU9yYWNsZSA9ICh7XG4gIG9yYWNsZUFkZHJlc3MgPSBFVEhFUkVVTV9PUkFDTEVfQUREUkVTUyxcbiAgYWdncmVnYXRvckFiaSA9IERFRkFVTFRfQUdHUkVHQVRPUl9BQkksXG59KSA9PiB7XG4gIGNvbnN0IHsgd2ViMyB9ID0gaW5pdFdlYjMoeyBjdXJyZW50Q2hhaW46IHByb2Nlc3MuZW52LklORlVSQV9NQUlOTkVUIH0pO1xuXG4gIGNvbnN0IG9yYWNsZSA9IHdlYjMuZXRoLkNvbnRyYWN0KGFnZ3JlZ2F0b3JBYmksIG9yYWNsZUFkZHJlc3MpO1xuXG4gIHJldHVybiB7XG4gICAgb3JhY2xlLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbGl6ZU9yYWNsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shared/hooks/useInfura.js\n");

/***/ })

})