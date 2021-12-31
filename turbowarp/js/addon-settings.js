var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"addon-settings": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/addon-settings.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player","addon-settings~addons~editor~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/addons/settings/settings.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Copyright (C) 2021 Thomas Weber\n *\n * This program is free software: you can redistribute it and/or modify\n * it under the terms of the GNU General Public License version 3 as\n * published by the Free Software Foundation.\n *\n * This program is distributed in the hope that it will be useful,\n * but WITHOUT ANY WARRANTY; without even the implied warranty of\n * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\n * GNU General Public License for more details.\n *\n * You should have received a copy of the GNU General Public License\n * along with this program.  If not, see <https://www.gnu.org/licenses/>.\n */\n\n/* #E5F0FF */\n\n/* #E9F1FC */\n\n/* #D9E3F2 */\n\n/* 90% transparent version of motion-primary */\n\n/* #FFFFFF */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* 15% transparent version of black */\n\n/* #575E75 */\n\n/* 35% transparent version of motion-primary */\n\n/* 15% transparent version of motion-primary */\n\n/* opt-in theme overrides */\n\n/* #FF661A */\n\n/* #E64D00 */\n\n/* #CF63CF */\n\n/* #BD42BD */\n\n/* #FFAB19 */\n\n/* #FF8C1A */\n\n/* #0FBD8C */\n\n/* #0FBD8C */\n\n/* #FF8C1A */\n\n/* #FFB366 */\n\n/* #FF8C1A */\n\n/* 35% transparent version of extensions-primary */\n\n/* opaque version of extensions-transparent, on white bg */\n\n/* lighter than motion-primary */\n\nbody {\n    background-color: white;\n    color: black;\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n}\n\nbody[theme=\"dark\"] {\n    background-color: #222222;\n    color: white;\n}\n\na[href] {\n    color: #2a67eb;\n    text-decoration: underline;\n}\n\n[theme=\"dark\"] a[href] {\n    color: #6d9bff;\n}\n\na:active, a:focus {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_container_3vJ_s {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n}\n\n.settings_section_3XEVc {\n    max-width: 1280px;\n    margin: auto;\n}\n\n.settings_header_HXeeT {\n    position: relative;\n    padding: 8px 20px;\n    background-color: #fcfcfc;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n}\n\n[theme=\"dark\"] .settings_header_HXeeT {\n    background-color: #222222;\n}\n\n@media (max-width: 700px) {\n    .settings_header_HXeeT {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_header_HXeeT .settings_section_3XEVc {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.settings_button_3Zf4L {\n    color: #000;\n    background: #efefef;\n    border: 1px solid #acacac;\n    padding: 8px 12px;\n    border-radius: 4px;\n    outline: none;\n    height: 32px;\n    font-family: inherit;\n    font-size: 14px;\n    transition: 0.25s ease;\n    transition-property: background;\n    display: flex;\n    align-items: center;\n}\n\n[theme=\"dark\"] .settings_button_3Zf4L {\n    color: #fff;\n    background: #222222;\n    border-color: #000;\n}\n\n.settings_button_3Zf4L:hover {\n    background: #aaaaaa;\n}\n\n[theme=\"dark\"] .settings_button_3Zf4L:hover {\n    background: #151515;\n}\n\n.settings_button_3Zf4L:active, .settings_button_3Zf4L:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_search-container_14AR7 {\n    display: flex;\n    background-color: #f0f0f0;\n    color: #222;\n    border: 1px solid #cecece;\n    border-radius: 4px;\n}\n\n.settings_search-container_14AR7:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_search-input_1OS9U {\n    color: inherit;\n    width: 150px;\n    height: 16px;\n    padding: 10px 0 10px 15px;\n    border: none;\n    outline: none;\n    background-color: transparent;\n    font-size: 14px;\n}\n\n/* legacy edge */\n\n.settings_search-input_1OS9U::-ms-clear {\n    display: none;\n}\n\n.settings_search-button_1PO4j {\n    height: 36px;\n    width: 36px;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    background-color: transparent;\n    background-image: url(" + escape(__webpack_require__(/*! ./search.svg */ "./src/addons/settings/search.svg")) + ");\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n[theme=\"dark\"] .settings_search-container_14AR7 {\n    color: white;\n    background-color: #111111;\n    border-color: #222222;\n}\n\n.settings_search-input_1OS9U:not([value=\"\"]) ~ .settings_search-button_1PO4j {\n    background-image: url(" + escape(__webpack_require__(/*! ./clear.svg */ "./src/addons/settings/clear.svg")) + ") !important;\n}\n\n.settings_feedback-button-outer_3BvjT {\n    background: #f0f0f0;\n    border: 1px solid #cecece;\n    color: #333 !important;\n    height: 36px;\n    box-sizing: border-box;\n    border-radius: 4px;\n    padding: 0 12px;\n    margin-left: 10px;\n    font-size: 12px;\n    outline: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none !important;\n}\n\n[theme=\"dark\"] .settings_feedback-button-outer_3BvjT {\n    background-color: white;\n    border-color: white;\n}\n\n.settings_feedback-button-outer_3BvjT:active, .settings_feedback-button-outer_3BvjT:focus-within {\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_feedback-button-inner_1iiHA {\n    text-decoration: none;\n    font-weight: bold;\n    text-align: center;\n}\n\n[theme=\"dark\"] .settings_search-button_1PO4j,\n[theme=\"dark\"] .settings_addon-group-expand_3rkIa,\n[theme=\"dark\"] .settings_extension-image_2jXeB,\n[theme=\"dark\"] .settings_reset-button_1rOZQ img,\n[theme=\"dark\"] .settings_reset-color-button_378LC img {\n    filter: invert(100%);\n}\n\n.settings_addons_WnqmP {\n    overflow-y: auto;\n    overflow-x: hidden;\n    padding: 10px 20px;\n    height: 100%;\n}\n\n@media (max-width: 700px) {\n    .settings_addons_WnqmP {\n        padding-left: 5px;\n        padding-right: 5px;\n    }\n}\n\n.settings_addon-group_2YNj5 {\n    margin: 0 0 10px 0;\n}\n\n.settings_addon-group-name_3z8E3 {\n    background: none;\n    border: none;\n    width: 100%;\n    display: flex;\n    align-items: center;\n}\n\n.settings_addon-group-name_3z8E3::after {\n    margin-left: 16px;\n    content: '';\n    border-top: 1px solid #cfcfcf;\n    width: 100px;\n    flex: 1;\n}\n\n[theme=\"dark\"] .settings_addon-group-name_3z8E3::after {\n    border-color: #333;\n}\n\n.settings_addon-group-expand_3rkIa {\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n    border-radius: 5px;\n}\n\n.settings_addon-group-expand_3rkIa[data-open=\"true\"] {\n    transform: scaleY(-1);\n}\n\n.settings_addon-group-name_3z8E3:hover .settings_addon-group-expand_3rkIa {\n    background: #ccc;\n}\n\n.settings_addon_2zhVU {\n    background: #f7f7f7;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    border: 1px solid #cfcfcf;\n    border-radius: 5px;\n    margin: 10px 0 10px 0;\n    font-size: 14px;\n}\n\n.settings_addon-dirty_TnKY5 {\n    background: #ffeedf;\n}\n\n[theme=\"dark\"] .settings_addon_2zhVU {\n    background-color: #2a2a2a;\n    border-color: #333;\n}\n\n[theme=\"dark\"] .settings_addon-dirty_TnKY5 {\n    background: rgb(39, 50, 53);\n}\n\n.settings_addon-header_2QwGV {\n    padding: 0 10px;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_extension-image_2jXeB {\n    height: 16px;\n    width: 16px;\n    margin-right: 8px;\n}\n\n.settings_addon-title_1bgsn {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    white-space: nowrap;\n}\n\n.settings_addon-switch_2apOl {\n    margin-right: 8px;\n}\n\n.settings_addon-title-text_Q9wTc {\n\n}\n\n.settings_addon-id_1l36Y {\n    margin-left: 10px;\n}\n\n.settings_inline-description_1zx5M {\n    margin-left: 10px;\n    color: gray;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n}\n\n.settings_addon-operations_29Iap {\n    margin-left: auto;\n    padding-left: 4px;\n    display: flex;\n    align-items: center;\n}\n\n.settings_reset-button_1rOZQ {\n    display: flex;\n    border-radius: 4px;\n    cursor: pointer;\n    border: none;\n    background-color: transparent;\n}\n\n.settings_reset-button_1rOZQ:hover {\n    background: rgba(0, 0, 0, 0.05);\n}\n\n.settings_reset-button_1rOZQ:active, .settings_reset-button_1rOZQ:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_reset-button-image_2T0au {\n    padding: 1px 0;\n    height: 16px;\n    width: 16px;\n}\n\n[theme=\"dark\"] .settings_reset-button_1rOZQ:hover {\n    background: rgba(255, 255, 255, 0.05);\n}\n\n.settings_switch_3uQIK {\n    display: block;\n    background: #111;\n    width: 40px;\n    height: 20px;\n    border: none;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n.settings_switch_3uQIK[state=\"on\"] {\n    background: hsla(0, 100%, 65%, 1);\n}\n\n.settings_switch_3uQIK::before {\n    content: \"\";\n    position: absolute;\n    display: block;\n    width: 10px;\n    height: 10px;\n    background: #fff;\n    border-radius: 5px;\n    top: 5px;\n    left: 5px;\n    transition: 0.25s ease;\n    transition-property: background, left;\n}\n\n[theme=\"dark\"] .settings_switch_3uQIK::before {\n    background: #aaa;\n}\n\n.settings_switch_3uQIK[state=\"on\"]::before {\n    background: #fff;\n    left: 25px;\n}\n\n.settings_switch_3uQIK:active, .settings_switch_3uQIK:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_tag-container_2c2bM {\n    display: flex;\n    align-items: center;\n}\n\n.settings_tag_7BYRi {\n    border-radius: 4px;\n    padding: 2px 5px;\n    margin-left: 10px;\n    border-bottom: 2px solid #111;\n    white-space: nowrap;\n}\n\n.settings_tag-recommended_2NobT {\n    color: white;\n    background-color: #175ef8;\n    border-color: #0e44b8;\n}\n\n.settings_tag-theme_2OxTA {\n    color: black;\n    background-color: #9ad4cf;\n    border-color: #628f8c;\n}\n\n.settings_tag-beta_3l83I {\n    color: white;\n    background-color: #fd662b;\n    border-color: #d84a12;\n}\n\n.settings_tag-easter-egg_9f6db {\n    color: black;\n    background-color: #b9f38d;\n    border-color: #8fce5e;\n}\n\n.settings_tag-new_2UTQQ {\n    color: white;\n    background: #b117f8;\n    border-color: #6f0073;\n}\n\n.settings_tag-danger_3yaCL {\n    color: white;\n    background: #fd2b2b;\n    border-color: #d81212;\n}\n\n@media (max-width: 550px) {\n    .settings_tag_7BYRi:not(.settings_tag-beta_3l83I) {\n        display: none;\n    }\n}\n\n.settings_addon-details_34Bpn {\n    padding: 0 20px;\n    margin-bottom: 10px;\n    color: #111;\n}\n\n[theme=\"dark\"] .settings_addon-details_34Bpn {\n    color: #ddd;\n}\n\n.settings_credit-container_2f-MG {\n\n}\n\n.settings_credit-title_2ndRT {\n    padding-right: 5px;\n}\n\n.settings_credit_d1cAU {\n\n}\n\n.settings_description_1SX5a {\n\n}\n\n.settings_notice-container_23O_T {\n\n}\n\n.settings_notice_1Yx9M {\n    color: black;\n    padding: 10px;\n    border-radius: 5px;\n    font-weight: bold;\n    margin: 10px 0;\n    display: flex;\n    align-items: center;\n    background: rgba(154, 212, 207, 0.7);\n}\n\n.settings_notice-icon_2Y3NN {\n    height: 16px;\n    width: 16px;\n    margin-right: 10px;\n}\n\n.settings_setting-container_2hi13 {\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.settings_setting_qydbq {\n    margin: 10px;\n    margin-right: 30px;\n    min-height: 35px;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n}\n\n.settings_setting-label_kOihj {\n    font-weight: bold;\n    text-transform: uppercase;\n    color: #555;\n    font-size: 12px;\n    margin-right: 10px;\n}\n\n[theme=\"dark\"] .settings_setting-label_kOihj {\n    color: #aaa;\n}\n\n.settings_setting_qydbq input {\n    color: #000;\n    background: #efefef;\n    border: 1px solid #acacac;\n    padding: 8px 12px;\n    border-radius: 4px;\n    transition: 0.25s ease;\n    transition-property: background;\n}\n\n[theme=\"dark\"] .settings_setting_qydbq input {\n    color: #fff;\n    background: #222222;\n    border: 1px solid #000;\n}\n\n.settings_setting_qydbq input:focus, .settings_setting_qydbq input:active {\n    outline: none;\n    border-color: hsla(0, 100%, 65%, 1);\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"] {\n    height: 20px;\n    width: 20px;\n    padding: 0;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    background-color: white;\n    background-size: 20px 20px;\n    background-position: center center;\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:checked {\n    border-color: hsla(0, 100%, 65%, 1);\n    background-color: hsla(0, 100%, 65%, 1);\n    background-image: url(" + escape(__webpack_require__(/*! ./check.svg */ "./src/addons/settings/check.svg")) + ");\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:hover:not(:focus) {\n    border-color: hsla(0, 60%, 50%, 1);\n}\n\n.settings_setting_qydbq input[type=\"checkbox\"]:checked:hover {\n    border-color: hsla(0, 60%, 50%, 1);\n}\n\n.settings_setting_qydbq input[type=\"number\"] {\n    border-radius: 20px;\n    font-size: 14px;\n    width: 75px;\n}\n\n.settings_setting_qydbq input[type=\"color\"] {\n    height: 30px;\n    width: 100px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    outline: none;\n    border: 1px solid transparent;\n    border-radius: 4px 0px 0px 4px;\n}\n\n.settings_reset-color-button_378LC {\n    border-radius: 0 4px 4px 0px;\n    box-sizing: border-box;\n    height: 30px;\n}\n\n.settings_reset-color-button_378LC img {\n    width: 20px;\n    height: 20px;\n}\n\n.settings_select_3gkhn {\n    display: flex;\n}\n\n.settings_select-option_1kghH {\n    cursor: pointer;\n    padding: 10px;\n    margin: 0;\n    background: transparent;\n    border: none;\n    background: #f0f0f0;\n    color: #000;\n    border: 1px solid #aaa;\n    border-right-width: 0;\n    transition: 0.25s ease;\n    transition-property: color, background, border;\n}\n\n[theme=\"dark\"] .settings_select-option_1kghH {\n    color: #fff;\n    background: #222222;\n    border-color: #000000;\n}\n\n.settings_select-option_1kghH:first-child {\n    border-top-left-radius: 4px;\n    border-bottom-left-radius: 4px;\n}\n\n.settings_select-option_1kghH:last-child {\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    border-right-width: 1px;\n}\n\n.settings_select-option_1kghH.settings_selected_216ME {\n    color: white;\n    background: hsla(0, 100%, 65%, 1);\n}\n\n.settings_select-option_1kghH:active, .settings_select-option_1kghH:focus-within {\n    outline: none;\n    box-shadow: 0 0 0 3px hsla(0, 100%, 65%, 0.35);\n    z-index: 10;\n}\n\n.settings_presets_VTsxF {\n    width: 100%;\n}\n\n.settings_preset-button_2AjAU {\n    margin-right: 10px;\n}\n\n.settings_footer_1gjVj {\n    color: #444;\n}\n\n[theme=\"dark\"] .settings_footer_1gjVj {\n    color: #aaa;\n}\n\n.settings_unsupported-container_3HTJ- {\n    margin-bottom: 10px;\n}\n\n.settings_unsupported-addon_SHirC {\n    padding-left: 5px;\n}\n\n.settings_version_3uqkC {\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.settings_footer-buttons_1qdL9 {\n    margin-bottom: 10px;\n    display: flex;\n}\n\n.settings_footer-buttons_1qdL9 > .settings_button_3Zf4L {\n    margin-right: 10px;\n}\n\n.settings_reset-all-button_1sZUk {\n\n}\n\n.settings_export-button_pOzkO {\n\n}\n\n.settings_import-button_nCk8B {\n\n}\n\n.settings_no-results_21WJ5 {\n    text-align: center;\n    font-style: italic;\n}\n\n.settings_dirty-outer_1v5px {\n    display: flex;\n    position: absolute;\n    top: calc(100% - 8px);\n    left: 0;\n    width: calc(100% - 20px);\n    margin-left: 10px;\n    z-index: 10;\n    justify-content: center;\n    animation: settings_dirty-appear_rQ_S_ 0.2s ease;\n    pointer-events: none;\n}\n\n.settings_dirty-inner_2AjRe {\n    padding: 8px;\n    background: #ffeedf;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    border: 1px solid #cfcfcf;\n    border-radius: 4px;\n    pointer-events: auto;\n    display: flex;\n    align-items: center;\n    text-align: center;\n}\n\n[theme=\"dark\"] .settings_dirty-inner_2AjRe {\n    background: rgb(39, 50, 53);\n    border-color: #222;\n}\n\n.settings_dirty-button_48luC {\n    margin-left: 6px;\n}\n\n@keyframes settings_dirty-appear_rQ_S_ {\n    from {\n        transform: translateY(-100%);\n    }\n    to {\n        transform: translateY(0);\n    }\n}\n", ""]);

// exports
exports.locals = {
	"container": "settings_container_3vJ_s",
	"section": "settings_section_3XEVc",
	"header": "settings_header_HXeeT",
	"button": "settings_button_3Zf4L",
	"search-container": "settings_search-container_14AR7",
	"searchContainer": "settings_search-container_14AR7",
	"search-input": "settings_search-input_1OS9U",
	"searchInput": "settings_search-input_1OS9U",
	"search-button": "settings_search-button_1PO4j",
	"searchButton": "settings_search-button_1PO4j",
	"feedback-button-outer": "settings_feedback-button-outer_3BvjT",
	"feedbackButtonOuter": "settings_feedback-button-outer_3BvjT",
	"feedback-button-inner": "settings_feedback-button-inner_1iiHA",
	"feedbackButtonInner": "settings_feedback-button-inner_1iiHA",
	"addon-group-expand": "settings_addon-group-expand_3rkIa",
	"addonGroupExpand": "settings_addon-group-expand_3rkIa",
	"extension-image": "settings_extension-image_2jXeB",
	"extensionImage": "settings_extension-image_2jXeB",
	"reset-button": "settings_reset-button_1rOZQ",
	"resetButton": "settings_reset-button_1rOZQ",
	"reset-color-button": "settings_reset-color-button_378LC",
	"resetColorButton": "settings_reset-color-button_378LC",
	"addons": "settings_addons_WnqmP",
	"addon-group": "settings_addon-group_2YNj5",
	"addonGroup": "settings_addon-group_2YNj5",
	"addon-group-name": "settings_addon-group-name_3z8E3",
	"addonGroupName": "settings_addon-group-name_3z8E3",
	"addon": "settings_addon_2zhVU",
	"addon-dirty": "settings_addon-dirty_TnKY5",
	"addonDirty": "settings_addon-dirty_TnKY5",
	"addon-header": "settings_addon-header_2QwGV",
	"addonHeader": "settings_addon-header_2QwGV",
	"addon-title": "settings_addon-title_1bgsn",
	"addonTitle": "settings_addon-title_1bgsn",
	"addon-switch": "settings_addon-switch_2apOl",
	"addonSwitch": "settings_addon-switch_2apOl",
	"addon-title-text": "settings_addon-title-text_Q9wTc",
	"addonTitleText": "settings_addon-title-text_Q9wTc",
	"addon-id": "settings_addon-id_1l36Y",
	"addonId": "settings_addon-id_1l36Y",
	"inline-description": "settings_inline-description_1zx5M",
	"inlineDescription": "settings_inline-description_1zx5M",
	"addon-operations": "settings_addon-operations_29Iap",
	"addonOperations": "settings_addon-operations_29Iap",
	"reset-button-image": "settings_reset-button-image_2T0au",
	"resetButtonImage": "settings_reset-button-image_2T0au",
	"switch": "settings_switch_3uQIK",
	"tag-container": "settings_tag-container_2c2bM",
	"tagContainer": "settings_tag-container_2c2bM",
	"tag": "settings_tag_7BYRi",
	"tag-recommended": "settings_tag-recommended_2NobT",
	"tagRecommended": "settings_tag-recommended_2NobT",
	"tag-theme": "settings_tag-theme_2OxTA",
	"tagTheme": "settings_tag-theme_2OxTA",
	"tag-beta": "settings_tag-beta_3l83I",
	"tagBeta": "settings_tag-beta_3l83I",
	"tag-easter-egg": "settings_tag-easter-egg_9f6db",
	"tagEasterEgg": "settings_tag-easter-egg_9f6db",
	"tag-new": "settings_tag-new_2UTQQ",
	"tagNew": "settings_tag-new_2UTQQ",
	"tag-danger": "settings_tag-danger_3yaCL",
	"tagDanger": "settings_tag-danger_3yaCL",
	"addon-details": "settings_addon-details_34Bpn",
	"addonDetails": "settings_addon-details_34Bpn",
	"credit-container": "settings_credit-container_2f-MG",
	"creditContainer": "settings_credit-container_2f-MG",
	"credit-title": "settings_credit-title_2ndRT",
	"creditTitle": "settings_credit-title_2ndRT",
	"credit": "settings_credit_d1cAU",
	"description": "settings_description_1SX5a",
	"notice-container": "settings_notice-container_23O_T",
	"noticeContainer": "settings_notice-container_23O_T",
	"notice": "settings_notice_1Yx9M",
	"notice-icon": "settings_notice-icon_2Y3NN",
	"noticeIcon": "settings_notice-icon_2Y3NN",
	"setting-container": "settings_setting-container_2hi13",
	"settingContainer": "settings_setting-container_2hi13",
	"setting": "settings_setting_qydbq",
	"setting-label": "settings_setting-label_kOihj",
	"settingLabel": "settings_setting-label_kOihj",
	"select": "settings_select_3gkhn",
	"select-option": "settings_select-option_1kghH",
	"selectOption": "settings_select-option_1kghH",
	"selected": "settings_selected_216ME",
	"presets": "settings_presets_VTsxF",
	"preset-button": "settings_preset-button_2AjAU",
	"presetButton": "settings_preset-button_2AjAU",
	"footer": "settings_footer_1gjVj",
	"unsupported-container": "settings_unsupported-container_3HTJ-",
	"unsupportedContainer": "settings_unsupported-container_3HTJ-",
	"unsupported-addon": "settings_unsupported-addon_SHirC",
	"unsupportedAddon": "settings_unsupported-addon_SHirC",
	"version": "settings_version_3uqkC",
	"footer-buttons": "settings_footer-buttons_1qdL9",
	"footerButtons": "settings_footer-buttons_1qdL9",
	"reset-all-button": "settings_reset-all-button_1sZUk",
	"resetAllButton": "settings_reset-all-button_1sZUk",
	"export-button": "settings_export-button_pOzkO",
	"exportButton": "settings_export-button_pOzkO",
	"import-button": "settings_import-button_nCk8B",
	"importButton": "settings_import-button_nCk8B",
	"no-results": "settings_no-results_21WJ5",
	"noResults": "settings_no-results_21WJ5",
	"dirty-outer": "settings_dirty-outer_1v5px",
	"dirtyOuter": "settings_dirty-outer_1v5px",
	"dirty-appear": "settings_dirty-appear_rQ_S_",
	"dirtyAppear": "settings_dirty-appear_rQ_S_",
	"dirty-inner": "settings_dirty-inner_2AjRe",
	"dirtyInner": "settings_dirty-inner_2AjRe",
	"dirty-button": "settings_dirty-button_48luC",
	"dirtyButton": "settings_dirty-button_48luC"
};

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/lib/normalize.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody{margin:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\na{background-color:transparent}\na:active,a:hover{outline:0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nh1{font-size:2em;margin:.67em 0}\nmark{background:#ff0;color:#000}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-0.5em}\nsub{bottom:-0.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{box-sizing:content-box;height:0}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\nbutton{overflow:visible}\nbutton,select{text-transform:none}\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ninput{line-height:normal}\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]{-webkit-appearance:textfield;box-sizing:content-box}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\nfieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\ntextarea{overflow:auto}\noptgroup{font-weight:bold}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
/*!****************************************************!*\
  !*** ./node_modules/decode-uri-component/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),

/***/ "./node_modules/query-string/index.js":
/*!********************************************!*\
  !*** ./node_modules/query-string/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(/*! strict-uri-encode */ "./node_modules/strict-uri-encode/index.js");
var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
var decodeComponent = __webpack_require__(/*! decode-uri-component */ "./node_modules/decode-uri-component/index.js");

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

function extract(str) {
	var queryStart = str.indexOf('?');
	if (queryStart === -1) {
		return '';
	}
	return str.slice(queryStart + 1);
}

function parse(str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^[?#&]/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeComponent(val);

		formatter(decodeComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	if (opts.sort === false) {
		opts.sort = function () {};
	}

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort(opts.sort).map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};

exports.parseUrl = function (str, opts) {
	return {
		url: str.split('?')[0] || '',
		query: parse(extract(str), opts)
	};
};


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./node_modules/strict-uri-encode/index.js":
/*!*************************************************!*\
  !*** ./node_modules/strict-uri-encode/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ "./src/addons/addons-l10n-settings/de.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/de.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Fügt die Katzenstartblöcke vom Aprilscherz 2020 wieder zum Editor hinzu.\",\"cat-blocks/@info-watch\":\"Die \\\"Mauscursor ansehen\\\"-Option könnte im Editor die Leistung beeinträchtigen.\",\"cat-blocks/@name\":\"Katzenblöcke\",\"cat-blocks/@settings-name-watch\":\"Mauscursor ansehen\",\"editor-devtools/@description\":\"Fügt ein Suchfeld und neue Menüoptionen zum Editor hinzu: Kopieren/Einfügen von Blöcken, besseres Aufräumen, gehe zu Definitionen von Benutzerdefinierten Blöcken und vieles mehr!\",\"editor-devtools/@info-shortcuts\":\"Drücke \\\"Strg+F\\\", um die Suchbox zu fokusieren, \\\"Strg+Leertaste\\\", um das \\\"füge Block nach Namen ein\\\"-Popup zu öffnen, \\\"Strg+Rechts/Links\\\", um im Suchverlauf zu navigieren.\",\"editor-devtools/@name\":\"Entwicklertools\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Verbessere \\\"Blöcke aufräumen\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Um zu navigieren, klicke mit der mittleren Maustaste auf Variablen, benutzerdefinierte Blöcke oder Ereignisse\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Blöcke beim Mauscursor einfügen\",\"editor-searchable-dropdowns/@description\":\"Ermöglicht es dir, Block-Dropdowns zu durchsuchen.\",\"editor-searchable-dropdowns/@name\":\"Durchsuchbare Dropdown-Menüs\",\"data-category-tweaks-v2/@description\":\"Bietet Optimierungen für die Kategorie Daten (\\\"Variablen\\\") im Editor.\",\"data-category-tweaks-v2/@name\":\"Optimierungen für die Datenkategorie\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Datenblöcke über die Variablenliste bewegen\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Separate Listen-Kategorie\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Separate Kategorie für Variablen Nur für diese Figur\",\"block-palette-icons/@description\":\"Fügt Icons innerhalb der Farbigen Kreise, die die Blockkategorien unterscheiden, hinzu.\",\"block-palette-icons/@name\":\"Kategorienicons in Blockpalette\",\"hide-flyout/@description\":\"Blendet die Blockpalette automatisch aus, wenn sich die Maus nicht darüber befindet. Klicke auf das Schlossymbol, um es temporär zu fixieren. Alternativ kannst du den \\\"Kategorien klicken\\\"-Modus verwenden.\",\"hide-flyout/@info-hoverExplanation\":\"Der \\\"Palettenbereich-Hover\\\"-Modus erweitert nur den angezeigten Bereich. Wenn du Blöcke  dort hinziehen willst, ohne dass sie gelöscht werden, verwende einen der anderen Modi.\",\"hide-flyout/@name\":\"Automatisches Ausblenden für Blockpalette\",\"hide-flyout/@settings-name-speed\":\"Animationdauer\",\"hide-flyout/@settings-name-toggle\":\"Festlegen...\",\"hide-flyout/@settings-select-speed-default\":\"Standard\",\"hide-flyout/@settings-select-speed-long\":\"Lang\",\"hide-flyout/@settings-select-speed-none\":\"Keine\",\"hide-flyout/@settings-select-speed-short\":\"Kurz\",\"hide-flyout/@settings-select-toggle-category\":\"Kategorien klicken\",\"hide-flyout/@settings-select-toggle-cathover\":\"Kategorien hovern\",\"hide-flyout/@settings-select-toggle-hover\":\"Hover auf Palettenbereich\",\"mediarecorder/@description\":\"Fügt einen \\\"Aufnehmen\\\"-Knopf zur Menüleiste im Editor hinzu, mit dem du die Bühne des Projekts aufnehmen kannst.\",\"mediarecorder/@name\":\"Projektvideorekorder\",\"drag-drop/@description\":\"Lässt dich BIlder und Klänge vom Dateimanager zur Figuren-, Kostüm- und Klangliste ziehen. Du kannst auch Textdateien in Listen oder \\\"frage und warte\\\"-Felder ziehen.\",\"drag-drop/@name\":\"Drag and Drop-Unterstützung für Dateien\",\"drag-drop/@settings-name-use-hd-upload\":\"HD-Upload verwenden\",\"debugger/@description\":\"Fügt die neue Blockkategorie \\\"Debugger\\\" und ein \\\"Logs\\\"-Fenster im Editor hinzu. Die \\\"Log\\\", \\\"Warnung\\\" und \\\"Fehler\\\"-Blöcke werden die bestimmte Nachricht ins Logfenster schreiben. Der \\\"Breakpoint\\\"-Block wird das Projekt pausieren.\",\"pause/@description\":\"Fügt eine Pausetaste neben der grünen Flagge hinzu.\",\"pause/@name\":\"Pausetaste\",\"mute-project/@description\":\"Strg+Klicke auf die grüne Flagge, um das Projekt stummzuschalten bzw. die Stummschaltung aufzuheben.\",\"mute-project/@name\":\"Projektplayer stummschalten-Knopf\",\"clones/@description\":\"Fügt einen Zähler zum Editor hinzu, der die Anzahl aller Klone anzeigt.\",\"clones/@name\":\"Klonzähler\",\"mouse-pos/@description\":\"Zeigt die x/y-Position des Mauszeigers über der Bühne im Editor an.\",\"mouse-pos/@name\":\"Mauszeigerposition\",\"color-picker/@description\":\"Fügt Hexadezimalcode-Eingaben zum Farbwähler hinzu.\",\"color-picker/@name\":\"Hexadezimal-Farbwähler\",\"remove-sprite-confirm/@description\":\"Fragt, ob du sicher bist, wenn du eine Figur in einem Projekt löschst.\",\"remove-sprite-confirm/@name\":\"Löschen von Figuren bestätigen\",\"block-count/@description\":\"Zeigt die volle Anzahl von Blöcken in der Menüleiste des Projekteditors an. Früher Teil von \\\"Figuren- und Skriptanzahl\\\".\",\"block-count/@name\":\"Blockanzahl\",\"onion-skinning/@description\":\"Zeigt ein transparentes Bild des vorherigen oder nächsten Kostüms während dem Bearbeiten eines Kostüms. Du kannst es mit Knöpfen neben den Zoom-Knöpfen im Kostümeditor steuern.\",\"onion-skinning/@name\":\"Onion Skinning\",\"onion-skinning/@settings-name-afterTint\":\"Färbung für nächstes Kostüm\",\"onion-skinning/@settings-name-beforeTint\":\"Färbung für vorheriges Kostüm\",\"onion-skinning/@settings-name-default\":\"Standardmäßig einschalten\",\"onion-skinning/@settings-name-layering\":\"Standardschichtung\",\"onion-skinning/@settings-name-mode\":\"Standardmodus\",\"onion-skinning/@settings-name-next\":\"Standard nächste Kostüme\",\"onion-skinning/@settings-name-opacity\":\"Transparenz (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Transparenz-Abstufung (%)\",\"onion-skinning/@settings-name-previous\":\"Standard vorherige Kostüme\",\"onion-skinning/@settings-select-layering-behind\":\"Hinten\",\"onion-skinning/@settings-select-layering-front\":\"Vorne\",\"onion-skinning/@settings-select-mode-merge\":\"Bilder verbinden\",\"onion-skinning/@settings-select-mode-tint\":\"Farbüberlagerung\",\"bitmap-copy/@description\":\"Ermöglicht es dir, Raster-Bilder aus dem Maleditor in die Zwischenablage des Systems zu kopieren, sodass sie auf anderen Seiten oder Programmen eingefügt werden können.\",\"bitmap-copy/@info-norightclick\":\"\\\"Rechtsklick → kopieren\\\" ist nicht unterstützt. Du musst Strg+C drücken, während ein Bitmap Bild ausgewählt ist.\",\"bitmap-copy/@name\":\"Kopieren von Raster-Bildern\",\"2d-color-picker/@description\":\"Ersetzt die Schattierungs- und Helligkeitsschieberegler im Kostümeditor durch einen 2D-Farbenwähler. Halte die Umschalttaste während dem Ziehen des Mauszeigers gedrückt, um die Werte auf einer einzigen Achse zu ändern.\",\"2d-color-picker/@name\":\"2D-Farbenwähler\",\"better-img-uploads/@description\":\"Fügt einen neuen Knopf über dem \\\"Kostüm hochladen\\\"-Knopf, der hochgeladene Raster-Bilder automatisch in SVG (Vektor) umwandelt, um die Qualität nicht zu verlieren.\",\"better-img-uploads/@info-notSuitableEdit\":\"Verwende den HD Hochladen-Knopf lieber nicht, wenn du planst, das Bild nach dem Hochladen zu bearbeiten.\",\"better-img-uploads/@name\":\"Bilder mit hoher Auflösung hochladen\",\"better-img-uploads/@settings-name-fitting\":\"Bildgröße\",\"better-img-uploads/@settings-select-fitting-fill\":\"Durch Vergrößern an Bühne anpassen\",\"better-img-uploads/@settings-select-fitting-fit\":\"Durch Verkleinern an Bühne anpassen\",\"better-img-uploads/@settings-select-fitting-full\":\"Originalgröße\",\"custom-block-shape/@description\":\"Ändere die Blockhöhe, den Eckenradius und die Höhe der Laschen von Scratch-Blöcken.\",\"custom-block-shape/@info-paddingWarning\":\"Die Änderung der Blockhöhe ist nur für dich sichtbar, deshalb könnten sich deine Skripte, wenn andere Nutzer deine Projekte ansehen, überlappen.\",\"custom-block-shape/@name\":\"Anpassbare Blockform\",\"custom-block-shape/@preset-description-default2\":\"Scratch 2.0-ähnliche Blöcke\",\"custom-block-shape/@preset-description-default3\":\"Die normale Ansicht von Scratch 3.0-Blöcken\",\"custom-block-shape/@preset-description-flat2\":\"Scratch 2.0-Blöcke ohne Laschen und Ecken\",\"custom-block-shape/@preset-description-flat3\":\"Scratch 3.0-Blöcke ohne Laschen und Ecken\",\"custom-block-shape/@preset-name-default2\":\"2.0-Blöcke\",\"custom-block-shape/@preset-name-default3\":\"3.0-Blöcke\",\"custom-block-shape/@preset-name-flat2\":\"Flache 2.0\",\"custom-block-shape/@preset-name-flat3\":\"Flache 3.0\",\"custom-block-shape/@settings-name-cornerSize\":\"Eckengröße (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Laschenhöhe (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Blockhöhe (50-200%)\",\"editor-theme3/@description\":\"Bearbeite die Blockfarben für jede Kategorie im Editor.\",\"editor-theme3/@name\":\"Anpassbare Blockfarben\",\"editor-theme3/@preset-description-black\":\"Macht Blockhintergründe schwarz\",\"editor-theme3/@preset-description-dark\":\"Dunkle Versionen der Standardfarben\",\"editor-theme3/@preset-description-original\":\"Die originalen Blockfarben von Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Ereignisse, Steuerung, und Benutzerdefinierte Blöcke mit 2.0-inspirierten Farben\",\"editor-theme3/@preset-name-black\":\"Schwarz\",\"editor-theme3/@preset-name-dark\":\"Dunkel\",\"editor-theme3/@preset-name-original\":\"2.0-Farben\",\"editor-theme3/@preset-name-tweaks\":\"3.0-Optimierungen\",\"editor-theme3/@settings-name-Pen-color\":\"Erweiterungen\",\"editor-theme3/@settings-name-control-color\":\"Steuerung\",\"editor-theme3/@settings-name-custom-color\":\"benutzerdefiniert\",\"editor-theme3/@settings-name-data-color\":\"Variablen\",\"editor-theme3/@settings-name-data-lists-color\":\"Listen\",\"editor-theme3/@settings-name-events-color\":\"Ereignisse\",\"editor-theme3/@settings-name-input-color\":\"Eingabefelder in Blöcken\",\"editor-theme3/@settings-name-looks-color\":\"Aussehen\",\"editor-theme3/@settings-name-motion-color\":\"Bewegung\",\"editor-theme3/@settings-name-operators-color\":\"Operatoren\",\"editor-theme3/@settings-name-sensing-color\":\"Fühlen\",\"editor-theme3/@settings-name-sounds-color\":\"Klänge\",\"editor-theme3/@settings-name-text\":\"Textfarbe\",\"editor-theme3/@settings-select-text-black\":\"Schwarz\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Farbig auf schwarzem Hintergrund\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Farbig auf weißem Hintergrund\",\"editor-theme3/@settings-select-text-white\":\"Weiß\",\"editor-colored-context-menus/@description\":\"Macht die Kontextmenüs beim Rechtsklicken auf Blöcken farbig.\",\"editor-colored-context-menus/@name\":\"Farbige Kontextmenüs\",\"editor-stage-left/@description\":\"Verschiebt die Bühne auf die linke Seite des Editors.\",\"editor-stage-left/@name\":\"Bühne links anzeigen\",\"variable-manager/@description\":\"Fügt einen Tab neben \\\"Klänge\\\" im Editor hinzu, um Variablen und Listen einfach zu aktualisieren.\",\"variable-manager/@name\":\"Variablenmanager\",\"gamepad/@description\":\"Interagiere mit einem USB- oder Bluetoothcontroller/Gamepad mit Projekten.\",\"gamepad/@name\":\"Gamepad-Unterstützung\",\"gamepad/@settings-name-hide\":\"Einstellungenknopf ausblenden, wenn keine Controller erkannt wurden\",\"editor-sounds/@description\":\"Soundeffekte beim Verbinden und Löschen von Blöcken.\",\"editor-sounds/@name\":\"Soundeffekte im Editor\",\"folders/@description\":\"Fügt Ordner zur Figurenliste hinzu, sowie zur Kostüm- und Klangliste. Um einen Ordner zu erstellen, klicke mit der rechten Maustaste auf eine Figur und wähle \\\"neuer Ordner\\\". Klicke mit der rechten Maustaste eine Figur an, um sie in einen Ordner zu verschieben, oder ziehe sie in einen offenen Ordner.\",\"folders/@info-notice-folders-are-public\":\"Nutzer, die dieses Feature aktiviert haben, werden die Ordner in deinem Projekt sehen. Alle anderen werden die normale Figurenliste sehen (ohne Ordner).\",\"folders/@info-notice-sprite-names\":\"Dieses Feature funktioniert durch Hinzufügen von \\\"[OrdnerName]//\\\" am Beginn der Figurennamen.\",\"folders/@name\":\"Figurenordner\",\"block-switching/@description\":\"Klicke mit der rechten Maustaste auf einen Block, um ihn mit einem ähnlichen Block zu ersetzen.\",\"block-switching/@name\":\"Block-Austausch\",\"block-switching/@settings-name-border\":\"Rand hinzufügen\",\"block-switching/@settings-name-control\":\"Steuerung-Blöcke\",\"block-switching/@settings-name-customargs\":\"Argumente von benutzerdefinierten Blöcken\",\"block-switching/@settings-name-customargsmode\":\"Optionen für angezeigte Blockargumente\",\"block-switching/@settings-name-data\":\"Variablen-Blöcke\",\"block-switching/@settings-name-event\":\"Ereignisse-Blöcke\",\"block-switching/@settings-name-extension\":\"Erweiterungenblöcke\",\"block-switching/@settings-name-looks\":\"Aussehen-Blöcke\",\"block-switching/@settings-name-motion\":\"Bewegung-Blöcke\",\"block-switching/@settings-name-noop\":\"Zeige Option zum Ändern des Blocks auf sich selbst\",\"block-switching/@settings-name-operator\":\"Operatoren-Blöcke\",\"block-switching/@settings-name-sensing\":\"Fühlen-Blöcke\",\"block-switching/@settings-name-sound\":\"Klangblöcke\",\"block-switching/@settings-select-customargsmode-all\":\"Argumente in allen benutzerdefinierten Blöcken in der Figur\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Argumente in eigenem benutzerdefiniertem Block\",\"load-extensions/@description\":\"Fügt Musik, Malstift, und weitere Erweiterungen automatisch zur Blockkategorienliste hinzu.\",\"load-extensions/@name\":\"Erweiterungen automatisch hinzufügen\",\"load-extensions/@settings-name-music\":\"Musik\",\"load-extensions/@settings-name-pen\":\"Malstift\",\"load-extensions/@settings-name-text2speech\":\"Text zu Sprache\",\"load-extensions/@settings-name-translate\":\"Übersetzen\",\"custom-zoom/@description\":\"Personalisiere den Minimum-, Maximum-, und Startzoom und die Zoom-Geschwindigkeit für den Skriptbereich im Editor, und blende die Steuerelemente automatisch aus.\",\"custom-zoom/@name\":\"Benutzerdefinierter Codebereichzoom\",\"custom-zoom/@settings-name-autohide\":\"Zoom-Steuerelemente automatisch ausblenden\",\"custom-zoom/@settings-name-maxZoom\":\"Zoom-Maximum (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Zoom-Minimum (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Dauer der Animation für das automatische Ausblenden\",\"custom-zoom/@settings-name-startZoom\":\"Startzoom (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Zoom-Geschwindigkeit (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Standard\",\"custom-zoom/@settings-select-speed-long\":\"Lang\",\"custom-zoom/@settings-select-speed-none\":\"Keine\",\"custom-zoom/@settings-select-speed-short\":\"Kurz\",\"initialise-sprite-position/@description\":\"Ändere die Standard X/Y-Position von neuen Figuren.\",\"initialise-sprite-position/@name\":\"Personalisierbare Standardposition von neuen Figuren\",\"initialise-sprite-position/@settings-name-library\":\"Position der Figuren aus der Bibliothek zufällig festlegen\",\"initialise-sprite-position/@settings-name-x\":\"X-Position\",\"initialise-sprite-position/@settings-name-y\":\"Y-Position\",\"blocks2image/@description\":\"Klicke mit der rechten Maustaste auf den Codebereich, um Blöcke als SVG/PNG-Bilder zu exportieren\",\"blocks2image/@name\":\"Blöcke als Bild speichern\",\"remove-curved-stage-border/@description\":\"Entfernt den runden Rand um die Bühne, um die Ecken sichtbar zu machen.\",\"remove-curved-stage-border/@name\":\"Runden Bühnenrand entfernen\",\"transparent-orphans/@description\":\"Stelle die Transparenz für Blöcke im Editor ein, mit separaten Optionen für alleinstehende Blöcke (solche ohne Startblock) und Blöcke, die gerade gezogen werden.\",\"transparent-orphans/@name\":\"Durchsichtige Blöcke\",\"transparent-orphans/@settings-name-block\":\"Block Transparenz (%)\",\"transparent-orphans/@settings-name-dragged\":\"Gezogene Transparenz (%)\",\"transparent-orphans/@settings-name-orphan\":\"Alleinstehende Transparenz (%)\",\"paint-by-default/@description\":\"Ändert die Standardaktion von \\\"Figur/Kostüm/Hintergrund/Klang\\\" wählen\\\"-Knöpfen, die die Bibliothek standardmäßig öffnen.\",\"paint-by-default/@name\":\"Benutzerdefiniertes Verhalten von Hinzufügen-Buttons\",\"paint-by-default/@settings-name-backdrop\":\"Hintergrund hinzufügen\",\"paint-by-default/@settings-name-costume\":\"Kostüm hinzufügen\",\"paint-by-default/@settings-name-sound\":\"Klang hinzufügen\",\"paint-by-default/@settings-name-sprite\":\"Figur hinzufügen\",\"paint-by-default/@settings-select-backdrop-library\":\"Bibliothek\",\"paint-by-default/@settings-select-backdrop-paint\":\"Malen\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Überraschung\",\"paint-by-default/@settings-select-backdrop-upload\":\"Hochladen\",\"paint-by-default/@settings-select-costume-library\":\"Bibliothek\",\"paint-by-default/@settings-select-costume-paint\":\"Malen\",\"paint-by-default/@settings-select-costume-surprise\":\"Überraschen\",\"paint-by-default/@settings-select-costume-upload\":\"Hochladen\",\"paint-by-default/@settings-select-sound-library\":\"Bibliothek\",\"paint-by-default/@settings-select-sound-record\":\"Aufnehmen\",\"paint-by-default/@settings-select-sound-surprise\":\"Überraschung\",\"paint-by-default/@settings-select-sound-upload\":\"Hochladen\",\"paint-by-default/@settings-select-sprite-library\":\"Bibliothek\",\"paint-by-default/@settings-select-sprite-paint\":\"Malen\",\"paint-by-default/@settings-select-sprite-surprise\":\"Überraschung\",\"paint-by-default/@settings-select-sprite-upload\":\"Hochladen\",\"block-cherry-picking/@description\":\"Halte die Strg-Taste gedrückt, um einzelne Blöcke (anstatt des ganzen Stapels darunter) aus der Mitte eines Skripts zu nehmen.\",\"block-cherry-picking/@info-flipControls\":\"\\\"Steuerung invertieren\\\" legt das individuelle Nehmen von Blöcken als Standardmäßiges Verhalten fest. Halte Strg gedrückt, um den ganzen Stapel zu ziehen.\",\"block-cherry-picking/@info-macContextDisabled\":\"Auf macOS, verwende anstatt der Strg-Taste die Cmd-Taste.\",\"block-cherry-picking/@name\":\"Einzelne Blöcke mit Strg-Taste nehmen\",\"block-cherry-picking/@settings-name-invertDrag\":\"Steuerung invertieren\",\"hide-new-variables/@description\":\"Keine Anzeigen für neu erstellte Variablen oder Listen automatisch erstellen.\",\"hide-new-variables/@name\":\"Neue Variablen verstecken\",\"editor-extra-keys/@description\":\"Fügt mehr Tasten zum \\\"Taste () gedrückt?\\\" und \\\"Wenn Taste () gedrückt\\\" Block-Dropdown hinzu, wie Enter, Punkt, Komma und mehr.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"\\\"Experimentelle Tasten\\\" sind Tasten wie Gleich-Zeichen, Schrägstrich, Strichpunkt und mehr. Sie könnten auf manchen Betriebssystemen und Tastaturlayouts nicht funktionieren.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"\\\"Umschalttasten\\\" sind Tasten, die normalerweise das Drücken der Umschalt-Taste und eine Zahl benötigen, wie Rufezeichen, Dollar-Symbol und mehr. Diese Tasten funktionieren nur mit dem \\\"wenn Taste () gedrückt\\\"-Block und könnten auf manchen Betriebssystemen und Tastaturlayouts nicht funktionieren. \",\"editor-extra-keys/@name\":\"Unterstützung für weitere Tasten\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Experimentelle Tasten aktivieren\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Umschalttasten aktivieren\",\"hide-delete-button/@description\":\"Versteckt den Löschen-Knopf (das Mülleimer-Icon) von FIguren, Kostümen und Klängen. Sie können weiterhin mit dem Rechtsklick-Kontextmenü glöscht werden.\",\"hide-delete-button/@name\":\"Löschen-Knopf verstecken\",\"hide-delete-button/@settings-name-costumes\":\"Kostüme und Hintergründe\",\"hide-delete-button/@settings-name-sounds\":\"Klänge\",\"hide-delete-button/@settings-name-sprites\":\"Figuren\",\"no-script-bumping/@description\":\"Erlaubt es Skripten, herumbewegt und bearbeitet zu werden, ohne dabei das Fortbewegen von überlappenden Skripten zu verursachen.\",\"no-script-bumping/@name\":\"Überlappende Skripte nicht automatisch verschieben\",\"disable-stage-drag-select/@description\":\"Entfernt die Möglichkeit, Figuren auf der Bühne herumzuziehen, explizit ziehbare Figuren ausgenommen.\",\"disable-stage-drag-select/@info-shift\":\"Halte die Umschalttaste gedrückt, um sie normal zu ziehen, auch wenn sie nicht auf ziehbar gesetzt wurde.\",\"disable-stage-drag-select/@name\":\"Nicht ziehbare Figuren im Editor\",\"move-to-top-bottom/@description\":\"Fügt ein Kontextmenüelement zum Verschieben von Kostümen und Klängen an erste oder letzte Stelle der Liste. Früher Teil der Entwicklertools.\",\"move-to-top-bottom/@name\":\"Element an erste/letzte Stelle verschieben\",\"disable-paste-offset/@description\":\"Fügt kopierte Elemente an ihrer ursprünglichen Position im Kostümeditor ein, antstatt die leicht zu verschieben.\",\"disable-paste-offset/@name\":\"Eingefügte Elemente nicht verschieben\",\"block-duplicate/@description\":\"Dupliziere schnell ein SKript, indem du es mit gedrückter Alt-Taste ziehst. Halte gleichzeitig auch Strg gedrückt, um nur den einzelnen Block zu duplizieren.\",\"block-duplicate/@info-mac\":\"Verwende auf macOS die Option-Taste statt der Alt-Taste und die Command-Taste statt der Strg-Taste.\",\"block-duplicate/@name\":\"Skripte mit Alt-Taste duplizieren\",\"swap-local-global/@description\":\"Fügt weitere Optionen beim Umbenennen einer vorhandenen Variablen oder Liste hinzu: ermöglicht das Wechseln zwischen \\\"Für alle Figuren\\\" und \\\"Nur für diese Figur\\\" und ob Variablen in der Cloud gespeichert werden. Fügt auch eine neue Option beim Rechtsklicken auf eine Variable/Liste hinzu, um deren Typ schnell zu ändern.\",\"swap-local-global/@name\":\"Variablentyp ändern\",\"editor-comment-previews/@description\":\"Ermöglicht das Anzeigen einer Vorschau, wenn die Maus über reduzierten Kommentaren und Blöcken. Du kannst dies verwenden, um Kommentare außerhalb des Bildschirms anzuzeigen, einen Schleifenblock von seiner Unterseite anhand der Vorschau zu identifizieren, mehrere lange Kommentare in einen kleinen Bereich anzupassen und mehr.\",\"editor-comment-previews/@name\":\"Vorschau für Editorkommentare\",\"editor-comment-previews/@settings-name-delay\":\"Verzögerungsdauer\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Maus folgen\",\"editor-comment-previews/@settings-name-hover-view\":\"Zum Vorschauen mit der Maus über reduzierten Kommentaren schweben\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Zum Vorschauen von angehängten Kommentaren mit der Maus über Blöcken schweben\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Zum Vorschauen von Definitionskommentaren mit der Maus über benutzerdefinierten Blöcken schweben\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Animation reduzieren\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Durchsichtigkeit vermindern\",\"editor-comment-previews/@settings-select-delay-long\":\"Lang\",\"editor-comment-previews/@settings-select-delay-none\":\"Keine\",\"editor-comment-previews/@settings-select-delay-short\":\"Kurz\",\"columns/@description\":\"Trennt das Blockkategorienmenü in zwei Spalten und verschiebt es über die Blockpalette, wie in Scratch 2.0.\",\"columns/@name\":\"Zweispaltiges Kategorienmenü\",\"script-snap/@description\":\"Richtet Skripte nach dem Ziehen automatisch an den Punkten des Codebereichs aus.\",\"script-snap/@name\":\"Skripte am Raster ausrichten\",\"script-snap/@preset-name-default\":\"Standard\",\"script-snap/@preset-name-half-block\":\"Halbblöckig\",\"script-snap/@preset-name-whole-block\":\"Ganzblöckig\",\"script-snap/@settings-name-grid\":\"Rastergröße (px)\",\"editor-stepping/@description\":\"Fügt eine farbige Markierung zu den Blöcken, die gerade in einem Projekt ausgeführt werden, hinzu.\",\"editor-stepping/@name\":\"Markierung für ausgeführte Blöcke\",\"editor-stepping/@settings-name-highlight-color\":\"Markierungsfarbe\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/es.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/es.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Regresa los cat blocks de April Fools 2020.\",\"cat-blocks/@info-watch\":\"La opción \\\"mirar cursor\\\" puede afectar el rendimiento cuando está abierto el editor.\",\"cat-blocks/@settings-name-watch\":\"Mirar cursor\",\"editor-devtools/@description\":\"Agrega una barra de búsqueda y nuevas opciones de menú para el editor: copie y pegue bloques, ordene de mejor manera, vaya directamente a la definición de un bloque propio y más.\",\"editor-devtools/@info-shortcuts\":\"Presione \\\"Ctrl+F\\\" para enfocar la barra de búsqueda, \\\"Ctrl+Espacio\\\" para abrir la ventana flotante de \\\"encontrar bloque por nombre\\\", \\\"Ctrl+Izquierda/Derecha\\\" para navegar el historial de búsqueda.\",\"editor-devtools/@name\":\"Herramientas de desarrollador\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Mejorar \\\"Ordenar Bloques\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Click medio del mouse en variables, bloques personalizados o eventos para navegar\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Pegar bloques en la posición del cursor\",\"editor-searchable-dropdowns/@description\":\"Le permite buscar en bloques que tienen menús.\",\"editor-searchable-dropdowns/@name\":\"Búsqueda en menus \",\"data-category-tweaks-v2/@description\":\"Proporciona retoques para la categoría de bloques \\\"datos\\\" (variables).\",\"data-category-tweaks-v2/@name\":\"Retoques en categoría \\\"datos\\\"\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Mover bloques de datos arriba de la lista de variables\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Categoría Listas Separada\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Separar Variables Locales\",\"block-palette-icons/@description\":\"Agrega íconos dentro de los círculos de colores que identifican las categorías de bloques.\",\"block-palette-icons/@name\":\"Íconos de categoría en paleta de bloques\",\"hide-flyout/@description\":\"Oculta la paleta de bloques si el cursor no esta arriba de ella. Haga click en el icono de candado para mantenerlo en el lugar temporalmente. Alternativamente, use el modo \\\"click en categoría\\\".\",\"hide-flyout/@info-hoverExplanation\":\"El modo \\\"cursor sobre área de paleta\\\" solo extiende el área de visión. Si quiere poder arrastrar bloques a este área sin que se tiren a la basura, use alguno de los otros modos.\",\"hide-flyout/@name\":\"Ocultar paleta de bloques automáticamente\",\"hide-flyout/@settings-name-speed\":\"Duración de animación\",\"hide-flyout/@settings-name-toggle\":\"Activar/desactivar en...\",\"hide-flyout/@settings-select-speed-default\":\"Por defecto\",\"hide-flyout/@settings-select-speed-long\":\"Larga\",\"hide-flyout/@settings-select-speed-none\":\"Ninguna\",\"hide-flyout/@settings-select-speed-short\":\"Corta\",\"hide-flyout/@settings-select-toggle-category\":\"Click en categoría\",\"hide-flyout/@settings-select-toggle-cathover\":\"Cursor sobre categoría\",\"hide-flyout/@settings-select-toggle-hover\":\"Cursor sobre área de paleta\",\"mediarecorder/@description\":\"Agrega un botón \\\"empezar grabación\\\" al menú del editor que le permite grabar el escenario del proyecto.\",\"mediarecorder/@name\":\"Grabador de video de proyectos\",\"drag-drop/@description\":\"Le permite arrastrar imágenes y sonidos de su administrador de archivos y soltarlos en el panel de objetos o la lista de disfraces/sonidos. También puede arrastrar archivos de texto a listas y cajas de respuesta.\",\"drag-drop/@name\":\"Arrastrar y soltar archivos\",\"drag-drop/@settings-name-use-hd-upload\":\"Usar subidas HD\",\"debugger/@description\":\"Agrega una nueva categoría \\\"depurador\\\" y una ventana \\\"logs\\\" al editor. Los bloques \\\"log\\\", \\\"warn\\\" y \\\"error\\\" imprimirán el mensaje especificado a la ventana de logs. El bloque \\\"breakpoint\\\" pausará el proyecto cuando se ejecute.\",\"debugger/@name\":\"Depurador\",\"pause/@description\":\"Agrega un botón de pausa al lado de la bandera verde.\",\"pause/@name\":\"Botón de pausa\",\"mute-project/@description\":\"Presione Ctrl+Click sobre la bandera verde para silenciar o desilenciar el proyecto.\",\"mute-project/@name\":\"Modo silenciado de reproductor de proyectos\",\"clones/@description\":\"Agrega un contador de clones arriba del escenario en el editor que muestra la cantidad total de clones del proyecto.\",\"clones/@name\":\"Contador de clones\",\"mouse-pos/@description\":\"Muestra la posición x/y del ratón arriba del escenario en el editor.\",\"mouse-pos/@name\":\"Posición del ratón\",\"color-picker/@description\":\"Agrega una entrada de colores hex a los selectores de color.\",\"color-picker/@name\":\"Selector de color hex\",\"remove-sprite-confirm/@description\":\"Le pregunta si está seguro cuando borre un objecto en un proyecto\",\"remove-sprite-confirm/@name\":\"Confirmación de eliminación de objeto\",\"block-count/@description\":\"Muestra el número total de bloques de un proyecto en la barra de menú del editor. Previamente parte de \\\"contador de objectos y scripts\\\".\",\"block-count/@name\":\"Contadorde bloques\",\"onion-skinning/@description\":\"Muestra capas transparentes de los disfraces anteriores o siguientes mientras edite un disfraz. Controlado con los botones debajo del editor de disfraces, al lado de los botones de zoom.\",\"onion-skinning/@name\":\"Capa sobre capa (onion skinning)\",\"onion-skinning/@settings-name-afterTint\":\"Teñir color de disfraz siguiente\",\"onion-skinning/@settings-name-beforeTint\":\"Teñir color de disfraz anterior\",\"onion-skinning/@settings-name-default\":\"Activar por defecto\",\"onion-skinning/@settings-name-layering\":\"Método de superposición por defecto\",\"onion-skinning/@settings-name-mode\":\"Modo por defecto\",\"onion-skinning/@settings-name-next\":\"Valor predeterminado de disfraces siguientes\",\"onion-skinning/@settings-name-opacity\":\"Opacidad (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Salto de Opacidad (%)\",\"onion-skinning/@settings-name-previous\":\"Valor predeterminado de disfraces anteriores\",\"onion-skinning/@settings-select-layering-behind\":\"Detrás\",\"onion-skinning/@settings-select-layering-front\":\"Frente\",\"onion-skinning/@settings-select-mode-merge\":\"Combinar imagenes\",\"onion-skinning/@settings-select-mode-tint\":\"Teñir color\",\"bitmap-copy/@description\":\"Le permite copiar una imagen bitmap en el editor de disfraces al portapapeles de su sistema, para que la puedas pegar en otros sitios web o programas.\",\"bitmap-copy/@info-norightclick\":\"\\\"Click derecho → copiar\\\" no está soportado. Debe presionar Ctrl+C cuando la imagen bitmap este seleccionada.\",\"bitmap-copy/@name\":\"Copiar imágenes bitmap\",\"2d-color-picker/@description\":\"Remplaza los deslizadores de saturación y brillo con un selector de color 2D. Presione Shift mientras arrastra el cursor para cambiar los valores en un solo eje.\",\"2d-color-picker/@name\":\"Selector de color 2D\",\"better-img-uploads/@description\":\"Agrega un nuevo botón arriba del botón \\\"subir disfraz\\\" que automáticamente convierte imágenes bitmap subidas a imágenes SVG (vector) para evitar perder calidad.\",\"better-img-uploads/@info-notSuitableEdit\":\"Evite usar el botón de subida HD si tiene planeado editar la imagen luego de subirla.\",\"better-img-uploads/@name\":\"Subida de imágenes HD\",\"better-img-uploads/@settings-name-fitting\":\"Tamaño de imagen\",\"better-img-uploads/@settings-select-fitting-fill\":\"Estirar para llenar escenario\",\"better-img-uploads/@settings-select-fitting-fit\":\"Achicar para encajar en escenario\",\"better-img-uploads/@settings-select-fitting-full\":\"Tamaño original\",\"custom-block-shape/@description\":\"Ajuste el relleno, radio de esquinas y altura de la muesca de los bloques.\",\"custom-block-shape/@info-paddingWarning\":\"Si baja el valor de tamaño del relleno, cuando otros usuarios vean su proyecto, podría parecer que sus scripts se superponen.\",\"custom-block-shape/@name\":\"Forma de bloque personalizada \",\"custom-block-shape/@preset-description-default2\":\"Una apariencia similar a bloques de Scratch 2.0\",\"custom-block-shape/@preset-description-default3\":\"La apariencia regular de bloques de Scratch 3.0\",\"custom-block-shape/@preset-description-flat2\":\"Bloques de Scratch 2.0 sin muesca ni esquinas\",\"custom-block-shape/@preset-description-flat3\":\"Bloques de Scratch 3.0 sin muesca ni esquinas\",\"custom-block-shape/@preset-name-default2\":\"Bloques 2.0\",\"custom-block-shape/@preset-name-default3\":\"Bloques 3.0\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Plano\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Plano\",\"custom-block-shape/@settings-name-cornerSize\":\"Tamaño de esquinas (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Altura de muesca (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Tamaño de relleno/padding (50-200%)\",\"editor-theme3/@description\":\"Edite los colores para cada categoria de bloques del editor.\",\"editor-theme3/@name\":\"Colores de bloques personalizables\",\"editor-theme3/@preset-description-black\":\"Hace negros los fondos de los bloques\",\"editor-theme3/@preset-description-dark\":\"Versiones oscuras de colores predeterminados\",\"editor-theme3/@preset-description-original\":\"Los oclores originales de Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Usa colores inspirados en 2.0 en las categorías Eventos, Control y Mis bloques. \",\"editor-theme3/@preset-name-black\":\"Negro\",\"editor-theme3/@preset-name-dark\":\"Oscuro\",\"editor-theme3/@preset-name-original\":\"Colores de 2.0\",\"editor-theme3/@preset-name-tweaks\":\"3.0 Mejorado\",\"editor-theme3/@settings-name-Pen-color\":\"extensiones\",\"editor-theme3/@settings-name-custom-color\":\"personalizado\",\"editor-theme3/@settings-name-data-lists-color\":\"listas\",\"editor-theme3/@settings-name-events-color\":\"eventos\",\"editor-theme3/@settings-name-input-color\":\"Campos de bloques\",\"editor-theme3/@settings-name-looks-color\":\"apariencia\",\"editor-theme3/@settings-name-motion-color\":\"movimiento\",\"editor-theme3/@settings-name-operators-color\":\"operadores\",\"editor-theme3/@settings-name-sensing-color\":\"sensores\",\"editor-theme3/@settings-name-sounds-color\":\"sonidos\",\"editor-theme3/@settings-name-text\":\"Color del texto\",\"editor-theme3/@settings-select-text-black\":\"Negro\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Con color en fondo negro\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Con color en fondo blanco\",\"editor-theme3/@settings-select-text-white\":\"Blanco\",\"editor-colored-context-menus/@description\":\"Hace que los menús al dar click derecho en un bloque sean coloridos.\",\"editor-colored-context-menus/@name\":\"Menus coloridos\",\"editor-stage-left/@description\":\"Mueve el escenario al lado izquierdo del editor.\",\"editor-stage-left/@name\":\"Mostrar escenario del lado izquierdo\",\"variable-manager/@description\":\"Agrega una pestaña al lado de \\\"sonidos\\\" en el editor para que pueda fácilmente editar variables y listas.\",\"variable-manager/@name\":\"Gestor de variables\",\"gamepad/@description\":\"Interactúe con proyectos usando un control/mando de videojuegos mediante USB o Bluetooth.\",\"gamepad/@name\":\"Soporte de mando de videojuegos\",\"gamepad/@settings-name-hide\":\"Esconder botón de ajustes cuando no hay mandos conectados\",\"editor-sounds/@description\":\"Reproduce efectos de sonido cuando conecta o elimina bloques.\",\"editor-sounds/@name\":\"Efectos de sonido en editor\",\"folders/@description\":\"Agrega carpetas a listas de objetos, como también a las listas de disfraces y sonidos. Para crear una carpeta, haga click derecho en un objeto y seleccione \\\"crear carpeta\\\". Haga click en una carpeta para abrirla o cerrarla. Haga click derecho en un objeto para ver a qué carpetas lo puede mover, o alternativamente arrastre y suelte a una carpeta abierta.\",\"folders/@info-notice-folders-are-public\":\"Usuarios con esta función activada podrán ver las carpetas en su proyecto. Cualquier otra persona verá las listas de objetos normalmente (sin carpetas)\",\"folders/@info-notice-sprite-names\":\"Esta función agrega \\\"[nombreDeLaCarpeta]//\\\" al principio del nombre de tus objetos.\",\"folders/@name\":\"Carpetas de objetos\",\"block-switching/@description\":\"Haga click derecho en un bloque para cambiarlo por otro bloque relacionado.\",\"block-switching/@name\":\"Cambio entre bloques\",\"block-switching/@settings-name-border\":\"Agregar borde\",\"block-switching/@settings-name-control\":\"Bloques de control\",\"block-switching/@settings-name-customargs\":\"Argumentos de bloques personalizados\",\"block-switching/@settings-name-customargsmode\":\"Opciones mostradas de argumentos de bloques personalizados\",\"block-switching/@settings-name-data\":\"Bloques de variables\",\"block-switching/@settings-name-event\":\"Bloques de eventos\",\"block-switching/@settings-name-extension\":\"Bloques de extensiones\",\"block-switching/@settings-name-looks\":\"Bloques de apariencia\",\"block-switching/@settings-name-motion\":\"Bloques de movimiento\",\"block-switching/@settings-name-noop\":\"Permitir cambiar un bloque a sí mismo\",\"block-switching/@settings-name-operator\":\"Bloques de operadores\",\"block-switching/@settings-name-sensing\":\"Bloques de sensores\",\"block-switching/@settings-name-sound\":\"Bloques de sonido\",\"block-switching/@settings-select-customargsmode-all\":\"Argumentos en todos los bloques personalizados del objeto\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Argumentos en bloque personalizado propio\",\"load-extensions/@description\":\"Muestra automáticamente música, lápiz y otras extensiones del editor en el menú de categorías del editor.\",\"load-extensions/@name\":\"Agregar extensiones automáticamente\",\"load-extensions/@settings-name-music\":\"Música\",\"load-extensions/@settings-name-pen\":\"Lápiz\",\"load-extensions/@settings-name-text2speech\":\"Texto a Voz\",\"load-extensions/@settings-name-translate\":\"Traducir\",\"custom-zoom/@description\":\"Elija ajustes personalizados para el mínimo, máximo, velocidad y tamaño inicial del zoom en el área de código y esconda los controles automáticamente.\",\"custom-zoom/@name\":\"Zoom de área de código personalizado\",\"custom-zoom/@settings-name-autohide\":\"Esconder controles cuando el cursor no está sobre ellos\",\"custom-zoom/@settings-name-maxZoom\":\"Zoom máximo (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Zoom mínimo (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Animación al esconder controles\",\"custom-zoom/@settings-name-startZoom\":\"Zoom inicial (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Velocidad de zoom (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Predeterminada\",\"custom-zoom/@settings-select-speed-long\":\"Larga\",\"custom-zoom/@settings-select-speed-none\":\"Ninguna\",\"custom-zoom/@settings-select-speed-short\":\"Corta\",\"initialise-sprite-position/@description\":\"Cambia la posición x/y predeterminada de nuevos objetos.\",\"initialise-sprite-position/@name\":\"Posición predeterminada de nuevos objetos personalizable\",\"initialise-sprite-position/@settings-name-library\":\"Posiciones aleatorias al agregar objetos de la librería\",\"initialise-sprite-position/@settings-name-x\":\"Posición X\",\"initialise-sprite-position/@settings-name-y\":\"Posición Y\",\"blocks2image/@description\":\"Haga click derecho en el área de código para exportar bloques como imágenes SVG/PNG.\",\"blocks2image/@name\":\"Guardas bloques como imagen\",\"remove-curved-stage-border/@description\":\"Quita los bordes curvos alrededor del escenario, permitiéndole ver las esquinas.\",\"remove-curved-stage-border/@name\":\"Quitar curva del borde del escenario\",\"transparent-orphans/@description\":\"Ajuste la transparencia de los bloques del editor, con opciones separadas para bloques huérfanos (aquellos sin un bloque de evento en su parte superior) y bloques que están siendo arrastrados.\",\"transparent-orphans/@name\":\"Bloques transparentes\",\"transparent-orphans/@settings-name-block\":\"Transparencia de bloques (%)\",\"transparent-orphans/@settings-name-dragged\":\"Transparencia arrastrando (%)\",\"transparent-orphans/@settings-name-orphan\":\"Transparencia de huérfanos (%)\",\"paint-by-default/@description\":\"Cambia la acción por defecto de los botones \\\"Elegir un objeto/disfraz/fondo/sonido\\\", que abren la biblioteca por defecto.\",\"paint-by-default/@name\":\"Pintar disfraz por defecto\",\"paint-by-default/@settings-name-backdrop\":\"Agregar fondo\",\"paint-by-default/@settings-name-costume\":\"Agregar disfraz\",\"paint-by-default/@settings-name-sound\":\"Agregar sonido\",\"paint-by-default/@settings-name-sprite\":\"Agregar objeto\",\"paint-by-default/@settings-select-backdrop-library\":\"Biblioteca\",\"paint-by-default/@settings-select-backdrop-paint\":\"Pintar\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Sorpresa\",\"paint-by-default/@settings-select-backdrop-upload\":\"Subir\",\"paint-by-default/@settings-select-costume-library\":\"Biblioteca\",\"paint-by-default/@settings-select-costume-paint\":\"Pintar\",\"paint-by-default/@settings-select-costume-surprise\":\"Sorpresa\",\"paint-by-default/@settings-select-costume-upload\":\"Subir\",\"paint-by-default/@settings-select-sound-library\":\"Biblioteca\",\"paint-by-default/@settings-select-sound-record\":\"Grabar\",\"paint-by-default/@settings-select-sound-surprise\":\"Sorpresa\",\"paint-by-default/@settings-select-sound-upload\":\"Subir\",\"paint-by-default/@settings-select-sprite-library\":\"Biblioteca\",\"paint-by-default/@settings-select-sprite-paint\":\"Pintar\",\"paint-by-default/@settings-select-sprite-surprise\":\"Sorpresa\",\"paint-by-default/@settings-select-sprite-upload\":\"Subir\",\"block-cherry-picking/@description\":\"Le permite arrastrar un único bloque del medio de un script (en vez de toda la pila adjunta debajo) mientras mantenga la tecla Ctrl.\",\"block-cherry-picking/@info-flipControls\":\"Si \\\"revertir controles\\\" está activado, agarrar bloques individualmente será el comportamiento predeterminado. Mantenga Ctrl para arrastrar la pila completa.\",\"block-cherry-picking/@info-macContextDisabled\":\"En macOS, use la tecla Cmd en vez de Ctrl.\",\"block-cherry-picking/@name\":\"Agarrar un único bloque con tecla Ctrl\",\"block-cherry-picking/@settings-name-invertDrag\":\"Revertir controles\",\"hide-new-variables/@description\":\"No crear automáticamente monitores para variables y listas nuevas.\",\"hide-new-variables/@name\":\"Esconder variables nuevas\",\"editor-extra-keys/@description\":\"Agrega más teclas al menú de los bloques \\\"¿tecla () presionada?\\\" y \\\"al presionar tecla ()\\\", como enter, punto, coma y más.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"Las \\\"teclas experimentales\\\" incluyen signo igual, barra, punto y coma y más. Pueden no funcionar en todos los sistemas operativos o diseños de teclado.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"Las \\\"teclas Shift\\\" incluyen teclas que típicamente requieren la tecla Shift y una tecla de número, como hashtag, símbolo de exclamación y más. Estas teclas solo funcionan con el bloque \\\"al presionar  tecla ()\\\" y no funcionan en todos los sistemas operativos o diseños de teclado.\",\"editor-extra-keys/@name\":\"Soporte de teclas extras\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Activar teclas experimentales\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Activar teclas Shift\",\"hide-delete-button/@description\":\"Esconde el botón de eliminar (ícono de bote de basura) de objetos, disfraces y sonidos. Estos pueden seguirse eliminando utilizando el menú contextual al dar click derecho.\",\"hide-delete-button/@name\":\"Esconder botón de eliminar\",\"hide-delete-button/@settings-name-costumes\":\"Disfraces y fondos\",\"hide-delete-button/@settings-name-sounds\":\"Sonidos\",\"hide-delete-button/@settings-name-sprites\":\"Objetos\",\"no-script-bumping/@description\":\"Permite que los scripts sean movidos y modificados sin causar que scripts superpuestos se muevan.\",\"no-script-bumping/@name\":\"No espaciar automáticamente scripts superpuestos\",\"disable-stage-drag-select/@description\":\"Elimina la posibilidad de arrastrar objetos en el escenario, exceptuando aquellos fijados explícitamente como arrastrables.\",\"disable-stage-drag-select/@info-shift\":\"Presione Shift mientras arrastra un objeto para moverlo normalmente, incluso si no está fijado como arrastrable.\",\"disable-stage-drag-select/@name\":\"Objetos no arrastrables en el editor\",\"move-to-top-bottom/@description\":\"Agrega un ítem al menú de click derecho para mover un disfraz o sonido a la posición primera o última de la lista. Previamente parte de las herramientas de desarrollador.\",\"move-to-top-bottom/@name\":\"Mover disfraz a la cima o al fondo\",\"disable-paste-offset/@description\":\"Pega items copiados en su posición original en vez de movidos levemente en el editor de disfraces.\",\"disable-paste-offset/@name\":\"No mover items pegados\",\"block-duplicate/@description\":\"Duplique rápidamente un script arrastrándolo mientras mantiene la tecla Alt. Apriete Ctrl también para solo duplicar un bloque en vez de toda la pila adjunta debajo.\",\"block-duplicate/@info-mac\":\"En macOS, use la tecla Option en vez de la tecla Alt y la tecla Command en vez de la tecla Control.\",\"block-duplicate/@name\":\"Duplicar script con tecla Alt\",\"swap-local-global/@description\":\"Agrega más opciones al renombrar una variable o lista existente: permite cambiar entre \\\"Para todos los objetos\\\" y \\\"Sólo para este objeto\\\" y si las variables sonalmacenadas en la nube. También agrega una nueva opción al hacer click derecho en una variable/lista para cambiar rápidamente su ámbito.\",\"swap-local-global/@name\":\"Cambiar variables entre \\\"Para todos los objetos\\\" y \\\"Sólo para este objeto\\\"\",\"editor-comment-previews/@description\":\"Le permite previsualizar los contenidos de comentarios al poner el cursor sobre comentarios encogidos y bloques. Puede usar esto para ver comentarios que están fuera de la pantalla, identificar un bloque bucle desde el final por su previsualización, meter muchos comentarios en un lugar pequeño y más.\",\"editor-comment-previews/@name\":\"Previsualización de comentarios del editor\",\"editor-comment-previews/@settings-name-delay\":\"Tiempo de retardo\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Seguir cursor\",\"editor-comment-previews/@settings-name-hover-view\":\"Poner cursor sobre comentarios encogidos para previsualizar\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Poner cursor sobre bloques para previsualizar comentarios enganchados\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Poner cursor sobre bloques personalizados para previsualizar comentarios en su definición\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Reducir animación\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Reducir transparencia\",\"editor-comment-previews/@settings-select-delay-long\":\"Largo\",\"editor-comment-previews/@settings-select-delay-none\":\"Ningun\",\"editor-comment-previews/@settings-select-delay-short\":\"Corto\",\"columns/@description\":\"Divide el menú de categorías de bloques en dos columna y lo mueve a la cima de la paleta de bloques, como en Scratch 2.0.\",\"columns/@name\":\"Menú de categorías de dos columnas\",\"script-snap/@description\":\"Arrastre un script para automáticamente ajustar su posición a los puntos del área de código.\",\"script-snap/@name\":\"Ajustar scripts a cuadrícula\",\"script-snap/@preset-name-default\":\"Predeterminado\",\"script-snap/@preset-name-half-block\":\"Medio bloque\",\"script-snap/@preset-name-whole-block\":\"Bloque entero\",\"script-snap/@settings-name-grid\":\"Tamaño de la grilla (px)\",\"editor-stepping/@description\":\"Agrega un borde colorido a los bloques que están ejecutándose actualmente en un proyecto.\",\"editor-stepping/@name\":\"Borde de bloque en ejecución\",\"editor-stepping/@settings-name-highlight-color\":\"Color de destacado\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/fr.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/fr.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@name, drag-drop/@description, drag-drop/@name, debugger/@description, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@name, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@name, better-img-uploads/@name, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@name, paint-by-default/@settings-name-costume, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sprite-library, block-cherry-picking/@name, hide-new-variables/@name, editor-extra-keys/@name, hide-delete-button/@name, no-script-bumping/@name, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Ramène les blocs chapeaux avec une tête de chat, venant du poisson d'avril 2020.\",\"cat-blocks/@info-watch\":\"L'option \\\"Regarder le curseur\\\" peut impacter les performances quand l'éditeur est ouvert.\",\"cat-blocks/@name\":\"Blocs chat\",\"cat-blocks/@settings-name-watch\":\"Regarder le curseur\",\"editor-devtools/@info-shortcuts\":\"Appuyez sur \\\"Ctrl + F\\\" pour sélectionner la boîte de recherche, \\\"Ctrl + Espace\\\" pour afficher la fenêtre pour trouver un bloc par nom, \\\"Ctrl + Gauche/Droite\\\" pour naviguer dans l'historique des recherches.\",\"editor-devtools/@name\":\"Outils pour développeurs\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Améliorer l'option \\\"Nettoyer les blocs\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Faites un clic avec la molette sur les variables, les blocs personnalisés ou les évènements pour aller à leur définition\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Coller les blocs à l'emplacement du curseur\",\"editor-searchable-dropdowns/@name\":\"Menus déroulants recherchables\",\"data-category-tweaks-v2/@name\":\"Améliorations pour la catégorie des blocs de donnée\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Déplacer les blocs au dessus de la liste des variables\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Catégorie séparée pour les listes\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Séparer les variables uniques aux sprites\",\"block-palette-icons/@description\":\"Ajoute des icônes dans les cercles colorés qui identifient les catégories de blocs\",\"block-palette-icons/@name\":\"Icônes des catégories de la palette des blocs\",\"hide-flyout/@description\":\"Cache la palette des blocs si elle n'est pas survolée. Cliquez sur l'icône de cadenas pour la maintenir en place temporairement. Sinon, utilisez le mode \\\"Clic sur la catégorie\\\".\",\"hide-flyout/@info-hoverExplanation\":\"Le mode \\\"Survol de la palette\\\" n'étend seulement la zone affichée. Si vous voulez pouvoir glisser les blocs dans cette zone sans qu'ils soient supprimés, utilisez un des autres modes.\",\"hide-flyout/@name\":\"Masquer automatiquement la palette de blocs\",\"hide-flyout/@settings-name-speed\":\"Durée de l'animation\",\"hide-flyout/@settings-name-toggle\":\"Activer...\",\"hide-flyout/@settings-select-speed-default\":\"Par défaut\",\"hide-flyout/@settings-select-speed-long\":\"Longue\",\"hide-flyout/@settings-select-speed-none\":\"Aucune\",\"hide-flyout/@settings-select-speed-short\":\"Courte\",\"hide-flyout/@settings-select-toggle-category\":\"Au clic de la catégorie\",\"hide-flyout/@settings-select-toggle-cathover\":\"Au survol de la catégorie\",\"hide-flyout/@settings-select-toggle-hover\":\"Au survol de la palette\",\"mediarecorder/@name\":\"Enregistreur vidéo de projet\",\"drag-drop/@description\":\"Vous permet de glisser des images ou des sons depuis votre explorateur de fichiers directement dans la listes des sprites, des sons et des costumes. Vous pouvez également faire glisser des fichiers texte dans les listes ou dans la boîte de dialogue \\\"demander et attendre\\\".\",\"drag-drop/@name\":\"Glisser et déposer des fichiers\",\"debugger/@description\":\"Ajoute une nouvelle catégorie de bloc \\\"Debugger\\\" et une fenêtre \\\"Logs\\\" à l'éditeur. Les blocs \\\"message\\\", \\\"avertissement\\\" et \\\"erreur\\\" afficheront le message spécifié dans la console. Le bloc \\\"point d'arrêt\\\" mettra le projet en pause lors de son exécution.\",\"pause/@description\":\"Ajoute un bouton pause a côté du drapeau vert.\",\"pause/@name\":\"Bouton pause\",\"mute-project/@description\":\"Ctrl + Clic sur le drapeau vert pour couper/rétablir le son du projet.\",\"mute-project/@name\":\"Mode lecture de projet en sourdine\",\"clones/@name\":\"Compteur de clones\",\"mouse-pos/@name\":\"Position de la souris\",\"color-picker/@description\":\"Ajoute une entrée pour code hexa aux palettes de couleurs.\",\"color-picker/@name\":\"Palette de couleurs hexa\",\"remove-sprite-confirm/@description\":\"Vous demande si vous êtes sûrs de supprimer un sprite dans un projet.\",\"remove-sprite-confirm/@name\":\"Confirmation pour la suppression de sprite\",\"block-count/@description\":\"Affiche le nombre total de blocs d'un projet dans la barre de menus de l'éditeur. Faisait auparavant partie de \\\"nombre de sprites et de scripts\\\".\",\"block-count/@name\":\"Compteur de Blocs\",\"onion-skinning/@name\":\"Pelure d'oignon\",\"onion-skinning/@settings-name-afterTint\":\"Couleur du costume suivant\",\"onion-skinning/@settings-name-beforeTint\":\"Couleur du costume précédent\",\"onion-skinning/@settings-name-default\":\"Activer par défaut\",\"onion-skinning/@settings-name-layering\":\"Calque par défaut\",\"onion-skinning/@settings-name-mode\":\"Mode par défaut\",\"onion-skinning/@settings-name-next\":\"Costumes suivants par défaut\",\"onion-skinning/@settings-name-opacity\":\"Opacité (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Différence d'opacité (%)\",\"onion-skinning/@settings-name-previous\":\"Costumes précédents par défaut\",\"onion-skinning/@settings-select-layering-behind\":\"Derrière\",\"onion-skinning/@settings-select-layering-front\":\"Devant\",\"onion-skinning/@settings-select-mode-merge\":\"Combiner les images\",\"onion-skinning/@settings-select-mode-tint\":\"Teinte\",\"bitmap-copy/@info-norightclick\":\"\\\"Clic droit → copier\\\" n'est pas pris en charge. Vous devez appuyer sur Ctrl + C lorsqu'une image est sélectionnée.\",\"bitmap-copy/@name\":\"Copie des images bitmap\",\"2d-color-picker/@name\":\"Sélecteur de couleurs 2D\",\"better-img-uploads/@name\":\"Chargement d'images en HD\",\"better-img-uploads/@settings-select-fitting-full\":\"Taille originale\",\"custom-block-shape/@info-paddingWarning\":\"Diminuer la marge est uniquement visible par vous, donc si vos projets sont vus par d'autres utilisateurs, vos scripts pourraient se chevaucher.\",\"custom-block-shape/@name\":\"Forme de bloc personnalisable\",\"custom-block-shape/@preset-description-default2\":\"Une apparence similaire aux blocs de Scratch 2.0\",\"custom-block-shape/@preset-description-default3\":\"L'apparence classique des blocs de Scratch 3.0\",\"custom-block-shape/@preset-description-flat2\":\"Les blocs de Scratch 2.0 sans entailles et coins arrondis\",\"custom-block-shape/@preset-description-flat3\":\"Les blocs de Scratch 3.0 sans entailles et coins arrondis\",\"custom-block-shape/@preset-name-default2\":\"Blocs 2.0\",\"custom-block-shape/@preset-name-default3\":\"Blocs 3.0\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Plat\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Plat\",\"custom-block-shape/@settings-name-cornerSize\":\"Taille des coins (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Hauteur de l'entaille (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Taille de la marge (50-200%)\",\"editor-theme3/@description\":\"Personnalisez la couleur des blocs pour chaque catégorie de bloc dans l'éditeur.\",\"editor-theme3/@name\":\"Couleurs des blocs personnalisable\",\"editor-theme3/@preset-description-black\":\"Rendre l'arrière-plan des blocs noir.\",\"editor-theme3/@preset-description-dark\":\"Version sombre des couleurs par défaut\",\"editor-theme3/@preset-description-original\":\"Les couleurs classiques des blocs de Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Évènements, Contrôles et Blocs personnalisés avec les couleurs inspirées de  Scratch 2.0\",\"editor-theme3/@preset-name-black\":\"Noir\",\"editor-theme3/@preset-name-dark\":\"Sombre\",\"editor-theme3/@preset-name-original\":\"Couleurs 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Ajustements 3.0\",\"editor-theme3/@settings-name-control-color\":\"contrôle\",\"editor-theme3/@settings-name-custom-color\":\"personnalisé\",\"editor-theme3/@settings-name-data-lists-color\":\"listes\",\"editor-theme3/@settings-name-events-color\":\"événements\",\"editor-theme3/@settings-name-input-color\":\"Entrées de blocs\",\"editor-theme3/@settings-name-looks-color\":\"apparence\",\"editor-theme3/@settings-name-motion-color\":\"mouvement\",\"editor-theme3/@settings-name-operators-color\":\"opérateurs\",\"editor-theme3/@settings-name-sensing-color\":\"capteurs\",\"editor-theme3/@settings-name-sounds-color\":\"son\",\"editor-theme3/@settings-name-text\":\"Couleur du texte\",\"editor-theme3/@settings-select-text-black\":\"Noir\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Coloré sur fond noir\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Coloré sur fond blanc\",\"editor-theme3/@settings-select-text-white\":\"Blanc\",\"editor-colored-context-menus/@description\":\"Menus contextuels colorés quuan on fait un clic droit sur un bloc \",\"editor-colored-context-menus/@name\":\"Menus déroulants colorés\",\"editor-stage-left/@description\":\"Déplace la scène sur le côté gauche de l'éditeur.\",\"editor-stage-left/@name\":\"Afficher la scène sur le côté gauche\",\"variable-manager/@description\":\"Ajoute un nouvel onglet à côté de \\\"sons\\\" dans l'éditeur pour mettre à jour facilement les variables et les listes.\",\"variable-manager/@name\":\"Gestionnaire de variables\",\"gamepad/@description\":\"Interagissez avec les projets en utilisant une manette USB ou Bluetooth.\",\"gamepad/@name\":\"Support manette\",\"gamepad/@settings-name-hide\":\"Cacher le bouton des paramètres lorsque aucune manette n'est détectée\",\"editor-sounds/@description\":\"Produit un son lorsque vous connectez ou supprimez des blocs.\",\"editor-sounds/@name\":\"Effets sonores dans l'éditeur\",\"folders/@info-notice-folders-are-public\":\"Les utilisateurs ayant cette fonctionnalité activée seront capables de voir les dossiers présents dans vos projets. N'importe qui d'autre verra la liste des sprites normalement (sans les dossiers).\",\"folders/@info-notice-sprite-names\":\"Cette fonctionnalité fonctionne en ajoutant \\\"[NomDuDossier]//\\\" au début du nom de vos sprites.\",\"folders/@name\":\"Dossiers de sprites\",\"block-switching/@description\":\"Faites un clic droit sur un bloc pour le remplacer par un autre bloc associé.\",\"block-switching/@name\":\"Échanger de bloc\",\"block-switching/@settings-name-border\":\"Ajouter un bord\",\"block-switching/@settings-name-control\":\"Blocs de contrôle\",\"block-switching/@settings-name-data\":\"Blocs de données\",\"block-switching/@settings-name-event\":\"Blocs d'événements\",\"block-switching/@settings-name-extension\":\"Blocs d'extension\",\"block-switching/@settings-name-looks\":\"Blocs d'apparence\",\"block-switching/@settings-name-motion\":\"Blocs de mouvement\",\"block-switching/@settings-name-noop\":\"Afficher la possibilité de remplacer le bloc par lui-même\",\"block-switching/@settings-name-operator\":\"Blocs d'opérateurs\",\"block-switching/@settings-name-sensing\":\"Blocs de capteurs\",\"block-switching/@settings-name-sound\":\"Blocs de son\",\"load-extensions/@name\":\"Ajout automatique d'extensions\",\"load-extensions/@settings-name-music\":\"Musique\",\"load-extensions/@settings-name-pen\":\"Stylo\",\"load-extensions/@settings-name-text2speech\":\"Synthèse Vocale\",\"load-extensions/@settings-name-translate\":\"Traduire\",\"custom-zoom/@name\":\"Zoom de la zone de code personnalisable\",\"custom-zoom/@settings-name-autohide\":\"Masquer automatiquement les contrôles pour le zoom\",\"custom-zoom/@settings-name-maxZoom\":\"Zoom maximum (50-500 %)\",\"custom-zoom/@settings-name-minZoom\":\"Zoom minimum (1-100 %)\",\"custom-zoom/@settings-name-speed\":\"Masquer automatiquement la durée de l'animation\",\"custom-zoom/@settings-name-startZoom\":\"Zoom de base (50-500 %)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Vitesse du zoom (50-200 %)\",\"custom-zoom/@settings-select-speed-default\":\"Par défaut\",\"custom-zoom/@settings-select-speed-none\":\"Aucun\",\"custom-zoom/@settings-select-speed-short\":\"Court\",\"initialise-sprite-position/@description\":\"Changer les position par défaut des ordonnées et abscisses lors de la création d'un nouveau costume\",\"initialise-sprite-position/@name\":\"Position d'un nouveau sprite personnalisable\",\"initialise-sprite-position/@settings-name-library\":\"Place les sprites de la bibliothèque aléatoirement\",\"initialise-sprite-position/@settings-name-x\":\"Abscisse x\",\"initialise-sprite-position/@settings-name-y\":\"Ordonnée y\",\"blocks2image/@name\":\"Enregistrer les blocs en tant qu'image\",\"remove-curved-stage-border/@description\":\"Enlève les bords arrondis de la scène, vous permettant de voir les coins.\",\"remove-curved-stage-border/@name\":\"Enlever les bords arrondis de la scène\",\"transparent-orphans/@description\":\"Ajuste la transparence des blocs dans l'éditeur, avec des options séparées pour les blocs orphelins (ceux sans chapeau en haut de la pile) et les blocs qui sont déplacés.\",\"transparent-orphans/@name\":\"Transparence des blocs\",\"transparent-orphans/@settings-name-block\":\"Transparence des blocs (%)\",\"transparent-orphans/@settings-name-dragged\":\"Transparence des blocs déplacés (%)\",\"transparent-orphans/@settings-name-orphan\":\"Transparence des blocs orphelins (%)\",\"paint-by-default/@name\":\"Éditeur de costume par défaut\",\"paint-by-default/@settings-name-costume\":\"Ajouter un costume\",\"paint-by-default/@settings-select-backdrop-library\":\"Bibliothèque\",\"paint-by-default/@settings-select-costume-library\":\"Bibliothèque\",\"paint-by-default/@settings-select-sound-library\":\"Bibliothèque\",\"paint-by-default/@settings-select-sprite-library\":\"Bibliothèque\",\"block-cherry-picking/@name\":\"Prendre un seul bloc avec la touche Ctrl\",\"hide-new-variables/@name\":\"Masquer les nouvelles variables\",\"editor-extra-keys/@name\":\"Prise en charge de touches supplémentaire\",\"hide-delete-button/@name\":\"Cacher le bouton supprimer\",\"no-script-bumping/@name\":\"Ne pas espacer automatiquement les scripts qui se chevauchent\",\"disable-stage-drag-select/@info-shift\":\"Maintenez Maj. enfoncé pour déplacer un sprite, même si celui-ci n'est pas glissable normalement.\",\"disable-stage-drag-select/@name\":\"Sprites non glissables dans l'éditeur\",\"move-to-top-bottom/@name\":\"Déplacer le costume en haut ou en bas\",\"disable-paste-offset/@description\":\"Collez les éléments copiés à leur position d'origine au lieu de les déplacer légèrement dans l'éditeur de costumes.\",\"disable-paste-offset/@name\":\"Ne pas déplacer les éléments collés\",\"block-duplicate/@description\":\"Dupliquez rapidement un script en le déplaçant tout en maintenant la touche Alt enfoncée. Maintenez la touche Ctrl enfoncée pour ne dupliquer qu'un seul bloc au lieu de toute la pile attachée en dessous.\",\"block-duplicate/@name\":\"Dupliquer le script avec la touche Alt\",\"swap-local-global/@description\":\"Ajoute plus d'options lors du renommage d'une variable ou d'une liste existante : permet de basculer entre « Pour tous les sprites » et « Pour ce sprite uniquement » et si les variables sont stockées dans le cloud. Ajoute également une nouvelle option lors d'un clic droit sur une variable/liste pour changer rapidement sa portée.\",\"swap-local-global/@name\":\"Basculer les variables entre \\\"Pour tous les sprites\\\" et \\\"Pour ce sprite uniquement.\",\"editor-comment-previews/@description\":\"Vous permet de prévisualiser le contenu des commentaires en survolant les commentaires et blocs réduits. Vous pouvez l'utiliser pour afficher les commentaires hors écran, identifier un bloc de boucle à partir du bas par son aperçu, insérer de nombreux commentaires longs dans un petit espace, etc.\",\"editor-comment-previews/@name\":\"Prévisualisation des commentaires dans l'éditeur\",\"editor-comment-previews/@settings-name-delay\":\"Durée du délai\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Suivre le pointeur de souris\",\"editor-comment-previews/@settings-name-hover-view\":\"Survolez les commentaires réduits pour prévisualiser\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Survolez les blocs pour prévisualiser les commentaires joints\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Survolez les blocs personnalisés pour prévisualiser les commentaires de définition\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Réduire l'animation\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Réduire la transparence\",\"editor-comment-previews/@settings-select-delay-none\":\"Aucun\",\"editor-comment-previews/@settings-select-delay-short\":\"Court\",\"columns/@description\":\"Divise le menu des catégories de blocs en deux colonnes et le déplace vers le haut de la palette de blocs, comme dans Scratch 2.0\",\"columns/@name\":\"Menu catégorie à deux colonnes\",\"script-snap/@description\":\"Les script vont automatiquement s'aligner sur les points de l'arrière-plan.\",\"script-snap/@name\":\"Aligner les scripts sur la grille\",\"script-snap/@preset-name-default\":\"Par défaut\",\"script-snap/@preset-name-half-block\":\"Demi-bloc\",\"script-snap/@preset-name-whole-block\":\"Bloc entier\",\"script-snap/@settings-name-grid\":\"Taille de la grille (pixels)\",\"editor-stepping/@name\":\"Surligner les blocs en cours d'exécution\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/it.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/it.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Mostra nell'editor i blocchi di tipo cappello con le orecchie del gatto che erano comparsi come Pesce di Aprile 2020.\",\"cat-blocks/@info-watch\":\"La modalità \\\"Guarda il puntatore del mouse\\\" può avere un certo impatto sulla performance quando l'editor è aperto\",\"cat-blocks/@name\":\"Cappelli con le orecchie del gatto\",\"cat-blocks/@settings-name-watch\":\"Guarda il puntatore del mouse\",\"editor-devtools/@description\":\"Aggiunge una casella di ricerca e nuove opzioni nei menu dell'editor: copia/incolla dei blocchi, riordino degli script migliorato, salto alla definizione di un blocco personalizzato e molto altro!\",\"editor-devtools/@info-shortcuts\":\"Premi \\\"Ctrl+F\\\" per spostarti sulla casella di ricerca, \\\"Ctrl+Space\\\" per far comparire il menu \\\"aggiungi blocco per nome\\\", \\\"Ctrl+Left/Right\\\" per navigare la cronologia delle ricerche.\",\"editor-devtools/@name\":\"Strumenti per sviluppatori\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Migliora \\\"Riordina i Blocchi\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Clicca nel centro i blocchi delle variabili, i blocchi personalizzati o gli eventi per cercarne altre occorrenze\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Incolla i blocchi dove si trova il puntatore del mouse.\",\"editor-searchable-dropdowns/@description\":\"TI permette di cercare nel menu contestuale dei blocchi\",\"editor-searchable-dropdowns/@name\":\"Ricerca nei Menu drop-down\",\"data-category-tweaks-v2/@description\":\"Modifica nell'editor la categoria \\\"Variabili\\\".\",\"data-category-tweaks-v2/@name\":\"Modifiche per la categoria Variabili\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Muovi blocchi dati sopra alla lista delle variabili\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Categoria Liste separata\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Separa Variabili Solo per lo Sprite\",\"block-palette-icons/@description\":\"Aggiunge delle icone all'interno dei cerchi colorati che identificano le categorie dei blocchi.\",\"block-palette-icons/@name\":\"Icone per le categorie del pannello dei blocchi\",\"hide-flyout/@description\":\"Nasconde il pannello dei blocchi se non è a contatto con il mouse. Clicca il lucchetto per bloccarlo temporaneamente. In alternativa, usa la modalità \\\"Clic categoria\\\".\",\"hide-flyout/@info-hoverExplanation\":\"La modalità \\\"Movimento del mouse sull'area dei blocchi\\\" estende soltanto l'area degli script. Se vuoi poter trascinarvi i blocchi in questa aria senza che vengano cancellati, usa una delle altre modalità.\",\"hide-flyout/@name\":\"Nascondi pannello blocchi automaticamente\",\"hide-flyout/@settings-name-speed\":\"Durata animazione\",\"hide-flyout/@settings-name-toggle\":\"Nascondi quando...\",\"hide-flyout/@settings-select-speed-default\":\"Predefinita\",\"hide-flyout/@settings-select-speed-long\":\"Lunga\",\"hide-flyout/@settings-select-speed-none\":\"Nessuna\",\"hide-flyout/@settings-select-speed-short\":\"Corta\",\"hide-flyout/@settings-select-toggle-category\":\"Clic categoria\",\"hide-flyout/@settings-select-toggle-cathover\":\"Movimento del mouse sull'area delle categorie\",\"hide-flyout/@settings-select-toggle-hover\":\"Movimento del mouse sull'area dei blocchi\",\"mediarecorder/@description\":\"Aggiunge all’editor un pulsante “Avvia registrazione” che permette di registrare cioè che avviene sullo stage del progetto.\",\"mediarecorder/@name\":\"Registratore video progetti\",\"drag-drop/@description\":\"TI permette di trascinare immagini e suoni da una cartella nella lista degli sprite o dei costumi/suoni. Puoi anche trascinare file di testo su una lista o nella casella dei blocchi \\\"chiedi e attendi\\\".\",\"drag-drop/@name\":\"Trascinamento file\",\"drag-drop/@settings-name-use-hd-upload\":\"Usa importazione di immagini HD\",\"debugger/@description\":\"Aggiunge all'editor una nuova categoria di blocchi \\\"debugger\\\" e una finestra \\\"log\\\". I blocchi \\\"log\\\", \\\"warn\\\" e \\\"error\\\" inseriranno nella finestra log il messaggio specificato. Il blocco \\\"breakpoint\\\" interromperà l'esecuzione del progetto quando viene eseguito.\",\"pause/@description\":\"Aggiunge un tasto pausa accanto alla bandiera verde.\",\"pause/@name\":\"Pulsante Pausa\",\"mute-project/@description\":\"Ctrl+Clic sulla bandiera verde per attivare o disattivare l'audio del progetto.\",\"mute-project/@name\":\"Modalità dell'editor di progetti con audio disattivato\",\"clones/@description\":\"Mostra sopra lo stage dell'editor il numero totale di cloni.\",\"clones/@name\":\"Numero dei cloni\",\"mouse-pos/@description\":\"Mostra la posizione x/y del mouse sopra lo stage dell'editor.\",\"mouse-pos/@name\":\"Posizione del mouse\",\"color-picker/@description\":\"Aggiunge la selezione del colore esadecimale alla selezione dei colori.\",\"color-picker/@name\":\"Selettore colore esadecimale\",\"remove-sprite-confirm/@description\":\"Chiede conferma quando cancelli uno sprite di un progetto.\",\"remove-sprite-confirm/@name\":\"Conferma cancellazione sprite\",\"block-count/@description\":\"Mostra il numero totale di blocchi del progetto nella barra dei menu dell'editori. Incluso in precedenza in \\\"numero di sprite e di script\\\"\",\"block-count/@name\":\"Numero dei blocchi\",\"onion-skinning/@description\":\"Mostra anteprime dei costumi precedenti o seguenti nell'editor dei costumi. Puoi controllarlo con i tasti al di sotto dell'editor di costumi, accanto ai tasti per lo zoom.\",\"onion-skinning/@name\":\"Onion Skin\",\"onion-skinning/@settings-name-afterTint\":\"Tinta del costume seguente\",\"onion-skinning/@settings-name-beforeTint\":\"Tinta del costume precedente\",\"onion-skinning/@settings-name-default\":\"Attiva per impostazione predefinita\",\"onion-skinning/@settings-name-layering\":\"Livello predefinito\",\"onion-skinning/@settings-name-mode\":\"Modalità predefinita\",\"onion-skinning/@settings-name-next\":\"Costumi seguenti predefiniti\",\"onion-skinning/@settings-name-opacity\":\"Opacità (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Livello opacità (%)\",\"onion-skinning/@settings-name-previous\":\"Costumi precedenti predefiniti\",\"onion-skinning/@settings-select-layering-behind\":\"Secondo piano\",\"onion-skinning/@settings-select-layering-front\":\"Primo piano\",\"onion-skinning/@settings-select-mode-merge\":\"Unisci immagini\",\"onion-skinning/@settings-select-mode-tint\":\"Tinta colore\",\"bitmap-copy/@description\":\"Ti permette di copiare negli appunti un'immagine bitmap dall'editor di immagini per poterla poi incollare in altri siti o in altre app.\",\"bitmap-copy/@info-norightclick\":\"\\\"Clic destro → Copia\\\" non è supportato. Devi premere Ctrl+C quando l'immagine bitmap è selezionata.\",\"bitmap-copy/@name\":\"Copia immagini bitmap\",\"2d-color-picker/@description\":\"Sostituisce i cursori della saturazione e della luminosità con un selettore colori 2D. Tieni premuto Shift mentre trascini il cursore per cambiare i valori su un solo asse.\",\"2d-color-picker/@name\":\"Selettore colori 2D\",\"better-img-uploads/@description\":\"Aggiunge un pulsante sopra il pulsante \\\"carica costume\\\" che converte automaticamente le immagini bitmap in immagini SVG (vettoriali) durante il caricamento per evitare di perdere qualità.\",\"better-img-uploads/@info-notSuitableEdit\":\"Evita di usare il pulsante \\\"carica HD\\\" se vuoi modificare l'immagine dopo averla caricata.\",\"better-img-uploads/@name\":\"Caricamento di immagini HD\",\"better-img-uploads/@settings-name-fitting\":\"Ridimensionamento immagine\",\"better-img-uploads/@settings-select-fitting-fill\":\"Estendi per riempire lo stage\",\"better-img-uploads/@settings-select-fitting-fit\":\"Riduci per entrare tutta nello stage\",\"better-img-uploads/@settings-select-fitting-full\":\"Dimensione originale\",\"custom-block-shape/@description\":\"Modifica lo spazio interno, l'ampiezza degli angoli e l'altezza degli agganci dei blocchi di Scratch.\",\"custom-block-shape/@info-paddingWarning\":\"La diminuzione dello spazio interno è visibile soltanto a te, quindi se i tuoi progetti vengono visualizzati da altri utenti i tuoi script potrebbero essere sovrapposti.\",\"custom-block-shape/@name\":\"Forma dei blocchi personalizzata\",\"custom-block-shape/@preset-description-default2\":\"Un aspetto simile ai blocchi di Scratch 2.0\",\"custom-block-shape/@preset-description-default3\":\"L'aspetto standard dei blocchi di Scratch 3.0\",\"custom-block-shape/@preset-description-flat2\":\"I blocchi di Scratch 2.0 senza agganci e senza angoli\",\"custom-block-shape/@preset-description-flat3\":\"Blocchi Scratch 3.0 senza agganci e angoli\",\"custom-block-shape/@preset-name-default2\":\"Blocchi 2.0\",\"custom-block-shape/@preset-name-default3\":\"Blocchi 3.0\",\"custom-block-shape/@preset-name-flat2\":\"2.0 piatti\",\"custom-block-shape/@preset-name-flat3\":\"3.0 piatti\",\"custom-block-shape/@settings-name-cornerSize\":\"Dimensione angoli (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Altezza agganci (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Spaziatura interna (50-200%)\",\"editor-theme3/@description\":\"Modifica i colori dei blocchi per ogni categoria nell'editor.\",\"editor-theme3/@name\":\"Colori blocchi personalizzabili\",\"editor-theme3/@preset-description-black\":\"Rende nero lo sfondo dei blocchi\",\"editor-theme3/@preset-description-dark\":\"Versione scura dei colori predefiniti\",\"editor-theme3/@preset-description-original\":\"I colori originali di Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Situazioni, Controllo e Blocchi personalizzati con colori ispirati a 2.0\",\"editor-theme3/@preset-name-black\":\"Nero\",\"editor-theme3/@preset-name-dark\":\"Scuro\",\"editor-theme3/@preset-name-original\":\"Colori 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Variazioni 3.0\",\"editor-theme3/@settings-name-Pen-color\":\"estensioni\",\"editor-theme3/@settings-name-control-color\":\"controllo\",\"editor-theme3/@settings-name-custom-color\":\"personalizzati\",\"editor-theme3/@settings-name-data-color\":\"variabili\",\"editor-theme3/@settings-name-data-lists-color\":\"liste\",\"editor-theme3/@settings-name-events-color\":\"situazioni\",\"editor-theme3/@settings-name-input-color\":\"Argomenti dei blocchi\",\"editor-theme3/@settings-name-looks-color\":\"aspetto\",\"editor-theme3/@settings-name-motion-color\":\"movimento\",\"editor-theme3/@settings-name-operators-color\":\"operatori\",\"editor-theme3/@settings-name-sensing-color\":\"sensori\",\"editor-theme3/@settings-name-sounds-color\":\"suoni\",\"editor-theme3/@settings-name-text\":\"Colore del testo\",\"editor-theme3/@settings-select-text-black\":\"Nero\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Colorato su sfondo nero\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Colorato su sfondo bianco\",\"editor-theme3/@settings-select-text-white\":\"Bianco\",\"editor-colored-context-menus/@description\":\"Rende colorato il menu contestuale degli script.\",\"editor-colored-context-menus/@name\":\"Menu contestuali colorati\",\"editor-stage-left/@description\":\"Sposta lo stage nella parte sinistra dell'editor.\",\"editor-stage-left/@name\":\"Sposta stage a sinistra\",\"variable-manager/@description\":\"Aggiunge una scheda nell'editor a fianco a \\\"suoni\\\" per gestire facilmente variabili e liste.\",\"variable-manager/@name\":\"Gestore variabili\",\"gamepad/@description\":\"Interagisci con i progetti usando un controller/gamepad USB o bluetooth.\",\"gamepad/@name\":\"Supporto Gamepad\",\"gamepad/@settings-name-hide\":\"Nascondi pulsante impostazioni quando non è rilevato nessun controller\",\"editor-sounds/@description\":\"Riproduce effetti sonori quando attacchi o cancelli i blocchi.\",\"editor-sounds/@name\":\"Effetti sonori dell'editor\",\"folders/@description\":\"Permette di organizzare in cartelle le liste degli sprite, dei costumi e dei suoni. Per creare una cartella clicca con il tasto destro su qualunque sprite, costume o suono e seleziona \\\"crea cartella\\\". Clicca una cartella per aprirla o chiuderla. Clicca con il tasto destro uno sprite, un costume o un suono per selezionare la cartella in cui spostarlo, oppure trascinalo in una cartella aperta.\",\"folders/@info-notice-folders-are-public\":\"Gli utenti che abilitano questo addon vedranno le cartelle nel loro progetto. Tutti gli altri vedranno le liste degli sprite, dei costumi e dei suoni normalmente (senza cartelle)\",\"folders/@info-notice-sprite-names\":\"Questo addon funziona aggiungendo \\\"[NomeDellaCartella]// all'inizio del nome dei tuoi sprite, costumi o suoni.\",\"folders/@name\":\"Cartelle degli sprite\",\"block-switching/@description\":\"Fai clic con il pulsante destro su un blocco per sostituirlo con un blocco correlato.\",\"block-switching/@name\":\"Sostituzione blocchi\",\"block-switching/@settings-name-border\":\"Aggiungi contorno\",\"block-switching/@settings-name-control\":\"Blocchi Controllo\",\"block-switching/@settings-name-customargs\":\"Argomenti dei blocchi personalizzati\",\"block-switching/@settings-name-customargsmode\":\"Mostra le opzioni degli argomenti dei blocchi personalizzati\",\"block-switching/@settings-name-data\":\"Blocchi Variabili\",\"block-switching/@settings-name-event\":\"Blocchi Situazioni\",\"block-switching/@settings-name-extension\":\"Blocchi Estensioni\",\"block-switching/@settings-name-looks\":\"Blocchi Aspetto\",\"block-switching/@settings-name-motion\":\"Blocchi Movimento\",\"block-switching/@settings-name-noop\":\"Visualizza l'opzione per scambiare un blocco con se stesso\",\"block-switching/@settings-name-operator\":\"Blocchi Operatori\",\"block-switching/@settings-name-sensing\":\"Blocchi Sensori\",\"block-switching/@settings-name-sound\":\"Blocchi Suono\",\"block-switching/@settings-select-customargsmode-all\":\"Argomenti di tutti i blocchi personalizzati dello sprite\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Argomenti nei propri blocchi personalizzati\",\"load-extensions/@description\":\"Fa comparire automaticamente nelle categorie dei blocchi dell'editor le estensioni musica e penna e altre estensioni.\",\"load-extensions/@name\":\"Aggiungi automaticamente le estensioni\",\"load-extensions/@settings-name-music\":\"Musica\",\"load-extensions/@settings-name-pen\":\"Penna\",\"load-extensions/@settings-name-text2speech\":\"Da Testo a Voce\",\"load-extensions/@settings-name-translate\":\"Traduci\",\"custom-zoom/@description\":\"Personalizza il minimo e il massimo zoom, la velocità e la dimensione di avvio dello zoom nell'area degli script e nasconde i controlli automaticamente.\",\"custom-zoom/@name\":\"Zoom personalizzato dell'area degli script\",\"custom-zoom/@settings-name-autohide\":\"Nascondi Controlli Zoom Automaticamente\",\"custom-zoom/@settings-name-maxZoom\":\"Zoom Massimo (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Zoom Minimo (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Durata dell'animazione della scomparsa automatica\",\"custom-zoom/@settings-name-startZoom\":\"Zoom Iniziale (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Velocità Zoom (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Predefinita\",\"custom-zoom/@settings-select-speed-long\":\"Lunga\",\"custom-zoom/@settings-select-speed-none\":\"Nessuna\",\"custom-zoom/@settings-select-speed-short\":\"Breve\",\"initialise-sprite-position/@description\":\"Cambia la posizione x/y predefinita dei nuovi sprite. \",\"initialise-sprite-position/@name\":\"Posizione iniziale dei nuovi sprite personalizzata\",\"initialise-sprite-position/@settings-name-library\":\"Rendi casuale la posizione degli sprite della libreria\",\"initialise-sprite-position/@settings-name-x\":\"Posizione X\",\"initialise-sprite-position/@settings-name-y\":\"Posizione Y\",\"blocks2image/@description\":\"Clicca con il tasto destro l'area degli script per esportare i blocchi come immagini SVG/PNG.\",\"blocks2image/@name\":\"Salva i blocchi come immagine\",\"remove-curved-stage-border/@description\":\"Rimuove i bordi curvi intorno allo stage, permettendoti di vedere gli angoli.\",\"remove-curved-stage-border/@name\":\"Rimuove i bordi curvi dello stage\",\"transparent-orphans/@description\":\"Decidi tu la trasparenza dei blocchi nell'editor, con opzioni separate per i blocchi \\\"orfani\\\" (blocchi che non sono attaccati ad un cappello) e i blocchi trascinati.\",\"transparent-orphans/@name\":\"Trasparenza dei blocchi\",\"transparent-orphans/@settings-name-block\":\"Trasparenza dei blocchi (%)\",\"transparent-orphans/@settings-name-dragged\":\"Trasparenza dei blocchi trascinati (%)\",\"transparent-orphans/@settings-name-orphan\":\"Trasparenza dei blocchi orfani (%)\",\"paint-by-default/@description\":\"Cambia l'azione predefinita dei pulsanti \\\"Scegli uno  Sprite/Costume/Sfondo/Suono\\\" che come azione predefinita apre la libreria.\",\"paint-by-default/@name\":\"Disegno costume come azione predefinita\",\"paint-by-default/@settings-name-backdrop\":\"Scegli uno sfondo\",\"paint-by-default/@settings-name-costume\":\"Scegli un costume\",\"paint-by-default/@settings-name-sound\":\"Scegli un suono\",\"paint-by-default/@settings-name-sprite\":\"Scegli uno Sprite\",\"paint-by-default/@settings-select-backdrop-library\":\"Scegli uno sfondo dalla Libreria\",\"paint-by-default/@settings-select-backdrop-paint\":\"Disegna un nuovo sfondo\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Disegna uno sfondo a sorpresa\",\"paint-by-default/@settings-select-backdrop-upload\":\"Importa sfondo\",\"paint-by-default/@settings-select-costume-library\":\"Scegli un costume dalla Libreria\",\"paint-by-default/@settings-select-costume-paint\":\"Disegna un nuovo costume\",\"paint-by-default/@settings-select-costume-surprise\":\"Disegna un costume a sorpresa\",\"paint-by-default/@settings-select-costume-upload\":\"Importa costume\",\"paint-by-default/@settings-select-sound-library\":\"Scegli un suono dalla Libreria\",\"paint-by-default/@settings-select-sound-record\":\"Registra\",\"paint-by-default/@settings-select-sound-surprise\":\"Scegli un suono a sorpresa\",\"paint-by-default/@settings-select-sound-upload\":\"Importa suono\",\"paint-by-default/@settings-select-sprite-library\":\"Scegli uno sprite dalla Libreria\",\"paint-by-default/@settings-select-sprite-paint\":\"Disegna un nuovo sprite\",\"paint-by-default/@settings-select-sprite-surprise\":\"Aggiunti uno sprite a sorpresa\",\"paint-by-default/@settings-select-sprite-upload\":\"Importa sprite\",\"block-cherry-picking/@description\":\"Aggiunge la possibilità di trascinare un singolo blocco dall'interno di uno script (invece di tutta la sequenza attacca al di sotto) se si preme contemporaneamente il tasto CTRL.\",\"block-cherry-picking/@info-flipControls\":\"Se \\\"inverti i controlli\\\" è abilitato, il comportamento standard sarà trascinare singoli i blocchi. Tenendo premuto CTRL verrà invece trascinata tutta la sequenza\",\"block-cherry-picking/@info-macContextDisabled\":\"In macOS usa il tasto Cmd invece del tasto Ctrl.\",\"block-cherry-picking/@name\":\"Afferra i singoli blocchi con il tasto CTRL\",\"block-cherry-picking/@settings-name-invertDrag\":\"Inverti i controlli\",\"hide-new-variables/@description\":\"Non crea automaticamente il monitor sullo Stage per le variabili e le liste appena create.\",\"hide-new-variables/@name\":\"Nascondi nuove variabili\",\"editor-extra-keys/@description\":\"Aggiunge ulteriori tasti ai menu dei blocchi \\\"tasto () premuto\\\" e \\\"quando si preme il tasto ()\\\",  ad esempio invio, punto, virgola e altri ancora.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"I \\\"tasti sperimentali\\\" includono i segni uguale, slash, punto e virgola e altri. Potrebbero non funzionare per tutti i sistemi operativi e per tutte le configurazioni della tastiera.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"I \\\"Tasti shift\\\" includono tasti che solitamente richiedono la pressione del tasto shift e di un tasto numerico, ad esempio il punto esclamativo, il dollaro, e altri. Questi tasti funzionando soltanto con il blocco \\\"quando si preme il tasto ()\\\" e non funzionano per tutti i sistemi operativi e tutte le configurazioni della tastiera.\",\"editor-extra-keys/@name\":\"Supporto per tasti extra\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Abilita tasti sperimentali\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Abilita tasti Shift\",\"hide-delete-button/@description\":\"Nasconde il pulsante cancella (icona del cestino) dagli sprite, costumi e suoni. E' possibile cancellarli usando il menu contestuale.\",\"hide-delete-button/@name\":\"Nasconde il pulsante cancella\",\"hide-delete-button/@settings-name-costumes\":\"Costumi e sfondi\",\"hide-delete-button/@settings-name-sounds\":\"Suoni\",\"hide-delete-button/@settings-name-sprites\":\"Sprite\",\"no-script-bumping/@description\":\"Permette agli script di essere spostati e modificati senza che gli script che si sovrappongono vengano spostati.\",\"no-script-bumping/@name\":\"Non spaziare automaticamente gli script che si sovrappongono\",\"disable-stage-drag-select/@description\":\"Impedisce di trascinare gli sprite visibili sullo stage, tranne quelli esplicitamente indicati come trascinabili.\",\"disable-stage-drag-select/@info-shift\":\"Tieni premuto Shift per trascinare uno sprite anche se non è indicato come trascinabile.\",\"disable-stage-drag-select/@name\":\"Sprite non trascinabili nell'editor\",\"move-to-top-bottom/@description\":\"Aggiunge una opzione al menu contestuale per spostare un costume o un suono in cima o in fondo alla lista. In precedenza era un'opzione inserita negli strumenti per sviluppatori.\",\"move-to-top-bottom/@name\":\"Sposta costumi in cima o in fondo\",\"disable-paste-offset/@description\":\"Nell'editor dei costumi incolla gli elementi copiati nella loro posizione originale invece di spostarli leggermente.\",\"disable-paste-offset/@name\":\"Non spostare gli elementi copiati\",\"block-duplicate/@description\":\"Duplica rapidamente uno script trascinandolo mentre tieni premuto il tasto Alt. Tenendo premuto anche Ctrl duplicherai solo il blocco cliccato dal mouse invece di tutta la sequenza attaccata al di sotto. \",\"block-duplicate/@info-mac\":\"In macOS usa il tasto Opzione invece del tasto Alt key e il tasto Command invece del tasto Control.\",\"block-duplicate/@name\":\"Duplica uno script con il tasto Alt\",\"swap-local-global/@description\":\"Aggiunge più opzioni quando si rinomina una variabile o una lista esistente: permette di cambiare da \\\"Per tutti gli sprite\\\" e \\\"Solo per questo sprite\\\" e tra variabile locale e variabile cloud. Aggiunge un'ulteriore opzione quando si clicca una variabile/lista con il pulsante destro per cambiarne rapidamente la visibilità.\",\"swap-local-global/@name\":\"Cambia le variabili da \\\"Per tutti gli sprite\\\" a \\\"Solo per questo sprite\\\"\",\"editor-comment-previews/@description\":\"Ti permette di vedere l'anteprima del contenuto dei commenti passando il mouse sui commenti chiusi o sui blocchi. Puoi usarlo per vedere i commenti che sono al di fuori dell'area visibile dell'editor, identificare un blocco di tipo ciclo dal basso attraverso la sua anteprima, far entrare i commenti lunghi in uno spazio piccolo e molto altro. \",\"editor-comment-previews/@name\":\"Anteprime dei commenti dell'editor\",\"editor-comment-previews/@settings-name-delay\":\"Durata della pausa\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Segui il mouse\",\"editor-comment-previews/@settings-name-hover-view\":\"Passa il mouse sui commenti chiusi per vedere l'anteprima\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Passa il mouse sui blocchi per vedere l'anteprima dei commenti attaccati\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Passa il mouse sui blocchi personalizzati per vedere l'anteprima dei commenti della definizione\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Riduci le animazioni\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Riduci la trasparenza\",\"editor-comment-previews/@settings-select-delay-long\":\"Lunga\",\"editor-comment-previews/@settings-select-delay-none\":\"Nessuna\",\"editor-comment-previews/@settings-select-delay-short\":\"Breve\",\"columns/@description\":\"Divide il menu delle categorie dei blocchi in due colonne e lo sposta in cima alla lista dei blocchi, come in Scratch 2.0.\",\"columns/@name\":\"Menu delle categorie a due colonne\",\"script-snap/@description\":\"Trascina uno script per allinearlo automaticamente ai puntini presenti nell'area del codice.\",\"script-snap/@name\":\"Aggancia gli script alla griglia\",\"script-snap/@preset-name-default\":\"Predefinito\",\"script-snap/@preset-name-half-block\":\"Dimensione di mezzo blocco\",\"script-snap/@preset-name-whole-block\":\"Dimensione di un blocco intero\",\"script-snap/@settings-name-grid\":\"Dimensione della griglia (px)\",\"editor-stepping/@description\":\"Aggiunge un bordo colorato ai blocchi in esecuzione nel progetto.\",\"editor-stepping/@name\":\"Bordo blocchi in esecuzione\",\"editor-stepping/@settings-name-highlight-color\":\"Colore evidenziazione\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/ja.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/ja.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"2020年のエイプリルフールの「キャットブロック」を追加する。\",\"cat-blocks/@info-watch\":\"「カーソルを向く」オプションを使用すると、エディターが重くなるかもしれません。\",\"cat-blocks/@name\":\"キャットブロック\",\"cat-blocks/@settings-name-watch\":\"カーソルを向く\",\"editor-devtools/@description\":\"検索バー、メニューオプション、ブロックのコピペ、きれいにする、定義ブロックに移動、その他。\",\"editor-devtools/@info-shortcuts\":\"Ctrl+Fで検索ボックスをフォーカスし、Ctrl+スペースで「挿入」ポップアップを表示し、Ctrl+左右キーで検索履歴を表示する。\",\"editor-devtools/@name\":\"開発者ツール\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"きれいにする +\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"変数、カスタムブロック、イベントをマウスの中ボタンでクリックして案内\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"カーソルの位置にブロックを配置\",\"editor-searchable-dropdowns/@description\":\"ブロックのドロップダウンの選択肢を検索する。\",\"editor-searchable-dropdowns/@name\":\"ドロップダウン検索\",\"data-category-tweaks-v2/@description\":\"変数ブロックの表示を改良する。\",\"data-category-tweaks-v2/@name\":\"変数ブロック改良\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"変数ブロックを変数リストの上に移動\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"リストを分離\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"スプライトのみの変数を分離\",\"block-palette-icons/@description\":\"ブロックパレットのカテゴリーにアイコンを追加する。\",\"block-palette-icons/@name\":\"ブロックパレットアイコン\",\"hide-flyout/@description\":\"ブロックパレットをホバーしていないときに隠す。ロックアイコンをクリックして表示し続けたり、「カテゴリー・クリック」を使うこともできる。\",\"hide-flyout/@info-hoverExplanation\":\"「パレット部分のホバー」は、閲覧部分のみ拡大します。誤ってブロックを削除しないようにするには、他のモードを使ってください。\",\"hide-flyout/@name\":\"ブロックパレット隠し\",\"hide-flyout/@settings-name-speed\":\"隠すときのアニメーション\",\"hide-flyout/@settings-name-toggle\":\"固定方法\",\"hide-flyout/@settings-select-speed-default\":\"既定\",\"hide-flyout/@settings-select-speed-long\":\"遅く\",\"hide-flyout/@settings-select-speed-none\":\"なし\",\"hide-flyout/@settings-select-speed-short\":\"速く\",\"hide-flyout/@settings-select-toggle-category\":\"カテゴリー・クリック\",\"hide-flyout/@settings-select-toggle-cathover\":\"カテゴリーのホバー\",\"hide-flyout/@settings-select-toggle-hover\":\"パレット部分のホバー\",\"mediarecorder/@description\":\"ステージを録画するボタンをエディターのメニューバーに追加する。\",\"mediarecorder/@name\":\"ステージを録画\",\"drag-drop/@description\":\"エディターのスプライトペインやコスチュームペインにファイルをドロップしたり、リストや「聞いて待つ」画面にテキストファイルをドロップできるようにする。\",\"drag-drop/@name\":\"ファイルをドロップ\",\"drag-drop/@settings-name-use-hd-upload\":\"HDアップロードを使用\",\"debugger/@description\":\"「デバッガー」ブロックカテゴリーとログ画面をエディターに追加する。「log」、「warn」、「error」ブロックはログ画面に内容を表示する。「breakpoint」ブロックはプロジェクトを一時停止させる。\",\"debugger/@name\":\"デバッガー\",\"pause/@description\":\"緑の旗の横に一時停止ボタンを追加する。\",\"pause/@name\":\"一時停止ボタン\",\"mute-project/@description\":\"緑の旗をCtr+クリックでミュートする。\",\"mute-project/@name\":\"プロジェクトをミュート\",\"clones/@description\":\"クローンの合計数をステージの上に表示する。\",\"clones/@name\":\"クローンカウンター\",\"mouse-pos/@description\":\"ステージの上にマウスの座標を表示する。\",\"mouse-pos/@name\":\"マウスの座標\",\"color-picker/@description\":\"16進数カラーコードの入力欄を追加する。\",\"color-picker/@name\":\"16進数カラーピッカー\",\"remove-sprite-confirm/@description\":\"スプライトの削除時に確認画面を表示する。\",\"remove-sprite-confirm/@name\":\"スプライト削除確認画面\",\"block-count/@description\":\"エディターのメニューバーに合計ブロック数を表示する。\",\"block-count/@name\":\"ブロックカウント\",\"onion-skinning/@description\":\"コスチューム編集時に前後のコスチュームが表示される半透明なレイヤーを追加する。拡大ボタンの横のボタンで制御可能。\",\"onion-skinning/@name\":\"半透明コスチュームエディター\",\"onion-skinning/@settings-name-afterTint\":\"次のコスチュームに色\",\"onion-skinning/@settings-name-beforeTint\":\"前のコスチュームに色\",\"onion-skinning/@settings-name-default\":\"既定で有効化\",\"onion-skinning/@settings-name-layering\":\"既定のレイヤー\",\"onion-skinning/@settings-name-mode\":\"既定のモード\",\"onion-skinning/@settings-name-next\":\"次のコスチューム\",\"onion-skinning/@settings-name-opacity\":\"透明度 (%)\",\"onion-skinning/@settings-name-opacityStep\":\"透明度の変化の割合 (%)\",\"onion-skinning/@settings-name-previous\":\"前のコスチューム\",\"onion-skinning/@settings-select-layering-behind\":\"後ろ\",\"onion-skinning/@settings-select-layering-front\":\"前\",\"onion-skinning/@settings-select-mode-merge\":\"画像をマージ\",\"onion-skinning/@settings-select-mode-tint\":\"色合い\",\"bitmap-copy/@description\":\"ペイントエディターでビットマップ画像をコピー可能にする。\",\"bitmap-copy/@info-norightclick\":\"右クリックメニューは使えません。ビットマップ画像を選択し、Ctrl+Cを押してください。\",\"bitmap-copy/@name\":\"ビットマップ画像をコピー\",\"2d-color-picker/@description\":\"コスチュームエディターの鮮やかさと明るさのスライダーを2Dカラーピッカーにする。Shiftキーを押して一方のみを変更する。\",\"2d-color-picker/@name\":\"2D カラーピッカー\",\"better-img-uploads/@description\":\"「コスチュームをアップロード」ボタンの上に、画像を自動的にSVGに変換して画質を保つ「HDアップロード」ボタンを追加する。\",\"better-img-uploads/@info-notSuitableEdit\":\"このアドオンを使ってアップロードした画像は、編集には適しません。\",\"better-img-uploads/@name\":\"画像のHD アップロード\",\"better-img-uploads/@settings-name-fitting\":\"画像のサイズ\",\"better-img-uploads/@settings-select-fitting-fill\":\"伸ばす\",\"better-img-uploads/@settings-select-fitting-fit\":\"縮める\",\"better-img-uploads/@settings-select-fitting-full\":\"元サイズ\",\"custom-block-shape/@description\":\"ブロックのパディング、角、切れ込みを調節する。\",\"custom-block-shape/@info-paddingWarning\":\"パディングのサイズは他のユーザーには適用されません。\",\"custom-block-shape/@name\":\"ブロックの形をカスタマイズ\",\"custom-block-shape/@preset-description-default2\":\"Scratch 2.0風のブロック\",\"custom-block-shape/@preset-description-default3\":\"Scratch 3.0ブロックの既定値\",\"custom-block-shape/@preset-description-flat2\":\"切れ込みと角をなくしたScratch 2.0ブロック\",\"custom-block-shape/@preset-description-flat3\":\"切れ込みと角をなくしたScratch 3.0ブロック\",\"custom-block-shape/@preset-name-default2\":\"2.0ブロック\",\"custom-block-shape/@preset-name-default3\":\"3.0ブロック\",\"custom-block-shape/@preset-name-flat2\":\"2.0 フラット\",\"custom-block-shape/@preset-name-flat3\":\"3.0 フラット\",\"custom-block-shape/@settings-name-cornerSize\":\"角のサイズ (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"切れ込みの高さ (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"パディングのサイズ (50-200%)\",\"editor-theme3/@description\":\"ブロックの色をカテゴリーごとに変更する。\",\"editor-theme3/@name\":\"ブロックの色をカスタマイズ\",\"editor-theme3/@preset-description-black\":\"ブロックの背景色を黒にする\",\"editor-theme3/@preset-description-dark\":\"既定の色を暗くしたバージョン\",\"editor-theme3/@preset-description-original\":\"Scratch 2.0の色\",\"editor-theme3/@preset-description-tweaks\":\"Scratch 2.0風のイベント、制御、定義ブロック\",\"editor-theme3/@preset-name-black\":\"黒\",\"editor-theme3/@preset-name-dark\":\"ダーク\",\"editor-theme3/@preset-name-original\":\"2.0の色\",\"editor-theme3/@settings-name-Pen-color\":\"拡張機能\",\"editor-theme3/@settings-name-control-color\":\"制御\",\"editor-theme3/@settings-name-custom-color\":\"定義\",\"editor-theme3/@settings-name-data-color\":\"変数\",\"editor-theme3/@settings-name-data-lists-color\":\"リスト\",\"editor-theme3/@settings-name-events-color\":\"イベント\",\"editor-theme3/@settings-name-input-color\":\"ブロックの入力\",\"editor-theme3/@settings-name-looks-color\":\"見た目\",\"editor-theme3/@settings-name-motion-color\":\"動き\",\"editor-theme3/@settings-name-operators-color\":\"演算\",\"editor-theme3/@settings-name-sensing-color\":\"調べる\",\"editor-theme3/@settings-name-sounds-color\":\"音\",\"editor-theme3/@settings-name-text\":\"文字色\",\"editor-theme3/@settings-select-text-black\":\"黒\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"黒背景に色\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"白背景に色\",\"editor-theme3/@settings-select-text-white\":\"白\",\"editor-colored-context-menus/@description\":\"コンテキストメニューに色を付ける。\",\"editor-colored-context-menus/@name\":\"右クリックメニューを色付け\",\"editor-stage-left/@description\":\"ステージを左側に表示する。\",\"editor-stage-left/@name\":\"ステージを左側に表示\",\"variable-manager/@description\":\"エディターに変数とリストを管理するためのタブを追加する。\",\"variable-manager/@name\":\"変数マネージャー\",\"gamepad/@description\":\"USBかBluetoothのコントローラーやゲームパッドを利用する。\",\"gamepad/@name\":\"ゲームパッド\",\"gamepad/@settings-name-hide\":\"コントローラーが検出されない場合に設定ボタンを隠す\",\"editor-sounds/@description\":\"ブロックをつなげたり削除したりするときに効果音を鳴らす。\",\"editor-sounds/@name\":\"エディター効果音\",\"folders/@description\":\"スプライト・コスチューム・音のリストにフォルダーを追加する。フォルダーを作成するには、スプライトを右クリックし「フォルダーを作成」を押す。クリックして開閉し、スプライトをドラッグか右クリックしてフォルダーに移動させる。\",\"folders/@info-notice-folders-are-public\":\"この機能を有効化していない場合は、スプライトはすべて表示されますが、フォルダーは表示されません。\",\"folders/@info-notice-sprite-names\":\"使用した場合、スプライト名の最初にフォルダー名が追加されます。\",\"folders/@name\":\"スプライトフォルダー\",\"block-switching/@description\":\"ブロックを右クリックして類似のブロックに変える。\",\"block-switching/@name\":\"ブロック置換\",\"block-switching/@settings-name-border\":\"枠線\",\"block-switching/@settings-name-control\":\"制御ブロック\",\"block-switching/@settings-name-customargs\":\"定義ブロックの引数\",\"block-switching/@settings-name-customargsmode\":\"表示する定義ブロック引数\",\"block-switching/@settings-name-data\":\"変数ブロック\",\"block-switching/@settings-name-event\":\"イベントブロック\",\"block-switching/@settings-name-extension\":\"拡張機能ブロック\",\"block-switching/@settings-name-looks\":\"見た目ブロック\",\"block-switching/@settings-name-motion\":\"動きブロック\",\"block-switching/@settings-name-noop\":\"現在のブロックを表示\",\"block-switching/@settings-name-operator\":\"演算ブロック\",\"block-switching/@settings-name-sensing\":\"調べるブロック\",\"block-switching/@settings-name-sound\":\"音ブロック\",\"block-switching/@settings-select-customargsmode-all\":\"スプライト内のすべての定義ブロックの引数\",\"block-switching/@settings-select-customargsmode-defOnly\":\"同じ定義ブロック内の引数\",\"load-extensions/@description\":\"プロジェクトに自動で拡張機能を追加する。\",\"load-extensions/@name\":\"拡張機能の自動追加\",\"load-extensions/@settings-name-music\":\"音楽\",\"load-extensions/@settings-name-pen\":\"ペン\",\"load-extensions/@settings-name-text2speech\":\"音声合成\",\"load-extensions/@settings-name-translate\":\"翻訳\",\"custom-zoom/@description\":\"コードペインのズーム設定をカスタマイズする。\",\"custom-zoom/@name\":\"カスタムズーム設定\",\"custom-zoom/@settings-name-autohide\":\"ズームボタンを隠す\",\"custom-zoom/@settings-name-maxZoom\":\"最大値 (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"最小値 (1-100%)\",\"custom-zoom/@settings-name-speed\":\"アニメーションの時間\",\"custom-zoom/@settings-name-startZoom\":\"初期値 (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"ズームの割合 (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"既定\",\"custom-zoom/@settings-select-speed-long\":\"長\",\"custom-zoom/@settings-select-speed-none\":\"なし\",\"custom-zoom/@settings-select-speed-short\":\"短\",\"initialise-sprite-position/@description\":\"新しいスプライトのデフォルトのX・Y座標を変更する。\",\"initialise-sprite-position/@name\":\"新しいスプライトの位置を変更\",\"initialise-sprite-position/@settings-name-library\":\"ランダム\",\"initialise-sprite-position/@settings-name-x\":\"X座標\",\"initialise-sprite-position/@settings-name-y\":\"Y座標\",\"blocks2image/@description\":\"コードエリアを右クリックしてブロックをSVG/PNGとして出力する。\",\"blocks2image/@name\":\"ブロックを画像に出力\",\"remove-curved-stage-border/@description\":\"ステージの枠の丸みをなくし、角を見れるようにする。\",\"remove-curved-stage-border/@name\":\"ステージの枠の丸み除去\",\"transparent-orphans/@description\":\"エディター内のつながっていないブロックやドラッグ中のブロックの透明度を調整する。\",\"transparent-orphans/@name\":\"透明ブロック\",\"transparent-orphans/@settings-name-block\":\"ブロックの透明度 (%)\",\"transparent-orphans/@settings-name-dragged\":\"ドラッグ中のブロックの透明度 (%)\",\"transparent-orphans/@settings-name-orphan\":\"つながっていないブロックの透明度 (%)\",\"paint-by-default/@description\":\"「スプライト・コスチューム・背景・音を選ぶ」ボタンの既定の動作を変更する。\",\"paint-by-default/@name\":\"空のコスチュームを追加ボタン\",\"paint-by-default/@settings-name-backdrop\":\"背景\",\"paint-by-default/@settings-name-costume\":\"コスチューム\",\"paint-by-default/@settings-name-sound\":\"音\",\"paint-by-default/@settings-name-sprite\":\"スプライト\",\"paint-by-default/@settings-select-backdrop-library\":\"ライブラリー\",\"paint-by-default/@settings-select-backdrop-paint\":\"空の背景\",\"paint-by-default/@settings-select-backdrop-surprise\":\"サプライズ\",\"paint-by-default/@settings-select-backdrop-upload\":\"アップロード\",\"paint-by-default/@settings-select-costume-library\":\"ライブラリー\",\"paint-by-default/@settings-select-costume-paint\":\"空のコスチューム\",\"paint-by-default/@settings-select-costume-surprise\":\"サプライズ\",\"paint-by-default/@settings-select-costume-upload\":\"アップロード\",\"paint-by-default/@settings-select-sound-library\":\"ライブラリー\",\"paint-by-default/@settings-select-sound-record\":\"録音\",\"paint-by-default/@settings-select-sound-surprise\":\"サプライズ\",\"paint-by-default/@settings-select-sound-upload\":\"アップロード\",\"paint-by-default/@settings-select-sprite-library\":\"ライブラリー\",\"paint-by-default/@settings-select-sprite-paint\":\"空のスプライト\",\"paint-by-default/@settings-select-sprite-surprise\":\"サプライズ\",\"paint-by-default/@settings-select-sprite-upload\":\"アップロード\",\"block-cherry-picking/@description\":\"Ctrlキーを押している間、ブロックをつかむとそのブロックだけが移動するようにする。\",\"block-cherry-picking/@info-flipControls\":\"「入力を反転」を利用している場合は、Ctrlキーを押さずにブロックをつかむとそのブロックだけが移動し、Ctrlキーを押すと下のブロックも一緒に移動するようになります。\",\"block-cherry-picking/@info-macContextDisabled\":\"macOSでは、Ctrlの代わりにCommandキーを押してください。\",\"block-cherry-picking/@name\":\"Ctrlキーでブロックをつかむ\",\"block-cherry-picking/@settings-name-invertDrag\":\"入力を反転\",\"hide-new-variables/@description\":\"新しく作成した変数やリストのモニターを自動で隠す。\",\"hide-new-variables/@name\":\"変数を自動で隠す\",\"editor-extra-keys/@description\":\"\\\"() キーが押された?\\\" ブロックのドロップダウンに、Enter、ドット、カンマなどのキーを追加する。\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"「実験的なキー」には、等号、スラッシュ、セミコロンなどが含まれます。OSやキーボードのレイアウトによっては、うまく動作しないことがあります。\",\"editor-extra-keys/@info-shiftKeysWarn\":\"「Shiftキー」設定を有効化すると、Shiftキーと数字キーを押して入力する、ハッシュ、感嘆符などのキーが追加されます。これらのキーは「() キーが押されたとき」ブロックでのみ動作し、OSやキーボードのレイアウトによっては一切動作しないことがあります。\",\"editor-extra-keys/@name\":\"キー入力オプションの追加\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"実験的なキー\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Shiftキー\",\"hide-delete-button/@description\":\"削除ボタン(ゴミ箱アイコン)を、スプライト、コスチュームや音から隠す。コンテキストメニューを使えば、通常通り削除できる。\",\"hide-delete-button/@name\":\"削除ボタンを隠す\",\"hide-delete-button/@settings-name-costumes\":\"コスチュームと背景\",\"hide-delete-button/@settings-name-sounds\":\"音\",\"hide-delete-button/@settings-name-sprites\":\"スプライト\",\"no-script-bumping/@description\":\"スクリプトを重ねて配置できるようにする。\",\"no-script-bumping/@name\":\"スクリプト重ね配置\",\"disable-stage-drag-select/@description\":\"ステージでスプライトをドラッグできないようにする。\",\"disable-stage-drag-select/@info-shift\":\"使用中でも、Shiftキーを押すとドラッグできます。\",\"disable-stage-drag-select/@name\":\"ドラッグできないスプライト\",\"move-to-top-bottom/@description\":\"コスチュームや音を一覧の一番上や一番下に移動する右クリックメニュー項目を追加する。以前は「開発者ツール」の一部であった。\",\"move-to-top-bottom/@name\":\"コスチュームを一番上や一番下に移動\",\"disable-paste-offset/@description\":\"コスチュームエディター上に張り付けるとき、元の場所からずらさずに張り付ける。\",\"disable-paste-offset/@name\":\"貼り付けたコスチュームの移動を防止\",\"block-duplicate/@description\":\"Altキーを押したままスクリプトをドラッグし、スクリプトを複製する。Ctrlキーも押すと、ブロックを個別に複製できる。\",\"block-duplicate/@info-mac\":\"macOSでは、Altキーの代わりにOptionキーを、Ctrlキーの代わりにCmdキーを利用できます。\",\"block-duplicate/@name\":\"Altキーでスクリプトを複製\",\"swap-local-global/@description\":\"変数やリストを改名するときに、「すべてのスプライト用」と「このスプライトのみ」や、クラウド変数を切り替えられるようにする。右クリックメニューに簡単に変更するための項目を追加する。\",\"swap-local-global/@name\":\"変数の「すべてのスプライト用」と「このスプライトのみ」を変更\",\"editor-comment-previews/@description\":\"最小化されたコメントやブロックに付属しているコメントの内容を、ホバーしてプレビューできるようにする。\",\"editor-comment-previews/@name\":\"エディター内のコメントプレビュー\",\"editor-comment-previews/@settings-name-delay\":\"待ち時間\",\"editor-comment-previews/@settings-name-follow-mouse\":\"ポインター位置を追随\",\"editor-comment-previews/@settings-name-hover-view\":\"最小化したコメントをプレビュー\",\"editor-comment-previews/@settings-name-hover-view-block\":\"ブロックをホバーして付属のコメントをプレビュー\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"カスタムブロックをホバーして定義ブロックのコメントをプレビュー\",\"editor-comment-previews/@settings-name-reduce-animation\":\"アニメーションを減らす\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"透明度を減らす\",\"editor-comment-previews/@settings-select-delay-long\":\"長\",\"editor-comment-previews/@settings-select-delay-none\":\"なし\",\"editor-comment-previews/@settings-select-delay-short\":\"短\",\"columns/@description\":\"Scratch 2.0のように、ブロックカテゴリーメニューを2列に分け、ブロックパレットの上部に配置する。\",\"columns/@name\":\"2列カテゴリーメニュー\",\"script-snap/@description\":\"スクリプトをドラッグして、コードエリアのドットに整列させる。\",\"script-snap/@name\":\"スクリプトを整列\",\"script-snap/@preset-name-default\":\"デフォルト\",\"script-snap/@preset-name-half-block\":\"0.5ブロック\",\"script-snap/@preset-name-whole-block\":\"1ブロック\",\"script-snap/@settings-name-grid\":\"グリッドのサイズ (px)\",\"editor-stepping/@description\":\"実行中のブロックの周りに色のついた枠線を表示する。\",\"editor-stepping/@name\":\"実行中のブロック枠線\",\"editor-stepping/@settings-name-highlight-color\":\"枠線の色\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/ko.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/ko.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@name, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"2020년 만우절의 편집기 고양이 모자 블록을 되돌립니다.\",\"cat-blocks/@info-watch\":\"\\\"마우스 커서 바라보기\\\" 설정은 편집기가 열려 있을 때 성능에 영향을 줄 수 있습니다.\",\"cat-blocks/@name\":\"고양이 블럭\",\"cat-blocks/@settings-name-watch\":\"마우스 커서 바라보기\",\"editor-devtools/@description\":\"편집기에서 탐색창과 블록 복사/붙여넣기, 더 좋은 코드 정리, 사용자 지정 블록으로 이동과 같은 새 메뉴 설정을 추가합니다.\",\"editor-devtools/@info-shortcuts\":\"탐색바에 초점을 맞추려면 \\\"Ctrl+F\\\"를 누르고, \\\"Ctrl+Space\\\"를 누르면 \\\"이름으로 블록 추가\\\" 팝업, \\\"Ctrl+왼쪽/오른쪽\\\"을 누르면 찾기 기록을 탐색합니다.\",\"editor-devtools/@name\":\"개발자 도구\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"\\\"블럭 정리하기\\\" 향상\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"변수 마우스 가운데 클릭, 탐색할 사용자 지정 블록 또는 이벤트\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"마우스 커서로 블럭 붙여넣기\",\"editor-searchable-dropdowns/@description\":\"블록 드롭다운을 검색할 수 있도록 합니다.\",\"editor-searchable-dropdowns/@name\":\"검색 가능한 드롭다운\",\"data-category-tweaks-v2/@description\":\"블록 카테고리에서 데이터(\\\"변수\\\") 카테고리를 개선합니다.\",\"data-category-tweaks-v2/@name\":\"데이터 카테고리 개선\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"데이터 블럭을 변수 리스트 앞으로 보내기\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"리스트 카테고리 분리\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"지역변수 분리\",\"block-palette-icons/@description\":\"색칠된 원형 내부에 블록 카데고리를 식별하는 아이콘을 추가합니다.\",\"block-palette-icons/@name\":\"블럭 팔레트 카테고리 아이콘\",\"hide-flyout/@description\":\"사용되지 않은 경우 블록 팔레트를 숨깁니다. 잠금 아이콘을 클릭하여 일시적으로 제자리에 잠그거나 또는 \\\"카테고리 클릭\\\" 모드를 사용하세요.\",\"hide-flyout/@info-hoverExplanation\":\"\\\"팔레트 영역 미사용\\\" 모드는 보이는 영역만 확장합니다. 블록을 삭제하지 않고 해당 영역으로 끌 수 있으려면 다른 모드 중 하나를 사용하세요.\",\"hide-flyout/@name\":\"블록 팔레트 자동으로 숨기기\",\"hide-flyout/@settings-name-speed\":\"모션 시간\",\"hide-flyout/@settings-name-toggle\":\"토글 켜기\",\"hide-flyout/@settings-select-speed-default\":\"기본\",\"hide-flyout/@settings-select-speed-long\":\"길게\",\"hide-flyout/@settings-select-speed-none\":\"없음\",\"hide-flyout/@settings-select-speed-short\":\"짧게\",\"hide-flyout/@settings-select-toggle-category\":\"카테고리 클릭\",\"hide-flyout/@settings-select-toggle-cathover\":\"카테고리에 접근\",\"hide-flyout/@settings-select-toggle-hover\":\"팔레트 영역 접근\",\"mediarecorder/@description\":\"편집기 메뉴 바에 \\\"녹화 시작\\\" 버튼을 추가해 프로젝트의 무대를 녹화할 수 있도록 합니다.\",\"mediarecorder/@name\":\"프로젝트 영상 녹화기\",\"drag-drop/@description\":\"파일 탐색기에서 이미지, 소리를 스프라이트 창이나 의상/사운드 목록으로 끌어다 놓을 수 있습니다. 또한 텍스트 파일을 목록으로 끌어다 놓거나 \\\"묻고 기다리기\\\" 질문창을 표시할 수 있습니다.\",\"drag-drop/@name\":\"파일 끌어다 놓기\",\"drag-drop/@settings-name-use-hd-upload\":\"고해상도 업로드 사용하기\",\"debugger/@description\":\"편집기에 새 \\\"디버거\\\" 블록 카테고리와 \\\"기록\\\" 창을 추가합니다. \\\"기록\\\", \\\"경고\\\" 및 \\\"오류\\\" 블록은 지정된 메시지를 기록 창에 저장됩니다. 중단점 블록은 실행될 때 프로젝트를 일시 중지합니다.\",\"debugger/@name\":\"디버거\",\"pause/@description\":\"초록 깃발 옆에 일시 정지 버튼을 추가합니다.\",\"pause/@name\":\"일시정지 버튼\",\"mute-project/@description\":\"녹색 깃발을 Ctrl+클릭하여 프로젝트를 음소거/음소거 해제합니다.\",\"mute-project/@name\":\"프로젝트 플레이어 음소거 모드\",\"clones/@description\":\"전체 복제본의 수를 편집기 무대 상단에 표시합니다.\",\"clones/@name\":\"복제본 개수 표시\",\"mouse-pos/@description\":\"마우스의 x/y위치를 편집기 무대의 상단에 표시합니다.\",\"mouse-pos/@name\":\"마우스 위치 표시\",\"color-picker/@description\":\"색상 선택기에 HEX 코드 입력을 추가합니다.\",\"color-picker/@name\":\"HEX 색상 선택기\",\"remove-sprite-confirm/@description\":\"스프라이트를 지울 때 한 번 더 묻습니다.\",\"remove-sprite-confirm/@name\":\"스프라이트 제거 확인\",\"block-count/@description\":\"편집기 메뉴바에 프로젝트의 총 블록 수를 표시합니다. 과거에는 \\\"스프라이트 및 스크립트 수\\\"의 일부였습니다.\",\"onion-skinning/@description\":\"모양을 편집할 때 전 모양이나 다음 모양을 투명한 오버레이로 보입니다. 모양 편집기에서 확대 버튼 옆의 버튼으로 동작합니다.\",\"onion-skinning/@name\":\"어니언 스키닝\",\"onion-skinning/@settings-name-afterTint\":\"다음 모양 색상\",\"onion-skinning/@settings-name-beforeTint\":\"이전 모양 색상\",\"onion-skinning/@settings-name-default\":\"기본으로 활성화하기\",\"onion-skinning/@settings-name-layering\":\"기본 레이어화\",\"onion-skinning/@settings-name-mode\":\"기본 모드\",\"onion-skinning/@settings-name-next\":\"기본 다음 모양\",\"onion-skinning/@settings-name-opacity\":\"불투명도 (%)\",\"onion-skinning/@settings-name-opacityStep\":\"투명도 스푸마토 (%)\",\"onion-skinning/@settings-name-previous\":\"기본 이전 모양\",\"onion-skinning/@settings-select-layering-behind\":\"뒤\",\"onion-skinning/@settings-select-layering-front\":\"앞\",\"onion-skinning/@settings-select-mode-merge\":\"이미지 병합\",\"onion-skinning/@settings-select-mode-tint\":\"단색으로 표시\",\"bitmap-copy/@description\":\"다른 웹사이트나 소프트웨어에 붙여넣을 수 있도록 모양 편집기에서 비트맵 이미지를 시스템 클립보드에 복사합니다.\",\"bitmap-copy/@info-norightclick\":\"\\\"우클릭 → 복사하기\\\"는 지원하지 않습니다. 당신은 항상 비트맵 이미지를 선택하기 위해선 Ctrl+C를 눌러야 합니다.\",\"bitmap-copy/@name\":\"비트맵 사진 복사\",\"2d-color-picker/@description\":\"채도, 밝기 슬라이더를 2차원 색상 선택기로 바꿉니다. Shift 키를 누른 채로 커서를 끌어 한 가지의 값을 변경할 수 있습니다.\",\"2d-color-picker/@name\":\"2차원 색상 선택기\",\"better-img-uploads/@description\":\"\\\"모양 업로드\\\" 버튼 위에 자동으로 비트맵 사진을 SVG(벡터) 사진으로 바꾸어 낮은 화질을 피하는 버튼을 추가합니다.\",\"better-img-uploads/@info-notSuitableEdit\":\"사진 업로드 후에 편집할 예정이면 고해상도 사진 업로드 버튼을 사용하지 마세요.\",\"better-img-uploads/@name\":\"고해상도 사진 업로드\",\"better-img-uploads/@settings-name-fitting\":\"사진 크기 변경하기\",\"better-img-uploads/@settings-select-fitting-fill\":\"이미지를 늘려 무대에 채우기\",\"better-img-uploads/@settings-select-fitting-fit\":\"이미지를 줄여 무대에 채우기\",\"better-img-uploads/@settings-select-fitting-full\":\"기존 크기\",\"custom-block-shape/@description\":\"블록의 높이, 모서리 곡률. 홈 높이를 조정합니다.\",\"custom-block-shape/@info-paddingWarning\":\"블럭 높이를 줄이는 것은 당신만 볼 수 있기에 프로젝트를 다른 사용자가 볼 때 스크립트가 겹쳐 보일 수 있습니다.\",\"custom-block-shape/@name\":\"블록 모양 사용자 지정\",\"custom-block-shape/@preset-description-default2\":\"스크래치 2.0과 비슷하게 보여집니다.\",\"custom-block-shape/@preset-description-default3\":\"스크래치 3.0에서 일반적으로 보여지는 상태입니다.\",\"custom-block-shape/@preset-description-flat2\":\"홈과 모서리가 제거된 스크래치 2.0 블럭입니다.\",\"custom-block-shape/@preset-description-flat3\":\"홈과 모서리가 제거된 스크래치 3.0 블럭입니다.\",\"custom-block-shape/@preset-name-default2\":\"2.0 블럭\",\"custom-block-shape/@preset-name-default3\":\"3.0 블럭\",\"custom-block-shape/@preset-name-flat2\":\"2.0 플랫\",\"custom-block-shape/@preset-name-flat3\":\"3.0 플랫\",\"custom-block-shape/@settings-name-cornerSize\":\"모서리 크기 (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"홈 높이 (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"블럭 높이 (50-200%)\",\"editor-theme3/@description\":\"편집기의 각 카테고리에 대한 블록 색상을 편집합니다.\",\"editor-theme3/@name\":\"블록 색상 사용자 지정하기\",\"editor-theme3/@preset-description-black\":\"블럭 배경을 검정으로 만듭니다.\",\"editor-theme3/@preset-description-dark\":\"기본 색상의 다크 버전\",\"editor-theme3/@preset-description-original\":\"2.0의 원 색상\",\"editor-theme3/@preset-description-tweaks\":\"2.0에서의 색상과 비슷한 색상의 이벤트, 제어, 새 블록\",\"editor-theme3/@preset-name-black\":\"검은색\",\"editor-theme3/@preset-name-dark\":\"다크\",\"editor-theme3/@preset-name-original\":\"2.0 색상\",\"editor-theme3/@preset-name-tweaks\":\"3.0 개선\",\"editor-theme3/@settings-name-Pen-color\":\"확장 기능\",\"editor-theme3/@settings-name-control-color\":\"제어\",\"editor-theme3/@settings-name-custom-color\":\"사용자 지정\",\"editor-theme3/@settings-name-data-color\":\"변수\",\"editor-theme3/@settings-name-data-lists-color\":\"리스트\",\"editor-theme3/@settings-name-events-color\":\"이벤트\",\"editor-theme3/@settings-name-input-color\":\"블럭 입력값\",\"editor-theme3/@settings-name-looks-color\":\"형태\",\"editor-theme3/@settings-name-motion-color\":\"동작\",\"editor-theme3/@settings-name-operators-color\":\"연산\",\"editor-theme3/@settings-name-sensing-color\":\"감지\",\"editor-theme3/@settings-name-sounds-color\":\"소리\",\"editor-theme3/@settings-name-text\":\"글자 색\",\"editor-theme3/@settings-select-text-black\":\"검정\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"검은 배경에서의 색\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"흰 배경에서의 색\",\"editor-theme3/@settings-select-text-white\":\"하양\",\"editor-colored-context-menus/@description\":\"우클릭 메뉴에 색상을 입힙니다.\",\"editor-colored-context-menus/@name\":\"우클릭 메뉴 색상\",\"editor-stage-left/@description\":\"무대를 편집기의 왼쪽으로 옮깁니다.\",\"editor-stage-left/@name\":\"무대 왼쪽에서 보이기\",\"variable-manager/@description\":\"변수 및 리스트를 쉽게 업데이트할 수 있도록 편집기의 \\\"소리\\\"탭 옆에 탭을 추가합니다.\",\"variable-manager/@name\":\"변수 관리자\",\"gamepad/@description\":\"USB 또는 Bluetooth 컨트롤러/게임 패드를 사용하여 프로젝트와 상호작용합니다.\",\"gamepad/@name\":\"게임패드 지원\",\"gamepad/@settings-name-hide\":\"컨트롤러가 감지되지 않았을 때 설정 버튼 숨기기\",\"editor-sounds/@description\":\"블록을 연결하거나 삭제할 때 음향 효과를 재생합니다.\",\"editor-sounds/@name\":\"편집기 음향 효과\",\"folders/@description\":\"스프라이트 창뿐만 아니라 의상 및 사운드 목록에도 폴더를 추가합니다. 폴더를 만들려면 스프라이트를 마우스 오른쪽 단추로 클릭하고 \\\"폴더 생성\\\"을 클릭합니다. 폴더를 클릭하여 열거나 닫습니다. 스프라이트를 마우스 오른쪽 단추로 클릭하여 이동할 수 있는 폴더를 확인하거나 열려 있는 폴더에 끌어다 놓습니다.\",\"folders/@info-notice-folders-are-public\":\"이 기능을 사용하도록 설정한 사용자는 프로젝트의 폴더를 볼 수 있습니다. 다른 사용자는 정상적으로 스프라이트 목록을 볼 수 있습니다(폴더 없음).\",\"folders/@info-notice-sprite-names\":\"이 기능은 스프라이트의 이름 앞에 \\\"[폴더이름]//\\\"를 추가하여 작동합니다.\",\"folders/@name\":\"스프라이트 폴더\",\"block-switching/@description\":\"블럭을 마우스 오른쪽 버튼으로 클릭하여 관련 블럭으로 전환합니다.\",\"block-switching/@name\":\"블럭 바꾸기\",\"block-switching/@settings-name-border\":\"테두리 넣기\",\"block-switching/@settings-name-control\":\"제어 블럭\",\"block-switching/@settings-name-customargs\":\"사용자 지정 블록 인수\",\"block-switching/@settings-name-customargsmode\":\"인수 설정에 사용자 지정 블록을 보입니다.\",\"block-switching/@settings-name-data\":\"데이터 블럭\",\"block-switching/@settings-name-event\":\"이벤트 블럭\",\"block-switching/@settings-name-extension\":\"확장 블럭\",\"block-switching/@settings-name-looks\":\"형태 블럭\",\"block-switching/@settings-name-motion\":\"움직임 블럭\",\"block-switching/@settings-name-noop\":\"블록을 자체 변경 설정을 표시합니다.\",\"block-switching/@settings-name-operator\":\"연산 블럭\",\"block-switching/@settings-name-sensing\":\"감지 블럭\",\"block-switching/@settings-name-sound\":\"소리 블럭\",\"block-switching/@settings-select-customargsmode-all\":\"스프라이트 내 모든 사용자 지정 블록의 인수\",\"block-switching/@settings-select-customargsmode-defOnly\":\"사용자 지정 블록의 인수\",\"load-extensions/@description\":\"음악, 펜, 그리고 다른 확장 기능들을 편집기 블록 카테고리에 자동으로 추가합니다.\",\"load-extensions/@name\":\"확장 기능 자동 추가하기\",\"load-extensions/@settings-name-music\":\"음악\",\"load-extensions/@settings-name-pen\":\"펜\",\"load-extensions/@settings-name-text2speech\":\"음성 합성 변환(TTS)\",\"load-extensions/@settings-name-translate\":\"번역\",\"custom-zoom/@description\":\"프로젝트 코드 편집기에서 줌의 최소, 최대, 속도 및 시작 크기를 사용자 지정하고 조작을 자동으로 숨깁니다\",\"custom-zoom/@name\":\"코드 영역 확대/축소 사용자 지정하기\",\"custom-zoom/@settings-name-autohide\":\"줌 제어 자동 숨기기\",\"custom-zoom/@settings-name-maxZoom\":\"최대 줌 (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"최소 줌 (1-100%)\",\"custom-zoom/@settings-name-speed\":\"동작 시간 자동 숨기기\",\"custom-zoom/@settings-name-startZoom\":\"시작 줌 (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"줌 속도 (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"기본\",\"custom-zoom/@settings-select-speed-long\":\"길게\",\"custom-zoom/@settings-select-speed-none\":\"없음\",\"custom-zoom/@settings-select-speed-short\":\"짧게\",\"initialise-sprite-position/@description\":\"새 스프라이트의 기본 x/y 위치를 변경합니다.\",\"initialise-sprite-position/@name\":\"새 스프라이트 위치 사용자 지정하기\",\"initialise-sprite-position/@settings-name-library\":\"라이브러리 스프라이트의 위치 임의 지정\",\"initialise-sprite-position/@settings-name-x\":\"X 좌표\",\"initialise-sprite-position/@settings-name-y\":\"Y 좌표\",\"blocks2image/@description\":\"코드 영역을 우클릭해 블럭을 SVG/PNG 사진으로 내보냅니다.\",\"blocks2image/@name\":\"블럭을 이미지로 저장\",\"remove-curved-stage-border/@description\":\"모서리를 볼 수 있도록 무대 주위의 곡선 테두리를 제거합니다.\",\"remove-curved-stage-border/@name\":\"무대 테두리 곡선 제거\",\"transparent-orphans/@description\":\"분리된 블럭(맨 위에 모자 블럭이 없는 블럭) 및 드래그 중인 블럭에 대한 별도의 설정을 사용하여 편집기에서 블럭의 투명도를 조정합니다.\",\"transparent-orphans/@name\":\"블럭 투명도\",\"transparent-orphans/@settings-name-block\":\"블럭 투명도 (%)\",\"transparent-orphans/@settings-name-dragged\":\"드래그되는 물체 투명도 (%)\",\"transparent-orphans/@settings-name-orphan\":\"연결 해제 블럭 투명도 (%)\",\"paint-by-default/@description\":\"\\\"스프라이트/모양/배경/소리 고르기\\\" 버튼의 기본 동작을 변경합니다.\",\"paint-by-default/@name\":\"모양을 기본적으로 채우기\",\"paint-by-default/@settings-name-backdrop\":\"무대 추가하기\",\"paint-by-default/@settings-name-costume\":\"모양 추가하기\",\"paint-by-default/@settings-name-sound\":\"소리 추가하기\",\"paint-by-default/@settings-name-sprite\":\"스크라이트 추가하기\",\"paint-by-default/@settings-select-backdrop-library\":\"자료실\",\"paint-by-default/@settings-select-backdrop-paint\":\"채우기\",\"paint-by-default/@settings-select-backdrop-surprise\":\"서프라이즈\",\"paint-by-default/@settings-select-backdrop-upload\":\"올리기\",\"paint-by-default/@settings-select-costume-library\":\"라이브러리\",\"paint-by-default/@settings-select-costume-paint\":\"채우기\",\"paint-by-default/@settings-select-costume-surprise\":\"서프라이즈\",\"paint-by-default/@settings-select-costume-upload\":\"올리기\",\"paint-by-default/@settings-select-sound-library\":\"자료실\",\"paint-by-default/@settings-select-sound-record\":\"녹화하기\",\"paint-by-default/@settings-select-sound-surprise\":\"서프라이즈\",\"paint-by-default/@settings-select-sound-upload\":\"올리기\",\"paint-by-default/@settings-select-sprite-library\":\"라이브러리\",\"paint-by-default/@settings-select-sprite-paint\":\"채우기\",\"paint-by-default/@settings-select-sprite-surprise\":\"서프라이즈\",\"paint-by-default/@settings-select-sprite-upload\":\"업로드\",\"block-cherry-picking/@description\":\"Ctrl 키를 누른 상태에서 아래에 연결된 전체 블럭을 가져오는 대신 스크립트 중간의 개별 블록을 끌어내는 기능을 추가합니다.\",\"block-cherry-picking/@info-flipControls\":\"\\\"제어 뒤집기\\\"가 활성화된다면, 개별 블록을 잡는 것이 기본 기능이 됩니다. Ctrl을 누르는 것이 전체 항목을 드래그합니다\",\"block-cherry-picking/@info-macContextDisabled\":\"macOS에서는, Ctrl 키 대신 Cmd키를 사용하세요.\",\"block-cherry-picking/@name\":\"Ctrl 키를 눌러 개별 블록 잡기\",\"block-cherry-picking/@settings-name-invertDrag\":\"제어 뒤집기\",\"hide-new-variables/@description\":\"새 변수나 리스트가 생성되었을 때 자동으로 모니터를 생성하지 않습니다.\",\"hide-new-variables/@name\":\"새 변수 숨기기\",\"editor-extra-keys/@description\":\"\\\"()키를 눌렀는가?\\\"와 \\\"()키를 눌렀을 때\\\" 블록의 드롭다운에 엔터, 마침표, 쉼표 등의 더 많은 키를 추가힙니다.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"\\\"실험적 키\\\"에는 등호, 슬래시, 세미콜론 등이 포합됩니다. 키보드 배열이나 운영 체제에 따라서 작동하지 않을 수도 있습니다.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"\\\"Shift 키\\\"에는 Shift와 같이 눌러야 하는 해시태그, 느낌표 등이 포합됩니다. 이 키들은 \\\"()키를 눌렀을 때\\\"블록에서만 작동하고, 키보드 배열이나 운영 체젱에 따라서 작동하지 않을 수 있습니다.\",\"editor-extra-keys/@name\":\"추가 키 지원하기\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"실험적 키 추가하기\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Shift 키 활성화하기\",\"hide-delete-button/@description\":\"삭제 버튼(쓰래기통 아이콘)을 스프라이트, 모양, 소리에서 삭제합니다. 우클릭 메뉴에서는 여전히 삭제할 수 있습니다.\",\"hide-delete-button/@name\":\"삭제 버튼 숨기기\",\"hide-delete-button/@settings-name-costumes\":\"모양과 배경\",\"hide-delete-button/@settings-name-sounds\":\"소리\",\"hide-delete-button/@settings-name-sprites\":\"스프라이트\",\"no-script-bumping/@description\":\"스크립트를 움직이고 변경해도 스크립트끼리 겹칠 때 스크립트가 돌아다니지 않게 합니다.\",\"no-script-bumping/@name\":\"스크립트끼리 겹칠 때 자동 여백 만들지 않기\",\"disable-stage-drag-select/@description\":\"편집기 무대에서(드래그가 가능하도록 설정된 스프라이트 제외) 스프라이트 드래그를 막습니다.\",\"disable-stage-drag-select/@info-shift\":\"드래그가 가능하도록 설정되어있지 않다면 Shift 키를 누르고 있는 동안에는 스프라이트를 평소처럼 움직일 수 있습니다.\",\"disable-stage-drag-select/@name\":\"편집기에서 스프라이트 드래그 끄기\",\"move-to-top-bottom/@description\":\"기존에는 개발자 도구에 있었던 모양이나 소리를 리스트의 맨 아래나 맨 위로 보내는 우클릭 메뉴를 추가합니다.\",\"move-to-top-bottom/@name\":\"모양 블록을 맨 위로 올리거나 맨 아래로 내리기\",\"disable-paste-offset/@description\":\"모양 편집기에서 복사한 모양을 살짝 이동시키지 않고 원래 위치에 붙여넣습니다.\",\"disable-paste-offset/@name\":\"불여넣어진 아이템 원래 자리에 놓기\",\"block-duplicate/@description\":\"Alt 키를 누르면서 스크립트를 드래그해 빠르게 복제합니다. Ctrl 키를 같이 누르면 한 개의 스크립트만 복사됩니다.\",\"block-duplicate/@info-mac\":\"맥OS에서는 Alt 키 대신 옵션 키를 이용하고, Ctrl 키 대신 Cmd키를 이용하세요.\",\"block-duplicate/@name\":\"Alt 키로 스크립트 복제하기\",\"swap-local-global/@description\":\"기존 변수 또는 목록의 이름을 바꿀 때 추가 설정을 추가합니다. \\\"모든 스프라이트의 경우\\\"와 \\\"이 스프라이트의 경우에만\\\" 사이에서 변경할 수 있고 변수가 클라우드에 저장되는지 여부를 변경할 수 있습니다. 또한 변수/리스트를 마우스 오른쪽 단추로 클릭하여 범위를 빠르게 변경할 수 있는 설정을 추가합니다.\",\"swap-local-global/@name\":\"변수의 '모든 스프라이트에서 사용'과 '이 스프라이트에서만 사용'을 전환하기\",\"editor-comment-previews/@description\":\"접혀 있는 주석이나 블록 위에 마우스를 올려놓아 주석의 내용을 미리볼 수 있도록 합니다. 이를 통해 화면 밖에서 주석을 보고, 미리보기로 루프 블록을 아래쪽에서 확인하며, 작은 공간에 많은 긴 주석을 맞추는 등의 작`업을 수행할 수 있습니다.\",\"editor-comment-previews/@name\":\"편집기 댓글 미리보기\",\"editor-comment-previews/@settings-name-delay\":\"지연 시간\",\"editor-comment-previews/@settings-name-follow-mouse\":\"마우스 따라가기\",\"editor-comment-previews/@settings-name-hover-view\":\"주석 위에 마우스를 올려놓아 미리보기\",\"editor-comment-previews/@settings-name-hover-view-block\":\"사용자 지정 블록 위에 마우스를 올려놓아 붙여진 주석 미리보기\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"사용자 지정 블록 위에 마우스를 올려놓아 정의 주석 미리보기\",\"editor-comment-previews/@settings-name-reduce-animation\":\"모션 줄이기\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"투명도 줄이기\",\"editor-comment-previews/@settings-select-delay-long\":\"길게\",\"editor-comment-previews/@settings-select-delay-none\":\"없음\",\"editor-comment-previews/@settings-select-delay-short\":\"짧게\",\"columns/@description\":\"블럭 카테고리 메뉴를 2열로 쪼개 스크래치 2.0처럼 블록 팔레트의 맨 위로 옮깁니다.\",\"columns/@name\":\"2열 카테고리 메뉴\",\"script-snap/@name\":\"스크립트를 격자에 맟추기\",\"script-snap/@settings-name-grid\":\"격자 크기 (px)\",\"editor-stepping/@description\":\"프로젝트에서 현재 실행 중인 블록을 색으로 강조합니다.\",\"editor-stepping/@name\":\"실행 블록 테두리\",\"editor-stepping/@settings-name-highlight-color\":\"강조색\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/pl.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/pl.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-separateListCategory, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, drag-drop/@settings-name-use-hd-upload, debugger/@name, pause/@description, pause/@name, mute-project/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, block-count/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@name, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, editor-sounds/@name, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@info-macContextDisabled, hide-new-variables/@name, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, block-duplicate/@description, block-duplicate/@info-mac, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@preset-name-default, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Przywraca do edytora kocie początkowe bloki z prima aprilis 2020.\",\"cat-blocks/@info-watch\":\"Opcja „Obserwuj kursor myszy” może wpływać na wydajność, gdy edytor jest otwarty.\",\"cat-blocks/@name\":\"Bloki Kota\",\"cat-blocks/@settings-name-watch\":\"Obserwuj kursor myszy\",\"editor-devtools/@info-shortcuts\":\"Naciśnij „Ctrl + F”, aby zaznaczyć pole wyszukiwania, „Ctrl + Spacja”, aby wyświetlić wyskakujące okienko „Dodaj blok według nazwy”, „Ctrl + Lewo/Prawo”, aby przejść do historii wyszukiwania.\",\"editor-devtools/@name\":\"Narzędzia Developerskie\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Ulepszone „Wyczyść bloki”\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Kliknij środkowym przyciskiem myszy zmienne, niestandardowe bloki lub zdarzenia do nawigacji\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Wklej bloki w miejscu kursora myszy\",\"editor-searchable-dropdowns/@name\":\"Przeszukiwalne rozwijane listy\",\"data-category-tweaks-v2/@name\":\"Kategorie typów danych\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Oddziel kategorię Listy\",\"block-palette-icons/@description\":\"Dodaje ikony wewnątrz kolorowych okręgów, które identyfikują kategorie bloków.\",\"block-palette-icons/@name\":\"Ikony kategorii bloków\",\"hide-flyout/@description\":\"Ukrywa paletę bloków, jeśli nie jest najechana. Kliknij ikonę kłódki, aby tymczasowo zablokować ją na miejscu. Możesz też użyć trybu „kliknięcie kategorii”.\",\"hide-flyout/@info-hoverExplanation\":\"Tryb „najechanie na obszar palety” tylko rozszerza obszar wyświetlania. Jeśli chcesz mieć możliwość przeciągania bloków do tego obszaru bez ich usuwania w koszu, użyj jednego z pozostałych trybów.\",\"hide-flyout/@settings-name-speed\":\"Czas trwania animacji\",\"hide-flyout/@settings-name-toggle\":\"Włącz...\",\"hide-flyout/@settings-select-speed-default\":\"Domyślny\",\"hide-flyout/@settings-select-speed-long\":\"Długi\",\"hide-flyout/@settings-select-speed-none\":\"Nic\",\"hide-flyout/@settings-select-speed-short\":\"Krótki\",\"drag-drop/@settings-name-use-hd-upload\":\"Użyj przesyłania HD\",\"debugger/@name\":\"Debuger\",\"pause/@description\":\"Dodaje przycisk pauzy obok zielonej flagi\",\"pause/@name\":\"Przycisk pauzy\",\"mute-project/@description\":\"Ctrl+Click zieloną flagę żeby wyciszyć/od-ciszyć\",\"clones/@name\":\"Licznik klonów\",\"mouse-pos/@description\":\"Wyświetla pozycję x/y twojej myszy nad sceną w edytorze.\",\"mouse-pos/@name\":\"Pozycja kursora\",\"color-picker/@description\":\"Dodaje opcję koloru hex do wybieraczy kolorów.\",\"color-picker/@name\":\"Wybieracz koloru hex\",\"block-count/@name\":\"Liczba bloczków \",\"onion-skinning/@settings-name-afterTint\":\"Odcień następnego kostiumu\",\"onion-skinning/@settings-name-beforeTint\":\"Odcień poprzedniego kostiumu\",\"onion-skinning/@settings-name-default\":\"Włączone domyślnie\",\"onion-skinning/@settings-name-layering\":\"Domyślne warstwowanie\",\"onion-skinning/@settings-name-mode\":\"Tryb domyślny\",\"onion-skinning/@settings-name-next\":\"Domyślnie następne kostiumy\",\"onion-skinning/@settings-name-opacity\":\"Nieprzezroczystość (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Nieprzezroczystość następnych kostiumów (%)\",\"onion-skinning/@settings-name-previous\":\"Domyślnie poprzednie kostiumy\",\"onion-skinning/@settings-select-layering-behind\":\"Tył\",\"onion-skinning/@settings-select-layering-front\":\"Przód\",\"onion-skinning/@settings-select-mode-merge\":\"Łącz obrazy\",\"onion-skinning/@settings-select-mode-tint\":\"Kolor odcienia\",\"bitmap-copy/@info-norightclick\":\"„Kliknięcie prawym przyciskiem myszy → kopiowanie” nie jest obsługiwane. Musisz nacisnąć Ctrl + C, gdy wybrany jest obraz bitmapowy.\",\"bitmap-copy/@name\":\"Kopiowanie obrazów bitmapowych\",\"2d-color-picker/@name\":\"Próbnik kolorów 2D\",\"better-img-uploads/@info-notSuitableEdit\":\"Unikaj używania przycisku przesyłania HD, jeśli planujesz edytować obraz po przesłaniu.\",\"better-img-uploads/@settings-select-fitting-full\":\"Oryginalny rozmiar\",\"custom-block-shape/@preset-description-default3\":\"Regularny wygląd bloków Scratch 3.0\",\"custom-block-shape/@preset-name-default2\":\"Bloki 2.0\",\"custom-block-shape/@preset-name-default3\":\"Bloki 3.0\",\"custom-block-shape/@preset-name-flat2\":\"Płaskie 2.0\",\"custom-block-shape/@preset-name-flat3\":\"Płaskie 3.0\",\"custom-block-shape/@settings-name-cornerSize\":\"Rozmiar kąta (0--300%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Rozmiar wypełnienia (50-200%)\",\"editor-theme3/@description\":\"Edytuj kolory bloków dla każdej kategorii w edytorze.\",\"editor-theme3/@name\":\"Niestandardowe kolory bloków\",\"editor-theme3/@preset-description-black\":\"Robi tło bloków czarnym\",\"editor-theme3/@preset-description-dark\":\"Ciemne wersje domyślnych kolorów\",\"editor-theme3/@preset-description-original\":\"Oryginalne kolory bloków z Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Wydarzenia, Kontrola, i niestandardowe bloki z inspirowanymi kolorami 2.0\",\"editor-theme3/@preset-name-black\":\"Czarny\",\"editor-theme3/@preset-name-dark\":\"Ciemny\",\"editor-theme3/@preset-name-original\":\"Kolory 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Poprawki 3.0\",\"editor-theme3/@settings-name-Pen-color\":\"rozszerzenia\",\"editor-theme3/@settings-name-control-color\":\"kontrola\",\"editor-theme3/@settings-name-custom-color\":\"niestandardowy\",\"editor-theme3/@settings-name-data-color\":\"zmienne\",\"editor-theme3/@settings-name-data-lists-color\":\"listy\",\"editor-theme3/@settings-name-events-color\":\"wydarzenia\",\"editor-theme3/@settings-name-input-color\":\"Wejścia bloków\",\"editor-theme3/@settings-name-looks-color\":\"wygląd\",\"editor-theme3/@settings-name-motion-color\":\"ruch\",\"editor-theme3/@settings-name-operators-color\":\"operatorzy\",\"editor-theme3/@settings-name-sensing-color\":\"wyczuwanie\",\"editor-theme3/@settings-name-sounds-color\":\"dźwięki\",\"editor-theme3/@settings-name-text\":\"Kolor tekstu\",\"editor-theme3/@settings-select-text-black\":\"Czarny\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Kolorowe na czarnym tle\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Kolorowe na białym tle\",\"editor-theme3/@settings-select-text-white\":\"Biały\",\"editor-colored-context-menus/@description\":\"Tworzy kolorowe menu kontekstowe, klikając prawym przyciskiem myszy na blok.\",\"editor-colored-context-menus/@name\":\"Kolorowe menu kontekstowe\",\"editor-stage-left/@description\":\"Przesuwa scenę na lewą stronę edytora.\",\"editor-stage-left/@name\":\"Wyświetl scenę po lewej stronie\",\"variable-manager/@description\":\"Dodaje zakładkę obok \\\"dźwięków\\\" w edytorze żeby łatwo aktualizować zmienne i listy\",\"variable-manager/@name\":\"Menedżer zmiennych\",\"gamepad/@description\":\"Interakcja z projektami za pomocą kontrolera/gamepada używając USB lub Bluetooth.\",\"gamepad/@name\":\"Wsparcie dla padów\",\"editor-sounds/@name\":\"Efekty dźwiękowe edytora\",\"folders/@info-notice-folders-are-public\":\"Użytkownicy z włączoną tą funkcją będą widzieć foldery w swoim projekcie. Wszyscy inni będą normalnie widzieć listy duszków (bez folderów).\",\"folders/@info-notice-sprite-names\":\"Ta funkcja działa poprzez dodanie \\\"[folderName]//\\\" na początku nazw twoich duszków.\",\"folders/@name\":\"foldery duszków\",\"block-switching/@description\":\"Kliknij prawym przyciskiem myszy na blok, aby zamienić go na powiązany blok.\",\"block-switching/@name\":\"Zmiana bloków\",\"block-switching/@settings-name-border\":\"Dodaj granicę\",\"block-switching/@settings-name-control\":\"Bloki kontroli\",\"block-switching/@settings-name-data\":\"Bloki danych\",\"block-switching/@settings-name-event\":\"Bloki zdarzeń\",\"block-switching/@settings-name-extension\":\"bloki dodatków\",\"block-switching/@settings-name-looks\":\"Bloki wyglądu\",\"block-switching/@settings-name-motion\":\"Bloki ruchu\",\"block-switching/@settings-name-operator\":\"Bloki operatora\",\"block-switching/@settings-name-sensing\":\"Bloki czujników\",\"block-switching/@settings-name-sound\":\"Bloki dźwięku\",\"load-extensions/@settings-name-music\":\"Muzyka\",\"load-extensions/@settings-name-pen\":\"Pisak\",\"load-extensions/@settings-name-text2speech\":\"Tekst na mowę\",\"load-extensions/@settings-name-translate\":\"Przetłumacz\",\"custom-zoom/@settings-name-autohide\":\"Automatycznie ukrywaj kontrolki przybliżania\",\"custom-zoom/@settings-name-maxZoom\":\"Maksymalne przybliżenie (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Minimalne przybliżenie (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Czas trwania animacji\",\"custom-zoom/@settings-name-startZoom\":\"Początkowe przybliżenie (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Prędkość przybliżania (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Domyślne\",\"custom-zoom/@settings-select-speed-long\":\"Długi\",\"custom-zoom/@settings-select-speed-none\":\"Nic\",\"custom-zoom/@settings-select-speed-short\":\"Krótki\",\"initialise-sprite-position/@settings-name-library\":\"Losuj pozycję duszków w bibliotece\",\"initialise-sprite-position/@settings-name-x\":\"pozycja X\",\"initialise-sprite-position/@settings-name-y\":\"pozycja Y\",\"blocks2image/@name\":\"Zapisz bloki jako obraz\",\"remove-curved-stage-border/@description\":\"Usuwa zaokrąglone krawędzie sceny, pozwala tobie spojrzeć w jej rogi\",\"remove-curved-stage-border/@name\":\"Usuń zaokrąglone krawędzie odtwarzacza\",\"transparent-orphans/@description\":\"Dostosuj przezroczystość bloków w edytorze, korzystając z osobnych opcji dla bloków osieroconych (bez grzybka u góry) i bloków przeciąganych.\",\"transparent-orphans/@name\":\"Przezroczystość bloku\",\"transparent-orphans/@settings-name-block\":\"Przezroczystość bloku (%)\",\"transparent-orphans/@settings-name-dragged\":\"Przezroczystość przeciąganych bloków (%)\",\"transparent-orphans/@settings-name-orphan\":\"Przezroczystość osieroconych bloków (%)\",\"paint-by-default/@settings-name-backdrop\":\"Wybierz tło\",\"paint-by-default/@settings-name-costume\":\"Wybierz kostium\",\"paint-by-default/@settings-name-sound\":\"Wybierz dźwięk\",\"paint-by-default/@settings-name-sprite\":\"Wybierz duszka\",\"paint-by-default/@settings-select-backdrop-library\":\"Wybierz tło\",\"paint-by-default/@settings-select-backdrop-paint\":\"Maluj\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Niespodzianka\",\"paint-by-default/@settings-select-backdrop-upload\":\"Wczytaj tło\",\"paint-by-default/@settings-select-costume-library\":\"Wybierz kostium\",\"paint-by-default/@settings-select-costume-paint\":\"Maluj\",\"paint-by-default/@settings-select-costume-surprise\":\"Niespodzianka\",\"paint-by-default/@settings-select-costume-upload\":\"Prześlij kostium\",\"paint-by-default/@settings-select-sound-library\":\"Wybierz dźwięk\",\"paint-by-default/@settings-select-sound-record\":\"Nagraj\",\"paint-by-default/@settings-select-sound-surprise\":\"Niespodzianka\",\"paint-by-default/@settings-select-sound-upload\":\"Prześlij dźwięk\",\"paint-by-default/@settings-select-sprite-library\":\"Wybierz duszka\",\"paint-by-default/@settings-select-sprite-paint\":\"Maluj\",\"paint-by-default/@settings-select-sprite-surprise\":\"Niespodzianka\",\"paint-by-default/@settings-select-sprite-upload\":\"Wczytaj duszka\",\"block-cherry-picking/@info-macContextDisabled\":\"W systemie macOS zamiast klawisza Ctrl należy użyć klawisza Cmd.\",\"hide-new-variables/@name\":\"Ukryj \\\"nową zmienną\\\"\",\"hide-delete-button/@description\":\"Ukrywa przycisk usuwania (ikonę kosza na śmieci) przed duszkami, kostiumami i dźwiękami. Nadal można je usunąć za pomocą prawego przycisku myszy.\",\"hide-delete-button/@name\":\"Ukryj przycisk usuwania\",\"hide-delete-button/@settings-name-costumes\":\"Kostiumy i tła\",\"hide-delete-button/@settings-name-sounds\":\"Dźwięki\",\"hide-delete-button/@settings-name-sprites\":\"Duszki\",\"block-duplicate/@description\":\"Szybko zduplikuj skrypt, przeciągając go, trzymając klawisz Alt. Przytrzymaj również klawisz Ctrl, aby zduplikować tylko pojedynczy blok zamiast całego stosu dołączonego pod nim.\",\"block-duplicate/@info-mac\":\"W systemie macOS zamiast klawisza Alt należy użyć klawisza Option, a zamiast klawisza Control - klawisza Command.\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Podążaj za myszą\",\"editor-comment-previews/@settings-select-delay-long\":\"Długi\",\"editor-comment-previews/@settings-select-delay-none\":\"Nic\",\"editor-comment-previews/@settings-select-delay-short\":\"Krótki\",\"columns/@description\":\"Dzieli menu kategorii bloków na dwie kolumny i przenosi je na górę palety bloków, tak jak w Scratch 2.0.\",\"columns/@name\":\"Dwu-kolumnowe menu kategorii\",\"script-snap/@preset-name-default\":\"Domyślny\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/pt.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/pt.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Adiciona de volta os blocos de gato no editor de primeiro de abril de 2020.\",\"cat-blocks/@info-watch\":\"A opção \\\"Monitorar ponteiro do mouse\\\" pode piorar a performance com o editor aberto.\",\"cat-blocks/@name\":\"Blocos de gato\",\"cat-blocks/@settings-name-watch\":\"Monitorar ponteiro do mouse\",\"editor-devtools/@description\":\"Adiciona uma caixa de busca e novas opções de menu ao editor: copiar/colar blocos, organização melhor, ir para a definição de um bloco customizado, e mais!\",\"editor-devtools/@info-shortcuts\":\"Aperte \\\"Ctrl+F\\\" para usar a barra de busca, \\\"Ctrl+Espaço\\\" para abrir o popup \\\"adicionar bloco digitando\\\", \\\"Ctrl+Esquerda/Direita\\\" para passar pelo seu histórico de busca.\",\"editor-devtools/@name\":\"Ferramentas de desenvolvedor\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Melhorar opção \\\"Limpar Blocos\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Clique com a rodinha do mouse em variáveis, blocos customizados ou eventos para navegar\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Colar blocos na posição do mouse\",\"editor-searchable-dropdowns/@description\":\"Te deixa pesquisar nos dropdowns de blocos.\",\"editor-searchable-dropdowns/@name\":\"Dropdowns buscáveis\",\"data-category-tweaks-v2/@description\":\"Adiciona melhorias na categoria de Dados (\\\"Variáveis\\\").\",\"data-category-tweaks-v2/@name\":\"Melhorias na categoria Dados\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Mover blocos de variáveis acima da lista de variáveis\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Nova Categoria para Listas\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Nova Categoria para Variáveis Apenas para este Ator\",\"block-palette-icons/@description\":\"Adiciona ícones dentro dos círculos coloridos nas categorias de bloco.\",\"block-palette-icons/@name\":\"Ícones nas categorias da paleta de blocos\",\"hide-flyout/@description\":\"Esconde a paleta de blocos se o mouse não estiver em cima. Clique no ícone do cadeado para trancá-la temporariamente. Você também pode usar o modo \\\"ao clicar em uma categoria\\\".\",\"hide-flyout/@info-hoverExplanation\":\"O modo \\\"Passar o mouse na área da paleta\\\" só aumenta a área visível. Se você quer poder arrastar blocos até aquela área sem jogar eles fora, use outro modo.\",\"hide-flyout/@name\":\"Auto-esconder paleta de blocos\",\"hide-flyout/@settings-name-speed\":\"Duração da animação\",\"hide-flyout/@settings-name-toggle\":\"Alternar ao...\",\"hide-flyout/@settings-select-speed-default\":\"Padrão\",\"hide-flyout/@settings-select-speed-long\":\"Longa\",\"hide-flyout/@settings-select-speed-none\":\"Imediata\",\"hide-flyout/@settings-select-speed-short\":\"Curta\",\"hide-flyout/@settings-select-toggle-category\":\"Clicar em uma categoria\",\"hide-flyout/@settings-select-toggle-cathover\":\"Passar o mouse em uma categoria\",\"hide-flyout/@settings-select-toggle-hover\":\"Passar o mouse na área da paleta\",\"mediarecorder/@description\":\"Adiciona um botão \\\"começar a gravar\\\" à barra superior do editor que te deixa gravar o palco do projeto.\",\"mediarecorder/@name\":\"Gravador de vídeo do projeto\",\"drag-drop/@description\":\"Te deixa arrastar imagens e sons do seu computador até a lista de atores, fantasias ou sons. Você também pode arrastar arquivos de texto até listas ou a entrada de resposta do bloco \\\"pergunte e espere\\\".\",\"drag-drop/@name\":\"Arrastar arquivos\",\"drag-drop/@settings-name-use-hd-upload\":\"Carregar imagens em HD\",\"debugger/@description\":\"Adiciona a nova categoria de blocos \\\"debug\\\" e uma janela de \\\"logs\\\" ao editor. Os blocos \\\"log\\\", \\\"aviso\\\" e \\\"erro\\\" irão adicionar a mensagem especificada à janela de logs. O bloco \\\"breakpoint\\\" interromperá o projeto temporariamente quando for executado.\",\"debugger/@name\":\"Depurador\",\"pause/@description\":\"Adiciona um botão de pausa do lado da bandeira verde.\",\"pause/@name\":\"Botão de pausa\",\"mute-project/@description\":\"Ctrl+Clique na bandeira verde para mutar/desmutar o projeto.\",\"mute-project/@name\":\"Modo projeto mutado\",\"clones/@description\":\"Adiciona um contador acima do palco no editor que mostra o número total de clones.\",\"clones/@name\":\"Contador de clones\",\"mouse-pos/@description\":\"Mostra a posição do mouse próxima à bandeira acima do palco no editor.\",\"mouse-pos/@name\":\"Posição do mouse\",\"color-picker/@description\":\"Adiciona entradas para código hex à paleta de cores.\",\"color-picker/@name\":\"Seletor de cor hex\",\"remove-sprite-confirm/@description\":\"Pede confirmação antes de deletar um ator dentro de um projeto.\",\"remove-sprite-confirm/@name\":\"Confirmação ao deletar ator\",\"block-count/@description\":\"Mostra o número total de blocos em um projeto na barra de menu do editor. Anteriormente fazia parte do addon \\\"contador de atores e scripts\\\".\",\"block-count/@name\":\"Número de blocos\",\"onion-skinning/@description\":\"Mostra uma cópia transparente das fantasias anteriores e posteriores ao editar uma fantasia. Controlado por botões em baixo do editor de fantasia ao lado dos botões de zoom.\",\"onion-skinning/@settings-name-afterTint\":\"Cor da próxima fantasia\",\"onion-skinning/@settings-name-beforeTint\":\"Cor da fantasia anterior\",\"onion-skinning/@settings-name-default\":\"Ligar por padrão\",\"onion-skinning/@settings-name-layering\":\"Camada padrão\",\"onion-skinning/@settings-name-mode\":\"Modo padrão\",\"onion-skinning/@settings-name-next\":\"Número padrão de próximas fantasias\",\"onion-skinning/@settings-name-opacity\":\"Opacidade (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Aumento de Opacidade (%)\",\"onion-skinning/@settings-name-previous\":\"Número padrão de fantasias anteriores\",\"onion-skinning/@settings-select-layering-behind\":\"Atrás\",\"onion-skinning/@settings-select-layering-front\":\"Na frente\",\"onion-skinning/@settings-select-mode-merge\":\"Transparente\",\"onion-skinning/@settings-select-mode-tint\":\"Colorido\",\"bitmap-copy/@description\":\"Te deixa copiar uma imagem bitmap do editor de fantasia e colar em outros sites ou programas.\",\"bitmap-copy/@info-norightclick\":\"\\\"Botão direito → copiar\\\" não funciona. Você precisa apertar Ctrl+C enquanto tiver uma imagem bitmap selecionada.\",\"bitmap-copy/@name\":\"Copiar imagens bitmap\",\"2d-color-picker/@description\":\"Troca os sliders de saturação e brilho por um seletor de cor 2D. Segure Shift enquanto arrasta o cursor para mudar valores em apenas uma direção.\",\"2d-color-picker/@name\":\"Paleta de cores 2D\",\"better-img-uploads/@description\":\"Adiciona um novo botão em cima do botão \\\"Carregar Fantasia\\\" que automaticamente converte um arquivo de imagem bitmap para imagens SVG (vetoriais) para não perder qualidade.\",\"better-img-uploads/@info-notSuitableEdit\":\"Não use o botão de upload HD se você quer poder editar a imagem depois de carregá-la.\",\"better-img-uploads/@name\":\"Upload de imagens HD\",\"better-img-uploads/@settings-name-fitting\":\"Tamanho da imagem\",\"better-img-uploads/@settings-select-fitting-fill\":\"Esticar para preencher o palco\",\"better-img-uploads/@settings-select-fitting-fit\":\"Diminuir para caber no palco\",\"better-img-uploads/@settings-select-fitting-full\":\"Tamanho original\",\"custom-block-shape/@description\":\"Ajuste o tamanho, raio de canto e altura do encaixe dos blocos do Scratch.\",\"custom-block-shape/@info-paddingWarning\":\"Só você pode ver o tamanho customizado que você escolheu pros blocos, então quando outras pessoas verem os seus projetos, os scripts podem ficar amontoados.\",\"custom-block-shape/@name\":\"Formato de bloco customizável\",\"custom-block-shape/@preset-description-default2\":\"Uma aparência parecida com os blocos do Scratch 2.0\",\"custom-block-shape/@preset-description-default3\":\"A aparência normal dos blocos do Scratch 3.0\",\"custom-block-shape/@preset-description-flat2\":\"Blocos do Scratch 2.0 mas com encaixes e cantos removidos\",\"custom-block-shape/@preset-description-flat3\":\"Blocos do Scratch 3.0 mas com encaixes e cantos removidos\",\"custom-block-shape/@preset-name-default2\":\"Blocos 2.0\",\"custom-block-shape/@preset-name-default3\":\"Blocos 3.0\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Liso\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Liso\",\"custom-block-shape/@settings-name-cornerSize\":\"Raio de canto (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Altura do encaixe (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Tamanho do bloco (50-200%)\",\"editor-theme3/@description\":\"Edite as cores dos blocos de cada categoria no editor.\",\"editor-theme3/@name\":\"Cores de bloco customizadas\",\"editor-theme3/@preset-description-black\":\"Deixa os blocos pretos\",\"editor-theme3/@preset-description-dark\":\"Versões escuras das cores padrão\",\"editor-theme3/@preset-description-original\":\"As cores de blocos originais do Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Cores inspiradas no 2.0 nos blocos de Evento, Controle e Customizados.\",\"editor-theme3/@preset-name-black\":\"Preto\",\"editor-theme3/@preset-name-dark\":\"Escuro\",\"editor-theme3/@preset-name-original\":\"Cores do 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Ajustes ao 3.0\",\"editor-theme3/@settings-name-Pen-color\":\"extensões\",\"editor-theme3/@settings-name-control-color\":\"controle\",\"editor-theme3/@settings-name-custom-color\":\"meus blocos\",\"editor-theme3/@settings-name-data-color\":\"variáveis\",\"editor-theme3/@settings-name-data-lists-color\":\"listas\",\"editor-theme3/@settings-name-events-color\":\"eventos\",\"editor-theme3/@settings-name-input-color\":\"Entradas de texto nos blocos\",\"editor-theme3/@settings-name-looks-color\":\"aparência\",\"editor-theme3/@settings-name-motion-color\":\"movimento\",\"editor-theme3/@settings-name-operators-color\":\"operadores\",\"editor-theme3/@settings-name-sensing-color\":\"sensores\",\"editor-theme3/@settings-name-sounds-color\":\"som\",\"editor-theme3/@settings-name-text\":\"Cor do texto\",\"editor-theme3/@settings-select-text-black\":\"Preto\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Colorido no fundo preto\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Colorido no fundo branco\",\"editor-theme3/@settings-select-text-white\":\"Branco\",\"editor-colored-context-menus/@description\":\"Põe cor no menu que aparece ao clicar em um bloco com o botão direito.\",\"editor-colored-context-menus/@name\":\"Menus de contexto coloridos\",\"editor-stage-left/@description\":\"Move o palco para o lado esquerdo do editor.\",\"editor-stage-left/@name\":\"Mostrar palco do lado esquerdo\",\"variable-manager/@description\":\"Adiciona uma aba do lado de \\\"Sons\\\" no editor para facilmente editar variáveis e listas.\",\"variable-manager/@name\":\"Administrador de variáveis\",\"gamepad/@description\":\"Interaja com projetos usando um controle USB ou Bluetooth\",\"gamepad/@name\":\"Suporte para controle\",\"gamepad/@settings-name-hide\":\"Esconder botão de configuração quando não houver controle detectado\",\"editor-sounds/@description\":\"Toca sons quando você conecta ou deleta blocos.\",\"editor-sounds/@name\":\"Sons no editor\",\"folders/@description\":\"Adiciona pastas à lista de atores, fantasias e sons. Para criar uma pasta, clique com o botão direito em qualquer ator e clique em \\\"criar pasta\\\". Clique em uma pasta para abrir e fechar. Clique com o botão direito em um ator para ver a quais pastas você pode movê-lo, ou arraste-o até uma pasta aberta.\",\"folders/@info-notice-folders-are-public\":\"Usuários com essa função ligada poderão ver as pastas no seu projeto. O resto verá a lista de atores normalmente (sem pastas).\",\"folders/@info-notice-sprite-names\":\"Esse addon funciona adicionando \\\"[nomeDaPasta]//\\\" ao começo do nome do ator.\",\"folders/@name\":\"Pastas de atores\",\"block-switching/@description\":\"Clique com o botão direito em um bloco para trocá-lo por um bloco relacionado.\",\"block-switching/@name\":\"Trocar blocos\",\"block-switching/@settings-name-border\":\"Adicionar borda\",\"block-switching/@settings-name-control\":\"Blocos de controle\",\"block-switching/@settings-name-customargs\":\"Argumentos do bloco customizado\",\"block-switching/@settings-name-customargsmode\":\"Opções de argumentos do bloco customizado à mostra\",\"block-switching/@settings-name-data\":\"Blocos de variáveis e listas\",\"block-switching/@settings-name-event\":\"Blocos de evento\",\"block-switching/@settings-name-extension\":\"Blocos de extensões\",\"block-switching/@settings-name-looks\":\"Blocos de aparência\",\"block-switching/@settings-name-motion\":\"Blocos de movimento\",\"block-switching/@settings-name-noop\":\"Mostrar opção de trocar um bloco para ele mesmo\",\"block-switching/@settings-name-operator\":\"Blocos operadores\",\"block-switching/@settings-name-sensing\":\"Blocos sensores\",\"block-switching/@settings-name-sound\":\"Blocos de som\",\"block-switching/@settings-select-customargsmode-all\":\"Argumentos em todos os blocos customizados neste ator\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Argumentos neste bloco customizado\",\"load-extensions/@description\":\"Adiciona as extensões de música, caneta, e outras automaticamente à lista de categorias de blocos.\",\"load-extensions/@name\":\"Automaticamente adicionar extensões\",\"load-extensions/@settings-name-music\":\"Música\",\"load-extensions/@settings-name-pen\":\"Caneta\",\"load-extensions/@settings-name-text2speech\":\"Texto para Fala\",\"load-extensions/@settings-name-translate\":\"Traduzir\",\"custom-zoom/@description\":\"Mude o zoom mínimo, máximo, inicial, e sua velocidade no editor de código, e deixe os controles esconderem sozinhos.\",\"custom-zoom/@name\":\"Configurações de zoom na área de script\",\"custom-zoom/@settings-name-autohide\":\"Auto-esconder Controles de Zoom\",\"custom-zoom/@settings-name-maxZoom\":\"Zoom Máximo (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Zoom Mínimo (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Duração da Animação de Esconder\",\"custom-zoom/@settings-name-startZoom\":\"Zoom Inicial (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Velocidade de Zoom (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Padrão\",\"custom-zoom/@settings-select-speed-long\":\"Longa\",\"custom-zoom/@settings-select-speed-none\":\"Imediata\",\"custom-zoom/@settings-select-speed-short\":\"Curta\",\"initialise-sprite-position/@description\":\"Muda a posição x/y padrão de novos atores.\",\"initialise-sprite-position/@name\":\"Posição padrão customizável para novos atores\",\"initialise-sprite-position/@settings-name-library\":\"Posição aleatória para atores da biblioteca\",\"initialise-sprite-position/@settings-name-x\":\"Posição X\",\"initialise-sprite-position/@settings-name-y\":\"Posição Y\",\"blocks2image/@description\":\"Clique com o botão direito na área de scripts para exportar blocos como imagens SVG/PNG.\",\"blocks2image/@name\":\"Salvar blocos como imagem\",\"remove-curved-stage-border/@description\":\"Remove a borda arredondada do palco, e assim te deixa ver os cantos.\",\"remove-curved-stage-border/@name\":\"Remover borda arredondada do palco\",\"transparent-orphans/@description\":\"Mude a transparência dos blocos no editor, com opções separadas para blocos órfãos (blocos que não estão conectados a um bloco de chapéu) e blocos sendo arrastados.\",\"transparent-orphans/@name\":\"Blocos transparentes\",\"transparent-orphans/@settings-name-block\":\"Transparência para blocos (%)\",\"transparent-orphans/@settings-name-dragged\":\"Transparência para blocos sendo arrastados (%)\",\"transparent-orphans/@settings-name-orphan\":\"Transparência para blocos órfãos (%)\",\"paint-by-default/@description\":\"Muda a ação padrão dos botões \\\"Selecionar novo Ator/Fantasia/Fundo/Som\\\" que, por padrão, abrem a biblioteca do Scratch.\",\"paint-by-default/@name\":\"Pintar nova fantasia por padrão\",\"paint-by-default/@settings-name-backdrop\":\"Adicionar fundo\",\"paint-by-default/@settings-name-costume\":\"Adicionar fantasia\",\"paint-by-default/@settings-name-sound\":\"Adicionar som\",\"paint-by-default/@settings-name-sprite\":\"Adicionar ator\",\"paint-by-default/@settings-select-backdrop-library\":\"Biblioteca\",\"paint-by-default/@settings-select-backdrop-paint\":\"Desenhar\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Surpresa\",\"paint-by-default/@settings-select-backdrop-upload\":\"Carregar arquivo\",\"paint-by-default/@settings-select-costume-library\":\"Biblioteca\",\"paint-by-default/@settings-select-costume-paint\":\"Desenhar\",\"paint-by-default/@settings-select-costume-surprise\":\"Surpresa\",\"paint-by-default/@settings-select-costume-upload\":\"Carregar arquivo\",\"paint-by-default/@settings-select-sound-library\":\"Biblioteca\",\"paint-by-default/@settings-select-sound-record\":\"Gravar\",\"paint-by-default/@settings-select-sound-surprise\":\"Surpresa\",\"paint-by-default/@settings-select-sound-upload\":\"Carregar arquivo\",\"paint-by-default/@settings-select-sprite-library\":\"Biblioteca\",\"paint-by-default/@settings-select-sprite-paint\":\"Desenhar\",\"paint-by-default/@settings-select-sprite-surprise\":\"Surpresa\",\"paint-by-default/@settings-select-sprite-upload\":\"Carregar arquivo\",\"block-cherry-picking/@description\":\"Te deixa arrastar um único bloco do meio de um script (ao invés de levar junto todos os blocos conectados a ele) ao segurar a tecla Ctrl.\",\"block-cherry-picking/@info-flipControls\":\"Se você ativar a opção \\\"trocar padrão\\\", você irá arrastar blocos individualmente por padrão. Então, segure Ctrl para arrastar uma pilha.\",\"block-cherry-picking/@info-macContextDisabled\":\"No macOS, use a tecla Cmd ao invés de Ctrl.\",\"block-cherry-picking/@name\":\"Arrastar um único bloco com a tecla Ctrl\",\"block-cherry-picking/@settings-name-invertDrag\":\"Trocar padrão\",\"hide-new-variables/@description\":\"Não criar monitores automaticamente para novos variáveis ou listas.\",\"hide-new-variables/@name\":\"Esconder novas variáveis\",\"editor-extra-keys/@description\":\"Adiciona mais teclas às opções do bloco \\\"tecla () pressionada?\\\" e \\\"quando a tecla () for pressionada\\\", como enter, ponto, vírgula, entre outras.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"Entre as \\\"teclas experimentais\\\" estão o sinal de igual, barra, ponto e vírgula, entre outros. Elas podem não funcionar em todos os sistemas operacionais ou layouts de teclado.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"Entre as \\\"teclas Shift\\\" estão teclas que normalmente requerem apertar a tecla Shift e uma tecla de número, como a hashtag, ponto de exclamação, entre outros. Essas teclas só funcionam no bloco \\\"quando a tecla () for apertada\\\" e não funcionam em todos os sistemas operacionais ou layouts de teclado.\",\"editor-extra-keys/@name\":\"Suporte a mais teclas\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Ativar teclas experimentais\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Ativar teclas Shift\",\"hide-delete-button/@description\":\"Esconde o botão de deletar (ícone da lata de lixo) de atores, fantasias e sons. Eles ainda podem ser deletados clicando com o botão direito do mouse.\",\"hide-delete-button/@name\":\"Esconder botão de deletar\",\"hide-delete-button/@settings-name-costumes\":\"Fantasias e fundos\",\"hide-delete-button/@settings-name-sounds\":\"Sons\",\"hide-delete-button/@settings-name-sprites\":\"Atores\",\"no-script-bumping/@description\":\"Permite que você mova e modifique scripts sem que eles movam ao serem sobrepostos por outro script.\",\"no-script-bumping/@name\":\"Não mover scripts sobrepostos automaticamente\",\"disable-stage-drag-select/@description\":\"Remove a habilidade de arrastar atores no palco no editor, a não ser aqueles cujo \\\"modo de arrasto\\\" é arrastável.\",\"disable-stage-drag-select/@info-shift\":\"Segure Shift enquanto arrasta um ator para movê-lo, mesmo se o ator não for arrastável.\",\"disable-stage-drag-select/@name\":\"Atores não arrastáveis no editor\",\"move-to-top-bottom/@description\":\"Adiciona uma opção no menu de botão direito de uma fantasia ou som para movê-lo para o topo ou fundo da lista. Antes parte das ferramentas de desenvolvedor.\",\"move-to-top-bottom/@name\":\"Mover fantasia ao topo ou ao fundo da lista\",\"disable-paste-offset/@description\":\"Cola itens copiados em sua posição original ao invés de movê-los no editor de fantasia.\",\"disable-paste-offset/@name\":\"Não mover itens colados\",\"block-duplicate/@description\":\"Duplique um script rapidamente arrastando-o enquanto segura a tecla Alt. Segure Ctrl junto para duplicar só um único bloco ao invés da pilha inteira conectada.\",\"block-duplicate/@info-mac\":\"No macOS, use a tecla Option ao invés de Alt e Command ao invés de Ctrl.\",\"block-duplicate/@name\":\"Duplicar script segurando Alt\",\"swap-local-global/@description\":\"Adiciona mais opções ao renomear uma variável ou lista existente: permite trocar entre a opção \\\"Para todos os atores\\\" e \\\"Apenas para este ator\\\" e trocar se as variáveis são guardadas na nuvem ou não. Também adiciona uma nova opção ao clicar com o botão direito em uma variável/lista para rapidamente trocar seu acesso.\",\"swap-local-global/@name\":\"Trocar variáveis entre \\\"Para todos os atores\\\" e \\\"Apenas para este ator\\\"\",\"editor-comment-previews/@description\":\"Te deixa ver o texto de comentários ao passar o mouse em cima de comentários fechados e blocos. Você pode usar isso para ver comentários fora da tela, identificar um loop pela ponta inferior através de sua pré-visualização, encaixar vários comentários em um espaço pequeno, e mais.\",\"editor-comment-previews/@name\":\"Pré-visualização de comentários no editor\",\"editor-comment-previews/@settings-name-delay\":\"Tempo de espera\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Seguir o mouse\",\"editor-comment-previews/@settings-name-hover-view\":\"Pré-visualizar ao passar o mouse em comentários fechados\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Pré-visualizar ao passar o mouse em blocos com comentários ligados a eles\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Pré-visualizar o comentário ligado à definição ao passar o mouse em blocos customizados\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Reduzir animação\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Reduzir transparência\",\"editor-comment-previews/@settings-select-delay-long\":\"Longo\",\"editor-comment-previews/@settings-select-delay-none\":\"Nenhum\",\"editor-comment-previews/@settings-select-delay-short\":\"Curto\",\"columns/@description\":\"Divide o menu de categorias em duas colunas e o move para o topo da paleta de blocos, assim como no Scratch 2.0.\",\"columns/@name\":\"Menu de categoria de duas colunas\",\"script-snap/@description\":\"Arraste um script para automaticamente alinhas sua posição à grade de pontos.\",\"script-snap/@name\":\"Alinhar scripts à grade\",\"script-snap/@preset-name-default\":\"Padrão\",\"script-snap/@preset-name-half-block\":\"Meio bloco\",\"script-snap/@preset-name-whole-block\":\"Bloco inteiro\",\"script-snap/@settings-name-grid\":\"Tamanho da grade (px)\",\"editor-stepping/@description\":\"Adiciona uma borda colorida aos blocos que estão rodando em um projeto.\",\"editor-stepping/@name\":\"Destacar blocos em execução\",\"editor-stepping/@settings-name-highlight-color\":\"Cor de destaque\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/ro.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/ro.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@name, editor-devtools/@name, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, drag-drop/@name, pause/@description, pause/@name, mute-project/@description, clones/@name, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@name, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@name, editor-sounds/@description, editor-sounds/@name, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, blocks2image/@name, remove-curved-stage-border/@name, editor-stepping/@name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Aduce înapoi în editor blocurile pălărie pisică din Ziua Farselor din 2020.\",\"cat-blocks/@name\":\"Blocuri Pisică\",\"editor-devtools/@name\":\"Instrumente pentru dezvoltatori\",\"editor-searchable-dropdowns/@name\":\"Căutare în listele de opțiuni\",\"data-category-tweaks-v2/@name\":\"Îmbunătățiri pentru categoriile de date\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Mută blocurile de date deasupra listei de variabile\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Separă variabilele de liste\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Separă Variabilele Doar Pentru acest Personaj\",\"block-palette-icons/@name\":\"Pictograme ale categoriilor din paleta de blocuri\",\"hide-flyout/@description\":\"Ascunde paleta de blocuri dacă nu se ține mouse-ul deasupra ei. Apasă pe pictograma blochează pentru a o ține la locul ei temporar. Altfel, folosește modul „clic pe categorie”.\",\"hide-flyout/@info-hoverExplanation\":\"Modul „Pune cursorul deasupra zonei paletei” doar extinde zona vizuală. Dacă vrei să poți trage blocuri în acea zonă fără ca acestea să fie șterse, folosește unul dintre celelalte moduri.\",\"hide-flyout/@settings-name-speed\":\"Durata animației\",\"hide-flyout/@settings-name-toggle\":\"Pornește\",\"hide-flyout/@settings-select-speed-default\":\"Implicit\",\"hide-flyout/@settings-select-speed-long\":\"Lungă\",\"hide-flyout/@settings-select-speed-none\":\"Nimic\",\"hide-flyout/@settings-select-speed-short\":\"Scurtă\",\"hide-flyout/@settings-select-toggle-category\":\"Clic pe categorie\",\"hide-flyout/@settings-select-toggle-cathover\":\"Pune cursorul deasupra categoriei\",\"hide-flyout/@settings-select-toggle-hover\":\"Pune cursorul deasupra zonei paletei\",\"drag-drop/@name\":\"Trage și dă drumul fișierelor\",\"pause/@description\":\"Adaugă un buton de pauză lângă steagul verde.\",\"pause/@name\":\"Buton de Pauză\",\"mute-project/@description\":\"Ctrl+Apasă pe steag pentru a activa/dezactiva sunetul proiectului.\",\"clones/@name\":\"Contor de clone\",\"mouse-pos/@name\":\"Poziția cursorului\",\"color-picker/@description\":\"Adaugă introducerea de culori hex în selectoarele de culoare.\",\"color-picker/@name\":\"Selector de culoare hex\",\"remove-sprite-confirm/@description\":\"Te întreabă dacă ești sigur când ștergi un personaj în interiorul unui proiect.\",\"onion-skinning/@name\":\"Modul Costume suprapuse - Onion skinning\",\"onion-skinning/@settings-name-afterTint\":\"Culoarea costumelor următoare\",\"onion-skinning/@settings-name-beforeTint\":\"Culoarea costumelor anterioare\",\"onion-skinning/@settings-name-default\":\"Activează în mod implicit\",\"onion-skinning/@settings-name-layering\":\"Stratificare implicită\",\"onion-skinning/@settings-name-mode\":\"Mod implicit\",\"onion-skinning/@settings-name-next\":\"Număr implicit de costume următoare\",\"onion-skinning/@settings-name-opacity\":\"Opacitate (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Creșterea Opacității (%)\",\"onion-skinning/@settings-name-previous\":\"Număr implicit de costume anterioare\",\"onion-skinning/@settings-select-layering-behind\":\"În spate\",\"onion-skinning/@settings-select-layering-front\":\"Deasupra\",\"onion-skinning/@settings-select-mode-merge\":\"Combină imaginile\",\"onion-skinning/@settings-select-mode-tint\":\"Nuanța Culorilor\",\"bitmap-copy/@info-norightclick\":\"„Click dreapta → copiază” nu este suportat. Trebuie să apăsați Ctrl+C cât timp o imagine bitmap este selectată.\",\"bitmap-copy/@name\":\"Copiere imagini bitmap\",\"2d-color-picker/@name\":\"Paletă de culoare 2D\",\"custom-block-shape/@preset-name-default2\":\"Blocuri 2.0\",\"custom-block-shape/@preset-name-default3\":\"Blocuri 3.0\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Plat\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Plat\",\"custom-block-shape/@settings-name-cornerSize\":\"Mărimea colțului (0-300%)\",\"editor-theme3/@description\":\"Editează culoarea blocurilor pentru fiecare categorie în editor.\",\"editor-theme3/@name\":\"Culori personalizate ale blocurilor\",\"editor-theme3/@preset-description-black\":\"Face fundalul blocurilor negru\",\"editor-theme3/@preset-description-dark\":\"Versiuni întunecate ale blocurilor implicite\",\"editor-theme3/@preset-description-original\":\"Culorile originale ale blocurilor din Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Culorile Blocurilor Personalizate, de Evenimente și de Control inspirate din Scratch 2.0\",\"editor-theme3/@preset-name-black\":\"Negru\",\"editor-theme3/@preset-name-dark\":\"Întunecat\",\"editor-theme3/@preset-name-original\":\"Culori 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Modificări 3.0\",\"editor-theme3/@settings-name-Pen-color\":\"extensii\",\"editor-theme3/@settings-name-custom-color\":\"blocuri personalizate\",\"editor-theme3/@settings-name-data-color\":\"variabile\",\"editor-theme3/@settings-name-data-lists-color\":\"liste\",\"editor-theme3/@settings-name-events-color\":\"evenimente\",\"editor-theme3/@settings-name-input-color\":\"Intrări de text din blocuri\",\"editor-theme3/@settings-name-looks-color\":\"aspect\",\"editor-theme3/@settings-name-motion-color\":\"mișcare\",\"editor-theme3/@settings-name-operators-color\":\"operatori\",\"editor-theme3/@settings-name-sensing-color\":\"detectare\",\"editor-theme3/@settings-name-sounds-color\":\"sunete\",\"editor-theme3/@settings-name-text\":\"Culoarea textului\",\"editor-theme3/@settings-select-text-black\":\"Negru\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Colorat pe fundal negru\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Colorat pe fundal alb\",\"editor-theme3/@settings-select-text-white\":\"Alb\",\"editor-colored-context-menus/@name\":\"Meniuri de context colorate\",\"editor-stage-left/@description\":\"Mută scena în partea stângă a editorului.\",\"editor-stage-left/@name\":\"Afișează scena pe partea stângă\",\"variable-manager/@description\":\"Adaugă o filă lângă „sunete” în editor pentru pentru a actualiza ușor variabile și liste.\",\"variable-manager/@name\":\"Administrator de Variabile\",\"gamepad/@name\":\"Suport gamepad\",\"editor-sounds/@description\":\"Redă efecte de sunet la conectarea și la ștergerea blocurilor.\",\"editor-sounds/@name\":\"Sunete în editor\",\"folders/@info-notice-folders-are-public\":\"Utilizatorii cu această funcție activată vor putea să vadă dosarele din proiectul tău. Oricine altcineva va vedea lista personajelor normal (fără dosare).\",\"folders/@info-notice-sprite-names\":\"Această funcție funcționează prin adăugarea „[numeleDosarului]//” la începutul numelui personajelor tale.\",\"folders/@name\":\"Dosare de Personaje\",\"block-switching/@description\":\"Dați click-dreapta pe un bloc pentru a-l schimba într-unul cu un conținut asemânător.\",\"block-switching/@name\":\"Schimbarea blocurilor\",\"block-switching/@settings-name-border\":\"Adaugă margine\",\"block-switching/@settings-name-control\":\"Blocuri Control\",\"block-switching/@settings-name-data\":\"Blocuri de Liste și Variabile\",\"block-switching/@settings-name-event\":\"Evenimente\",\"block-switching/@settings-name-extension\":\"Blocuri de Extensii\",\"block-switching/@settings-name-looks\":\"Blocuri Aspect\",\"block-switching/@settings-name-motion\":\"Blocuri Mișcare\",\"block-switching/@settings-name-noop\":\"Afișați opțiunea pentru a schimba blocul în el înșine\",\"block-switching/@settings-name-operator\":\"Operatori\",\"block-switching/@settings-name-sensing\":\"Blocuri Detectare\",\"block-switching/@settings-name-sound\":\"Blocuri de Sunet\",\"load-extensions/@settings-name-music\":\"Muzică\",\"load-extensions/@settings-name-pen\":\"Stilou\",\"load-extensions/@settings-name-text2speech\":\"Text în Vorbire\",\"load-extensions/@settings-name-translate\":\"Traducere\",\"custom-zoom/@settings-select-speed-default\":\"Implicit\",\"custom-zoom/@settings-select-speed-long\":\"Lungă\",\"custom-zoom/@settings-select-speed-none\":\"Nimic\",\"custom-zoom/@settings-select-speed-short\":\"Scurtă\",\"blocks2image/@name\":\"Salvează blocurile ca imagine\",\"remove-curved-stage-border/@name\":\"Elimină marginea scenei curbată\",\"editor-stepping/@name\":\"Scoate în evidență blocurile care rulează\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/ru.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/ru.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@name, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, drag-drop/@description, drag-drop/@name, debugger/@name, pause/@name, mute-project/@description, clones/@name, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@info-paddingWarning, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, editor-sounds/@description, editor-sounds/@name, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@name, transparent-orphans/@settings-name-block, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@name, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, block-duplicate/@name, columns/@description, columns/@name, editor-stepping/@name, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Возвращает обратно в редактор котоблоки с первого апреля 2020.\",\"cat-blocks/@name\":\"Котоблоки\",\"editor-devtools/@info-shortcuts\":\"Нажмите \\\"Ctrl+F\\\", чтобы сфокусировать поле поиска, \\\"Ctrl+Пробел\\\", чтобы открыть всплывающее окно \\\"Добавить блок по имени\\\", \\\"Ctrl+Влево/Вправо\\\" для навигации по истории поиска.\",\"editor-devtools/@name\":\"Инструменты разработчика\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Улучшение \\\"Очистить блоки\\\"\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Вставлять блоки под курсором мыши\",\"editor-searchable-dropdowns/@name\":\"Поиск в выпадающих списках\",\"data-category-tweaks-v2/@name\":\"Поправки категории данных \",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Переместить блоки данных выше списка переменных.\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Отдельная категория списков.\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Отделить переменные только для одного спрайта\",\"block-palette-icons/@description\":\"Добавляет значки внутри цветных кружков, обозначающих категории блоков.\",\"block-palette-icons/@name\":\"Значки категорий на палитре блоков\",\"hide-flyout/@description\":\"Скрывает палитру блоков, если не наведено. Щелкните значок замкА, чтобы временно заблокировать его. Как вариант, используйте режим «щелчок по категории».\",\"hide-flyout/@name\":\"Автоскрытие палитры блоков\",\"hide-flyout/@settings-name-speed\":\"Длительность анимации\",\"hide-flyout/@settings-name-toggle\":\"Включить...\",\"hide-flyout/@settings-select-speed-default\":\"По умолчанию\",\"hide-flyout/@settings-select-speed-long\":\"Длинный\",\"hide-flyout/@settings-select-speed-none\":\"Nul\",\"hide-flyout/@settings-select-speed-short\":\"Короткий\",\"hide-flyout/@settings-select-toggle-category\":\"Нажатие категории\",\"hide-flyout/@settings-select-toggle-cathover\":\"Наведение на категорию\",\"hide-flyout/@settings-select-toggle-hover\":\"Наведение на область палитры\",\"drag-drop/@description\":\"Позволяет перетаскивать изображения и звуки из проводника файлов на панель спрайтов или в список костюмов/звуков. Вы также можете перетаскивать текстовые файлы в списки или подсказки типа \\\"спросить и ждать\\\".\",\"drag-drop/@name\":\"Перетаскивание файлов\",\"debugger/@name\":\"Отладчик\",\"pause/@name\":\"Кнопка паузы\",\"mute-project/@description\":\"Клавиша Ctrl + Клик по зелёному флагу чтобы выключить/включить звук проекта.\",\"clones/@name\":\"Счётчик клонов\",\"mouse-pos/@name\":\"Позиция мыши\",\"color-picker/@description\":\"Добавляет ввод кодов hex в выбор цветов.\",\"color-picker/@name\":\"Выбор цветов типа Hex\",\"remove-sprite-confirm/@description\":\"Спрашивает, уверены ли вы при удалении спрайта внутри проекта.\",\"onion-skinning/@name\":\"Отображение Onion\",\"onion-skinning/@settings-name-afterTint\":\"Следующая тонировка костюма\",\"onion-skinning/@settings-name-beforeTint\":\"Предыдущий оттенок костюма\",\"onion-skinning/@settings-name-default\":\"Включено по умолчанию\",\"onion-skinning/@settings-name-layering\":\"Слои по умолчанию\",\"onion-skinning/@settings-name-mode\":\"Режим по умолчанию\",\"onion-skinning/@settings-name-next\":\"Следующие костюмы по умолчанию\",\"onion-skinning/@settings-name-opacity\":\"Непрозрачность (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Шаг непрозрачности (%)\",\"onion-skinning/@settings-name-previous\":\"Предыдущие костюмы по умолчанию\",\"onion-skinning/@settings-select-layering-behind\":\"Сзади\",\"onion-skinning/@settings-select-layering-front\":\"Впереди\",\"onion-skinning/@settings-select-mode-merge\":\"Объединить изображения\",\"onion-skinning/@settings-select-mode-tint\":\"Оттенок цвета\",\"bitmap-copy/@info-norightclick\":\"\\\"ПКМ → Копировать\\\" не поддерживается. Вам нужно нажать Ctrl+C пока растровое изображение выбрано.\",\"bitmap-copy/@name\":\"Копирование растровых изображений\",\"2d-color-picker/@name\":\"2D-палитра цветов\",\"better-img-uploads/@description\":\"Добавляет новую кнопку над кнопкой \\\"загрузить костюм\\\", которая автоматически преобразует загруженные растровые изображения в изображения SVG (векторные), чтобы избежать потери качества.\",\"better-img-uploads/@info-notSuitableEdit\":\"Избегайте использования кнопки HD загрузки, если вы планируете редактировать изображение после загрузки.\",\"better-img-uploads/@name\":\"HD загрузка изображений\",\"better-img-uploads/@settings-name-fitting\":\"Размер изображения\",\"better-img-uploads/@settings-select-fitting-fill\":\"Растянуть, чтобы заполнить сцену\",\"better-img-uploads/@settings-select-fitting-fit\":\"Уменьшить, чтобы соответствовать сцене\",\"better-img-uploads/@settings-select-fitting-full\":\"Оригинальный размер\",\"custom-block-shape/@info-paddingWarning\":\"Уменьшение размера отступа видно только вам, поэтому, когда ваши проекты просматриваются другими пользователями, ваши скрипты могут перекрываться.\",\"custom-block-shape/@preset-description-default2\":\"Внешний вид, похожий на блоки Scratch 2.0\",\"custom-block-shape/@preset-description-default3\":\"Обычный внешний вид блоков Scratch 3.0\",\"custom-block-shape/@preset-description-flat2\":\"Блоки Scratch 2.0 с удаленными вырезами и углами\",\"custom-block-shape/@preset-description-flat3\":\"Блоки Scratch 3.0 с удаленными вырезами и углами\",\"custom-block-shape/@preset-name-default2\":\"Блоки 2.0\",\"custom-block-shape/@preset-name-default3\":\"Блоки 3.0\",\"custom-block-shape/@preset-name-flat2\":\"Плоские 2.0\",\"custom-block-shape/@preset-name-flat3\":\"Плоские 3.0\",\"custom-block-shape/@settings-name-cornerSize\":\"Размер угла (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Высота паза (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Размер отступов (50-200%)\",\"editor-theme3/@description\":\"Отредактируйте цвета блоков для каждой категории в редакторе.\",\"editor-theme3/@name\":\"Настраиваемые цвета блоков\",\"editor-theme3/@preset-description-black\":\"Делает фоны блоков чёрными\",\"editor-theme3/@preset-description-dark\":\"Тёмные версии цветов по умолчанию\",\"editor-theme3/@preset-description-original\":\"Оригинальные цвета блоков из Scratch 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Блоки событий, управления и другие с цветами, вдохновленными 2.0\",\"editor-theme3/@preset-name-black\":\"Чёрный\",\"editor-theme3/@preset-name-dark\":\"Тёмная\",\"editor-theme3/@preset-name-original\":\"Цвета 2.0\",\"editor-theme3/@preset-name-tweaks\":\"3.0 повторение\",\"editor-theme3/@settings-name-Pen-color\":\"расширения\",\"editor-theme3/@settings-name-control-color\":\"управление\",\"editor-theme3/@settings-name-custom-color\":\"свой\",\"editor-theme3/@settings-name-data-color\":\"переменные\",\"editor-theme3/@settings-name-data-lists-color\":\"списки\",\"editor-theme3/@settings-name-events-color\":\"события\",\"editor-theme3/@settings-name-input-color\":\"Поля ввода в блоках\",\"editor-theme3/@settings-name-looks-color\":\"внешний вид\",\"editor-theme3/@settings-name-motion-color\":\"движение\",\"editor-theme3/@settings-name-operators-color\":\"операторы\",\"editor-theme3/@settings-name-sensing-color\":\"сенсоры\",\"editor-theme3/@settings-name-sounds-color\":\"звук\",\"editor-theme3/@settings-name-text\":\"Цвет текста\",\"editor-theme3/@settings-select-text-black\":\"Чёрный\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Цветной на чёрном фоне\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Цветной на белом фоне\",\"editor-theme3/@settings-select-text-white\":\"Белый\",\"editor-colored-context-menus/@description\":\"Делает контекстные меню, щёлкнутые ПКМ по блоку более красочными.\",\"editor-colored-context-menus/@name\":\"Цветные контекстные меню\",\"editor-stage-left/@description\":\"Перемещает сцену в левую часть редактора.\",\"editor-stage-left/@name\":\"Отображать сцену на левой стороне\",\"variable-manager/@description\":\"Добавляет вкладку рядом с \\\"звуки\\\" в редакторе для удобного обновления переменных и списков.\",\"variable-manager/@name\":\"Менеджер переменных\",\"gamepad/@description\":\"Взаимодействовать с проектами используя USB или Bluetooth контроллер/геймпад.\",\"gamepad/@name\":\"Поддержка геймпада\",\"editor-sounds/@description\":\"Воспроизводит звуковые эффекты при соединении или удалении блоков.\",\"editor-sounds/@name\":\"Звуковые эффекты редактора\",\"folders/@info-notice-folders-are-public\":\"Пользователи, у которых включена эта функция, смогут видеть папки в вашем проекте. Все остальные будут видеть списки спрайтов в обычном режиме (без папок).\",\"folders/@info-notice-sprite-names\":\"Эта функция работает путем добавления \\\"[имяПапки]//\\\" в начало имен ваших спрайтов.\",\"folders/@name\":\"Папки спрайтов\",\"block-switching/@settings-name-border\":\"Добавить границу\",\"block-switching/@settings-name-control\":\"Блоки управления\",\"block-switching/@settings-name-data\":\"Блоки переменных\",\"block-switching/@settings-name-event\":\"Блоки событий\",\"block-switching/@settings-name-extension\":\"Блоки расширений\",\"block-switching/@settings-name-looks\":\"Блоки внешности\",\"block-switching/@settings-name-motion\":\"Блоки движения\",\"block-switching/@settings-name-operator\":\"Блоки операторов\",\"block-switching/@settings-name-sensing\":\"Блоки сенсоров\",\"block-switching/@settings-name-sound\":\"Блоки звуков\",\"load-extensions/@settings-name-music\":\"Музыка\",\"load-extensions/@settings-name-pen\":\"Перо\",\"load-extensions/@settings-name-text2speech\":\"Текст в речь\",\"load-extensions/@settings-name-translate\":\"Перевод\",\"custom-zoom/@settings-name-autohide\":\"Автоматическое скрытие элементов управления масштабированием\",\"custom-zoom/@settings-name-maxZoom\":\"Максимальное увеличение (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Минимальное увеличение (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Продолжительность анимации скрытия\",\"custom-zoom/@settings-name-startZoom\":\"Начальное увеличение (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Скорость увеличения (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"По умолчанию\",\"custom-zoom/@settings-select-speed-long\":\"Долго\",\"custom-zoom/@settings-select-speed-none\":\"Нет\",\"custom-zoom/@settings-select-speed-short\":\"Быстро\",\"initialise-sprite-position/@settings-name-library\":\"Случайное расположение спрайтов из библиотеки\",\"initialise-sprite-position/@settings-name-x\":\"Позиция X\",\"initialise-sprite-position/@settings-name-y\":\"Позиция Y\",\"blocks2image/@name\":\"Сохранить блоки как изображение\",\"remove-curved-stage-border/@description\":\"Убирает фигурную обводку вокруг сцены, позволяя увидеть углы.\",\"remove-curved-stage-border/@name\":\"Убирает фигурную обводку сцены\",\"transparent-orphans/@name\":\"Прозрачность блоков\",\"transparent-orphans/@settings-name-block\":\"Прозрачность блоков (%)\",\"paint-by-default/@settings-name-backdrop\":\"Добавить фон\",\"paint-by-default/@settings-name-costume\":\"Добавить костюм\",\"paint-by-default/@settings-name-sound\":\"Добавить звук\",\"paint-by-default/@settings-name-sprite\":\"Добавить спрайт\",\"paint-by-default/@settings-select-backdrop-paint\":\"Нарисовать\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Сюрприз\",\"paint-by-default/@settings-select-backdrop-upload\":\"Загрузить\",\"paint-by-default/@settings-select-costume-paint\":\"Нарисовать\",\"paint-by-default/@settings-select-costume-surprise\":\"Сюрприз\",\"paint-by-default/@settings-select-costume-upload\":\"Загрузить\",\"paint-by-default/@settings-select-sound-record\":\"Записать\",\"paint-by-default/@settings-select-sound-surprise\":\"Сюрприз\",\"paint-by-default/@settings-select-sound-upload\":\"Загрузить\",\"paint-by-default/@settings-select-sprite-paint\":\"Нарисовать\",\"paint-by-default/@settings-select-sprite-surprise\":\"Сюрприз\",\"paint-by-default/@settings-select-sprite-upload\":\"Загрузить\",\"block-cherry-picking/@name\":\"Вытаскивать отдельный блок с клавишей Ctrl\",\"hide-new-variables/@name\":\"Скрывать новые переменные\",\"editor-extra-keys/@description\":\"Добавляет больше клавиш в выпадающие списки блоков \\\"клавиша () нажата?\\\" и \\\"когда клавиша () нажата\\\", такие как Enter, точка, запятая и другие.\",\"editor-extra-keys/@name\":\"Поддержка дополнительных клавиш\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Включить экспериментальные клавиши\",\"hide-delete-button/@description\":\"Скрывает кнопку удаления (иконка корзины) из спрайтов, костюмов и звуков. Они могут быть удалены из контекстного меню.\",\"hide-delete-button/@name\":\"Скрыть кнопку удалить\",\"hide-delete-button/@settings-name-costumes\":\"Костюмы и фоны\",\"hide-delete-button/@settings-name-sounds\":\"Звуки\",\"hide-delete-button/@settings-name-sprites\":\"Спрайты\",\"disable-stage-drag-select/@info-shift\":\"Удерживайте Shift при перетаскивании спрайта, чтобы перемещать его как обычно, даже если он не настроен как перетаскиваемый.\",\"disable-stage-drag-select/@name\":\"Неперетаскиваемые спрайты в редакторе\",\"block-duplicate/@name\":\"Дублировать скрипт с клавишей Alt\",\"columns/@description\":\"Разделяет меню категорий блоков на два столбца и перемещает его в верхнюю часть палитры блоков, как в Scratch 2.0.\",\"columns/@name\":\"Меню категорий с двумя столбцами\",\"editor-stepping/@name\":\"Выделять выполняемые в данный момент блоки\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/sl.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/sl.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Vrne mačje bloke iz 1. aprila 2020 v urejevalnik.\",\"cat-blocks/@info-watch\":\"Možnost \\\"spremljaj kazalec miške\\\" lahko vpliva na hitrost delovanja urejevalnika.\",\"cat-blocks/@name\":\"Mačji bloki\",\"cat-blocks/@settings-name-watch\":\"Spremljaj kazalec miške\",\"editor-devtools/@description\":\"Doda iskalno polje in nove možnosti v menijih v urejevalnik: kopiranje blokov, boljše čiščenje, skok k definiciji bloka, in drugo.\",\"editor-devtools/@info-shortcuts\":\"Pritisnite \\\"Ctrl+F\\\" da označite iskalno polje, \\\"Ctrl+presledek\\\" za iskanje blokov po imenu in \\\"Ctrl+levo/desno\\\" za premikanje po zgodovini iskanja.\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"Izboljšaj možnost \\\"Počisti bloke\\\"\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Omogoči klik spremenljivk, mojih blokov ali dogodkov s srednjo miškino tipko za navigacijo\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Prilepi bloke poleg kazalca miške\",\"editor-searchable-dropdowns/@description\":\"Omogoči iskanje po spustnih menijih blokov.\",\"editor-searchable-dropdowns/@name\":\"Iskanje po spustnih menijih\",\"data-category-tweaks-v2/@description\":\"Izboljša kategorijo blokov Podatki (\\\"Spremenljivke\\\").\",\"data-category-tweaks-v2/@name\":\"Izboljšana kategorija spremenljivk\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Premakni bloke za podatke nad seznam spremenljivk\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Ločena kategorija za sezname\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Ločene spremenljivke samo za to figuro\",\"block-palette-icons/@description\":\"V barvne kroge, ki označujejo kategorije blokov, doda ikone.\",\"block-palette-icons/@name\":\"Ikone kategorij blokov\",\"hide-flyout/@description\":\"Skrije paleto blokov, če miška ni na njej. Kliknite ikono ključavnice, da jo začasno zaklenete. Lahko pa uporabite tudi način \\\"Ko kliknem kategorijo\\\".\",\"hide-flyout/@info-hoverExplanation\":\"Način \\\"ko premaknem miško na območje palete\\\" poveča samo območje, v katerem so bloki vidni. Če želite tja vleči bloke, ne da bi bili ti izbrisani, uporabite enega od drugih načinov.\",\"hide-flyout/@name\":\"Samodejno skrivanje palete blokov\",\"hide-flyout/@settings-name-speed\":\"Trajanje animacije\",\"hide-flyout/@settings-name-toggle\":\"Pokaži ko...\",\"hide-flyout/@settings-select-speed-default\":\"Navadno\",\"hide-flyout/@settings-select-speed-long\":\"Dolgo\",\"hide-flyout/@settings-select-speed-none\":\"Brez\",\"hide-flyout/@settings-select-speed-short\":\"Kratko\",\"hide-flyout/@settings-select-toggle-category\":\"Kliknem kategorijo\",\"hide-flyout/@settings-select-toggle-cathover\":\"Premaknem miško na kategorijo\",\"hide-flyout/@settings-select-toggle-hover\":\"Premaknem miško na območje palete\",\"mediarecorder/@description\":\"V menijsko vrstico v urejevalniku doda gumb \\\"začni snemanje\\\", ki omogoča snemanje odra.\",\"mediarecorder/@name\":\"Snemanje videov projekta\",\"drag-drop/@description\":\"Omogoča vlečenje slik in zvokov iz vašega upravitelja datotek v seznam figur, videzov ali zvokov. Lahko povlečete tudi besedilne datoteke v sezname ali v polje, ki ga prikaže blok \\\"vprašaj in počakaj\\\".\",\"drag-drop/@name\":\"Vlečenje datotek v urejevalnik\",\"drag-drop/@settings-name-use-hd-upload\":\"Uporabi HD nalaganje slik\",\"debugger/@description\":\"Doda novo kategorijo blokov in okno za razhroščevanje v urejevalnik. Bloki \\\"zapiši\\\", \\\"opozorilo\\\" in \\\"napaka\\\" zapišejo določeno sporočilo v okno za razhroščevanje. Blok \\\"breakpoint\\\" začasno zaustavi projekt.\",\"debugger/@name\":\"Orodje za razhroščevanje\",\"pause/@description\":\"Doda gumb za premor poleg zelene zastavice.\",\"pause/@name\":\"Gumb za premor\",\"mute-project/@description\":\"Ctrl+kliknite zeleno zastavico, da vključite ali izključite zvok v projektu.\",\"mute-project/@name\":\"Utišaj predvajalnik projekta\",\"clones/@description\":\"Nad oder v urejevalniku doda števec, ki prikaže skupno število dvojnikov figur.\",\"clones/@name\":\"Števec dvojnikov\",\"mouse-pos/@description\":\"Prikaže x/y položaj miške nad odrom v urejevalniku.\",\"mouse-pos/@name\":\"Položaj miške\",\"color-picker/@description\":\"Doda polje za vnos šestnajstiške kode, ko izbirate barvo.\",\"color-picker/@name\":\"Šestnajstiške barve\",\"remove-sprite-confirm/@description\":\"Vpraša, če ste prepričani, preden izbrišete figuro v projektu.\",\"remove-sprite-confirm/@name\":\"Potrditev brisanja figure\",\"block-count/@description\":\"Pokaže skupno število blokov v projektu v menijski vrstici urejevalnika. Prej del dodatka \\\"število figur in skript\\\".\",\"block-count/@name\":\"Števec blokov\",\"onion-skinning/@description\":\"Pokaže prosojne slike prejšnjih ali naslednjih videzov med urejanjem videza. Za upravljanje uporabite gumbe pod urejevalnikom videzov, poleg gumbov za povečavo.\",\"onion-skinning/@settings-name-afterTint\":\"Barva naslednjega videza\",\"onion-skinning/@settings-name-beforeTint\":\"Barva prejšnjega videza\",\"onion-skinning/@settings-name-default\":\"Samodejno vključi\",\"onion-skinning/@settings-name-layering\":\"Začetna plast\",\"onion-skinning/@settings-name-mode\":\"Začetni način\",\"onion-skinning/@settings-name-next\":\"Začetno število naslednjih videzov\",\"onion-skinning/@settings-name-opacity\":\"Neprosojnost (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Sprememba neprosojnosti (%)\",\"onion-skinning/@settings-name-previous\":\"Začetno število prejšnjih videzov\",\"onion-skinning/@settings-select-layering-behind\":\"Zadaj\",\"onion-skinning/@settings-select-layering-front\":\"Spredaj\",\"onion-skinning/@settings-select-mode-merge\":\"Združi slike\",\"onion-skinning/@settings-select-mode-tint\":\"Barva\",\"bitmap-copy/@description\":\"Omogoči, da kopirate bitno sliko iz urejevalnika videzov v sistemsko odložišče in jo prilepite v druge spletne strani ali programe.\",\"bitmap-copy/@info-norightclick\":\"\\\"Desni miškin gumb → kopiraj\\\" ne deluje. Pritisnite morati Ctrl+C, ko je izbrana bitna slika.\",\"bitmap-copy/@name\":\"Kopiranje bitnih slik\",\"2d-color-picker/@description\":\"Zamenja drsnika za svetlost in nasičenost barv v urejevalniku videzov z 2D drsnikom. Držite tipko Shift med vlečenjem, da spremenite vrednost samo ene osi.\",\"2d-color-picker/@name\":\"2D izbira barv\",\"better-img-uploads/@description\":\"Doda nov gumb nad \\\"naloži videz\\\", ki samodejno spremeni naložene slike v obliko SVG (vektor), da se izogne zmanjšanju kakovosti.\",\"better-img-uploads/@info-notSuitableEdit\":\"Gumba \\\"naloži HD\\\" ne uporabljajte, če bi radi naloženo sliko urejali.\",\"better-img-uploads/@name\":\"Nalaganje HD slik\",\"better-img-uploads/@settings-name-fitting\":\"Velikost slike\",\"better-img-uploads/@settings-select-fitting-fill\":\"Raztegni na velikost odra\",\"better-img-uploads/@settings-select-fitting-fit\":\"Pomanjšaj prevelike slike do velikosti odra\",\"better-img-uploads/@settings-select-fitting-full\":\"Izvirna velikost\",\"custom-block-shape/@description\":\"Spremenite velikost, zaobljenost robov in velikost zareze blokov.\",\"custom-block-shape/@info-paddingWarning\":\"Spremembo velikosti praznega prostora vidite samo vi, zato se za druge uporabnike skripte v vašem projektu lahko prekrivajo.\",\"custom-block-shape/@name\":\"Prilagoditev oblike blokov\",\"custom-block-shape/@preset-description-default2\":\"Videz, podoben blokom v Scratchu 2.0\",\"custom-block-shape/@preset-description-default3\":\"Običajni videz blokov v Scratchu 3.0\",\"custom-block-shape/@preset-description-flat2\":\"Bloki Scratcha 2.0 brez zarez in zaobljenih robov.\",\"custom-block-shape/@preset-description-flat3\":\"Bloki Scratcha 3.0 brez zarez in zaobljenih robov.\",\"custom-block-shape/@preset-name-default2\":\"2.0 bloki\",\"custom-block-shape/@preset-name-default3\":\"3.0 bloki\",\"custom-block-shape/@preset-name-flat2\":\"2.0 ravni bloki\",\"custom-block-shape/@preset-name-flat3\":\"3.0 ravni bloki\",\"custom-block-shape/@settings-name-cornerSize\":\"Zaobljenost robov (0-300%)\",\"custom-block-shape/@settings-name-notchSize\":\"Višina zareze (0-150%)\",\"custom-block-shape/@settings-name-paddingSize\":\"Velikost praznega prostora (50-200%)\",\"editor-theme3/@description\":\"Uredite barve blokov za vse kategorije v urejevalniku.\",\"editor-theme3/@name\":\"Prilagoditev barv blokov\",\"editor-theme3/@preset-description-black\":\"Naredi ozadje blokov črno\",\"editor-theme3/@preset-description-dark\":\"Temne različice običajnih barv\",\"editor-theme3/@preset-description-original\":\"Originalne barve blokov iz Scratcha 2.0\",\"editor-theme3/@preset-description-tweaks\":\"Bloki za dogodke, krmiljenje in \\\"moji bloki\\\" z barvami, podobnimi kot v Scratchu 2.0\",\"editor-theme3/@preset-name-black\":\"Črno\",\"editor-theme3/@preset-name-dark\":\"Temno\",\"editor-theme3/@preset-name-original\":\"Barve Scratcha 2.0\",\"editor-theme3/@preset-name-tweaks\":\"Izboljšane barve Scratcha 3.0\",\"editor-theme3/@settings-name-Pen-color\":\"razširitve\",\"editor-theme3/@settings-name-control-color\":\"krmiljenje\",\"editor-theme3/@settings-name-custom-color\":\"moji bloki\",\"editor-theme3/@settings-name-data-color\":\"spremenljivke\",\"editor-theme3/@settings-name-data-lists-color\":\"seznami\",\"editor-theme3/@settings-name-events-color\":\"dogodki\",\"editor-theme3/@settings-name-input-color\":\"Vnosna polja blokov\",\"editor-theme3/@settings-name-looks-color\":\"videzi\",\"editor-theme3/@settings-name-motion-color\":\"gibanje\",\"editor-theme3/@settings-name-operators-color\":\"operatorji\",\"editor-theme3/@settings-name-sensing-color\":\"zaznavanje\",\"editor-theme3/@settings-name-sounds-color\":\"zvok\",\"editor-theme3/@settings-name-text\":\"Barva besedila\",\"editor-theme3/@settings-select-text-black\":\"Črna\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Barvna na črnem ozadju\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Barvna na belem ozadju\",\"editor-theme3/@settings-select-text-white\":\"Bela\",\"editor-colored-context-menus/@description\":\"Naredi menije, ki se odprejo, ko kliknete blok z desno miškino tipko, barvne.\",\"editor-colored-context-menus/@name\":\"Barvni meniji\",\"editor-stage-left/@description\":\"Premakne oder na levo stran urejevalnika.\",\"editor-stage-left/@name\":\"Pokaži oder na levi strani\",\"variable-manager/@description\":\"Doda zavihek za enostavno urejanje spremenljivk in seznamov v urejevalnik, poleg zavihka \\\"zvoki\\\".\",\"variable-manager/@name\":\"Upravitelj spremenljivk\",\"gamepad/@description\":\"Uporabljajte USB ali Bluetooth igralni plošček v projektih.\",\"gamepad/@name\":\"Podpora igralnih ploščkov\",\"gamepad/@settings-name-hide\":\"Skrij gumb za nastavitve, ko noben plošček ni zaznan\",\"editor-sounds/@description\":\"Doda zvočne učnike, ko povežete ali izbrišete bloke.\",\"editor-sounds/@name\":\"Zvočni učinki v urejevalniku\",\"folders/@description\":\"Doda mape v sezname figur, videzov in zvokov. Kliknite figuro z desno miškino tipko in izberite \\\"ustvari mapo\\\", da naredite novo mapo. Kliknite mapo, da jo odprete ali zaprete. Kliknite figuro z desno tipko, da jo dodate v mapo, ali pa jo z miško povlecite v odprto mapo.\",\"folders/@info-notice-folders-are-public\":\"Uporabniki, ki imajo to možnost vključeno, bodo lahko videli mape v vašem projektu. Drugi uporabniki bodo videli seznam figur na običajen način (brez map).\",\"folders/@info-notice-sprite-names\":\"Ta funkcija deluje tako, da na začetek imena figure doda \\\"[ime mape]//\\\".\",\"folders/@name\":\"Mape figur\",\"block-switching/@description\":\"Kliknite na blok z desno miškino tipko, da ga zamenjate s podobnim blokom.\",\"block-switching/@name\":\"Menjava blokov\",\"block-switching/@settings-name-border\":\"Dodaj okvir\",\"block-switching/@settings-name-control\":\"Bloki za krmiljenje\",\"block-switching/@settings-name-customargs\":\"Vnosi \\\"mojih blokov\\\"\",\"block-switching/@settings-name-customargsmode\":\"Možnosti za vnose \\\"mojih blokov\\\"\",\"block-switching/@settings-name-data\":\"Bloki za podatke\",\"block-switching/@settings-name-event\":\"Bloki za dogodke\",\"block-switching/@settings-name-extension\":\"Bloki razširitev\",\"block-switching/@settings-name-looks\":\"Bloki za videz\",\"block-switching/@settings-name-motion\":\"Bloki za gibanje\",\"block-switching/@settings-name-noop\":\"Pokaži možnost, da bloka ne spremenim\",\"block-switching/@settings-name-operator\":\"Operatorji\",\"block-switching/@settings-name-sensing\":\"Bloki za zaznavanje\",\"block-switching/@settings-name-sound\":\"Bloki za zvok\",\"block-switching/@settings-select-customargsmode-all\":\"Vnosi vseh \\\"mojih blokov\\\" v figuri\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Vnosi ustreznega \\\"mojega bloka\\\"\",\"load-extensions/@description\":\"Samodejno pokaže bloke za glasbo, svinčnik in druge razširitve na seznamu kategorij blokov v urejevalniku.\",\"load-extensions/@name\":\"Samodejno dodaj razširitve\",\"load-extensions/@settings-name-music\":\"Glasba\",\"load-extensions/@settings-name-pen\":\"Svinčnik\",\"load-extensions/@settings-name-text2speech\":\"Besedilo v govor\",\"load-extensions/@settings-name-translate\":\"Prevedi\",\"custom-zoom/@description\":\"Izberite najmanjšo in največjo povečavo ter hitrost in začetno vrednost povečave prostora za kodo. Lahko tudi samodejno skrije gumbe za povečavo.\",\"custom-zoom/@name\":\"Prilagoditev povečave prostora za kodo\",\"custom-zoom/@settings-name-autohide\":\"Samodejno skrij gumbe za povečavo\",\"custom-zoom/@settings-name-maxZoom\":\"Največja povečava (50-500%)\",\"custom-zoom/@settings-name-minZoom\":\"Najmanjša povečava (1-100%)\",\"custom-zoom/@settings-name-speed\":\"Trajanje animacije skrivanja gumbov\",\"custom-zoom/@settings-name-startZoom\":\"Začetna povečava (50-500%)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Hitrost povečave (50-200%)\",\"custom-zoom/@settings-select-speed-default\":\"Navadno\",\"custom-zoom/@settings-select-speed-long\":\"Dolgo\",\"custom-zoom/@settings-select-speed-none\":\"Brez\",\"custom-zoom/@settings-select-speed-short\":\"Kratko\",\"initialise-sprite-position/@description\":\"Spremeni začetni x/y položaj novih figur.\",\"initialise-sprite-position/@name\":\"Prilagoditev položaja novih figur\",\"initialise-sprite-position/@settings-name-library\":\"Postavi figure iz knjižnice na naključno mesto\",\"initialise-sprite-position/@settings-name-x\":\"Položaj X\",\"initialise-sprite-position/@settings-name-y\":\"Položaj Y\",\"blocks2image/@description\":\"Kliknite prostor za kodo z desno miškino tipko, da izvozite bloke kot sliko SVG ali PNG.\",\"blocks2image/@name\":\"Shrani bloke kot sliko\",\"remove-curved-stage-border/@description\":\"Odstrani zaobljen okvir odra in s tem naredi robove vidne.\",\"remove-curved-stage-border/@name\":\"Odstrani zaobljen okvir odra\",\"transparent-orphans/@description\":\"Prilagodi prosojnost blokov v urejevalniku, z ločenima možnostma za neuporabljene bloke (tiste, ki niso povezani z dogodkom) in bloke, ki jih vlečete z miško.\",\"transparent-orphans/@name\":\"Prosojnost blokov\",\"transparent-orphans/@settings-name-block\":\"Prosojnost blokov (%)\",\"transparent-orphans/@settings-name-dragged\":\"Prosojnost blokov med vlečenjem (%)\",\"transparent-orphans/@settings-name-orphan\":\"Prosojnost neuporabljenih blokov (%)\",\"paint-by-default/@description\":\"Spremeni gumbe \\\"Izberi figuro/videz/ozadje/zvok\\\", da namesto odpiranja knjižnice naredijo kaj drugega.\",\"paint-by-default/@name\":\"Odpri urejevalnik videzov namesto knjižnice\",\"paint-by-default/@settings-name-backdrop\":\"Dodajanje ozadja\",\"paint-by-default/@settings-name-costume\":\"Dodajanje videza\",\"paint-by-default/@settings-name-sound\":\"Dodajanje zvoka\",\"paint-by-default/@settings-name-sprite\":\"Dodajanje figure\",\"paint-by-default/@settings-select-backdrop-library\":\"Knjižnica\",\"paint-by-default/@settings-select-backdrop-paint\":\"Nariši\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Presenečenje\",\"paint-by-default/@settings-select-backdrop-upload\":\"Naloži\",\"paint-by-default/@settings-select-costume-library\":\"Knjižnica\",\"paint-by-default/@settings-select-costume-paint\":\"Nariši\",\"paint-by-default/@settings-select-costume-surprise\":\"Presenečenje\",\"paint-by-default/@settings-select-costume-upload\":\"Naloži\",\"paint-by-default/@settings-select-sound-library\":\"Knjižnica\",\"paint-by-default/@settings-select-sound-record\":\"Snemaj\",\"paint-by-default/@settings-select-sound-surprise\":\"Presenečenje\",\"paint-by-default/@settings-select-sound-upload\":\"Naloži\",\"paint-by-default/@settings-select-sprite-library\":\"Knjižnica\",\"paint-by-default/@settings-select-sprite-paint\":\"Nariši\",\"paint-by-default/@settings-select-sprite-surprise\":\"Presenečenje\",\"paint-by-default/@settings-select-sprite-upload\":\"Naloži\",\"block-cherry-picking/@description\":\"Doda možnost, da iz sredine skripte potegnete en sam blok (namesto vseh blokov pod njim), medtem ko držite tipko Ctrl.\",\"block-cherry-picking/@info-flipControls\":\"Če je vključena nastavitev \\\"zamenjaj dejanje tipke\\\", vlečenje vedno premakne le en blok. Držite Ctrl, da premaknete celo zaporedje blokov.\",\"block-cherry-picking/@info-macContextDisabled\":\"Če uporabljate macOS, uporabite tipko Cmd namesto Ctrl.\",\"block-cherry-picking/@name\":\"Vleci posamezne bloke s tipko Ctrl\",\"block-cherry-picking/@settings-name-invertDrag\":\"Zamenjaj dejanje tipke\",\"hide-new-variables/@description\":\"Na novo ustvarjenih spremenljivk in seznamov ne pokaže na odru.\",\"hide-new-variables/@name\":\"Skrij nove spremenljivke\",\"editor-extra-keys/@description\":\"V spustni meni blokov \\\"je pritisnjena tipka ()?\\\" in \\\"ko je tipka () pritisnjena\\\" doda več tipk, na primer Enter, piko, vejico in druge.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"\\\"Poskusne tipke\\\" so enačaj, poševnica, podpičje in druge. Morda ne bodo delovale v vseh operacijskih sistemih in na vseh tipkovnicah.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"\\\"Tipke Shift\\\" so znaki, ki se jih običajno vnese s tipko Shift in tipko za številko, na primer #, ! in druge. Te tipke delujejo samo v bloku \\\"ko je tipka () pritisnjena\\\" in ne delujejo v vseh operacijskih sistemih in na vseh tipkovnicah.\",\"editor-extra-keys/@name\":\"Dodatne tipke\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Dodaj poskusne tipke\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Dodaj tipke Shift\",\"hide-delete-button/@description\":\"Skrij gumb za izbris (ikona smetnjaka) figur, videzov in zvokov. Še vedno jih lahko izbrišite v meniju, ki se odpre, ko kliknete figuro z desno miškino tipko.\",\"hide-delete-button/@name\":\"Skrij gumb za brisanje\",\"hide-delete-button/@settings-name-costumes\":\"Videzi in ozadja\",\"hide-delete-button/@settings-name-sounds\":\"Zvoki\",\"hide-delete-button/@settings-name-sprites\":\"Figure\",\"no-script-bumping/@description\":\"Omogoči premikanje in spreminjanje skript, ne da bi se pri tem premikale prekrivajoče se skripte.\",\"no-script-bumping/@name\":\"Ne razmakni prekrivajočih se skript\",\"disable-stage-drag-select/@description\":\"Odstrani možnost vlečenja figur na odru v urejevalniku, razen tistih, ki vlečenje omogočijo z ukazom \\\"možnost premika\\\".\",\"disable-stage-drag-select/@info-shift\":\"Vse figure lahko še vedno premikate tako, da med vlečenjem držite tipko Shift.\",\"disable-stage-drag-select/@name\":\"Onemogoči vlečenje figur v urejevalniku\",\"move-to-top-bottom/@description\":\"V meni videzov in zvokov doda možnost, ki videz ali zvok premakne na vrh ali na dno seznama. Prej del dodatka Developer Tools.\",\"move-to-top-bottom/@name\":\"Premakni videz na vrh ali na dno\",\"disable-paste-offset/@description\":\"V urejevalniku videzov kopiranih predmetov ne premakne, ampak jih prilepi na njihovem prejšnjem položaju.\",\"disable-paste-offset/@name\":\"Ne premakni prilepljenih predmetov\",\"block-duplicate/@description\":\"Hitro podvojite skripto tako, da jo potegnete, medtem ko držite tipko Alt. Držite tudi tipko Ctrl, da podvojite samo en block namesto vseh povezanih blokov.\",\"block-duplicate/@info-mac\":\"Če uporabljate macOS, uporabite tipko Option namesto Alt in Command namesto Control.\",\"block-duplicate/@name\":\"Podvoji skripto s tipko Alt\",\"swap-local-global/@description\":\"V okno za preimenovanje spremenljivke ali seznama doda več možnosti: omogoči spremembo spremenljivk \\\"Za vse figure\\\" v \\\"Samo za to figuro\\\" in obratno ter navadnih spremenljivk v spremenljivke v oblaku. Poleg tega doda novo možnost za hitro spremembo vidnosti, ko kliknete spremenljivko/seznam z desno miškino tipko.\",\"swap-local-global/@name\":\"Zamenjaj spremenljivke \\\"za vse figure\\\" in \\\"samo za to figuro\\\"\",\"editor-comment-previews/@description\":\"Pokaže vsebino komentarja, ko premaknete miško na skrčen komentar ali blok. To lahko uporabite na primer za branje komentarjev, ki na zaslonu niso vidni, prepoznavanje zanke na dnu s pomočjo komentarja in dodajanje več dolgih komentarjev v majhen prostor.\",\"editor-comment-previews/@name\":\"Predogledi komentarjev v urejevalniku\",\"editor-comment-previews/@settings-name-delay\":\"Zamik\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Sledi miški\",\"editor-comment-previews/@settings-name-hover-view\":\"Pokaži vsebino skrčenih komentarjev\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Pokaži vsebino komentarja, ko premaknem miško na blok\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Pokaži komentar definicije, ko premaknem miško na \\\"moj blok\\\"\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Brez animacije\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Zmanjšaj prosojnost\",\"editor-comment-previews/@settings-select-delay-long\":\"Dolgo\",\"editor-comment-previews/@settings-select-delay-none\":\"Brez\",\"editor-comment-previews/@settings-select-delay-short\":\"Kratko\",\"columns/@description\":\"Razdeli seznam kategorij blokov na dva stolpca in ga premakne na vrh palete blokov, kot v Scratchu 2.0.\",\"columns/@name\":\"Seznam kategorij z dvema stolpcema\",\"script-snap/@description\":\"Potegnite skripto, da se njen položaj samodejno poravna s pikami na ozadju prostora za skripte.\",\"script-snap/@name\":\"Pritrdi skripte na mrežo\",\"script-snap/@preset-name-default\":\"Navadno\",\"script-snap/@preset-name-half-block\":\"Pol bloka\",\"script-snap/@preset-name-whole-block\":\"Cel blok\",\"script-snap/@settings-name-grid\":\"Velikost mreže (px)\",\"editor-stepping/@description\":\"Doda barven okvir blokom, ki se v projektu trenutno izvajajo.\",\"editor-stepping/@name\":\"Obroba trenutno delujočih blokov\",\"editor-stepping/@settings-name-highlight-color\":\"Barva okvirja\"}");

/***/ }),

/***/ "./src/addons/addons-l10n-settings/tr.json":
/*!*************************************************!*\
  !*** ./src/addons/addons-l10n-settings/tr.json ***!
  \*************************************************/
/*! exports provided: cat-blocks/@description, cat-blocks/@info-watch, cat-blocks/@name, cat-blocks/@settings-name-watch, editor-devtools/@description, editor-devtools/@info-shortcuts, editor-devtools/@name, editor-devtools/@settings-name-enableCleanUpPlus, editor-devtools/@settings-name-enableMiddleClickFinder, editor-devtools/@settings-name-enablePasteBlocksAtMouse, editor-searchable-dropdowns/@description, editor-searchable-dropdowns/@name, data-category-tweaks-v2/@description, data-category-tweaks-v2/@name, data-category-tweaks-v2/@settings-name-moveReportersDown, data-category-tweaks-v2/@settings-name-separateListCategory, data-category-tweaks-v2/@settings-name-separateLocalVariables, block-palette-icons/@description, block-palette-icons/@name, hide-flyout/@description, hide-flyout/@info-hoverExplanation, hide-flyout/@name, hide-flyout/@settings-name-speed, hide-flyout/@settings-name-toggle, hide-flyout/@settings-select-speed-default, hide-flyout/@settings-select-speed-long, hide-flyout/@settings-select-speed-none, hide-flyout/@settings-select-speed-short, hide-flyout/@settings-select-toggle-category, hide-flyout/@settings-select-toggle-cathover, hide-flyout/@settings-select-toggle-hover, mediarecorder/@description, mediarecorder/@name, drag-drop/@description, drag-drop/@name, drag-drop/@settings-name-use-hd-upload, debugger/@description, debugger/@name, pause/@description, pause/@name, mute-project/@description, mute-project/@name, clones/@description, clones/@name, mouse-pos/@description, mouse-pos/@name, color-picker/@description, color-picker/@name, remove-sprite-confirm/@description, remove-sprite-confirm/@name, block-count/@description, block-count/@name, onion-skinning/@description, onion-skinning/@name, onion-skinning/@settings-name-afterTint, onion-skinning/@settings-name-beforeTint, onion-skinning/@settings-name-default, onion-skinning/@settings-name-layering, onion-skinning/@settings-name-mode, onion-skinning/@settings-name-next, onion-skinning/@settings-name-opacity, onion-skinning/@settings-name-opacityStep, onion-skinning/@settings-name-previous, onion-skinning/@settings-select-layering-behind, onion-skinning/@settings-select-layering-front, onion-skinning/@settings-select-mode-merge, onion-skinning/@settings-select-mode-tint, bitmap-copy/@description, bitmap-copy/@info-norightclick, bitmap-copy/@name, 2d-color-picker/@description, 2d-color-picker/@name, better-img-uploads/@description, better-img-uploads/@info-notSuitableEdit, better-img-uploads/@name, better-img-uploads/@settings-name-fitting, better-img-uploads/@settings-select-fitting-fill, better-img-uploads/@settings-select-fitting-fit, better-img-uploads/@settings-select-fitting-full, custom-block-shape/@description, custom-block-shape/@info-paddingWarning, custom-block-shape/@name, custom-block-shape/@preset-description-default2, custom-block-shape/@preset-description-default3, custom-block-shape/@preset-description-flat2, custom-block-shape/@preset-description-flat3, custom-block-shape/@preset-name-default2, custom-block-shape/@preset-name-default3, custom-block-shape/@preset-name-flat2, custom-block-shape/@preset-name-flat3, custom-block-shape/@settings-name-cornerSize, custom-block-shape/@settings-name-notchSize, custom-block-shape/@settings-name-paddingSize, editor-theme3/@description, editor-theme3/@name, editor-theme3/@preset-description-black, editor-theme3/@preset-description-dark, editor-theme3/@preset-description-original, editor-theme3/@preset-description-tweaks, editor-theme3/@preset-name-black, editor-theme3/@preset-name-dark, editor-theme3/@preset-name-original, editor-theme3/@preset-name-tweaks, editor-theme3/@settings-name-Pen-color, editor-theme3/@settings-name-control-color, editor-theme3/@settings-name-custom-color, editor-theme3/@settings-name-data-color, editor-theme3/@settings-name-data-lists-color, editor-theme3/@settings-name-events-color, editor-theme3/@settings-name-input-color, editor-theme3/@settings-name-looks-color, editor-theme3/@settings-name-motion-color, editor-theme3/@settings-name-operators-color, editor-theme3/@settings-name-sensing-color, editor-theme3/@settings-name-sounds-color, editor-theme3/@settings-name-text, editor-theme3/@settings-select-text-black, editor-theme3/@settings-select-text-colorOnBlack, editor-theme3/@settings-select-text-colorOnWhite, editor-theme3/@settings-select-text-white, editor-colored-context-menus/@description, editor-colored-context-menus/@name, editor-stage-left/@description, editor-stage-left/@name, variable-manager/@description, variable-manager/@name, gamepad/@description, gamepad/@name, gamepad/@settings-name-hide, editor-sounds/@description, editor-sounds/@name, folders/@description, folders/@info-notice-folders-are-public, folders/@info-notice-sprite-names, folders/@name, block-switching/@description, block-switching/@name, block-switching/@settings-name-border, block-switching/@settings-name-control, block-switching/@settings-name-customargs, block-switching/@settings-name-customargsmode, block-switching/@settings-name-data, block-switching/@settings-name-event, block-switching/@settings-name-extension, block-switching/@settings-name-looks, block-switching/@settings-name-motion, block-switching/@settings-name-noop, block-switching/@settings-name-operator, block-switching/@settings-name-sensing, block-switching/@settings-name-sound, block-switching/@settings-select-customargsmode-all, block-switching/@settings-select-customargsmode-defOnly, load-extensions/@description, load-extensions/@name, load-extensions/@settings-name-music, load-extensions/@settings-name-pen, load-extensions/@settings-name-text2speech, load-extensions/@settings-name-translate, custom-zoom/@description, custom-zoom/@name, custom-zoom/@settings-name-autohide, custom-zoom/@settings-name-maxZoom, custom-zoom/@settings-name-minZoom, custom-zoom/@settings-name-speed, custom-zoom/@settings-name-startZoom, custom-zoom/@settings-name-zoomSpeed, custom-zoom/@settings-select-speed-default, custom-zoom/@settings-select-speed-long, custom-zoom/@settings-select-speed-none, custom-zoom/@settings-select-speed-short, initialise-sprite-position/@description, initialise-sprite-position/@name, initialise-sprite-position/@settings-name-library, initialise-sprite-position/@settings-name-x, initialise-sprite-position/@settings-name-y, blocks2image/@description, blocks2image/@name, remove-curved-stage-border/@description, remove-curved-stage-border/@name, transparent-orphans/@description, transparent-orphans/@name, transparent-orphans/@settings-name-block, transparent-orphans/@settings-name-dragged, transparent-orphans/@settings-name-orphan, paint-by-default/@description, paint-by-default/@name, paint-by-default/@settings-name-backdrop, paint-by-default/@settings-name-costume, paint-by-default/@settings-name-sound, paint-by-default/@settings-name-sprite, paint-by-default/@settings-select-backdrop-library, paint-by-default/@settings-select-backdrop-paint, paint-by-default/@settings-select-backdrop-surprise, paint-by-default/@settings-select-backdrop-upload, paint-by-default/@settings-select-costume-library, paint-by-default/@settings-select-costume-paint, paint-by-default/@settings-select-costume-surprise, paint-by-default/@settings-select-costume-upload, paint-by-default/@settings-select-sound-library, paint-by-default/@settings-select-sound-record, paint-by-default/@settings-select-sound-surprise, paint-by-default/@settings-select-sound-upload, paint-by-default/@settings-select-sprite-library, paint-by-default/@settings-select-sprite-paint, paint-by-default/@settings-select-sprite-surprise, paint-by-default/@settings-select-sprite-upload, block-cherry-picking/@description, block-cherry-picking/@info-flipControls, block-cherry-picking/@info-macContextDisabled, block-cherry-picking/@name, block-cherry-picking/@settings-name-invertDrag, hide-new-variables/@description, hide-new-variables/@name, editor-extra-keys/@description, editor-extra-keys/@info-experimentalKeysWarn, editor-extra-keys/@info-shiftKeysWarn, editor-extra-keys/@name, editor-extra-keys/@settings-name-experimentalKeys, editor-extra-keys/@settings-name-shiftKeys, hide-delete-button/@description, hide-delete-button/@name, hide-delete-button/@settings-name-costumes, hide-delete-button/@settings-name-sounds, hide-delete-button/@settings-name-sprites, no-script-bumping/@description, no-script-bumping/@name, disable-stage-drag-select/@description, disable-stage-drag-select/@info-shift, disable-stage-drag-select/@name, move-to-top-bottom/@description, move-to-top-bottom/@name, disable-paste-offset/@description, disable-paste-offset/@name, block-duplicate/@description, block-duplicate/@info-mac, block-duplicate/@name, swap-local-global/@description, swap-local-global/@name, editor-comment-previews/@description, editor-comment-previews/@name, editor-comment-previews/@settings-name-delay, editor-comment-previews/@settings-name-follow-mouse, editor-comment-previews/@settings-name-hover-view, editor-comment-previews/@settings-name-hover-view-block, editor-comment-previews/@settings-name-hover-view-procedure, editor-comment-previews/@settings-name-reduce-animation, editor-comment-previews/@settings-name-reduce-transparency, editor-comment-previews/@settings-select-delay-long, editor-comment-previews/@settings-select-delay-none, editor-comment-previews/@settings-select-delay-short, columns/@description, columns/@name, script-snap/@description, script-snap/@name, script-snap/@preset-name-default, script-snap/@preset-name-half-block, script-snap/@preset-name-whole-block, script-snap/@settings-name-grid, editor-stepping/@description, editor-stepping/@name, editor-stepping/@settings-name-highlight-color, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"cat-blocks/@description\":\"Bir Mayıs Şaka Günü 2020'den kedi şapka bloklarını geri getirir.\",\"cat-blocks/@info-watch\":\"\\\"Fare imlecini izle\\\" seçeneği editör açıkken performansı etkileyebilir.\",\"cat-blocks/@name\":\"Kedi blokları\",\"cat-blocks/@settings-name-watch\":\"Fare imlecini izle\",\"editor-devtools/@description\":\"Arama çubuğu, menü seçenekleri, blokları kopyalayıp yapıştırın, temizleyin, tanım bloklarına gidin ve daha fazlasını yapın.\",\"editor-devtools/@info-shortcuts\":\"Bul kutusunu açmak için \\\"Ctrl+F\\\", \\\"ismine göre blok ekle\\\" açılır penceresini getirmek için \\\"Ctrl+Boşluk\\\", arama geçmişinde gezinmek için \\\"Ctrl+Sol/Sağ\\\" tuşlarına basın.\",\"editor-devtools/@name\":\"Geliştirici araçları\",\"editor-devtools/@settings-name-enableCleanUpPlus\":\"\\\"Blokları Temizle\\\"' yi geliştirir\",\"editor-devtools/@settings-name-enableMiddleClickFinder\":\"Orta fare düğmesine tıklayarak değişkenleri, özel blokları ve olayları yönlendirin\",\"editor-devtools/@settings-name-enablePasteBlocksAtMouse\":\"Blokları fare imlecine yapıştırır\",\"editor-searchable-dropdowns/@description\":\"Blok listelerini aramanıza olanak sağlar.\",\"editor-searchable-dropdowns/@name\":\"Aranabilen açılır listeler\",\"data-category-tweaks-v2/@description\":\"Verideki (\\\"Değişkenler\\\") blok kategorisi için ince ayarlar sağlar.\",\"data-category-tweaks-v2/@name\":\"Veri kategorisi ince ayarları\",\"data-category-tweaks-v2/@settings-name-moveReportersDown\":\"Veri bloklarını bölümünü değişkenler listesinin üstüne taşır\",\"data-category-tweaks-v2/@settings-name-separateListCategory\":\"Ayrı Liste Kategorisi\",\"data-category-tweaks-v2/@settings-name-separateLocalVariables\":\"Ayrı Yalnızca Kukla Değişkenleri\",\"block-palette-icons/@description\":\"Blok kategorilerini açıklayan renkli dairelerin içine simgeler ekler.\",\"block-palette-icons/@name\":\"Blok paleti kategori simgeleri\",\"hide-flyout/@description\":\"Üzerine gelinmezse blok paletini gizler. Geçici olarak yerine kilitlemek için kilit simgesine tıklayın. Alternatif olarak, \\\"kategori tıklaması\\\" modunu kullanın.\",\"hide-flyout/@info-hoverExplanation\":\"\\\"Palet alanı üzerine gelin\\\" modu yalnızca görüntüleme alanını genişletir. Blokları çöpe atılmadan o alana sürükleyebilmek istiyorsanız, diğer modlardan birini kullanın.\",\"hide-flyout/@name\":\"Otomatik gizlenen blok paleti\",\"hide-flyout/@settings-name-speed\":\"Animasyon süresi\",\"hide-flyout/@settings-name-toggle\":\"Açık...\",\"hide-flyout/@settings-select-speed-default\":\"Varsayılan\",\"hide-flyout/@settings-select-speed-long\":\"Uzun\",\"hide-flyout/@settings-select-speed-none\":\"Hiç Biri\",\"hide-flyout/@settings-select-speed-short\":\"Kısa\",\"hide-flyout/@settings-select-toggle-category\":\"Kategori tıklaması\",\"hide-flyout/@settings-select-toggle-cathover\":\"Kategori vurgusu\",\"hide-flyout/@settings-select-toggle-hover\":\"Palet alanı kaydırıcısı\",\"mediarecorder/@description\":\"Editörün menü çubuğuna projenin aşamasını kaydetmenizi sağlayan bir \\\"kaydı başlat\\\" düğmesi ekler.\",\"mediarecorder/@name\":\"Proje video kaydedicisi\",\"drag-drop/@description\":\"Dosya yöneticinizden görüntüleri ve sesleri kukla bölmesine veya kostüm/ses listesine sürüklemenizi sağlar. Ayrıca metin dosyalarını listelere veya \\\"sor ve bekle\\\" soru girişlerine sürükleyebilirsiniz.\",\"drag-drop/@name\":\"Dosya sürükle ve bırak\",\"drag-drop/@settings-name-use-hd-upload\":\"HD yüklemeleri kullan\",\"debugger/@description\":\"Düzenleyiciye yeni bir \\\"hata ayıklayıcı\\\" blok kategorisi ve bir \\\"günlük\\\" penceresi ekler. \\\"günlük\\\", \\\"uyarı\\\" ve \\\"hata\\\" blokları belirtilmiş mesajı günlük ekranına yazdıracaktır. \\\"duraksatma\\\" bloğu çalıştırıldığında projeyi durduracaktır.\",\"debugger/@name\":\"Hata Ayıklayıcısı\",\"pause/@description\":\"Yeşil bayrağın yanına bir duraklat düğmesi ekler.\",\"pause/@name\":\"Duraklat butonu\",\"mute-project/@description\":\"Projeyi susturmak/susturmayı kaldırmak için yeşil bayrağa ctrl ile tıklayın.\",\"mute-project/@name\":\"Sessiz proje oynatma modu\",\"clones/@description\":\"Düzenleyicide sahnedeki toplam klon miktarını gösteren bir sayaç ekler.\",\"clones/@name\":\"İkiz sayacı\",\"mouse-pos/@description\":\"Düzenleyicide farenizin x/y konumunu sahne bölümünün üzerinde görüntüler.\",\"mouse-pos/@name\":\"Fare Konumu\",\"color-picker/@description\":\"Renk seçicilere onaltılık kod girişleri ekler.\",\"color-picker/@name\":\"Hex rengi toplayıcısı\",\"remove-sprite-confirm/@description\":\"Bir projenin içindeki kuklayı silerken emin olup olmadığını sorar.\",\"remove-sprite-confirm/@name\":\"Kukla silme onayı\",\"block-count/@description\":\"Düzenleyicideki menü çubuğunda, o projedeki toplam blok sayısını gösterir. Önceden \\\"kukla ve komut dosyası sayımı\\\" nın bir parçasıydı.\",\"block-count/@name\":\"Blok sayısı\",\"onion-skinning/@description\":\"Bir kostümü düzenlerken önceki veya sonraki kostümlerin şeffaf katmanlarını gösterir. Yakınlaştırma düğmeleri tarafından kostüm editörünün altındaki düğmelerle kontrol edilir.\",\"onion-skinning/@name\":\"Önceki kostümün izi\",\"onion-skinning/@settings-name-afterTint\":\"Sonraki kostüm rengi\",\"onion-skinning/@settings-name-beforeTint\":\"Önceki kostüm rengi\",\"onion-skinning/@settings-name-default\":\"Varsayılan olarak etkinleştir\",\"onion-skinning/@settings-name-layering\":\"Varsayılan katmanlama\",\"onion-skinning/@settings-name-mode\":\"Varsayılan mod\",\"onion-skinning/@settings-name-next\":\"Varsayılan Sonraki kostümler\",\"onion-skinning/@settings-name-opacity\":\"Saydamlık (%)\",\"onion-skinning/@settings-name-opacityStep\":\"Saydamlık derecesi (%)\",\"onion-skinning/@settings-name-previous\":\"Varsayılan önceki kostümler\",\"onion-skinning/@settings-select-layering-behind\":\"Arka\",\"onion-skinning/@settings-select-layering-front\":\"Ön\",\"onion-skinning/@settings-select-mode-merge\":\"Görüntüleri birleştir\",\"onion-skinning/@settings-select-mode-tint\":\"Renk tonu\",\"bitmap-copy/@description\":\"Kostüm düzenleyiciden bir bitmap görüntüsünü sistem panosuna kopyalamanıza izin verir, böylece başka web sitelerine veya yazılımlara yapıştırabilirsiniz.\",\"bitmap-copy/@info-norightclick\":\"\\\"Sağ tıklama → kopyala\\\" desteklenmez. Bir bitmap görüntüsü seçiliyken Ctrl + C tuşlarına basmalısınız.\",\"bitmap-copy/@name\":\"Bitmap resimleri kopyalama\",\"2d-color-picker/@description\":\"Kostüm düzenleyicideki doygunluk ve parlaklık kaydırıcılarını 2B renk seçiciyle değiştirir. Tek bir eksendeki değerleri değiştirmek için imleci sürüklerken Shift tuşunu basılı tutun.\",\"2d-color-picker/@name\":\"2D renk toplayıcı\",\"better-img-uploads/@description\":\"\\\"kostüm yükle\\\" düğmesinin üzerine kalite kaybını önlemek için yüklenen bitmap görüntülerini otomatik olarak SVG (vektör) görüntülerine dönüştüren yeni bir düğme ekler.\",\"better-img-uploads/@info-notSuitableEdit\":\"Resmi yükledikten sonra düzenlemeyi planlıyorsanız, HD yükleme düğmesini kullanmaktan kaçının.\",\"better-img-uploads/@name\":\"HD görüntü yükle\",\"better-img-uploads/@settings-name-fitting\":\"Görüntü boyutlandırma\",\"better-img-uploads/@settings-select-fitting-fill\":\"Katmanı doldurmak için ger\",\"better-img-uploads/@settings-select-fitting-fit\":\"Sahneye sığdırmak için küçült\",\"better-img-uploads/@settings-select-fitting-full\":\"Orijinal boyut\",\"custom-block-shape/@description\":\"Blokların dolgusunu, köşe yarıçapını ve çentik yüksekliğini ayarlayın.\",\"custom-block-shape/@info-paddingWarning\":\"Dolgu boyutunun küçültülmesi yalnızca sizin tarafınızdan görülebilir, bu nedenle projeleriniz diğer kullanıcılar tarafından görüntülendiğinde komut dosyalarınız çakışabilir.\",\"custom-block-shape/@name\":\"Özelleştirilebilir blok şekli\",\"custom-block-shape/@preset-description-default2\":\"Scratch 2.0 bloklarına benzeyen bir görünüm\",\"custom-block-shape/@preset-description-default3\":\"Scratch 3.0 bloklarının normal görünümü\",\"custom-block-shape/@preset-description-flat2\":\"Çentikleri ve köşeleri kaldırılmış Scratch 2.0 blokları\",\"custom-block-shape/@preset-description-flat3\":\"Çentikleri ve köşeleri kaldırılmış Scratch 3.0 blokları\",\"custom-block-shape/@preset-name-default2\":\"2.0 Blokları\",\"custom-block-shape/@preset-name-default3\":\"3.0 Bloklar\",\"custom-block-shape/@preset-name-flat2\":\"2.0 Düz\",\"custom-block-shape/@preset-name-flat3\":\"3.0 Düz\",\"custom-block-shape/@settings-name-cornerSize\":\"Köşe boyutu (%0-300)\",\"custom-block-shape/@settings-name-notchSize\":\"Çentik yüksekliği (%0-150)\",\"custom-block-shape/@settings-name-paddingSize\":\"Dolgu boyutu (%50-200)\",\"editor-theme3/@description\":\"Düzenleyicideki her kategori için blok renklerini düzenleyin.\",\"editor-theme3/@name\":\"Özelleştirilebilir blok renkleri\",\"editor-theme3/@preset-description-black\":\"Blok arka planlarını siyah yapar\",\"editor-theme3/@preset-description-dark\":\"Varsayılan renklerin koyu versiyonları\",\"editor-theme3/@preset-description-original\":\"Scratch 2.0'den orijinal blok renkleri\",\"editor-theme3/@preset-description-tweaks\":\"2.0'dan ilham alan renklerle Olaylar, Kontrol ve Özel bloklar\",\"editor-theme3/@preset-name-black\":\"Siyah\",\"editor-theme3/@preset-name-dark\":\"Karanlık\",\"editor-theme3/@preset-name-original\":\"2.0 Renkler\",\"editor-theme3/@preset-name-tweaks\":\"3.0 Araçları\",\"editor-theme3/@settings-name-Pen-color\":\"eklentiler\",\"editor-theme3/@settings-name-control-color\":\"kontrol\",\"editor-theme3/@settings-name-custom-color\":\"özel\",\"editor-theme3/@settings-name-data-color\":\"değişkenler\",\"editor-theme3/@settings-name-data-lists-color\":\"listeler\",\"editor-theme3/@settings-name-events-color\":\"olaylar\",\"editor-theme3/@settings-name-input-color\":\"Blok girişleri\",\"editor-theme3/@settings-name-looks-color\":\"görünüm\",\"editor-theme3/@settings-name-motion-color\":\"hareket\",\"editor-theme3/@settings-name-operators-color\":\"operatörler\",\"editor-theme3/@settings-name-sensing-color\":\"algılama\",\"editor-theme3/@settings-name-sounds-color\":\"sesler\",\"editor-theme3/@settings-name-text\":\"Yazı rengi\",\"editor-theme3/@settings-select-text-black\":\"Siyah\",\"editor-theme3/@settings-select-text-colorOnBlack\":\"Siyah arka plan üzerinde renkli\",\"editor-theme3/@settings-select-text-colorOnWhite\":\"Beyaz arka plan üzerinde renkli\",\"editor-theme3/@settings-select-text-white\":\"Beyaz\",\"editor-colored-context-menus/@description\":\"Bloklara sağ tıklayınca açılan menüyü renklendirir.\",\"editor-colored-context-menus/@name\":\"Renkli bağlam menüleri\",\"editor-stage-left/@description\":\"Sahneyi editörün sol tarafına taşır.\",\"editor-stage-left/@name\":\"Sahne ekranın solunda\",\"variable-manager/@description\":\"Editörde \\\"sesler\\\" sekmesinin yanına değişken ve listelerinizi kolaylıkla güncelleyebileceğiniz bir sekme ekler.\",\"variable-manager/@name\":\"Değişken Yöneticisi\",\"gamepad/@description\":\"Bir USB veya Bluetooth denetleyici/oyun kumandası kullanarak projelerle etkileşim kurun.\",\"gamepad/@name\":\"Oyun kumandası desteği\",\"gamepad/@settings-name-hide\":\"Hiçbir kontrolcü algılanmadığında ayarları gizle düğmesi\",\"editor-sounds/@description\":\"Blokları bağladığınızda veya sildiğinizde ses efektleri çalar.\",\"editor-sounds/@name\":\"Editör ses efektleri\",\"folders/@description\":\"Kukla bölmesine klasörlerin yanı sıra, kostüm ve ses listeleri ekler. Bir klasör oluşturmak için herhangi bir kuklaya sağ tıklayın ve \\\"klasör oluştur\\\" seçeneğini tıklayın. Açmak veya kapatmak için bir klasöre tıklayın. Bir kuklayı hangi klasörlere taşıyabileceğinizi görmek için sağ tıklayın veya alternatif olarak açık bir klasöre sürükleyip bırakın.\",\"folders/@info-notice-folders-are-public\":\"Bu özelliği etkinleştiren kullanıcılar, projenizdeki klasörleri görebilir. Diğer herkes kuklaların listelerini normal olarak görecek (klasör olmayacak).\",\"folders/@info-notice-sprite-names\":\"Bu özellik kuklalarınızın isimlerinin başına \\\"[klasörAdı] //\\\" ekleyerek çalışır.\",\"folders/@name\":\"Kukla klasörleri\",\"block-switching/@description\":\"İlgili bloğa geçmek için bir bloğa sağ tıklayın.\",\"block-switching/@name\":\"Blok Anahtarlama\",\"block-switching/@settings-name-border\":\"sınır ekle\",\"block-switching/@settings-name-control\":\"Kontrol blokları\",\"block-switching/@settings-name-customargs\":\"Özel blok argümanları\",\"block-switching/@settings-name-customargsmode\":\"Görüntülenecek tanım bloğu argümanları\",\"block-switching/@settings-name-data\":\"Veri blokları\",\"block-switching/@settings-name-event\":\"Olay Blokları\",\"block-switching/@settings-name-extension\":\"Eklenti blokları\",\"block-switching/@settings-name-looks\":\"Görünüm blokları\",\"block-switching/@settings-name-motion\":\"Hareket blokları\",\"block-switching/@settings-name-noop\":\"Kendine bloğu değiştirme seçeneğini göster\",\"block-switching/@settings-name-operator\":\"Operatör blokları\",\"block-switching/@settings-name-sensing\":\"Algılama Blokları\",\"block-switching/@settings-name-sound\":\"Ses blokları\",\"block-switching/@settings-select-customargsmode-all\":\"Kukla' daki tüm özel blokların argümanları\",\"block-switching/@settings-select-customargsmode-defOnly\":\"Kendi özel bloğundaki argümanlar\",\"load-extensions/@description\":\"Düzenleyicideki blok kategorisi menüsünde müzik, kalem ve diğer uzantıları otomatik olarak gösterir.\",\"load-extensions/@name\":\"Eklentileri otomatik olarak ekle\",\"load-extensions/@settings-name-music\":\"Müzik\",\"load-extensions/@settings-name-pen\":\"Kalem\",\"load-extensions/@settings-name-text2speech\":\"Metinden Sese\",\"load-extensions/@settings-name-translate\":\"Çeviri\",\"custom-zoom/@description\":\"Kod bölmesindeki yakınlaştırma ayarlarını özelleştirin.\",\"custom-zoom/@name\":\"Özelleştirilebilir kod büyütmesi\",\"custom-zoom/@settings-name-autohide\":\"Büyütme Kontrollerini Otomatik Gizle\",\"custom-zoom/@settings-name-maxZoom\":\"Maksimum Yakınlaştırma (%50-%500)\",\"custom-zoom/@settings-name-minZoom\":\"Minimum  Yakınlaştırma (%1-%100)\",\"custom-zoom/@settings-name-speed\":\"Animasyon süresini Otomatik Gizle\",\"custom-zoom/@settings-name-startZoom\":\"Başlangıç Büyüklüğü (%50-500)\",\"custom-zoom/@settings-name-zoomSpeed\":\"Büyütme Hızı (%50-200)\",\"custom-zoom/@settings-select-speed-default\":\"Varsayılan\",\"custom-zoom/@settings-select-speed-long\":\"Uzun\",\"custom-zoom/@settings-select-speed-none\":\"Yok\",\"custom-zoom/@settings-select-speed-short\":\"Kısa\",\"initialise-sprite-position/@description\":\"Yeni kuklanın varsayılan x/y konumunu değiştirin.\",\"initialise-sprite-position/@name\":\"Düzenlenebilir Yeni Eklenen Kukla Konumunu\",\"initialise-sprite-position/@settings-name-library\":\"Kütüphane kuklalarının yerlerini rastgele belirle\",\"initialise-sprite-position/@settings-name-x\":\"X konumu\",\"initialise-sprite-position/@settings-name-y\":\"Y konumu\",\"blocks2image/@description\":\"Blokları SVG/PNG görüntüleri olarak dışa aktarmak için kod alanına sağ tıklayın.\",\"blocks2image/@name\":\"Blokları resim olarak kaydedin\",\"remove-curved-stage-border/@description\":\"Sahnenin etrafındaki kavisli kenarlığı kaldırır, böylelikle köşeleri görmenize izin verir.\",\"remove-curved-stage-border/@name\":\"Bozuk sahne sınırını siler\",\"transparent-orphans/@description\":\"Artık bloklar (üstte şapka bloğu olmayanlar) ve sürüklenen bloklar için ayrı seçeneklerle düzenleyicide blokların şeffaflığını ayarlayın.\",\"transparent-orphans/@name\":\"Blok saydamlığı\",\"transparent-orphans/@settings-name-block\":\"Blok saydamlığı (%)\",\"transparent-orphans/@settings-name-dragged\":\"Sürüklenirkenki saydamlık (%)\",\"transparent-orphans/@settings-name-orphan\":\"Fazlalıkken ki saydamlık (%)\",\"paint-by-default/@description\":\"Kitaplığı varsayılan olarak açan \\\"Bir Kukla/Kostüm/Arka Plan/Ses Seç\\\" düğmelerinin varsayılan eylemini değiştirir.\",\"paint-by-default/@name\":\"Varsayılan olarak boya kostümü\",\"paint-by-default/@settings-name-backdrop\":\"Arka plan ekle\",\"paint-by-default/@settings-name-costume\":\"Kostüm ekle\",\"paint-by-default/@settings-name-sound\":\"Ses ekle\",\"paint-by-default/@settings-name-sprite\":\"Kukla ekle\",\"paint-by-default/@settings-select-backdrop-library\":\"Kitaplık\",\"paint-by-default/@settings-select-backdrop-paint\":\"Boya\",\"paint-by-default/@settings-select-backdrop-surprise\":\"Sürpriz\",\"paint-by-default/@settings-select-backdrop-upload\":\"Yükle\",\"paint-by-default/@settings-select-costume-library\":\"Kitaplık\",\"paint-by-default/@settings-select-costume-paint\":\"Boya\",\"paint-by-default/@settings-select-costume-surprise\":\"Sürpriz\",\"paint-by-default/@settings-select-costume-upload\":\"Yükle\",\"paint-by-default/@settings-select-sound-library\":\"Kitaplık\",\"paint-by-default/@settings-select-sound-record\":\"Ses kaydet\",\"paint-by-default/@settings-select-sound-surprise\":\"Sürpriz\",\"paint-by-default/@settings-select-sound-upload\":\"Yükle\",\"paint-by-default/@settings-select-sprite-library\":\"Kitaplık\",\"paint-by-default/@settings-select-sprite-paint\":\"Boya\",\"paint-by-default/@settings-select-sprite-surprise\":\"Sürpriz\",\"paint-by-default/@settings-select-sprite-upload\":\"Yükle\",\"block-cherry-picking/@description\":\"Ctrl tuşunu basılı tutarken tek bir bloğu bir komut dosyasının ortasından (aşağıya eklenen tüm yığın yerine) sürükleme yeteneği ekler.\",\"block-cherry-picking/@info-flipControls\":\"\\\"Kontrolleri çevir\\\" etkinleştirilirse, blokları tek tek almak varsayılan davranış olacaktır. Yığının tamamını sürüklemek için Ctrl tuşunu basılı tutun.\",\"block-cherry-picking/@info-macContextDisabled\":\"macOS'ta Ctrl tuşu yerine Cmd tuşunu kullanın.\",\"block-cherry-picking/@name\":\"Ctrl tuşu ile tek blok alın\",\"block-cherry-picking/@settings-name-invertDrag\":\"Çevirme kontrolleri\",\"hide-new-variables/@description\":\"Yeni oluşturulan değişkenler veya listeler için otomatik olarak monitörler oluşturmayın.\",\"hide-new-variables/@name\":\"Yeni değişkenleri gizle\",\"editor-extra-keys/@description\":\"\\\"() tuşuna basıldı mı?\\\" bloğu için daha fazla tuş ekler ve \\\"() tuşuna basıldığında\\\" bloğundaki açılır menüde enter, nokta, virgül ve daha fazla seçeneği engeller.\",\"editor-extra-keys/@info-experimentalKeysWarn\":\"\\\"Deneysel anahtarlar\\\" eşittir, eğik çizgi, noktalı virgül ve daha fazlasını içerir. Tüm işletim sistemlerinde veya klavye düzenlerinde çalışmayabilir.\",\"editor-extra-keys/@info-shiftKeysWarn\":\"\\\"Shift tuşları\\\", genellikle Shift tuşu, hashtag, ünlem işareti ve daha fazlası gibi klavyede bir sayı tuşuna basılması gerektiren kombinasyonları içerir. Bu tuşlar yalnızca \\\"() tuşuna basıldığında\\\" bloğunda çalışır ve tüm işletim sistemlerinde veya klavye düzenlerinde çalışmayabilir.\",\"editor-extra-keys/@name\":\"Ekstra tuş desteği\",\"editor-extra-keys/@settings-name-experimentalKeys\":\"Deneysel tuşları aktif hale getirir\",\"editor-extra-keys/@settings-name-shiftKeys\":\"Shift tuşunu etkinleştir\",\"hide-delete-button/@description\":\"Kuklalardan, kostümlerden ve seslerden silme düğmesini (çöp kutusu simgesi) gizler. Sağ tıklama bağlam menüsü kullanılarak yine de silinebilirler.\",\"hide-delete-button/@name\":\"Kaldır butonunu gizle\",\"hide-delete-button/@settings-name-costumes\":\"Kostümler ve arkaplanlar\",\"hide-delete-button/@settings-name-sounds\":\"Sesler\",\"hide-delete-button/@settings-name-sprites\":\"Kuklalar\",\"no-script-bumping/@description\":\"Üst üste binen komut dosyalarının hareket etmesine neden olmadan komut dosyalarının taşınmasına ve değiştirilmesine izin verir.\",\"no-script-bumping/@name\":\"Çakışan komut dosyalarını otomatik olarak aralamayın\",\"disable-stage-drag-select/@description\":\"Açıkça sürüklenebilir olarak ayarlanmış olanlar dışında, düzenleyicide sahnedeki kuklaları sürükleme özelliğini kaldırır.\",\"disable-stage-drag-select/@info-shift\":\"Bir kuklayı, sürüklenebilir olarak ayarlanmamış olsa bile normal şekilde taşımak için sürüklerken Shift tuşunu basılı tutun.\",\"disable-stage-drag-select/@name\":\"Düzenleyicide sürüklenemeyen kuklalar\",\"move-to-top-bottom/@description\":\"Bir kostümü veya sesi listenin üstüne veya altına taşımak için sağ tıklama bağlam menüsü öğesi ekler. Önceden geliştirici araçlarının bir parçasıydı.\",\"move-to-top-bottom/@name\":\"Kostümü yukarı veya aşağı taşı\",\"disable-paste-offset/@description\":\"Kopyalanan öğeleri kostüm düzenleyicide hafifçe kaydırmak yerine orijinal konumlarına yapıştırın.\",\"disable-paste-offset/@name\":\"Yapıştırılan öğeleri kaydırma\",\"block-duplicate/@description\":\"Alt tuşuna basılı iken bir bloğu sürükleyerek hızlıca çoğaltın. Bir bloğun altındaki tüm bloklar yerine yalnızca tek bir bloğu çoğaltmak için Ctrl tuşunu basılı tutun.\",\"block-duplicate/@info-mac\":\"macOS' da Alt tuşu yerine Option tuşunu ve Kontrol tuşu yerine Komut tuşunu kullanın.\",\"block-duplicate/@name\":\"Alt tuşu ile kodu çoğaltın\",\"swap-local-global/@description\":\"Mevcut bir değişkeni veya listeyi yeniden adlandırırken daha fazla seçenek ekler: \\\"Tüm kuklalar için\\\" ve \\\"Yalnızca bu kukla için\\\" arasında değişiklik yapılmasına ve değişkenlerin bulutta depolanıp saklanmayacağına izin verir. Ayrıca, kapsamını hızlı bir şekilde değiştirmek için bir değişkene/listeye sağ tıklandığında yeni bir seçenek ekler.\",\"swap-local-global/@name\":\"Değişkenleri \\\"Tüm kuklalar için\\\" ve \\\"Yalnızca bu kukla için\\\" arasında değiştirin\",\"editor-comment-previews/@description\":\"Daraltılmış yorumların veya blokların üzerine gelerek yorumların içeriğini ön izlemenize olanak tanır. Bunu ekranın dışındaki yorumları görüntülemek, ön izleme ile alttan bir döngü bloğunu belirlemek, birçok uzun yorumu küçük bir alana sığdırmak ve daha fazlası için kullanabilirsiniz.\",\"editor-comment-previews/@name\":\"Düzenleyici yorum ön izlemeleri\",\"editor-comment-previews/@settings-name-delay\":\"gecikme süresi\",\"editor-comment-previews/@settings-name-follow-mouse\":\"Fareyi takip et\",\"editor-comment-previews/@settings-name-hover-view\":\"Sıkıştırılmış yorumları görmek için üzerine gelin\",\"editor-comment-previews/@settings-name-hover-view-block\":\"Ekli yorumları görmek için blokların üzerine gelin\",\"editor-comment-previews/@settings-name-hover-view-procedure\":\"Açıklama yorumlarını görmek için özel blokların üzerine gelin\",\"editor-comment-previews/@settings-name-reduce-animation\":\"Animasyonu azalt\",\"editor-comment-previews/@settings-name-reduce-transparency\":\"Şeffaflığı azaltın\",\"editor-comment-previews/@settings-select-delay-long\":\"Uzun\",\"editor-comment-previews/@settings-select-delay-none\":\"Yok\",\"editor-comment-previews/@settings-select-delay-short\":\"Kısa\",\"columns/@description\":\"Blok kategorisi menüsünü iki sütuna böler ve Scratch 2.0' daki gibi blok paletinin en üstüne taşır.\",\"columns/@name\":\"İki sütunlu kategori menüsü\",\"script-snap/@description\":\"Konumunu kod alanındaki noktalara otomatik olarak hizalamak için bir komut dosyasını sürükleyin.\",\"script-snap/@name\":\"Blokları ızgaraya yapıştır\",\"script-snap/@preset-name-default\":\"Varsayılan\",\"script-snap/@preset-name-half-block\":\"Yarım-blok\",\"script-snap/@preset-name-whole-block\":\"Tam-blok\",\"script-snap/@settings-name-grid\":\"Izgara büyüklüğü (piksel)\",\"editor-stepping/@description\":\"Projede çalışmakta olan bloklara renkli bir vurgu ekler.\",\"editor-stepping/@name\":\"Çalışan blok sınırı\",\"editor-stepping/@settings-name-highlight-color\":\"Vurgu rengi\"}");

/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;

if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}

/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/addons/generated/l10n-settings-entries.js":
/*!*******************************************************!*\
  !*** ./src/addons/generated/l10n-settings-entries.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* generated by pull.js */
/* harmony default export */ __webpack_exports__["default"] = ({
  "de": () => __webpack_require__(/*! ../addons-l10n-settings/de.json */ "./src/addons/addons-l10n-settings/de.json"),
  "es": () => __webpack_require__(/*! ../addons-l10n-settings/es.json */ "./src/addons/addons-l10n-settings/es.json"),
  "fr": () => __webpack_require__(/*! ../addons-l10n-settings/fr.json */ "./src/addons/addons-l10n-settings/fr.json"),
  "it": () => __webpack_require__(/*! ../addons-l10n-settings/it.json */ "./src/addons/addons-l10n-settings/it.json"),
  "ja": () => __webpack_require__(/*! ../addons-l10n-settings/ja.json */ "./src/addons/addons-l10n-settings/ja.json"),
  "ko": () => __webpack_require__(/*! ../addons-l10n-settings/ko.json */ "./src/addons/addons-l10n-settings/ko.json"),
  "pl": () => __webpack_require__(/*! ../addons-l10n-settings/pl.json */ "./src/addons/addons-l10n-settings/pl.json"),
  "pt": () => __webpack_require__(/*! ../addons-l10n-settings/pt.json */ "./src/addons/addons-l10n-settings/pt.json"),
  "ro": () => __webpack_require__(/*! ../addons-l10n-settings/ro.json */ "./src/addons/addons-l10n-settings/ro.json"),
  "ru": () => __webpack_require__(/*! ../addons-l10n-settings/ru.json */ "./src/addons/addons-l10n-settings/ru.json"),
  "sl": () => __webpack_require__(/*! ../addons-l10n-settings/sl.json */ "./src/addons/addons-l10n-settings/sl.json"),
  "tr": () => __webpack_require__(/*! ../addons-l10n-settings/tr.json */ "./src/addons/addons-l10n-settings/tr.json")
});

/***/ }),

/***/ "./src/addons/polyfill.js":
/*!********************************!*\
  !*** ./src/addons/polyfill.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable no-extend-native */
if (!Blob.prototype.text) {
  Blob.prototype.text = function () {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();

      fr.onload = () => resolve(fr.result);

      fr.onerror = () => reject(new Error('Cannot read blob as text'));

      fr.readAsText(this);
    });
  };
}

if (!Array.prototype.flat) {
  Array.prototype.flat = function (depth = 1) {
    const result = [];

    for (const i of this) {
      if (Array.isArray(i)) {
        if (depth < 1) {
          result.push(i);
        } else {
          for (const j of i.flat(depth - 1)) {
            result.push(j);
          }
        }
      } else {
        result.push(i);
      }
    }

    return result;
  };
}

if (typeof queueMicrotask !== 'function') {
  window.queueMicrotask = callback => {
    Promise.resolve().then(callback);
  };
}

/***/ }),

/***/ "./src/addons/settings/brush.svg":
/*!***************************************!*\
  !*** ./src/addons/settings/brush.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/969aaca3d7c0ff67b664b24c2652fb12.svg";

/***/ }),

/***/ "./src/addons/settings/check.svg":
/*!***************************************!*\
  !*** ./src/addons/settings/check.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/70f8bee49a78f131d8dc87658809a684.svg";

/***/ }),

/***/ "./src/addons/settings/clear.svg":
/*!***************************************!*\
  !*** ./src/addons/settings/clear.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/e997e36ade408c75ef4424b928e10846.svg";

/***/ }),

/***/ "./src/addons/settings/en.json":
/*!*************************************!*\
  !*** ./src/addons/settings/en.json ***!
  \*************************************/
/*! exports provided: title, credits, reset, resetAll, confirmResetAll, dirty, dirtyButton, presets, tagRecommended, tagDanger, tagNoCompiler, tagTheme, tagBeta, tagNew, groupNew, groupOthers, groupDanger, search, noResults, export, import, unsupported, addonFeedback, enableDangerous, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"title\":\"Addon Settings\",\"credits\":\"Credits:\",\"reset\":\"Reset\",\"resetAll\":\"Reset all\",\"confirmResetAll\":\"Are you sure you want to reset all addon settings to their default values?\",\"dirty\":\"Reload TurboWarp to apply settings.\",\"dirtyButton\":\"Reload now\",\"presets\":\"Presets\",\"tagRecommended\":\"Recommended\",\"tagDanger\":\"Dangerous\",\"tagNoCompiler\":\"Only works with compiler disabled\",\"tagTheme\":\"Theme\",\"tagBeta\":\"Beta\",\"tagNew\":\"New!\",\"groupNew\":\"New ({number})\",\"groupOthers\":\"Others ({number})\",\"groupDanger\":\"Dangerous ({number})\",\"search\":\"Search\",\"noResults\":\"No results.\",\"export\":\"Export settings\",\"import\":\"Import settings\",\"unsupported\":\"Some addons are not available in this browser:\",\"addonFeedback\":\"Addon Feedback\",\"enableDangerous\":\"This addon is dangerous and may intentionally DISABLE features. Most users SHOULD NOT enable this addon. Are you sure you want to enable it?\"}");

/***/ }),

/***/ "./src/addons/settings/expand.svg":
/*!****************************************!*\
  !*** ./src/addons/settings/expand.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/7c9434c4f1f44e3d198db3bc77305fff.svg";

/***/ }),

/***/ "./src/addons/settings/extension.svg":
/*!*******************************************!*\
  !*** ./src/addons/settings/extension.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/6f52bcc0310181641bac6fec51c69e13.svg";

/***/ }),

/***/ "./src/addons/settings/info.svg":
/*!**************************************!*\
  !*** ./src/addons/settings/info.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/b987c9e2c37b17bd7c97f1fa47257d7e.svg";

/***/ }),

/***/ "./src/addons/settings/search.js":
/*!***************************************!*\
  !*** ./src/addons/settings/search.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/['"()\-+,./[\]]/g, ' ').trim();

const splitToWords = text => normalize(text).split(' ').filter(i => i);

const parseTexts = texts => {
  const result = [];

  for (const {
    score,
    text
  } of texts) {
    result.push({
      score,
      words: splitToWords(text)
    });
  }

  return result;
};

class Search {
  constructor(texts) {
    this.items = texts.map(parseTexts);
  }

  search(query) {
    const terms = splitToWords(query);
    const result = [];

    const processItem = item => {
      let totalScore = 0;

      for (const term of terms) {
        let highestScoreForTerm = 0;

        for (const group of item) {
          for (const word of group.words) {
            const wordIndex = word.indexOf(term);

            if (wordIndex !== -1) {
              let multiplier;

              if (wordIndex === 0) {
                multiplier = 1.5;
              } else {
                multiplier = 1;
              }

              const itemScore = group.score * multiplier;

              if (itemScore > highestScoreForTerm) {
                highestScoreForTerm = itemScore;
              }
            }
          }
        }

        if (highestScoreForTerm === 0) {
          return;
        }

        totalScore += highestScoreForTerm;
      }

      return totalScore;
    };

    for (let i = 0; i < this.items.length; i++) {
      const score = processItem(this.items[i]);

      if (score > 0) {
        result.push({
          index: i,
          score
        });
      }
    }

    result.sort((a, b) => b.score - a.score);
    return result;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/addons/settings/search.svg":
/*!****************************************!*\
  !*** ./src/addons/settings/search.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/6fb602003b4d9e845e84f77129346396.svg";

/***/ }),

/***/ "./src/addons/settings/settings.css":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./settings.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/addons/settings/settings.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/addons/settings/settings.jsx":
/*!******************************************!*\
  !*** ./src/addons/settings/settings.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ "./src/addons/settings/search.js");
/* harmony import */ var _generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../generated/addon-manifests */ "./src/addons/generated/addon-manifests.js");
/* harmony import */ var _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/l10n-settings-entries */ "./src/addons/generated/l10n-settings-entries.js");
/* harmony import */ var _en_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en.json */ "./src/addons/settings/en.json");
var _en_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./en.json */ "./src/addons/settings/en.json", 1);
/* harmony import */ var _translations_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./translations.json */ "./src/addons/settings/translations.json");
var _translations_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./translations.json */ "./src/addons/settings/translations.json", 1);
/* harmony import */ var _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../generated/upstream-meta.json */ "./src/addons/generated/upstream-meta.json");
var _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../generated/upstream-meta.json */ "./src/addons/generated/upstream-meta.json", 1);
/* harmony import */ var _lib_detect_locale__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/detect-locale */ "./src/lib/detect-locale.js");
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _channels__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../channels */ "./src/addons/channels.js");
/* harmony import */ var _extension_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./extension.svg */ "./src/addons/settings/extension.svg");
/* harmony import */ var _extension_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_extension_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _brush_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./brush.svg */ "./src/addons/settings/brush.svg");
/* harmony import */ var _brush_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_brush_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _undo_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./undo.svg */ "./src/addons/settings/undo.svg");
/* harmony import */ var _undo_svg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_undo_svg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _expand_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./expand.svg */ "./src/addons/settings/expand.svg");
/* harmony import */ var _expand_svg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_expand_svg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _info_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./info.svg */ "./src/addons/settings/info.svg");
/* harmony import */ var _info_svg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_info_svg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./settings.css */ "./src/addons/settings/settings.css");
/* harmony import */ var _settings_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_settings_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../polyfill */ "./src/addons/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../lib/normalize.css */ "./src/lib/normalize.css");
/* harmony import */ var _lib_normalize_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_lib_normalize_css__WEBPACK_IMPORTED_MODULE_20__);
const _excluded = ["onChange", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */





















/* eslint-disable no-alert */

/* eslint-disable no-console */

/* eslint-disable react/no-multi-comp */

/* eslint-disable react/jsx-no-bind */

const locale = Object(_lib_detect_locale__WEBPACK_IMPORTED_MODULE_9__["detectLocale"])(Object.keys(_generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"]));
document.documentElement.lang = locale;
const addonTranslations = _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"][locale] ? _generated_l10n_settings_entries__WEBPACK_IMPORTED_MODULE_5__["default"][locale]() : {};
const settingsTranslations = _en_json__WEBPACK_IMPORTED_MODULE_6__;

if (locale !== 'en') {
  const messages = _translations_json__WEBPACK_IMPORTED_MODULE_7__[locale] || _translations_json__WEBPACK_IMPORTED_MODULE_7__[locale.split('-')[0]];

  if (messages) {
    Object.assign(settingsTranslations, messages);
  }
}

document.title = "".concat(settingsTranslations.title, " - TurboWarp");
const theme = Object(_lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["getInitialDarkMode"])() ? 'dark' : 'light';
document.body.setAttribute('theme', theme);

let _throttleTimeout;

const postThrottledSettingsChange = store => {
  if (_throttleTimeout) {
    clearTimeout(_throttleTimeout);
  }

  _throttleTimeout = setTimeout(() => {
    _channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel.postMessage({
      version: _generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit,
      store
    });
  }, 100);
};

const filterAddonsBySupport = () => {
  const supported = {};
  const unsupported = {};

  for (const [id, manifest] of Object.entries(_generated_addon_manifests__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    if (manifest.unsupported) {
      unsupported[id] = manifest;
    } else {
      supported[id] = manifest;
    }
  }

  return {
    supported,
    unsupported
  };
};

const {
  supported: supportedAddons,
  unsupported: unsupportedAddons
} = filterAddonsBySupport();

const groupAddons = () => {
  const groups = {
    new: {
      label: settingsTranslations.groupNew,
      open: true,
      addons: []
    },
    others: {
      label: settingsTranslations.groupOthers,
      open: true,
      addons: []
    },
    danger: {
      label: settingsTranslations.groupDanger,
      open: false,
      addons: []
    }
  };
  const manifests = Object.values(supportedAddons);

  for (let index = 0; index < manifests.length; index++) {
    const manifest = manifests[index];

    if (manifest.tags.includes('new')) {
      groups.new.addons.push(index);
    } else if (manifest.tags.includes('danger') || manifest.noCompiler) {
      groups.danger.addons.push(index);
    } else {
      groups.others.addons.push(index);
    }
  }

  return groups;
};

const groupedAddons = groupAddons();

const CreditList = ({
  credits
}) => credits.map((author, index) => {
  const isLast = index === credits.length - 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.credit,
    key: index
  }, author.link ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: author.link,
    target: "_blank",
    rel: "noreferrer"
  }, author.name) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, author.name), isLast ? null : ', ');
});

CreditList.propTypes = {
  credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

const Switch = _ref => {
  let {
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.switch,
    state: value ? 'on' : 'off',
    role: "checkbox",
    "aria-checked": value ? 'true' : 'false',
    tabIndex: "0",
    onClick: () => onChange(!value)
  }, props));
};

Switch.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

const Select = ({
  onChange,
  value,
  values
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.select
}, values.map(potentialValue => {
  const id = potentialValue.id;
  const selected = id === value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: id,
    onClick: () => onChange(id),
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.selectOption, {
      [_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.selected]: selected
    })
  }, potentialValue.name);
}));

Select.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }))
};

const Tags = ({
  manifest
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagContainer
}, manifest.tags.includes('recommended') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagRecommended)
}, settingsTranslations.tagRecommended), manifest.tags.includes('theme') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagTheme)
}, settingsTranslations.tagTheme), manifest.tags.includes('beta') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagBeta)
}, settingsTranslations.tagBeta), manifest.tags.includes('new') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagNew)
}, settingsTranslations.tagNew), manifest.tags.includes('danger') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagDanger)
}, settingsTranslations.tagDanger), manifest.noCompiler && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tag, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.tagDanger)
}, settingsTranslations.tagNoCompiler));

Tags.propTypes = {
  manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired,
    noCompiler: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }).isRequired
};

class BufferedInput extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFlush = this.handleFlush.bind(this);
    this.state = {
      value: null
    };
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleFlush(e);
      e.target.blur();
    }
  }

  handleFlush(e) {
    if (this.state.value === null) {
      return;
    }

    if (this.props.type === 'number') {
      let value = +this.state.value;
      const min = e.target.min;
      const max = e.target.max;
      const step = e.target.step;
      if (min !== '') value = Math.max(min, value);
      if (max !== '') value = Math.min(max, value);
      if (step === '1') value = Math.round(value);
      this.props.onChange(value);
    } else {
      this.props.onChange(this.state.value);
    }

    this.setState({
      value: null
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, this.props, {
      value: this.state.value === null ? this.props.value : this.state.value,
      onBlur: this.handleFlush,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress
    }));
  }

}

BufferedInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

const Setting = ({
  addonId,
  setting,
  value
}) => {
  if (setting.if && setting.if.addonEnabled) {
    const addons = Array.isArray(setting.if.addonEnabled) ? setting.if.addonEnabled : [setting.if.addonEnabled];

    for (const addon of addons) {
      if (!_settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonEnabled(addon)) {
        return null;
      }
    }
  }

  if (setting.if && setting.if.settings) {
    for (const [settingName, expectedValue] of Object.entries(setting.if.settings)) {
      if (_settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonSetting(addonId, settingName) !== expectedValue) {
        return null;
      }
    }
  }

  const settingId = setting.id;
  const settingName = addonTranslations["".concat(addonId, "/@settings-name-").concat(settingId)] || setting.name;
  const uniqueId = "setting/".concat(addonId, "/").concat(settingId);
  const label = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: uniqueId,
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingLabel
  }, settingName);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.setting
  }, setting.type === 'boolean' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: uniqueId,
    type: "checkbox",
    checked: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, e.target.checked)
  })), setting.type === 'integer' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BufferedInput, {
    id: uniqueId,
    type: "number",
    min: setting.min,
    max: setting.max,
    step: "1",
    value: value,
    onChange: newValue => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, newValue)
  })), setting.type === 'color' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    id: uniqueId,
    type: "color",
    value: value,
    onChange: e => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, e.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetColorButton),
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, setting.default),
    title: settingsTranslations.reset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _undo_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: settingsTranslations.reset
  }))), setting.type === 'select' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    value: value,
    values: setting.potentialValues.map(({
      id,
      name
    }) => ({
      id,
      name: addonTranslations["".concat(addonId, "/@settings-select-").concat(settingId, "-").concat(id)] || name
    })),
    onChange: v => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonSetting(addonId, settingId, v),
    setting: setting
  })));
};

Setting.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    min: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    max: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    default: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
    potentialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    if: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      addonEnabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)]),
      // eslint-disable-next-line react/forbid-prop-types
      settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
    })
  }),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};

const Notice = ({
  addonId,
  notice
}) => {
  const noticeId = notice.id;
  const text = addonTranslations["".concat(addonId, "/@info-").concat(noticeId)] || notice.text;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.notice,
    type: notice.type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.noticeIcon,
    src: _info_svg__WEBPACK_IMPORTED_MODULE_17___default.a,
    alt: "",
    draggable: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, text));
};

Notice.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  notice: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  })
};

const Presets = ({
  addonId,
  presets
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.setting, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.presets)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingLabel
}, settingsTranslations.presets), presets.map(preset => {
  const presetId = preset.id;
  const name = addonTranslations["".concat(addonId, "/@preset-name-").concat(presetId)] || preset.name;
  const description = addonTranslations["".concat(addonId, "/@preset-description-").concat(presetId)] || preset.description;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: presetId,
    title: description,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.presetButton),
    onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].applyAddonPreset(addonId, presetId)
  }, name);
}));

Presets.propTypes = {
  addonId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})
  }))
};

const Addon = ({
  id,
  settings,
  manifest,
  extended
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addon, {
    [_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonDirty]: settings.dirty
  })
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonHeader
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonTitle
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonSwitch
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Switch, {
  value: settings.enabled,
  onChange: value => {
    if (!value || !manifest.tags.includes('danger') || confirm(settingsTranslations.enableDangerous)) {
      _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].setAddonEnabled(id, value);
    }
  }
})), manifest.tags.includes('theme') ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.extensionImage,
  src: _brush_svg__WEBPACK_IMPORTED_MODULE_14___default.a,
  draggable: false,
  alt: ""
}) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.extensionImage,
  src: _extension_svg__WEBPACK_IMPORTED_MODULE_13___default.a,
  draggable: false,
  alt: ""
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonTitleText
}, addonTranslations["".concat(id, "/@name")] || manifest.name), extended && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonId
}, "(".concat(id, ")"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tags, {
  manifest: manifest
}), !settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.inlineDescription
}, addonTranslations["".concat(id, "/@description")] || manifest.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonOperations
}, settings.enabled && manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetButton,
  onClick: () => _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].resetAddon(id),
  title: settingsTranslations.reset
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _undo_svg__WEBPACK_IMPORTED_MODULE_15___default.a,
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetButtonImage,
  alt: settingsTranslations.reset,
  draggable: false
})))), settings.enabled && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonDetails
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.description
}, addonTranslations["".concat(id, "/@description")] || manifest.description), manifest.credits && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.creditContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.creditTitle
}, settingsTranslations.credits), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CreditList, {
  credits: manifest.credits
})), manifest.info && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.noticeContainer
}, manifest.info.map(info => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Notice, {
  key: info.id,
  addonId: id,
  notice: info
}))), manifest.settings && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.settingContainer
}, manifest.settings.map(setting => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Setting, {
  key: setting.id,
  addonId: id,
  setting: setting,
  value: settings[setting.id]
})), manifest.presets && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Presets, {
  addonId: id,
  presets: manifest.presets
}))));

Addon.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    enabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    dirty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
  }),
  manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
    info: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    settings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })),
    presets: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string)
  }),
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

const Dirty = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyOuter
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyInner
}, settingsTranslations.dirty, props.onReloadNow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.dirtyButton),
  onClick: props.onReloadNow
}, settingsTranslations.dirtyButton)));

Dirty.propTypes = {
  onReloadNow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

const UnsupportedAddons = ({
  addons: addonList
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedText
}, settingsTranslations.unsupported), addonList.map(({
  id,
  manifest
}, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  key: id,
  className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.unsupportedAddon
}, addonTranslations["".concat(id, "/@name")] || manifest.name, index !== addonList.length - 1 && ', ')));

UnsupportedAddons.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
    })
  }))
};

const InternalAddonList = ({
  addons,
  extended
}) => addons.map(({
  id,
  manifest,
  state
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Addon, {
  key: id,
  id: id,
  settings: state,
  manifest: manifest,
  extended: extended
}));

class AddonGroup extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  render() {
    if (this.props.addons.length === 0) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroup
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroupName,
      onClick: () => {
        this.setState({
          open: !this.state.open
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addonGroupExpand,
      src: _expand_svg__WEBPACK_IMPORTED_MODULE_16___default.a,
      "data-open": this.state.open,
      alt: ""
    }), this.props.label.replace('{number}', this.props.addons.length)), this.state.open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InternalAddonList, {
      addons: this.props.addons,
      extended: this.props.extended
    }));
  }

}

AddonGroup.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  open: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  })).isRequired,
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

const addonToSearchItem = ({
  id,
  manifest
}) => {
  const texts = new Set();

  const addText = (score, text) => {
    if (text) {
      texts.add({
        score,
        text
      });
    }
  };

  addText(1, id);
  addText(1, manifest.name);
  addText(1, addonTranslations["".concat(id, "/@name")]);
  addText(0.5, manifest.description);
  addText(0.5, addonTranslations["".concat(id, "/@description")]);

  if (manifest.settings) {
    for (const setting of manifest.settings) {
      addText(0.25, setting.name);
      addText(0.25, addonTranslations["".concat(id, "/@settings-name-").concat(setting.id)]);
    }
  }

  if (manifest.presets) {
    for (const preset of manifest.presets) {
      addText(0.1, preset.name);
      addText(0.1, addonTranslations["".concat(id, "/@preset-name-").concat(preset.id)]);
      addText(0.1, preset.description);
      addText(0.1, addonTranslations["".concat(id, "/@preset-description-").concat(preset.id)]);
    }
  }

  for (const tag of manifest.tags) {
    const key = "tags.".concat(tag);

    if (settingsTranslations[key]) {
      addText(0.25, settingsTranslations[key]);
    }
  }

  if (manifest.info) {
    for (const info of manifest.info) {
      addText(0.25, info.text);
      addText(0.25, addonTranslations["".concat(id, "/@info-").concat(info.id)]);
    }
  }

  return texts;
};

class AddonList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.search = new _search__WEBPACK_IMPORTED_MODULE_3__["default"](this.props.addons.map(addonToSearchItem));
    this.groups = [];
  }

  render() {
    if (this.props.search) {
      const addons = this.search.search(this.props.search).slice(0, 20).map(({
        index
      }) => this.props.addons[index]);

      if (addons.length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.noResults
        }, settingsTranslations.noResults);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InternalAddonList, {
        addons: addons,
        extended: this.props.extended
      }));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, Object.entries(groupedAddons).map(([id, {
      label,
      addons,
      open
    }]) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddonGroup, {
      key: id,
      label: label,
      open: open,
      addons: addons.map(index => this.props.addons[index]),
      extended: this.props.extended
    })));
  }

}

AddonList.propTypes = {
  addons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
    state: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired,
    manifest: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({}).isRequired
  })).isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  extended: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
};

class AddonSettingsComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.handleSettingStoreChanged = this.handleSettingStoreChanged.bind(this);
    this.handleReloadNow = this.handleReloadNow.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.handleExport = this.handleExport.bind(this);
    this.handleImport = this.handleImport.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClickSearchButton = this.handleClickSearchButton.bind(this);
    this.handleClickVersion = this.handleClickVersion.bind(this);
    this.searchRef = this.searchRef.bind(this);
    this.searchBar = null;
    this.state = _objectSpread({
      loading: false,
      dirty: false,
      search: location.hash ? location.hash.substr(1) : '',
      extended: false
    }, this.readFullAddonState());

    if (_channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel) {
      _channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel.addEventListener('message', () => {
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].readLocalStorage();
        this.setState(this.readFullAddonState());
      });
    }
  }

  componentDidMount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].addEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].removeEventListener('setting-changed', this.handleSettingStoreChanged);
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }

  readFullAddonState() {
    const result = {};

    for (const [id, manifest] of Object.entries(supportedAddons)) {
      const enabled = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonEnabled(id);
      const addonState = {
        enabled: enabled,
        dirty: false
      };

      if (manifest.settings) {
        for (const setting of manifest.settings) {
          addonState[setting.id] = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].getAddonSetting(id, setting.id);
        }
      }

      result[id] = addonState;
    }

    return result;
  }

  handleSettingStoreChanged(e) {
    const {
      addonId,
      settingId,
      value
    } = e.detail; // If channels are unavailable, every change requires reload.

    const reloadRequired = e.detail.reloadRequired || !_channels__WEBPACK_IMPORTED_MODULE_12__["default"].changeChannel;
    this.setState(state => {
      const newState = {
        [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
          [settingId]: value,
          dirty: true
        })
      };

      if (reloadRequired) {
        newState.dirty = true;
      }

      return newState;
    });

    if (!reloadRequired) {
      postThrottledSettingsChange(_settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].store);
    }
  }

  handleReloadNow() {
    // Value posted does not matter
    _channels__WEBPACK_IMPORTED_MODULE_12__["default"].reloadChannel.postMessage(0);
    this.setState({
      dirty: false
    });

    for (const addonId of Object.keys(supportedAddons)) {
      if (this.state[addonId].dirty) {
        this.setState(state => ({
          [addonId]: _objectSpread(_objectSpread({}, state[addonId]), {}, {
            dirty: false
          })
        }));
      }
    }
  }

  handleResetAll() {
    if (confirm(settingsTranslations.confirmResetAll)) {
      _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].resetAllAddons();
      this.setState({
        search: ''
      });
    }
  }

  handleExport() {
    const exportedData = _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].export({
      theme
    });
    this.props.onExportSettings(exportedData);
  }

  handleImport() {
    const fileSelector = document.createElement('input');
    fileSelector.type = 'file';
    fileSelector.accept = '.json';
    document.body.appendChild(fileSelector);
    fileSelector.click();
    document.body.removeChild(fileSelector);
    fileSelector.addEventListener('change', async () => {
      const file = fileSelector.files[0];

      if (!file) {
        return;
      }

      try {
        const text = await file.text();
        const data = JSON.parse(text);
        _settings_store_singleton__WEBPACK_IMPORTED_MODULE_11__["default"].import(data);
        this.setState({
          search: ''
        });
      } catch (e) {
        console.error(e);
        alert(e);
      }
    });
  }

  handleSearch(e) {
    const value = e.target.value;
    this.setState({
      search: value
    });
  }

  handleClickSearchButton() {
    this.setState({
      search: ''
    });
    this.searchBar.focus();
  }

  handleClickVersion() {
    this.setState({
      extended: !this.state.extended
    });
  }

  searchRef(searchBar) {
    this.searchBar = searchBar;
  }

  handleKeyDown(e) {
    const key = e.key;

    if (key.length === 1 && key !== ' ' && e.target === document.body && !(e.ctrlKey || e.metaKey || e.altKey)) {
      this.searchBar.focus();
    } // Only preventDefault() if the search bar isn't already focused so
    // that we don't break the browser's builtin ctrl+f


    if (key === 'f' && (e.ctrlKey || e.metaKey) && document.activeElement !== this.searchBar) {
      this.searchBar.focus();
      e.preventDefault();
    }
  }

  render() {
    const addonState = Object.entries(supportedAddons).map(([id, manifest]) => ({
      id,
      manifest,
      state: this.state[id]
    }));
    const unsupported = Object.entries(unsupportedAddons).map(([id, manifest]) => ({
      id,
      manifest
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.header
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchContainer
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchInput,
      value: this.state.search,
      onChange: this.handleSearch,
      placeholder: settingsTranslations.search,
      "aria-label": settingsTranslations.search,
      ref: this.searchRef,
      spellCheck: "false",
      autoFocus: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.searchButton,
      onClick: this.handleClickSearchButton
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://scratch.mit.edu/users/World_Languages/#comments",
      target: "_blank",
      rel: "noreferrer",
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.feedbackButtonOuter
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.feedbackButtonInner
    }, settingsTranslations.addonFeedback))), this.state.dirty && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dirty, {
      onReloadNow: _channels__WEBPACK_IMPORTED_MODULE_12__["default"].reloadChannel ? this.handleReloadNow : null
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.addons
    }, !this.state.loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.section
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AddonList, {
      addons: addonState,
      search: this.state.search,
      extended: this.state.extended
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.footerButtons
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.resetAllButton),
      onClick: this.handleResetAll
    }, settingsTranslations.resetAll), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.exportButton),
      onClick: this.handleExport
    }, settingsTranslations.export), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.button, _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.importButton),
      onClick: this.handleImport
    }, settingsTranslations.import)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.footer
    }, unsupported.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UnsupportedAddons, {
      addons: unsupported
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: _settings_css__WEBPACK_IMPORTED_MODULE_18___default.a.version,
      onClick: this.handleClickVersion
    }, this.state.extended ? // Don't bother translating, pretty much no one will ever see this.
    // eslint-disable-next-line max-len
    "You have enabled debug mode. (Addons version ".concat(_generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit, ")") : "Addons version ".concat(_generated_upstream_meta_json__WEBPACK_IMPORTED_MODULE_8__.commit))))));
  }

}

AddonSettingsComponent.propTypes = {
  onExportSettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (AddonSettingsComponent);

/***/ }),

/***/ "./src/addons/settings/translations.json":
/*!***********************************************!*\
  !*** ./src/addons/settings/translations.json ***!
  \***********************************************/
/*! exports provided: ar, cs, de, es, fi, fr, ga, he, it, ja, ja-hira, ko, nb, nl, pl, pt, ro, ru, sl, sv, th, tr, uk, vi, zh-cn, zh-tw, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"ar\":{\"credits\":\"الاعتمادات:\",\"reset\":\"إعادة تعيين\",\"resetAll\":\"إعادة ضبط الجميع\"},\"cs\":{\"addonFeedback\":\"Zpětná vazba doplňků\",\"confirmResetAll\":\"Jste si jisti, že chcete obnovit všechna nastavení doplňků na jejich výchozí hodnoty?\",\"credits\":\"Příspěvky:\",\"dirty\":\"Obnovte TurboWarp pro aplikování nastavení.\",\"dirtyButton\":\"Obnovte teď\",\"export\":\"Exportovat nastavení\",\"import\":\"Importovat nastavení\",\"noResults\":\"Žádné výsledky.\",\"presets\":\"Šablony\",\"reset\":\"Obnovit\",\"resetAll\":\"Obnovit vše\",\"search\":\"Hledat\",\"tagBeta\":\"Beta\",\"tagNew\":\"Nové!\",\"tagRecommended\":\"Doporučen\",\"tagTheme\":\"Téma\",\"title\":\"Nastavení doplňků\",\"unsupported\":\"Některé doplňky nejsou dostupné v tomto prohlížeči:\"},\"de\":{\"addonFeedback\":\"Feedback für Addons\",\"confirmResetAll\":\"Bist du sicher, dass du alle Addoneinstellungen auf ihre Standardwerte zurücksetzen willst?\",\"credits\":\"Danksagungen:\",\"dirty\":\"Lade TurboWarp neu, um die Einstellungen anzuwenden.\",\"dirtyButton\":\"Jetzt neu laden\",\"enableDangerous\":\"Dieses Addon ist gefährlich und könnte gezielt Funktionen DEAKTIVIEREN. Die meisten Nutzer SOLLTEN NICHT dieses Addon aktivieren. Bist du sicher, dass du es willst?\",\"export\":\"Einstellungen Exportieren\",\"groupDanger\":\"Gefährlich ({number})\",\"groupNew\":\"Neu ({number})\",\"groupOthers\":\"Andere ({number})\",\"import\":\"Einstellungen Importieren\",\"noResults\":\"Keine Suchergebnisse.\",\"presets\":\"Voreinstellungen\",\"reset\":\"Zurücksetzen\",\"resetAll\":\"Alle zurücksetzen\",\"search\":\"Suchen\",\"tagBeta\":\"Beta\",\"tagDanger\":\"Gefährlich\",\"tagNew\":\"Neu!\",\"tagNoCompiler\":\"Funktioniert nur mit deaktiviertem Compiler\",\"tagRecommended\":\"Empfohlen\",\"tagTheme\":\"Design\",\"title\":\"Addon-Einstellungen\",\"unsupported\":\"Manche Addons sind in diesem Browser nicht verfügbar:\"},\"es\":{\"addonFeedback\":\"Enviar comentarios sobre addons\",\"confirmResetAll\":\"¿Está seguro de que quiere reiniciar todos los addons a sus valores predeterminados?\",\"credits\":\"Créditos:\",\"dirty\":\"Recargue TurboWarp para aplicar los cambios.\",\"dirtyButton\":\"Recargar ahora\",\"export\":\"Exportar ajustes\",\"import\":\"Importar ajustes\",\"noResults\":\"Sin resultados.\",\"presets\":\"Presets\",\"reset\":\"Reiniciar\",\"resetAll\":\"Reiniciar todos\",\"search\":\"Buscar\",\"tagBeta\":\"Beta\",\"tagNew\":\"¡Nuevo!\",\"tagRecommended\":\"Recomendado\",\"tagTheme\":\"Tema\",\"title\":\"Ajustes de Addons\",\"unsupported\":\"Algunos addons no están disponibles en este navegador:\"},\"fi\":{\"dirtyButton\":\"Uppdatio sivuu nyt\",\"noResults\":\"Ei mikää trääfit\",\"reset\":\"Reseti\",\"resetAll\":\"Resset kaaiki\",\"search\":\"Etssi\",\"tagNew\":\"Uusi!\",\"tagRecommended\":\"Rekkommendiootuu\"},\"fr\":{\"addonFeedback\":\"Commentaires sur le module complémentaire\",\"confirmResetAll\":\"Êtes-vous sûr de vouloir réinitialiser tous les paramètres des addons à leurs valeurs par défaut ?\",\"credits\":\"Crédits :\",\"dirty\":\"Rechargez TurboWarp pour appliquer les paramètres.\",\"dirtyButton\":\"Recharger maintenant\",\"enableDangerous\":\"Cet addon est dangereux et va intentionnellement DÉSACTIVER certaines fonctionnalitées. La plupart des utilisateurs NE DOIVENT PAS activer cet addon. Êtes-vous sûr de vouloir l'activer ?\",\"export\":\"Exporter les paramètres\",\"import\":\"Importer les paramètres\",\"noResults\":\"Aucun résultat\",\"presets\":\"Préconfigurations\",\"reset\":\"Réinitialiser\",\"resetAll\":\"Tout réinitialiser\",\"search\":\"Rechercher\",\"tagBeta\":\"Bêta\",\"tagDanger\":\"Dangereux\",\"tagNew\":\"Nouveau !\",\"tagRecommended\":\"Recommandé\",\"tagTheme\":\"Thème\",\"title\":\"Paramètres des addons\",\"unsupported\":\"Certains addons ne sont pas disponibles sur ce navigateur \"},\"ga\":{\"title\":\"socruithe addon\"},\"he\":{\"credits\":\"נקודות זכות:\",\"reset\":\"אִתחוּל\",\"resetAll\":\"לאפס הכל\",\"tagBeta\":\"בטא\",\"tagNew\":\"חָדָשׁ!\"},\"it\":{\"addonFeedback\":\"Feedback sull'Addon\",\"confirmResetAll\":\"Sei sicuro di voler riportare tutte le impostazioni dell'addon al loro stato iniziale?\",\"credits\":\"Autore/i:\",\"dirty\":\"Ricarica TurboWarp per applicare le nuove impostazioni.\",\"dirtyButton\":\"Ricarica ora\",\"enableDangerous\":\"Questo addon è pericoloso e può intenzionalmente DISABILITARE delle funzionalità. La maggior parte degli utenti NON DOVREBBE abilitare questo addon. Sei sicuro di volerlo abilitare?\",\"export\":\"Esporta le impostazioni\",\"groupDanger\":\"Pericolosi ({number})\",\"groupNew\":\"Nuovi ({number})\",\"groupOthers\":\"Altri ({number})\",\"import\":\"Importa le impostazioni\",\"noResults\":\"Nessun risultato.\",\"presets\":\"Valori predefiniti\",\"reset\":\"Resetta\",\"resetAll\":\"Resetta tutto\",\"search\":\"Cerca\",\"tagBeta\":\"Beta\",\"tagDanger\":\"Pericoloso\",\"tagNew\":\"Nuovo!\",\"tagNoCompiler\":\"Funziona soltanto quando il compilatore è disabilitato\",\"tagRecommended\":\"Raccomandato\",\"tagTheme\":\"Tema\",\"title\":\"Impostazioni Addon\",\"unsupported\":\"Alcuni addon non sono disponibili in questo browser:\"},\"ja\":{\"addonFeedback\":\"アドオンのフィードバック\",\"confirmResetAll\":\"アドオンの設定を削除し、デフォルトに戻します。よろしいですか？\",\"credits\":\"クレジット:\",\"dirty\":\"再読み込みをしてアドオンの効果を反映する。\",\"dirtyButton\":\"すぐに再読み込みする\",\"enableDangerous\":\"このアドオンは危険で、意図的に機能を無効にする可能性があります。多くのユーザーは、このアドオンを有効にすべきではありません。本当に有効にしていいですか？\",\"export\":\"設定を保存する\",\"groupDanger\":\"危険({number})\",\"groupNew\":\"新機能({number})\",\"groupOthers\":\"その他({number})\",\"import\":\"設定を読み込む\",\"noResults\":\"検索条件に一致する結果はありません。\",\"presets\":\"プリセット\",\"reset\":\"リセット\",\"resetAll\":\"全てリセットする\",\"search\":\"検索\",\"tagBeta\":\"ベータ版\",\"tagDanger\":\"危険\",\"tagNew\":\"新機能!\",\"tagNoCompiler\":\"コンパイラを無効にした場合のみ動作\",\"tagRecommended\":\"おすすめ\",\"tagTheme\":\"テーマ\",\"title\":\"アドオン設定\",\"unsupported\":\"いくつかのアドオンがお使いのブラウザに対応していません:\"},\"ja-hira\":{\"addonFeedback\":\"アドオンのフィードバック\",\"confirmResetAll\":\"アドオンのせっていを削除(さくじょ)し、デフォルトにもどします。よろしいですか？\",\"credits\":\"クレジット:\",\"dirty\":\"再読み込み(さいよみこみ)をしてアドオンの効果(こうか)を反映(はんえい)する。\",\"dirtyButton\":\"すぐに再読み込み(さいよみこみ)する\",\"export\":\"設定(せってい)を保存(ほぞん)する\",\"import\":\"設定(せってい)をよみこむ\",\"noResults\":\"検索条件(けんさくじょうけん)に一致(いっち)する結果(けっか)はありません。\",\"presets\":\"プリセット\",\"reset\":\"リセット\",\"resetAll\":\"すべてリセットする\",\"search\":\"けんさく\",\"tagBeta\":\"ベータばん\",\"tagNew\":\"しんきのう!\",\"tagRecommended\":\"おすすめ\",\"tagTheme\":\"テーマ\",\"title\":\"アドオンせってい\",\"unsupported\":\"いくつかのアドオンがおつかいのブラウザに対応(たいおう)していません:\"},\"ko\":{\"addonFeedback\":\"애드온 피드백하기\",\"confirmResetAll\":\"정말로 애드온 설정을 기본값으로 초기화하시겠습니까?\",\"credits\":\"크레딧:\",\"dirty\":\"설정을 적용하기 위해 TurboWarp를 재시작합니다.\",\"dirtyButton\":\"재시작하기\",\"export\":\"설정 내보내기\",\"import\":\"설정 가져오기\",\"noResults\":\"결과가 없습니다.\",\"presets\":\"프리셋\",\"reset\":\"초기화하기\",\"resetAll\":\"모두 초기화하기\",\"search\":\"검색\",\"tagBeta\":\"베타\",\"tagDanger\":\"위험한\",\"tagNew\":\"새로운 기능\",\"tagRecommended\":\"추천\",\"tagTheme\":\"테마\",\"title\":\"애드온 설정\",\"unsupported\":\"일부 애드온은 다음 브라우저에서는 사용하실 수 없습니다:\"},\"nb\":{\"addonFeedback\":\"Utvidelse tilbakemelding\",\"confirmResetAll\":\"Er du sikkert at du vil tilbakestill alle utvidelser?\",\"credits\":\"Fra:\",\"dirty\":\"Oppdater siden nå til å oppdater innstillinger.\",\"dirtyButton\":\"Oppdater siden nå\",\"export\":\"Eksportinnstillinger\",\"import\":\"Importinnstillinger\",\"noResults\":\"Ingen resultater.\",\"reset\":\"Tilbakestill\",\"resetAll\":\"Tilbakestill alt\",\"search\":\"Søk\",\"tagBeta\":\"Beta\",\"tagNew\":\"Ny!\",\"tagRecommended\":\"Anbefalt\",\"tagTheme\":\"Tema\",\"title\":\"Innstillinger for utvidelser\",\"unsupported\":\"Noen utvidelser er ikke tilgjengelig på dette nettleser.\"},\"nl\":{\"addonFeedback\":\"Addon Feedback\",\"confirmResetAll\":\"Ben je zeker dat je alle addon instellingen wil resetten naar hun standaard waarden?\",\"credits\":\"Dank aan:\",\"dirty\":\"Herlaad TurboWarp om de instellingen te accepteren.\",\"dirtyButton\":\"Herlaad nu\",\"enableDangerous\":\"Deze addon is gevaarlijk en kan opzettelijk kenmerken UITSCHAKELEN. Meeste gebruiker ZOUDEN NIET deze addon inschakelen. Weet je zeker dat je het wilt inschakelen?\",\"export\":\"Exporteer instellingen\",\"groupDanger\":\"Gevaarlijk ({number})\",\"groupNew\":\"Nieuw ({number})\",\"groupOthers\":\"Anderen ({number})\",\"import\":\"Importeer instellingen\",\"noResults\":\"Geen resultaten.\",\"presets\":\"Voorinstellingen\",\"reset\":\"Reset\",\"resetAll\":\"Reset alles\",\"search\":\"Zoek\",\"tagBeta\":\"Beta\",\"tagDanger\":\"Gevaarlijk\",\"tagNew\":\"Nieuw!\",\"tagNoCompiler\":\"Werkt alleen als de compiler uitstaat\",\"tagRecommended\":\"Aanbevolen\",\"tagTheme\":\"Thema\",\"title\":\"Addons Instellingen\",\"unsupported\":\"Sommige addons zijn niet beschikbaar in deze browser.\"},\"pl\":{\"addonFeedback\":\"Opinia o dodatkach\",\"confirmResetAll\":\"Jesteś pewien, że chcesz zresetować wszystkie dodatki do ich domyślnych wartości?\",\"credits\":\"Kredyty:\",\"dirty\":\"Odśwież TurboWarp, aby zastosować ustawienia.\",\"dirtyButton\":\"Odśwież teraz\",\"export\":\"Eksportuj ustawienia\",\"import\":\"Importuj ustawienia\",\"noResults\":\"Brak wyników.\",\"presets\":\"Ustawienia wstępne\",\"reset\":\"Resetuj\",\"resetAll\":\"Resetuj wszystko\",\"search\":\"Szukaj\",\"tagBeta\":\"Beta\",\"tagNew\":\"Nowość!\",\"tagRecommended\":\"Polecane\",\"tagTheme\":\"Motyw\",\"title\":\"Ustawienia Dodatków\",\"unsupported\":\"Niektóre dodatki nie są dostępne w tej przeglądarce:\"},\"pt\":{\"addonFeedback\":\"Dar Feedback sobre Addons\",\"confirmResetAll\":\"Tem certeza que quer resetar as configurações de todos os addons aos seus valores padrão?\",\"credits\":\"Créditos:\",\"dirty\":\"Recarregue o TurboWarp para aplicar as opções.\",\"dirtyButton\":\"Recarregar agora\",\"enableDangerous\":\"Este addon é perigoso e pode intencionalmente DESATIVAR funções. A maioria dos usuários NÃO DEVEM ativar este addon. Tem certeza que quer ativá-lo?\",\"export\":\"Exportar configuração\",\"groupDanger\":\"Perigosos ({number})\",\"groupNew\":\"Novos ({number})\",\"groupOthers\":\"Outros ({number})\",\"import\":\"Importar configuração\",\"noResults\":\"Sem resultados.\",\"presets\":\"Predefinições\",\"reset\":\"Resetar\",\"resetAll\":\"Resetar tudo\",\"search\":\"Buscar\",\"tagBeta\":\"Beta\",\"tagDanger\":\"Perigo\",\"tagNew\":\"Novo!\",\"tagNoCompiler\":\"Só funciona com o compilador desligado\",\"tagRecommended\":\"Recomendado\",\"tagTheme\":\"Tema\",\"title\":\"Configurações de Addon\",\"unsupported\":\"Alguns addons não estão disponíveis neste navegador:\"},\"ro\":{\"addonFeedback\":\"Spune-ți Părerea despre Extensii\",\"confirmResetAll\":\"Ești sigur că vrei să resetezi toate setările extensiilor la valorile lor implicite?\",\"credits\":\"Credite:\",\"dirty\":\"Reîncarcă TurboWarp pentru a aplica setările.\",\"dirtyButton\":\"Reîncarcă acum\",\"export\":\"Exportă setările\",\"import\":\"Importă setările\",\"noResults\":\"Niciun rezultat.\",\"presets\":\"Presetări\",\"reset\":\"Resetează\",\"resetAll\":\"Resetează toate\",\"search\":\"Caută\",\"tagBeta\":\"Beta\",\"tagRecommended\":\"Recomandat\",\"title\":\"Setările Addon-urilor\",\"unsupported\":\"Unele extensii nu sunt disponibile în acest browser:\"},\"ru\":{\"addonFeedback\":\"Отзывы о дополнениях\",\"confirmResetAll\":\"Вы уверены, что хотите сбросить настройки всех дополнений до значений по умолчанию?\",\"credits\":\"Благодарности:\",\"dirty\":\"Перезагрузить TurboWarp, чтобы применить настройки.\",\"dirtyButton\":\"Перезагрузить сейчас\",\"enableDangerous\":\"Этот аддон опасен и может намеренно ОТКЛЮЧИТЬ функции. Большинству пользователей НЕ СЛЕДУЕТ включать этот аддон. Вы уверены, что хотите его включить?\",\"export\":\"Экспорт настроек\",\"groupDanger\":\"Опасное ({number})\",\"groupNew\":\"Новое ({number})\",\"groupOthers\":\"Прочее ({number})\",\"import\":\"Импорт настроек\",\"noResults\":\"Нет результатов.\",\"presets\":\"Предустановки\",\"reset\":\"Сбросить\",\"resetAll\":\"Сбросить всё\",\"search\":\"Поиск\",\"tagBeta\":\"Бета\",\"tagDanger\":\"Опасно\",\"tagNew\":\"Новое!\",\"tagNoCompiler\":\"Работает только при отключенном компиляторе\",\"tagRecommended\":\"Рекомендованно\",\"tagTheme\":\"Тема\",\"title\":\"Настройки дополнений\",\"unsupported\":\"Некоторые дополнения не доступны в данном браузере:\"},\"sl\":{\"addonFeedback\":\"Povratne informacije o dodatkih\",\"confirmResetAll\":\"Ste prepričani, da želite ponastaviti vse nastavitve dodatkov?\",\"credits\":\"Hvala:\",\"dirty\":\"Znova naložite TurboWarp, da uporabite spremenjene nastavitve.\",\"dirtyButton\":\"Znova naloži zdaj\",\"export\":\"Izvozi nastavitve\",\"import\":\"Uvozi nastavitve\",\"noResults\":\"Ni rezultatov.\",\"presets\":\"Prednastavitve\",\"reset\":\"Ponastavi\",\"resetAll\":\"Ponastavi vse\",\"search\":\"Iskanje\",\"tagBeta\":\"Beta\",\"tagNew\":\"Novo!\",\"tagRecommended\":\"Priporočeno\",\"tagTheme\":\"Tema\",\"title\":\"Nastavitve dodatkov\",\"unsupported\":\"Nekateri dodatki v tem brskalniku niso na voljo:\"},\"sv\":{\"addonFeedback\":\"Tilläggsrespons\",\"confirmResetAll\":\"Är du säker på att du vill återställa alla tilläggsinställningar till standardvärdena?\",\"credits\":\"kreditera:\",\"dirty\":\"Ladda om Turbowarp för att acceptera ändringarna\",\"dirtyButton\":\"Ladda om nu\",\"export\":\"Exportera inställningar\",\"import\":\"Importera inställningar\",\"noResults\":\"Inga resutat\",\"presets\":\"Förinställningar\",\"reset\":\"Starta om\",\"resetAll\":\"Starta om allt\",\"search\":\"Sök\",\"tagBeta\":\"Beta\",\"tagNew\":\"Nytt!\",\"tagRecommended\":\"Rekomenderat\",\"tagTheme\":\"Tema\",\"title\":\"Tilläggsinställningar\",\"unsupported\":\"Vissa tillägg är inte tillgängliga i den här webbläsaren:\"},\"th\":{\"addonFeedback\":\"ความคิดเห็น Addon\",\"confirmResetAll\":\"คุณแน่ใจหรือไม่ว่าต้องการรีเซ็ตการตั้งค่า Addons กลับไปเป็นการตั้งค่าเริ่มต้น\",\"credits\":\"เครดิต :\",\"dirty\":\"รีโหลด TurboWarp เพื่อนำการตั้งค่ามาใช้\",\"dirtyButton\":\"แตะเพื่อรีโหลด\",\"export\":\"Export การตั้งค่า\",\"import\":\"Import การตั้งค่า\",\"noResults\":\"ไม่พบข้อมูล\",\"presets\":\"Presets\",\"reset\":\"รีเซ็ต\",\"resetAll\":\"รีเซ็ตทั้งหมด\",\"search\":\"ค้นหา\",\"tagBeta\":\"อยู่ระหว่างการพัฒนาระบบ\",\"tagNew\":\"ใหม่\",\"tagRecommended\":\"คำแนะนำ\",\"tagTheme\":\"ธีม\",\"title\":\"การตั้งค่า Addons\",\"unsupported\":\"Addon บางอย่างยังไม่ได้รับการสนับสนุนในบราวเซอร์นี้\"},\"tr\":{\"addonFeedback\":\"Eklenti geribildirim\",\"confirmResetAll\":\"Bütün eklenti ayarlarını varsayılan değerlerine sıfırlamak istediğinizden emin misiniz?\",\"credits\":\"Krediler:\",\"dirty\":\"Ayarı uygulamak için Turbowarp'u yeniden açın.\",\"dirtyButton\":\"Şimdi yeniden yükle\",\"export\":\"Dışarıya aktarmak ayarları\",\"import\":\"İçeri aktarmak ayarları\",\"noResults\":\"Sonuçlar yok.\",\"presets\":\"Varsayılan ayarları\",\"reset\":\"Sıfırla\",\"resetAll\":\"Her şeyi sıfırla\",\"search\":\"Arama\",\"tagBeta\":\"Beta\",\"tagNew\":\"Yeni!\",\"tagRecommended\":\"Önerildi\",\"tagTheme\":\"Tema\",\"title\":\"Eklenti Ayarları\",\"unsupported\":\"Bazı eklentiler bu tarayıcıda kullanılamıyor:\"},\"uk\":{\"addonFeedback\":\"Відгук про доповнення\",\"confirmResetAll\":\"Ви впевнені, що хочете скинути усі налаштування доповненнь до їхніх значеннь за замовчуванням?\",\"credits\":\"Подяка:\",\"dirty\":\"Перезавантажте TurboWarp, щоб застосувати налаштування.\",\"dirtyButton\":\"Перезавантажити зараз\",\"export\":\"Експортувати налаштування\",\"import\":\"Імпортувати налаштування\",\"noResults\":\"Немає результатів.\",\"reset\":\"Скинути\",\"resetAll\":\"Скинути все\",\"search\":\"Пошук\",\"tagBeta\":\"У розробці\",\"tagNew\":\"Нове!\",\"tagRecommended\":\"Рекомендовано\",\"tagTheme\":\"Тема\",\"title\":\"Налаштування доповненнь\",\"unsupported\":\"Деякі доповнення не доступні у цьому браузері:\"},\"vi\":{\"addonFeedback\":\"Phản hồi\",\"confirmResetAll\":\"Bạn có chắc khi chỉnh lại tất cả các cài đặt addon về giá trị mặc định không?\",\"credits\":\"Tác giả:\",\"dirty\":\"Tải lại TurboWarp để cài đặt có hiệu lực.\",\"dirtyButton\":\"Tải lại ngay bây giờ\",\"enableDangerous\":\"Addon này nguy hiểm và có thể cố ý VÔ HIỆU HOÁ các tính năng. Hầu hết người dùng KHÔNG NÊN bật addon này. Bạn có chắc khi bật addon này chứ?\",\"export\":\"Xuất cài đặt\",\"groupDanger\":\"Nguy hiểm ({number})\",\"groupNew\":\"Mới ({number})\",\"groupOthers\":\"Còn lại ({number})\",\"import\":\"Tải lên cài đặt\",\"noResults\":\"Không có kết quả.\",\"presets\":\"Cài đặt cho trước\",\"reset\":\"Cài Đặt Lại\",\"resetAll\":\"Cài Đặt lại tất cả\",\"search\":\"Tìm kiếm\",\"tagBeta\":\"Beta\",\"tagDanger\":\"Nguy hiểm\",\"tagNew\":\"Mới!\",\"tagNoCompiler\":\"Chỉ hoạt động khi trình biên dịch tắt\",\"tagRecommended\":\"Khuyên dùng\",\"tagTheme\":\"Chủ đề\",\"title\":\"Cài Đặt Addon\",\"unsupported\":\"Một vài addons không khả dụng ở trong trình duệt này:\"},\"zh-cn\":{\"addonFeedback\":\"插件反馈\",\"confirmResetAll\":\"你确定要将所有插件设置重置为其默认值吗？\",\"credits\":\"鸣谢：\",\"dirty\":\"重新加载 TurboWarp 以生效设置。\",\"dirtyButton\":\"立即重新加载\",\"enableDangerous\":\"危险！该插件可能使其它功能被故意禁用。大多数用户不应启用此插件。您确定要启用它吗？\",\"export\":\"导出设置\",\"groupDanger\":\"危险 ({number})\",\"groupNew\":\"最近 ({number})\",\"groupOthers\":\"其它 ({number})\",\"import\":\"导入设置\",\"noResults\":\"无结果。\",\"presets\":\"预设\",\"reset\":\"重置\",\"resetAll\":\"全部重置\",\"search\":\"搜索\",\"tagBeta\":\"测试版\",\"tagDanger\":\"危险\",\"tagNew\":\"新内容！\",\"tagNoCompiler\":\"仅在编译器关闭时有效\",\"tagRecommended\":\"推荐\",\"tagTheme\":\"主题\",\"title\":\"插件设置\",\"unsupported\":\"某些插件在此浏览器中不可用：\"},\"zh-tw\":{\"addonFeedback\":\"附加元件回饋\",\"confirmResetAll\":\"你確定要重設所有附件設定？\",\"credits\":\"感謝：\",\"dirty\":\"重新載入 TurboWarp 以應用設定。\",\"dirtyButton\":\"重新載入\",\"export\":\"匯出設定\",\"groupDanger\":\"危險（{number}）\",\"groupNew\":\"全新（{number}）\",\"groupOthers\":\"其他（{number}）\",\"import\":\"匯入設定\",\"noResults\":\"沒有相符的結果。\",\"presets\":\"預設\",\"reset\":\"重設\",\"resetAll\":\"全部重設\",\"search\":\"搜尋……\",\"tagBeta\":\"測試\",\"tagDanger\":\"危險\",\"tagNew\":\"全新\",\"tagNoCompiler\":\"編譯後無效\",\"tagRecommended\":\"推薦\",\"tagTheme\":\"外觀\",\"title\":\"附件設定\",\"unsupported\":\"下列附加元件在此瀏覽器不可用：\"}}");

/***/ }),

/***/ "./src/addons/settings/undo.svg":
/*!**************************************!*\
  !*** ./src/addons/settings/undo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/1640b6d968e0a0e13bc3c309a616deaa.svg";

/***/ }),

/***/ "./src/lib/detect-locale.js":
/*!**********************************!*\
  !*** ./src/lib/detect-locale.js ***!
  \**********************************/
/*! exports provided: LANGUAGE_KEY, detectLocale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LANGUAGE_KEY", function() { return LANGUAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectLocale", function() { return detectLocale; });
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/**
 * @fileoverview
 * Utility function to detect locale from the browser setting or paramenter on the URL.
 */
 // tw: read language from localStorage

const LANGUAGE_KEY = 'tw:language';
/**
 * look for language setting in the browser. Check against supported locales.
 * If there's a parameter in the URL, override the browser setting
 * @param {Array.string} supportedLocales An array of supported locale codes.
 * @return {string} the preferred locale
 */

const detectLocale = supportedLocales => {
  // tw: read language from localStorage
  try {
    const storedLanguage = localStorage.getItem(LANGUAGE_KEY);

    if (storedLanguage && supportedLocales.includes(storedLanguage)) {
      return storedLanguage;
    }
  } catch (e) {
    /* ignore */
  }

  let locale = 'en'; // default

  let browserLocale = window.navigator.userLanguage || window.navigator.language;
  browserLocale = browserLocale.toLowerCase(); // try to set locale from browserLocale

  if (supportedLocales.includes(browserLocale)) {
    locale = browserLocale;
  } else {
    browserLocale = browserLocale.split('-')[0];

    if (supportedLocales.includes(browserLocale)) {
      locale = browserLocale;
    }
  }

  const queryParams = query_string__WEBPACK_IMPORTED_MODULE_0___default.a.parse(location.search); // Flatten potential arrays and remove falsy values

  const potentialLocales = [].concat(queryParams.locale, queryParams.lang).filter(l => l);

  if (!potentialLocales.length) {
    return locale;
  }

  const urlLocale = potentialLocales[0].toLowerCase();

  if (supportedLocales.includes(urlLocale)) {
    return urlLocale;
  }

  return locale;
};



/***/ }),

/***/ "./src/lib/download-blob.js":
/*!**********************************!*\
  !*** ./src/lib/download-blob.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((filename, blob) => {
  const downloadLink = document.createElement('a');
  document.body.appendChild(downloadLink); // Use special ms version if available to get it working on Edge.

  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return;
  }

  if ('download' in HTMLAnchorElement.prototype) {
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
    let popup = window.open('', '_blank');
    const reader = new FileReader();

    reader.onloadend = function () {
      popup.location.href = reader.result;
      popup = null;
    };

    reader.readAsDataURL(blob);
  }
});

/***/ }),

/***/ "./src/lib/normalize.css":
/*!*******************************!*\
  !*** ./src/lib/normalize.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./normalize.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/lib/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);

    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {// ignore
  }

  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;

const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }

    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }

      this.updateDark();
    }

    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {// ignore
      }

      this.updateDark();
    }

    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }

    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');

      if (dark && !darkModeStylesheet.parentNode) {
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
    }

    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }

    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme
      }, this.props));
    }

  }

  return ThemeComponent;
};



/***/ }),

/***/ "./src/playground/addon-settings.jsx":
/*!*******************************************!*\
  !*** ./src/playground/addon-settings.jsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_download_blob_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/download-blob.js */ "./src/lib/download-blob.js");
/* harmony import */ var _addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../addons/settings/settings.jsx */ "./src/addons/settings/settings.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */






const onExportSettings = settings => {
  const blob = new Blob([JSON.stringify(settings)]);
  Object(_lib_download_blob_js__WEBPACK_IMPORTED_MODULE_2__["default"])('turbowarp-addon-settings.json', blob);
};

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_addons_settings_settings_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
  onExportSettings: onExportSettings
}), _app_target__WEBPACK_IMPORTED_MODULE_4__["default"]);

/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appTarget = document.getElementById('app'); // Remove everything from the target to fix macOS Safari "Save Page As",

while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}

document.body.classList.add('tw-loaded');
/* harmony default export */ __webpack_exports__["default"] = (appTarget);

/***/ })

/******/ });
//# sourceMappingURL=addon-settings.js.map