(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-debugger"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/debugger/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/debugger/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir=\"ltr\"] .sa-debugger-container {\n  margin-right: 0.2rem;\n}\n\n[dir=\"rtl\"] .sa-debugger-container {\n  margin-left: 0.2rem;\n}\n\n.sa-debugger-small .sa-debugger-container {\n  display: none !important;\n}\n\n.debug {\n  display: none;\n}\n.debug {\n  position: absolute;\n  z-index: 492;\n  background-color: white;\n  width: 400px;\n  height: 25rem;\n}\n\n.debug h1 {\n  padding: 10px;\n  cursor: move;\n  z-index: 10;\n  color: #fff !important;\n  width: calc(100% - 20px);\n  font-size: 20px;\n}\n\n.sa-debugger-unpause {\n  animation: unpauseBackground 2s infinite alternate;\n}\n@keyframes unpauseBackground /* Firefox */ {\n  0% {\n    background-color: rgba(0, 0, 0, 0.15);\n  }\n  100% {\n    background-color: rgba(0, 0, 0, 0);\n  }\n}\n.sa-debugger-unpause > img {\n  width: 20px;\n  height: 20px;\n}\n\n.log {\n  --message-border-color: rgba(0, 0, 0, 0.15);\n  --warning-border-color: hsl(50deg 100% 88%);\n  --error-border-color: hsl(0deg 100% 92%);\n  --error-text-color: red;\n  --monospace-font-size: 12px;\n  --monospace-font-family: consolas, lucida console, courier new, monospace;\n  --source-code-font-size: 12px;\n  --source-code-font-family: consolas, lucida console, courier new, monospace;\n  font-family: var(--monospace-font-family);\n  font-size: var(--monospace-font-size) !important;\n  word-wrap: break-word;\n  user-select: text;\n  box-sizing: border-box;\n  min-width: 0;\n  min-height: 0;\n  display: flex;\n  border-top: 1px solid var(--message-border-color);\n  border-bottom: 1px solid var(--message-border-color);\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  flex: auto;\n  line-height: 1.2;\n  border-top-right-radius: revert;\n  border-top-left-radius: revert;\n  cursor: text;\n  align-items: center;\n  padding: 3px;\n  color: #575e75;\n  content-visibility: auto;\n  contain-intrinsic-size: 1.2rem;\n}\n.warn {\n  border-color: var(--warning-border-color);\n  color: hsl(39deg 100% 18%);\n  background-color: hsl(50deg 100% 95%);\n}\n.error {\n  border-color: var(--error-border-color);\n  color: var(--error-text-color);\n  background-color: hsl(0deg 100% 95%);\n}\n.log:not(.warn):not(.error) + .log:not(.warn):not(.error),\n.warn + .warn,\n.error + .error {\n  border-top-color: transparent;\n}\n.logs {\n  border-radius: 0;\n  padding: 0;\n}\n.extra-log-container {\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  flex: 1;\n  cursor: default;\n  width: 100%;\n}\n.console-variable {\n  padding: 4px;\n  border-radius: 10px;\n  color: white;\n  margin-right: 5px;\n}\n.log > span:not(.console-variable) {\n  flex-grow: 1;\n}\n.log a {\n  color: inherit;\n  opacity: 0.5;\n  text-decoration: underline;\n  float: right;\n  text-align: right;\n  max-width: 100%;\n  padding-left: 4px;\n  margin-right: 4px;\n  margin-left: auto;\n}\n.log a:hover {\n  color: #4d97ff;\n  opacity: 1;\n}\n\n.logLink.deletedTarget {\n  pointer-events: none;\n}\n\n.logIcon {\n  width: 1rem;\n  height: 1rem;\n  margin: 0 0.25rem;\n}\n\n.log:not(.warn):not(.error) {\n  margin-left: 1.5rem;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/add.svg":
/*!**********************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/add.svg ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDcuNDggNy40OCI+PHBhdGggZD0iTTMuNzQgNi40OFYxTTEgMy43NGg1LjQ4IiBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4Ii8+PC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug-unread.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug-unread.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU3NWU3NSIgdmlld0JveD0iMCAwIDIwIDIwIj48cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Im00LjUgNi41IDQuNSAzLTQuNSAzbTYgMGg1Ii8+PGNpcmNsZSBmaWxsPSIjNEM5N0ZGIiBjeD0iMTYiIGN5PSI0IiByPSIzIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJNMTguNSA4djcuNWMwIDEuMTA4LS44OTIgMi0yIDJoLTEzYy0xLjEwOCAwLTItLjg5Mi0yLTJ2LTExYzAtMS4xMDguODkyLTIgMi0ySDEyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjNEM5N0ZGIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MTtwYWludC1vcmRlcjptYXJrZXJzIHN0cm9rZSBmaWxsIiBkPSJNNCAzLjVjLS44MzEgMC0xLjUuNjY5LTEuNSAxLjV2MTBjMCAuODMxLjY2OSAxLjUgMS41IDEuNWgxMmMuODMxIDAgMS41LS42NjkgMS41LTEuNVY1YzAtLjgzMS0uNjY5LTEuNS0xLjUtMS41Wm0wIDFoMTJjLjI3NyAwIC41LjIyMy41LjV2MTBjMCAuMjc3LS4yMjMuNS0uNS41SDRhLjQ5OS40OTkgMCAwIDEtLjUtLjVWNWMwLS4yNzcuMjIzLS41LjUtLjVaIiBzdHJva2U9Im5vbmUiLz48cGF0aCBkPSJtNS40MTcgNy41IDMuNzUgMi41LTMuNzUgMi41bTUgMGg0LjE2NiIgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzhmOGY4ZjtzdHJva2Utd2lkdGg6MTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIi8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/delete.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/delete.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik00LjU0OCA3aDEwLjkwNGEuNS41IDAgMCAxIC40OTguNTQ1bC0uNzg1IDguNjM1QTIgMiAwIDAgMSAxMy4xNzQgMThINi44MjdhMiAyIDAgMCAxLTEuOTkyLTEuODJMNC4wNSA3LjU0NkEuNS41IDAgMCAxIDQuNTQ4IDd6bTIuNzg1LTMgLjU1My0xLjY1OEEuNS41IDAgMCAxIDguMzYgMmgzLjI4YS41LjUgMCAwIDEgLjQ3NC4zNDJMMTIuNjY3IDRIMTYuNWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTEzYS41LjUgMCAwIDEtLjUtLjV2LTFhLjUuNSAwIDAgMSAuNS0uNWgzLjgzM3ptMS4wNTQgMGgzLjIyNmwtLjMzNC0xSDguNzIxbC0uMzM0IDF6TTEwIDExLjcybDEuNTk1LTEuNTk1YS41LjUgMCAwIDEgLjcwNyAwbC4wNzMuMDczYS41LjUgMCAwIDEgMCAuNzA3TDEwLjc4IDEyLjVsMS41OTUgMS41OTVhLjUuNSAwIDAgMSAwIC43MDdsLS4wNzMuMDczYS41LjUgMCAwIDEtLjcwNyAwTDEwIDEzLjI4bC0xLjU5NSAxLjU5NWEuNS41IDAgMCAxLS43MDcgMGwtLjA3My0uMDczYS41LjUgMCAwIDEgMC0uNzA3TDkuMjIgMTIuNWwtMS41OTUtMS41OTVhLjUuNSAwIDAgMSAwLS43MDdsLjA3My0uMDczYS41LjUgMCAwIDEgLjcwNyAwTDEwIDExLjcyeiIgaWQ9ImEiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIiBmaWxsPSIjRkZGIj48cGF0aCBkPSJNMCAwaDIwdjIwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/download-white.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/download-white.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE0LjczIDguNzc5LTQuMjUzIDQuMjY0YS42MTkuNjE5IDAgMCAxLS44OSAwTDUuMzM2IDguNzc5QS42My42MyAwIDAgMSA1Ljc4OCA3LjdoMi4xMTdsMS4yNjMtNS4wMTZhLjkxMi45MTIgMCAwIDEgMS4xMDYtLjY1Ni44OS44OSAwIDAgMSAuNjY4LjY1NkwxMi4yMDYgNy43aDIuMDcyYy41NTkgMCAuODU2LjY3LjQ1MSAxLjA3OHpNMTggMTEuODEydjIuNTc5QzE4IDE2LjM3NSAxNi4zOTUgMTggMTQuNDE3IDE4SDUuNkEzLjYwNyAzLjYwNyAwIDAgMSAyIDE0LjM5di0yLjU3OGExLjE3IDEuMTcgMCAxIDEgMi4zMzcgMHYyLjU3OUExLjI3IDEuMjcgMCAwIDAgNS42IDE1LjY1Nmg4LjgxN2MuNjg2IDAgMS4yNDYtLjU3OCAxLjI0Ni0xLjI2NXYtMi41NzljMC0uNjU2LjUzLTEuMTcyIDEuMTY5LTEuMTcyLjY1NCAwIDEuMTY4LjUxNiAxLjE2OCAxLjE3MnoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/error.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/error.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTEyIDE0YTEuMjUgMS4yNSAwIDEgMCAxLjI1IDEuMjVBMS4yNSAxLjI1IDAgMCAwIDEyIDE0em0wLTEuNWExIDEgMCAwIDAgMS0xdi0zYTEgMSAwIDAgMC0yIDB2M2ExIDEgMCAwIDAgMSAxek0xMiAyYTEwIDEwIDAgMSAwIDEwIDEwQTEwLjAxMSAxMC4wMTEgMCAwIDAgMTIgMnptMCAxOGE4IDggMCAxIDEgOC04IDguMDEgOC4wMSAwIDAgMS04IDh6IiBmaWxsPSJyZWQiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/play.svg":
/*!***********************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/play.svg ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDkiIGhlaWdodD0iNTIiIHZpZXdCb3g9Ii01IDAgNDkgNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxwYXRoIGQ9Ik0xNy4yMjEgOC4zNDVjMi41NTYtNC4yNTkgNi43MDItNC4yNTIgOS4yNTQgMGwxMy42NzcgMjIuNzk2YzIuNTU1IDQuMjU4LjU5NyA3LjcxLTQuMzggNy43MUg3LjkyNGMtNC45NzMgMC02LjkzLTMuNDU4LTQuMzgtNy43MUwxNy4yMjIgOC4zNDV6IiBpZD0iYSIvPjwvZGVmcz48dXNlIHN0cm9rZT0iI0ZGRiIgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiIHRyYW5zZm9ybT0icm90YXRlKDkwIDIwLjg1IDIzLjAwMykiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/warning.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/warning.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0eWxlPSItbXMtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKSI+PHBhdGggZD0iTTEyIDE2YTEgMSAwIDEgMCAxIDEgMSAxIDAgMCAwLTEtMXptMTAuNjcgMS40Ny04LjA1LTE0YTMgMyAwIDAgMC01LjI0IDBsLTggMTRBMyAzIDAgMCAwIDMuOTQgMjJoMTYuMTJhMyAzIDAgMCAwIDIuNjEtNC41M3ptLTEuNzMgMmExIDEgMCAwIDEtLjg4LjUxSDMuOTRhMSAxIDAgMCAxLS44OC0uNTEgMSAxIDAgMCAxIDAtMWw4LTE0YTEgMSAwIDAgMSAxLjc4IDBsOC4wNSAxNGExIDEgMCAwIDEgLjA1IDEuMDJ6TTEyIDhhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAyIDBWOWExIDEgMCAwIDAtMS0xeiIgZmlsbD0iI2UwYmIwMCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/debugger/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/debugger/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/debugger/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/debugger/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/debugger/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/debugger/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_add_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./add.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/add.svg");
/* harmony import */ var _url_loader_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./debug-unread.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug-unread.svg");
/* harmony import */ var _url_loader_debug_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./debug.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/debug.svg");
/* harmony import */ var _url_loader_delete_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./delete.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/delete.svg");
/* harmony import */ var _url_loader_download_white_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./download-white.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/download-white.svg");
/* harmony import */ var _url_loader_error_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./error.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/error.svg");
/* harmony import */ var _url_loader_play_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url-loader!./play.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/play.svg");
/* harmony import */ var _url_loader_warning_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! url-loader!./warning.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/debugger/warning.svg");
/* harmony import */ var _libraries_common_cs_download_blob_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../libraries/common/cs/download-blob.js */ "./src/addons/libraries/common/cs/download-blob.js");
/* harmony import */ var _pause_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../pause/module.js */ "./src/addons/addons/pause/module.js");
/* inserted by pull.js */









const _twGetAsset = path => {
  if (path === "/add.svg") return _url_loader_add_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/debug-unread.svg") return _url_loader_debug_unread_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  if (path === "/debug.svg") return _url_loader_debug_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
  if (path === "/delete.svg") return _url_loader_delete_svg__WEBPACK_IMPORTED_MODULE_3__["default"];
  if (path === "/download-white.svg") return _url_loader_download_white_svg__WEBPACK_IMPORTED_MODULE_4__["default"];
  if (path === "/error.svg") return _url_loader_error_svg__WEBPACK_IMPORTED_MODULE_5__["default"];
  if (path === "/play.svg") return _url_loader_play_svg__WEBPACK_IMPORTED_MODULE_6__["default"];
  if (path === "/warning.svg") return _url_loader_warning_svg__WEBPACK_IMPORTED_MODULE_7__["default"];
  throw new Error("Unknown asset: ".concat(path));
};



/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  global,
  console,
  msg
}) {
  let showingConsole, ScratchBlocks;
  const vm = addon.tab.traps.vm;
  const container = document.createElement("div");
  container.className = "sa-debugger-container";
  const buttonContainer = document.createElement("div");
  buttonContainer.className = addon.tab.scratchClass("button_outlined-button", "stage-header_stage-button");
  const buttonContent = document.createElement("div");
  buttonContent.className = addon.tab.scratchClass("button_content");
  const buttonImage = document.createElement("img");
  buttonImage.className = addon.tab.scratchClass("stage-header_stage-button-icon");
  buttonImage.draggable = false;
  buttonImage.src = _twGetAsset("/debug.svg");
  buttonContent.appendChild(buttonImage);
  buttonContainer.appendChild(buttonContent);
  container.appendChild(buttonContainer);
  buttonContainer.addEventListener("click", () => toggleConsole(true));
  let hasLoggedPauseError = false;

  const pause = (_, thread) => {
    if (addon.tab.redux.state.scratchGui.mode.isPlayerOnly) {
      if (!hasLoggedPauseError) {
        addLog(msg("cannot-pause-player"), thread, "error");
        hasLoggedPauseError = true;
      }

      return;
    }

    Object(_pause_module_js__WEBPACK_IMPORTED_MODULE_9__["setPaused"])(!_pause_module_js__WEBPACK_IMPORTED_MODULE_9__["paused"]);
    const pauseAddonButton = document.querySelector(".pause-btn");
    if (!pauseAddonButton || getComputedStyle(pauseAddonButton).display === "none") toggleConsole(true);
  };

  addon.tab.addBlock("\u200B\u200Bbreakpoint\u200B\u200B", {
    args: [],
    displayName: msg("block-breakpoint"),
    callback: pause
  });
  addon.tab.addBlock("\u200B\u200Blog\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-log"),
    callback: ({
      content
    }, thread) => {
      addLog(content, thread, "log");
    }
  });
  addon.tab.addBlock("\u200B\u200Bwarn\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-warn"),
    callback: ({
      content
    }, thread) => {
      addLog(content, thread, "warn");
    }
  });
  addon.tab.addBlock("\u200B\u200Berror\u200B\u200B %s", {
    args: ["content"],
    displayName: msg("block-error"),
    callback: ({
      content
    }, thread) => {
      addLog(content, thread, "error");
    }
  });
  const consoleWrapper = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_card", {
      others: "debug"
    })
  });
  const consoleTitle = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_header-buttons")
  });
  const consoleText = Object.assign(document.createElement("h1"), {
    innerText: msg("console")
  });
  const extraContainer = Object.assign(document.createElement("div"), {
    className: "extra-log-container"
  });

  const goToBlock = (targetId, blockId) => {
    const workspace = Blockly.getMainWorkspace();
    const offsetX = 32,
          offsetY = 32;

    if (targetId !== vm.editingTarget.id) {
      // note: this is O(n) so don't call it if unnecessary!
      if (vm.runtime.getTargetById(targetId)) {
        vm.setEditingTarget(targetId); // Should not cause recursion

        setTimeout(() => goToBlock(targetId, blockId), 300);
      }

      return;
    }

    const block = workspace.getBlockById(blockId);
    if (!block) return; // Don't scroll to blocks in the flyout

    if (block.workspace.isFlyout) return; // Make sure the code tab is active

    if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex !== 0) {
      addon.tab.redux.dispatch({
        type: "scratch-gui/navigation/ACTIVATE_TAB",
        activeTabIndex: 0
      });
      setTimeout(() => goToBlock(targetId, blockId), 0);
      return;
    } // Copied from devtools. If it's code gets improved for this function, bring those changes here too.


    let root = block.getRootBlock();
    let base = block;

    while (base.getOutputShape() && base.getSurroundParent()) {
      base = base.getSurroundParent();
    }

    let ePos = base.getRelativeToSurfaceXY(),
        // Align with the top of the block
    rPos = root.getRelativeToSurfaceXY(),
        // Align with the left of the block 'stack'
    scale = workspace.scale,
        x = rPos.x * scale,
        y = ePos.y * scale,
        xx = block.width + x,
        // Turns out they have their x & y stored locally, and they are the actual size rather than scaled or including children...
    yy = block.height + y,
        s = workspace.getMetrics();

    if (x < s.viewLeft + offsetX - 4 || xx > s.viewLeft + s.viewWidth || y < s.viewTop + offsetY - 4 || yy > s.viewTop + s.viewHeight) {
      let sx = x - s.contentLeft - offsetX,
          sy = y - s.contentTop - offsetY;
      workspace.scrollbar.set(sx, sy);
    } // Flashing


    const myFlash = {
      block: null,
      timerID: null,
      colour: null
    };

    if (myFlash.timerID > 0) {
      clearTimeout(myFlash.timerID);
      myFlash.block.setColour(myFlash.colour);
    }

    let count = 4;
    let flashOn = true;
    myFlash.colour = block.getColour();
    myFlash.block = block;

    function _flash() {
      if (!myFlash.block.svgPath_) {
        myFlash.timerID = count = 0;
        flashOn = true;
        return;
      }

      myFlash.block.svgPath_.style.fill = flashOn ? "#ffff80" : myFlash.colour;
      flashOn = !flashOn;
      count--;

      if (count > 0) {
        myFlash.timerID = setTimeout(_flash, 200);
      } else {
        myFlash.timerID = 0;
      }
    }

    _flash();
  };

  extraContainer.addEventListener("click", e => {
    const elem = e.target;
    if (elem.classList.contains("deletedTarget")) return;
    const targetId = elem.dataset.targetId;
    const blockId = elem.dataset.blockId;
    if (targetId && blockId) goToBlock(targetId, blockId);
  });
  const consoleList = Object.assign(document.createElement("div"), {
    className: "logs"
  });
  const buttons = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_header-buttons-right")
  });
  const unpauseButton = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_shrink-expand-button", {
      others: "sa-debugger-unpause"
    }),
    draggable: false
  });
  const unpauseImg = Object.assign(document.createElement("img"), {
    src: _twGetAsset("/play.svg")
  });
  const unpauseText = Object.assign(document.createElement("span"), {
    innerText: msg("unpause")
  });
  const exportButton = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_shrink-expand-button"),
    title: msg("export-desc"),
    draggable: false
  });
  const exportImg = Object.assign(document.createElement("img"), {
    src: _twGetAsset("/download-white.svg")
  });
  const exportText = Object.assign(document.createElement("span"), {
    innerText: msg("export")
  });
  const trashButton = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_shrink-expand-button"),
    draggable: false
  });
  const trashImg = Object.assign(document.createElement("img"), {
    src: _twGetAsset("/delete.svg")
  });
  const trashText = Object.assign(document.createElement("span"), {
    innerText: msg("clear")
  });
  const closeButton = Object.assign(document.createElement("div"), {
    className: addon.tab.scratchClass("card_remove-button"),
    draggable: false
  });
  const closeImg = Object.assign(document.createElement("img"), {
    className: addon.tab.scratchClass("close-button_close-icon"),
    src: _twGetAsset("/add.svg")
  });
  const closeText = Object.assign(document.createElement("span"), {
    innerText: msg("close")
  });
  consoleTitle.append(consoleText, buttons);
  buttons.append(unpauseButton, exportButton, trashButton, closeButton);
  trashButton.append(trashImg, trashText);
  closeButton.append(closeImg, closeText);
  exportButton.append(exportImg, exportText);
  unpauseButton.append(unpauseImg, unpauseText);
  extraContainer.append(consoleList);
  consoleWrapper.append(consoleTitle, extraContainer);
  document.body.append(consoleWrapper);
  consoleTitle.addEventListener("mousedown", dragMouseDown);
  let isScrolledToEnd = true;
  extraContainer.addEventListener("wheel", e => {
    // When user scrolls up, stop automatically scrolling down
    if (e.deltaY < 0) {
      isScrolledToEnd = false;
    }
  }, {
    passive: true
  });
  extraContainer.addEventListener("scroll", () => {
    isScrolledToEnd = extraContainer.scrollTop + 5 >= extraContainer.scrollHeight - extraContainer.clientHeight;
  }, {
    passive: true
  });

  const getTargetInfo = (id, cache = null) => {
    if (cache && cache[id]) return cache[id];
    const target = vm.runtime.getTargetById(id);
    let item;

    if (target) {
      item = {
        name: target.getName(),
        isDeleted: false
      };
    } else {
      item = {
        name: msg("deleted-sprite"),
        isDeleted: true
      };
    }

    if (cache) cache[id] = item;
    return item;
  };

  let mouseOffsetX = 0;
  let mouseOffsetY = 0;
  let lastX = 0;
  let lastY = 0;

  function dragMouseDown(e) {
    e.preventDefault();
    mouseOffsetX = e.clientX - consoleWrapper.offsetLeft;
    mouseOffsetY = e.clientY - consoleWrapper.offsetTop;
    lastX = e.clientX;
    lastY = e.clientY;
    document.addEventListener("mouseup", closeDragElement);
    document.addEventListener("mousemove", elementDrag);
  }

  function dragConsole(x, y) {
    lastX = x;
    lastY = y;
    const width = (document.documentElement.clientWidth || document.body.clientWidth) - 1;
    const height = (document.documentElement.clientHeight || document.body.clientHeight) - 1;
    const clampedX = Math.max(0, Math.min(x - mouseOffsetX, width - consoleWrapper.offsetWidth));
    const clampedY = Math.max(0, Math.min(y - mouseOffsetY, height - consoleWrapper.offsetHeight));
    consoleWrapper.style.left = clampedX + "px";
    consoleWrapper.style.top = clampedY + "px";
  }

  function elementDrag(e) {
    e.preventDefault();
    dragConsole(e.clientX, e.clientY);
  }

  window.addEventListener("resize", () => {
    dragConsole(lastX, lastY);
  });

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.removeEventListener("mouseup", closeDragElement);
    document.removeEventListener("mousemove", elementDrag);
  }

  trashButton.addEventListener("click", () => {
    document.querySelectorAll(".log").forEach((log, i) => log.remove());
    closeDragElement();
    logs = [];
    isScrolledToEnd = true;
  });
  trashButton.addEventListener("mouseup", () => {
    closeDragElement();
  });
  closeButton.addEventListener("click", () => toggleConsole(false));
  closeButton.addEventListener("mouseup", () => closeDragElement());

  let download = (filename, text) => Object(_libraries_common_cs_download_blob_js__WEBPACK_IMPORTED_MODULE_8__["default"])(filename, new Blob([text], {
    type: "text/plain"
  }));

  unpauseButton.addEventListener("click", () => Object(_pause_module_js__WEBPACK_IMPORTED_MODULE_9__["setPaused"])(false));
  if (!_pause_module_js__WEBPACK_IMPORTED_MODULE_9__["paused"]) unpauseButton.style.display = "none";
  Object(_pause_module_js__WEBPACK_IMPORTED_MODULE_9__["onPauseChanged"])(newPauseValue => unpauseButton.style.display = newPauseValue ? "" : "none");
  exportButton.addEventListener("click", e => {
    const defaultFormat = "{sprite}: {content} ({type})";
    const exportFormat = e.shiftKey ? prompt(msg("enter-format"), defaultFormat) : defaultFormat;
    if (!exportFormat) return;
    closeDragElement();
    const targetInfoCache = Object.create(null);
    let file = logs.map(({
      targetId,
      type,
      content
    }) => exportFormat.replace(/\{(sprite|type|content)\}/g, (_, match) => ({
      sprite: getTargetInfo(targetId, targetInfoCache).name,
      type,
      content
    })[match])).join("\n");
    download("logs.txt", file);
  });
  let logs = [];
  let scrollQueued = false;

  const createLogWrapper = type => {
    const wrapper = document.createElement("div");
    wrapper.className = "log";
    wrapper.classList.add(type);
    return wrapper;
  };

  const createLogText = text => {
    const s = document.createElement("span");
    s.innerText = text;
    return s;
  };

  const addLog = (content, thread, type) => {
    const wrapper = createLogWrapper(type);
    const target = thread.target;
    const parentTarget = target.isOriginal ? target : target.sprite.clones[0];
    const targetId = parentTarget.id;
    consoleList.append(wrapper);

    if (type !== "log") {
      const imageURL = _twGetAsset(type === "error" ? "/error.svg" : "/warning.svg");

      const icon = document.createElement("img");
      icon.src = imageURL;
      icon.alt = icon.title = msg("icon-" + type);
      icon.className = "logIcon";
      wrapper.appendChild(icon);
    }

    const blockId = thread.peekStack();
    const block = target.blocks.getBlock(blockId);

    if (block && ScratchBlocks) {
      var _Object$values$;

      const inputId = (_Object$values$ = Object.values(block.inputs)[0]) === null || _Object$values$ === void 0 ? void 0 : _Object$values$.block;
      const inputBlock = target.blocks.getBlock(inputId);

      if (inputBlock && inputBlock.opcode !== "text") {
        let text, category;

        if (inputBlock.opcode === "data_variable" || inputBlock.opcode === "data_listcontents" || inputBlock.opcode === "argument_reporter_string_number" || inputBlock.opcode === "argument_reporter_boolean") {
          text = Object.values(inputBlock.fields)[0].value;

          if (inputBlock.opcode === "data_variable") {
            category = "data";
          } else if (inputBlock.opcode === "data_listcontents") {
            category = "list";
          } else {
            category = "more";
          }
        } else {
          // Try to call things like https://github.com/LLK/scratch-blocks/blob/develop/blocks_vertical/operators.js
          let jsonData;
          const fakeBlock = {
            jsonInit(data) {
              jsonData = data;
            }

          };
          const blockConstructor = ScratchBlocks.Blocks[inputBlock.opcode];

          if (blockConstructor) {
            try {
              blockConstructor.init.call(fakeBlock);
            } catch (e) {// ignore
            }
          } // If the block has a simple message with no arguments, display it


          if (jsonData && jsonData.message0 && !jsonData.args0) {
            text = jsonData.message0;
            category = jsonData.category;
          }
        }

        if (text && category) {
          const blocklyColor = ScratchBlocks.Colours[category === "list" ? "data_lists" : category];

          if (blocklyColor) {
            const inputSpan = document.createElement("span");
            inputSpan.textContent = text;
            inputSpan.className = "console-variable";
            const colorCategoryMap = {
              list: "data-lists",
              more: "custom"
            };
            inputSpan.dataset.category = colorCategoryMap[category] || category;
            inputSpan.style.backgroundColor = blocklyColor.primary;
            wrapper.append(inputSpan);
          }
        }
      }
    }

    logs.push({
      targetId,
      type,
      content
    });
    wrapper.append(createLogText(content));
    let link = document.createElement("a");
    link.textContent = target.isOriginal ? target.getName() : msg("clone-of", {
      spriteName: parentTarget.getName()
    });
    link.className = "logLink";
    link.dataset.blockId = blockId;
    link.dataset.targetId = targetId;

    if (!target.isOriginal) {
      link.dataset.isClone = "true";
    }

    wrapper.appendChild(link);

    if (!scrollQueued && isScrolledToEnd) {
      scrollQueued = true;
      queueMicrotask(scrollToEnd);
    }

    if (!showingConsole) {
      const unreadImage = _twGetAsset("/debug-unread.svg");

      if (buttonImage.src !== unreadImage) buttonImage.src = unreadImage;
    }
  };

  const scrollToEnd = () => {
    scrollQueued = false;
    extraContainer.scrollTop = extraContainer.scrollHeight;
  };

  const toggleConsole = (show = !showingConsole) => {
    showingConsole = show;
    consoleWrapper.style.display = show ? "flex" : "";

    if (show) {
      buttonImage.src = _twGetAsset("/debug.svg");
      const cacheObj = Object.create(null);

      for (const logLinkElem of document.getElementsByClassName("logLink")) {
        const targetId = logLinkElem.dataset.targetId;
        if (!targetId) return;
        const tInfo = getTargetInfo(targetId, cacheObj);
        logLinkElem.textContent = tInfo.name;

        if (tInfo.isDeleted) {
          logLinkElem.classList.add("deletedTarget");
        } else if (logLinkElem.dataset.isClone) {
          logLinkElem.textContent = msg("clone-of", {
            spriteName: tInfo.name
          });
        }
      }

      if (isScrolledToEnd) {
        scrollToEnd();
      }
    }
  };

  if (addon.tab.redux.state && addon.tab.redux.state.scratchGui.stageSize.stageSize === "small") {
    document.body.classList.add("sa-debugger-small");
  }

  document.addEventListener("click", e => {
    if (e.target.closest("[class*='stage-header_stage-button-first']")) {
      document.body.classList.add("sa-debugger-small");
    } else if (e.target.closest("[class*='stage-header_stage-button-last']")) {
      document.body.classList.remove("sa-debugger-small");
    }
  }, {
    capture: true
  });

  while (true) {
    await addon.tab.waitForElement('[class*="stage-header_stage-size-row"]', {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "scratch-gui/mode/SET_FULL_SCREEN", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"]
    });

    if (addon.tab.editorMode === "editor") {
      ScratchBlocks = await addon.tab.traps.getBlockly();
      addon.tab.appendToSharedSpace({
        space: "stageHeader",
        element: container,
        order: 0
      });
    } else {
      toggleConsole(false);
    }
  }
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/download-blob.js":
/*!*********************************************************!*\
  !*** ./src/addons/libraries/common/cs/download-blob.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// From https://github.com/LLK/scratch-gui/blob/develop/src/lib/download-blob.js
/* harmony default export */ __webpack_exports__["default"] = ((filename, blob) => {
  const downloadLink = document.createElement("a");
  document.body.appendChild(downloadLink); // Use special ms version if available to get it working on Edge.

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }

  if ("download" in HTMLAnchorElement.prototype) {
    const url = window.URL.createObjectURL(blob);
    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.type = blob.type;
    downloadLink.click(); // remove the link after a timeout to prevent a crash on iOS 13 Safari

    window.setTimeout(() => {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(url);
    }, 1000);
  } else {
    // iOS 12 Safari, open a new page and set href to data-uri
    let popup = window.open("", "_blank");
    const reader = new FileReader();

    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };

    reader.readAsDataURL(blob);
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-debugger.js.map