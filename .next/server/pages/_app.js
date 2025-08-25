/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var _futureverse_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @futureverse/auth-react */ \"@futureverse/auth-react\");\n/* harmony import */ var _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @futureverse/auth-ui */ \"@futureverse/auth-ui\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/chains */ \"wagmi/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _futureverse_auth_react__WEBPACK_IMPORTED_MODULE_4__, _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_6__]);\n([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, wagmi__WEBPACK_IMPORTED_MODULE_3__, _futureverse_auth_react__WEBPACK_IMPORTED_MODULE_4__, _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__, wagmi_chains__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\n\nconst wagmiConfig = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createConfig)({\n    chains: [\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_6__.mainnet,\n        wagmi_chains__WEBPACK_IMPORTED_MODULE_6__.sepolia\n    ],\n    transports: {\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_6__.mainnet.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.http)(),\n        [wagmi_chains__WEBPACK_IMPORTED_MODULE_6__.sepolia.id]: (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.http)()\n    }\n});\nconst queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClient();\nconst themeConfig = {\n    ..._futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__.DefaultTheme,\n    defaultAuthOption: 'custodial',\n    colors: _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__.DefaultTheme.colors,\n    font: _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__.DefaultTheme.font,\n    borderRadius: _futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__.DefaultTheme.borderRadius\n};\n// You may need to update these to use NEXT_PUBLIC_ env vars\nconst authClient = {\n    clientId: \"6yuDDrkatTja_mU5gFiBK\" || 0,\n    environment: \"staging\" || 0,\n    redirectUri: \"http://localhost:5173/\" || 0,\n    postLogoutRedirectUri: \"http://localhost:5173/\" || 0\n};\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.QueryClientProvider, {\n        client: queryClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiProvider, {\n            config: wagmiConfig,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_futureverse_auth_react__WEBPACK_IMPORTED_MODULE_4__.FutureverseAuthProvider, {\n                authClient: authClient,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_futureverse_auth_ui__WEBPACK_IMPORTED_MODULE_5__.AuthUiProvider, {\n                    authClient: authClient,\n                    themeConfig: themeConfig,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"C:\\\\GitHub\\\\evolution-next-app\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\GitHub\\\\evolution-next-app\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\GitHub\\\\evolution-next-app\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\GitHub\\\\evolution-next-app\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\GitHub\\\\evolution-next-app\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUMwQztBQUNuQztBQUM0QjtBQUNFO0FBQ3pCO0FBQ0s7QUFFaEQsTUFBTVUsY0FBY0osbURBQVlBLENBQUM7SUFDL0JLLFFBQVE7UUFBQ0gsaURBQU9BO1FBQUVDLGlEQUFPQTtLQUFDO0lBQzFCRyxZQUFZO1FBQ1YsQ0FBQ0osaURBQU9BLENBQUNLLEVBQUUsQ0FBQyxFQUFFTiwyQ0FBSUE7UUFDbEIsQ0FBQ0UsaURBQU9BLENBQUNJLEVBQUUsQ0FBQyxFQUFFTiwyQ0FBSUE7SUFDcEI7QUFDRjtBQUVBLE1BQU1PLGNBQWMsSUFBSWQsOERBQVdBO0FBRW5DLE1BQU1lLGNBQWM7SUFDbEIsR0FBR1YsOERBQVk7SUFDZlcsbUJBQW1CO0lBQ25CQyxRQUFRWiw4REFBWUEsQ0FBQ1ksTUFBTTtJQUMzQkMsTUFBTWIsOERBQVlBLENBQUNhLElBQUk7SUFDdkJDLGNBQWNkLDhEQUFZQSxDQUFDYyxZQUFZO0FBQ3pDO0FBRUEsNERBQTREO0FBQzVELE1BQU1DLGFBQWE7SUFDakJDLFVBQVVDLHVCQUE2QyxJQUFJLENBQXVCO0lBQ2xGRyxhQUFhSCxTQUErQyxJQUFJLENBQVM7SUFDekVLLGFBQWFMLHdCQUFvQyxJQUFJLENBQXdCO0lBQzdFTyx1QkFBdUJQLHdCQUFnRCxJQUFJLENBQXdCO0FBQ3JHO0FBRUEsU0FBU1MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFDRSw4REFBQ2hDLHNFQUFtQkE7UUFBQ2lDLFFBQVFwQjtrQkFDM0IsNEVBQUNaLGdEQUFhQTtZQUFDaUMsUUFBUXpCO3NCQUNyQiw0RUFBQ1AsNEVBQXVCQTtnQkFBQ2lCLFlBQVlBOzBCQUNuQyw0RUFBQ2hCLGdFQUFjQTtvQkFBQ2dCLFlBQVlBO29CQUFZTCxhQUFhQTs4QkFDbkQsNEVBQUNpQjt3QkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQztBQUVBLGlFQUFlRixLQUFLQSxFQUFDIiwic291cmNlcyI6WyJDOlxcR2l0SHViXFxldm9sdXRpb24tbmV4dC1hcHBcXHNyY1xccGFnZXNcXF9hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xyXG5pbXBvcnQgeyBXYWdtaVByb3ZpZGVyIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBGdXR1cmV2ZXJzZUF1dGhQcm92aWRlciB9IGZyb20gJ0BmdXR1cmV2ZXJzZS9hdXRoLXJlYWN0JztcclxuaW1wb3J0IHsgQXV0aFVpUHJvdmlkZXIsIERlZmF1bHRUaGVtZSB9IGZyb20gJ0BmdXR1cmV2ZXJzZS9hdXRoLXVpJztcclxuaW1wb3J0IHsgY3JlYXRlQ29uZmlnLCBodHRwIH0gZnJvbSAnd2FnbWknO1xyXG5pbXBvcnQgeyBtYWlubmV0LCBzZXBvbGlhIH0gZnJvbSAnd2FnbWkvY2hhaW5zJztcclxuXHJcbmNvbnN0IHdhZ21pQ29uZmlnID0gY3JlYXRlQ29uZmlnKHtcclxuICBjaGFpbnM6IFttYWlubmV0LCBzZXBvbGlhXSxcclxuICB0cmFuc3BvcnRzOiB7XHJcbiAgICBbbWFpbm5ldC5pZF06IGh0dHAoKSxcclxuICAgIFtzZXBvbGlhLmlkXTogaHR0cCgpLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgcXVlcnlDbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoKTtcclxuXHJcbmNvbnN0IHRoZW1lQ29uZmlnID0ge1xyXG4gIC4uLkRlZmF1bHRUaGVtZSxcclxuICBkZWZhdWx0QXV0aE9wdGlvbjogJ2N1c3RvZGlhbCcsXHJcbiAgY29sb3JzOiBEZWZhdWx0VGhlbWUuY29sb3JzLFxyXG4gIGZvbnQ6IERlZmF1bHRUaGVtZS5mb250LFxyXG4gIGJvcmRlclJhZGl1czogRGVmYXVsdFRoZW1lLmJvcmRlclJhZGl1cyxcclxufTtcclxuXHJcbi8vIFlvdSBtYXkgbmVlZCB0byB1cGRhdGUgdGhlc2UgdG8gdXNlIE5FWFRfUFVCTElDXyBlbnYgdmFyc1xyXG5jb25zdCBhdXRoQ2xpZW50ID0ge1xyXG4gIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GVVRVUkVWRVJTRV9DTElFTlRfSUQgfHwgJ1VnM2tfWGJOMXdYWmxQRHZnS19HZScsXHJcbiAgZW52aXJvbm1lbnQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0ZVVFVSRVZFUlNFX0VOVklST05NRU5UIHx8ICdzdGFnaW5nJyxcclxuICByZWRpcmVjdFVyaTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUkVESVJFQ1RfVVJJIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvJyxcclxuICBwb3N0TG9nb3V0UmVkaXJlY3RVcmk6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSB8fCAnaHR0cDovL2xvY2FsaG9zdDozMDAwLycsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudH0+XHJcbiAgICAgIDxXYWdtaVByb3ZpZGVyIGNvbmZpZz17d2FnbWlDb25maWd9PlxyXG4gICAgICAgIDxGdXR1cmV2ZXJzZUF1dGhQcm92aWRlciBhdXRoQ2xpZW50PXthdXRoQ2xpZW50fT5cclxuICAgICAgICAgIDxBdXRoVWlQcm92aWRlciBhdXRoQ2xpZW50PXthdXRoQ2xpZW50fSB0aGVtZUNvbmZpZz17dGhlbWVDb25maWd9PlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgICA8L0F1dGhVaVByb3ZpZGVyPlxyXG4gICAgICAgIDwvRnV0dXJldmVyc2VBdXRoUHJvdmlkZXI+XHJcbiAgICAgIDwvV2FnbWlQcm92aWRlcj5cclxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIlF1ZXJ5Q2xpZW50IiwiUXVlcnlDbGllbnRQcm92aWRlciIsIldhZ21pUHJvdmlkZXIiLCJGdXR1cmV2ZXJzZUF1dGhQcm92aWRlciIsIkF1dGhVaVByb3ZpZGVyIiwiRGVmYXVsdFRoZW1lIiwiY3JlYXRlQ29uZmlnIiwiaHR0cCIsIm1haW5uZXQiLCJzZXBvbGlhIiwid2FnbWlDb25maWciLCJjaGFpbnMiLCJ0cmFuc3BvcnRzIiwiaWQiLCJxdWVyeUNsaWVudCIsInRoZW1lQ29uZmlnIiwiZGVmYXVsdEF1dGhPcHRpb24iLCJjb2xvcnMiLCJmb250IiwiYm9yZGVyUmFkaXVzIiwiYXV0aENsaWVudCIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0ZVVFVSRVZFUlNFX0NMSUVOVF9JRCIsImVudmlyb25tZW50IiwiTkVYVF9QVUJMSUNfRlVUVVJFVkVSU0VfRU5WSVJPTk1FTlQiLCJyZWRpcmVjdFVyaSIsIk5FWFRfUFVCTElDX1JFRElSRUNUX1VSSSIsInBvc3RMb2dvdXRSZWRpcmVjdFVyaSIsIk5FWFRfUFVCTElDX1BPU1RfTE9HT1VUX1JFRElSRUNUX1VSSSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwiY29uZmlnIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.tsx\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@futureverse/auth-react":
/*!******************************************!*\
  !*** external "@futureverse/auth-react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@futureverse/auth-react");;

/***/ }),

/***/ "@futureverse/auth-ui":
/*!***************************************!*\
  !*** external "@futureverse/auth-ui" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@futureverse/auth-ui");;

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi");;

/***/ }),

/***/ "wagmi/chains":
/*!*******************************!*\
  !*** external "wagmi/chains" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("wagmi/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(pages-dir-node)/./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();