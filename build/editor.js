/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --var-large-bg: #fff;\n  --var-panel-bg: #f6f6f6;\n  --var-text-fg: #000;\n  --var-panel-sep: #d1d1d1;\n  --var-button-bg: #fff;\n  --var-button-hover: #eee;\n  --var-button-active: #c0c0c0;\n  --var-glist-label: #fafafa;\n  --var-glist-activeLabel: #6d7599; }\n\nbody {\n  background: var(--var-large-bg);\n  color: var(--var-text-fg);\n  font-family: \"Inter\";\n  user-select: none; }\n\n*::-webkit-scrollbar {\n  width: 12px; }\n\n*::-webkit-scrollbar-track {\n  background: var(--var-panel-sep); }\n\n*::-webkit-scrollbar-thumb {\n  background: var(--var-large-bg); }\n\nbody[data-theme=dark] {\n  --var-large-bg: #222;\n  --var-panel-bg: #161616;\n  --var-text-fg: #fff;\n  --var-panel-sep: #000;\n  --var-button-bg: #111;\n  --var-button-hover: #333;\n  --var-button-active: #555;\n  --var-glist-label: #2b2b2b;\n  --var-glist-activeLabel: #232c53; }\n  body[data-theme=dark] button > img {\n    filter: invert(1) hue-rotate(180deg); }\n  body[data-theme=dark] div.glyphList canvas {\n    filter: invert(1); }\n\nbutton > img {\n  width: 16px;\n  height: 16px; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app.scss"],"names":[],"mappings":"AAAA;EACI,oBAAe;EACf,uBAAe;EACf,mBAAc;EAEd,wBAAgB;EAEhB,qBAAgB;EAChB,wBAAmB;EACnB,4BAAoB;EAEpB,0BAAkB;EAClB,gCAAwB,EAAA;;AAG5B;EACI,+BAA+B;EAC/B,yBAAyB;EAEzB,oBAAoB;EAEpB,iBAAiB,EAAA;;AAGrB;EACI,WAAW,EAAA;;AAGf;EACI,gCAAgC,EAAA;;AAGpC;EACI,+BAA+B,EAAA;;AAGnC;EACI,oBAAe;EACf,uBAAe;EACf,mBAAc;EAEd,qBAAgB;EAEhB,qBAAgB;EAChB,wBAAmB;EACnB,yBAAoB;EAEpB,0BAAkB;EAClB,gCAAwB,EAAA;EAZ5B;IAeQ,oCAAoC,EAAA;EAf5C;IAmBQ,iBAAiB,EAAA;;AAIzB;EACI,WAAW;EACX,YAAY,EAAA","sourcesContent":[":root {\r\n    --var-large-bg: #fff;\r\n    --var-panel-bg: #f6f6f6;\r\n    --var-text-fg: #000;\r\n\r\n    --var-panel-sep: #d1d1d1;\r\n\r\n    --var-button-bg: #fff;\r\n    --var-button-hover: #eee;\r\n    --var-button-active: #c0c0c0;\r\n\r\n    --var-glist-label: #fafafa;\r\n    --var-glist-activeLabel: #6d7599;\r\n}\r\n\r\nbody {\r\n    background: var(--var-large-bg);\r\n    color: var(--var-text-fg);\r\n\r\n    font-family: \"Inter\";\r\n\r\n    user-select: none;\r\n}\r\n\r\n*::-webkit-scrollbar {\r\n    width: 12px;\r\n}\r\n\r\n*::-webkit-scrollbar-track {\r\n    background: var(--var-panel-sep);\r\n}\r\n\r\n*::-webkit-scrollbar-thumb {\r\n    background: var(--var-large-bg);\r\n}\r\n\r\nbody[data-theme=dark] {\r\n    --var-large-bg: #222;\r\n    --var-panel-bg: #161616;\r\n    --var-text-fg: #fff;\r\n\r\n    --var-panel-sep: #000;\r\n\r\n    --var-button-bg: #111;\r\n    --var-button-hover: #333;\r\n    --var-button-active: #555;\r\n\r\n    --var-glist-label: #2b2b2b;\r\n    --var-glist-activeLabel: #232c53;\r\n\r\n    button > img {\r\n        filter: invert(1) hue-rotate(180deg);\r\n    }\r\n\r\n    div.glyphList canvas {\r\n        filter: invert(1);\r\n    }\r\n}\r\n \r\nbutton > img {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/controls.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/controls.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "div.panelContents div.accordion {\n  padding: 4px 12px;\n  border-bottom: 1px solid var(--var-panel-sep); }\n  div.panelContents div.accordion > header {\n    font-weight: 400;\n    text-transform: uppercase;\n    opacity: 0.7;\n    margin-bottom: 4px; }\n\ndiv.panelContents div.row {\n  display: flex;\n  align-items: center; }\n  div.panelContents div.row label {\n    margin-right: 8px; }\n  div.panelContents div.row *:last-child {\n    flex-grow: 1; }\n\ndiv.panelContents div.grid {\n  display: grid;\n  gap: 8px; }\n  div.panelContents div.grid.g-2i {\n    grid-template-columns: repeat(2, 1fr); }\n\ndiv.panelContents input[type=number] {\n  background: var(--var-panel-sep);\n  color: var(--var-text-fg);\n  font-family: \"Inter\";\n  outline: none;\n  border: 1px solid var(--var-text-fg);\n  border-radius: 4px;\n  padding: 4px 10px; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/controls.scss"],"names":[],"mappings":"AAAA;EAEQ,iBAAiB;EAEjB,6CAA6C,EAAA;EAJrD;IAOY,gBAAgB;IAChB,yBAAyB;IACzB,YAAY;IAEZ,kBAAkB,EAAA;;AAX9B;EAgBQ,aAAa;EACb,mBAAmB,EAAA;EAjB3B;IAoBY,iBAAiB,EAAA;EApB7B;IAwBY,YAAY,EAAA;;AAxBxB;EA6BQ,aAAa;EACb,QAAQ,EAAA;EA9BhB;IAiCY,qCAAqC,EAAA;;AAjCjD;EAsCQ,gCAAgC;EAChC,yBAAyB;EAEzB,oBAAoB;EAEpB,aAAa;EACb,oCAAoC;EACpC,kBAAkB;EAClB,iBAAiB,EAAA","sourcesContent":["div.panelContents {\r\n    div.accordion {\r\n        padding: 4px 12px;\r\n\r\n        border-bottom: 1px solid var(--var-panel-sep);\r\n\r\n        & > header {\r\n            font-weight: 400;\r\n            text-transform: uppercase;\r\n            opacity: 0.7;\r\n\r\n            margin-bottom: 4px;\r\n        }\r\n    }\r\n\r\n    div.row {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        label {\r\n            margin-right: 8px;\r\n        }\r\n\r\n        & *:last-child {\r\n            flex-grow: 1;\r\n        }\r\n    }\r\n\r\n    div.grid {\r\n        display: grid;\r\n        gap: 8px;\r\n\r\n        &.g-2i {\r\n            grid-template-columns: repeat(2, 1fr);\r\n        }\r\n    }\r\n\r\n    input[type=number] {\r\n        background: var(--var-panel-sep);\r\n        color: var(--var-text-fg);\r\n\r\n        font-family: \"Inter\";\r\n\r\n        outline: none;\r\n        border: 1px solid var(--var-text-fg);\r\n        border-radius: 4px;\r\n        padding: 4px 10px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/editor.scss":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/editor.scss ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "section.edit {\n  position: relative;\n  border-top: 1px solid var(--var-panel-sep);\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: 1fr auto; }\n  section.edit div.viewport {\n    position: relative; }\n    section.edit div.viewport canvas {\n      position: absolute;\n      left: 0;\n      top: 0; }\n  section.edit div.glyphBar {\n    color: var(--var-text-fg);\n    font-family: \"Inter\";\n    font-size: 24pt;\n    text-align: center;\n    border: none;\n    outline: none;\n    padding: 6px 20px; }\n    section.edit div.glyphBar div.ntglyph {\n      height: 1em;\n      box-sizing: border-box;\n      background: var(--var-button-hover);\n      border-radius: 4px;\n      border: 1px solid #ddd;\n      margin: 0px 1px;\n      display: inline-flex;\n      align-items: center; }\n      section.edit div.glyphBar div.ntglyph span {\n        font-size: 16pt; }\n  section.edit div.glyphSwitchButtons {\n    position: absolute;\n    left: 8px;\n    right: 8px;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    pointer-events: none; }\n  section.edit button.prevGlyph,\n  section.edit button.nextGlyph {\n    background: var(--var-button-bg);\n    font-size: 0;\n    outline: none;\n    padding: 6px 8px;\n    border-radius: 4px;\n    border: 1px solid var(--var-panel-sep);\n    box-shadow: 0px 2px 4px #0001;\n    pointer-events: all;\n    z-index: 10; }\n    section.edit button.prevGlyph:hover,\n    section.edit button.nextGlyph:hover {\n      background: var(--var-button-hover); }\n    section.edit button.prevGlyph:active,\n    section.edit button.nextGlyph:active {\n      background: var(--var-button-active); }\n  section.edit div.tools {\n    background: var(--var-panel-bg);\n    padding: 2px;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid var(--var-panel-sep);\n    grid-row: 1 / span 2; }\n    section.edit div.tools button {\n      background: transparent;\n      font-size: 0;\n      border: none;\n      outline: none;\n      padding: 7px 8px;\n      border-radius: 4px; }\n      section.edit div.tools button:hover {\n        background: var(--var-button-hover); }\n      section.edit div.tools button:active {\n        background: var(--var-button-active); }\n      section.edit div.tools button.active {\n        background: var(--var-panel-sep); }\n\ndiv.subactions {\n  display: flex; }\n  div.subactions div {\n    border-left: 1px solid var(--var-panel-sep);\n    display: flex; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/editor.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAElB,0CAA0C;EAE1C,aAAa;EACb,+BAA+B;EAC/B,4BAA4B,EAAA;EAPhC;IAUQ,kBAAkB,EAAA;IAV1B;MAaY,kBAAkB;MAClB,OAAO;MACP,MAAM,EAAA;EAflB;IAoBQ,yBAAyB;IAEzB,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAElB,YAAY;IACZ,aAAa;IACb,iBAAiB,EAAA;IA5BzB;MA+BY,WAAW;MACX,sBAAsB;MAEtB,mCAAmC;MACnC,kBAAkB;MAClB,sBAAsB;MACtB,eAAe;MAEf,oBAAoB;MACpB,mBAAmB,EAAA;MAxC/B;QA2CgB,eAAe,EAAA;EA3C/B;IAiDQ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,MAAM;IACN,SAAS;IAET,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB,EAAA;EA1D5B;;IA+DQ,gCAAgC;IAEhC,YAAY;IAEZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,sCAAsC;IACtC,6BAA6B;IAE7B,mBAAmB;IACnB,WAAW,EAAA;IA1EnB;;MA6EY,mCAAmC,EAAA;IA7E/C;;MAiFY,oCAAoC,EAAA;EAjFhD;IAsFQ,+BAA+B;IAE/B,YAAY;IAEZ,aAAa;IACb,sBAAsB;IAEtB,4CAA4C;IAE5C,oBAAoB,EAAA;IA/F5B;MAkGY,uBAAuB;MAEvB,YAAY;MAEZ,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,kBAAkB,EAAA;MAzG9B;QA4GgB,mCAAmC,EAAA;MA5GnD;QAgHgB,oCAAoC,EAAA;MAhHpD;QAoHgB,gCAAgC,EAAA;;AAMhD;EACI,aAAa,EAAA;EADjB;IAIQ,2CAA2C;IAC3C,aAAa,EAAA","sourcesContent":["section.edit {\r\n    position: relative;\r\n\r\n    border-top: 1px solid var(--var-panel-sep);\r\n\r\n    display: grid;\r\n    grid-template-columns: auto 1fr;\r\n    grid-template-rows: 1fr auto;\r\n\r\n    div.viewport {\r\n        position: relative;\r\n\r\n        canvas {\r\n            position: absolute;\r\n            left: 0;\r\n            top: 0;\r\n        }\r\n    }\r\n\r\n    div.glyphBar {\r\n        color: var(--var-text-fg);\r\n\r\n        font-family: \"Inter\";\r\n        font-size: 24pt;\r\n        text-align: center;\r\n\r\n        border: none;\r\n        outline: none;\r\n        padding: 6px 20px;\r\n\r\n        div.ntglyph {\r\n            height: 1em;\r\n            box-sizing: border-box;\r\n\r\n            background: var(--var-button-hover);\r\n            border-radius: 4px;\r\n            border: 1px solid #ddd;\r\n            margin: 0px 1px;\r\n\r\n            display: inline-flex;\r\n            align-items: center;\r\n\r\n            span {            \r\n                font-size: 16pt;\r\n            }\r\n        }\r\n    }\r\n\r\n    div.glyphSwitchButtons {\r\n        position: absolute;\r\n        left: 8px;\r\n        right: 8px;\r\n        top: 0;\r\n        bottom: 0;\r\n\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n        pointer-events: none;\r\n    }\r\n\r\n    button.prevGlyph,\r\n    button.nextGlyph {\r\n        background: var(--var-button-bg);\r\n\r\n        font-size: 0;\r\n\r\n        outline: none;\r\n        padding: 6px 8px;\r\n        border-radius: 4px;\r\n        border: 1px solid var(--var-panel-sep);\r\n        box-shadow: 0px 2px 4px #0001;\r\n\r\n        pointer-events: all;\r\n        z-index: 10;\r\n    \r\n        &:hover {\r\n            background: var(--var-button-hover);\r\n        }\r\n    \r\n        &:active {\r\n            background: var(--var-button-active);\r\n        }\r\n    }\r\n\r\n    div.tools {\r\n        background: var(--var-panel-bg);\r\n\r\n        padding: 2px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        border-right: 1px solid var(--var-panel-sep);\r\n\r\n        grid-row: 1 / span 2;\r\n\r\n        button {\r\n            background: transparent;\r\n\r\n            font-size: 0;\r\n\r\n            border: none;\r\n            outline: none;\r\n            padding: 7px 8px;\r\n            border-radius: 4px;\r\n    \r\n            &:hover {\r\n                background: var(--var-button-hover);\r\n            }\r\n    \r\n            &:active {\r\n                background: var(--var-button-active);\r\n            }\r\n\r\n            &.active {\r\n                background: var(--var-panel-sep);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\ndiv.subactions {    \r\n    display: flex;\r\n\r\n    div {\r\n        border-left: 1px solid var(--var-panel-sep); \r\n        display: flex;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/main.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/main.scss ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "main {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 320px;\n  bottom: 0;\n  background: var(--var-panel-bg);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n  main > nav {\n    width: 100%;\n    padding: 0px;\n    display: flex; }\n    main > nav div.actions {\n      display: flex; }\n      main > nav div.actions button {\n        background: transparent;\n        border: none;\n        outline: none;\n        padding: 7px 10px;\n        border-radius: 4px;\n        margin-bottom: 2px;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n        main > nav div.actions button:hover {\n          background: var(--var-button-hover); }\n        main > nav div.actions button:active {\n          background: var(--var-button-active); }\n    main > nav div.tabs {\n      display: flex;\n      flex-grow: 1;\n      justify-content: center; }\n      main > nav div.tabs button {\n        background: transparent;\n        font-family: \"Inter\";\n        font-size: 10pt;\n        font-weight: 500;\n        padding: 6px 20px;\n        border: none;\n        border-bottom: none;\n        border-radius: 2px 2px 0px 0px;\n        outline: none; }\n        main > nav div.tabs button.active {\n          background: #fff; }\n  main section {\n    position: relative;\n    background: var(--var-large-bg);\n    width: 100%;\n    flex-grow: 1; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/main.scss"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,OAAO;EACP,MAAM;EACN,YAAY;EACZ,SAAS;EAET,+BAA+B;EAE/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAA;EAX3B;IAcQ,WAAW;IAEX,YAAY;IAEZ,aAAa,EAAA;IAlBrB;MAqBY,aAAa,EAAA;MArBzB;QAwBgB,uBAAuB;QAEvB,YAAY;QACZ,aAAa;QACb,iBAAiB;QACjB,kBAAkB;QAClB,kBAAkB;QAElB,aAAa;QACb,mBAAmB;QACnB,uBAAuB,EAAA;QAlCvC;UAqCoB,mCAAmC,EAAA;QArCvD;UAyCoB,oCAAoC,EAAA;IAzCxD;MA+CY,aAAa;MACb,YAAY;MACZ,uBAAuB,EAAA;MAjDnC;QAoDgB,uBAAuB;QAEvB,oBAAoB;QACpB,eAAe;QACf,gBAAgB;QAEhB,iBAAiB;QACjB,YAAY;QACZ,mBAAmB;QACnB,8BAA8B;QAC9B,aAAa,EAAA;QA9D7B;UAiEoB,gBAAgB,EAAA;EAjEpC;IAwEQ,kBAAkB;IAElB,+BAA+B;IAE/B,WAAW;IAEX,YAAY,EAAA","sourcesContent":["main {\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    right: 320px;\r\n    bottom: 0;\r\n\r\n    background: var(--var-panel-bg);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n\r\n    & > nav {\r\n        width: 100%;\r\n\r\n        padding: 0px;\r\n\r\n        display: flex;\r\n\r\n        div.actions {\r\n            display: flex;\r\n\r\n            button {    \r\n                background: transparent;\r\n    \r\n                border: none;\r\n                outline: none;\r\n                padding: 7px 10px;\r\n                border-radius: 4px;\r\n                margin-bottom: 2px;\r\n    \r\n                display: flex;\r\n                align-items: center;\r\n                justify-content: center;\r\n    \r\n                &:hover {\r\n                    background: var(--var-button-hover);\r\n                }\r\n    \r\n                &:active {\r\n                    background: var(--var-button-active);\r\n                }\r\n            }\r\n        }\r\n\r\n        div.tabs {\r\n            display: flex;\r\n            flex-grow: 1;\r\n            justify-content: center;\r\n\r\n            button {\r\n                background: transparent;\r\n    \r\n                font-family: \"Inter\";\r\n                font-size: 10pt;\r\n                font-weight: 500;\r\n    \r\n                padding: 6px 20px;\r\n                border: none;\r\n                border-bottom: none;\r\n                border-radius: 2px 2px 0px 0px;\r\n                outline: none;\r\n    \r\n                &.active {\r\n                    background: #fff;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    section {\r\n        position: relative;\r\n\r\n        background: var(--var-large-bg);\r\n\r\n        width: 100%;\r\n\r\n        flex-grow: 1;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/panel.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/panel.scss ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "aside {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  min-width: 320px;\n  width: 320px;\n  box-sizing: border-box;\n  border-left: 1px solid var(--var-panel-sep);\n  display: flex;\n  flex-direction: column; }\n  aside nav {\n    background: var(--var-panel-bg);\n    display: flex;\n    justify-content: center; }\n    aside nav button {\n      background: transparent;\n      color: var(--var-text-fg);\n      font-family: \"Inter\";\n      font-size: 10pt;\n      font-weight: 400;\n      padding: 7px 20px;\n      border: none;\n      border-bottom: none;\n      outline: none; }\n      aside nav button.tool {\n        background: linear-gradient(transparent, #293844); }\n      aside nav button:hover {\n        background: var(--var-button-hover); }\n      aside nav button:active {\n        background: var(--var-button-active); }\n      aside nav button.active {\n        background: var(--var-panel-sep);\n        box-shadow: inset 0px -2px var(--var-text-fg); }\n  aside div.listContainer {\n    height: 0;\n    flex-grow: 1;\n    overflow-y: scroll; }\n  aside div.panelContents:not(.active) {\n    display: none; }\n  aside div.glyphList {\n    background: var(--var-panel-bg);\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 1px; }\n    aside div.glyphList div.glyph {\n      max-width: 75px;\n      background: var(--var-large-bg);\n      display: flex;\n      flex-direction: column; }\n      aside div.glyphList div.glyph.active label {\n        background: var(--var-glist-activeLabel);\n        color: #fff; }\n      aside div.glyphList div.glyph label {\n        background: var(--var-glist-label);\n        font-size: 9pt;\n        font-weight: 500;\n        text-align: center;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        padding: 2px;\n        overflow: hidden; }\n      aside div.glyphList div.glyph canvas {\n        width: 100%;\n        height: auto; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/panel.scss"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,MAAM;EACN,QAAQ;EACR,SAAS;EACT,gBAAgB;EAChB,YAAY;EACZ,sBAAsB;EAEtB,2CAA2C;EAE3C,aAAa;EACb,sBAAsB,EAAA;EAZ1B;IAeQ,+BAA+B;IAE/B,aAAa;IACb,uBAAuB,EAAA;IAlB/B;MAqBY,uBAAuB;MACvB,yBAAyB;MAEzB,oBAAoB;MACpB,eAAe;MACf,gBAAgB;MAEhB,iBAAiB;MACjB,YAAY;MACZ,mBAAmB;MACnB,aAAa,EAAA;MA/BzB;QAkCgB,iDAEC,EAAA;MApCjB;QAwCgB,mCAAmC,EAAA;MAxCnD;QA4CgB,oCAAoC,EAAA;MA5CpD;QAgDgB,gCAAgC;QAChC,6CAA6C,EAAA;EAjD7D;IAuDQ,SAAS;IAET,YAAY;IACZ,kBAAkB,EAAA;EA1D1B;IA8DQ,aAAa,EAAA;EA9DrB;IAkEQ,+BAA+B;IAE/B,aAAa;IACb,qCAAqC;IACrC,QAAQ,EAAA;IAtEhB;MAyEY,eAAe;MAEf,+BAA+B;MAE/B,aAAa;MACb,sBAAsB,EAAA;MA9ElC;QAiFgB,wCAAwC;QACxC,WAAW,EAAA;MAlF3B;QAsFgB,kCAAkC;QAElC,cAAc;QACd,gBAAgB;QAChB,kBAAkB;QAClB,mBAAmB;QACnB,uBAAuB;QAEvB,YAAY;QAEZ,gBAAgB,EAAA;MAhGhC;QAoGgB,WAAW;QACX,YAAY,EAAA","sourcesContent":["aside {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    min-width: 320px;\r\n    width: 320px;\r\n    box-sizing: border-box;\r\n\r\n    border-left: 1px solid var(--var-panel-sep);\r\n    \r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    nav {\r\n        background: var(--var-panel-bg);\r\n\r\n        display: flex;\r\n        justify-content: center;\r\n\r\n        button {\r\n            background: transparent;\r\n            color: var(--var-text-fg);\r\n\r\n            font-family: \"Inter\";\r\n            font-size: 10pt;\r\n            font-weight: 400;\r\n\r\n            padding: 7px 20px;\r\n            border: none;\r\n            border-bottom: none;\r\n            outline: none;\r\n\r\n            &.tool {\r\n                background: linear-gradient(\r\n                    transparent, rgb(41, 56, 68)\r\n                );\r\n            }\r\n    \r\n            &:hover {\r\n                background: var(--var-button-hover);\r\n            }\r\n    \r\n            &:active {\r\n                background: var(--var-button-active);\r\n            }\r\n\r\n            &.active {\r\n                background: var(--var-panel-sep);\r\n                box-shadow: inset 0px -2px var(--var-text-fg);\r\n            }\r\n        }\r\n    }\r\n\r\n    div.listContainer {\r\n        height: 0; // WTF???\r\n\r\n        flex-grow: 1;\r\n        overflow-y: scroll;\r\n    }\r\n\r\n    div.panelContents:not(.active) {\r\n        display: none;\r\n    }\r\n\r\n    div.glyphList {\r\n        background: var(--var-panel-bg);\r\n\r\n        display: grid;\r\n        grid-template-columns: repeat(4, 1fr);\r\n        gap: 1px;\r\n\r\n        div.glyph {\r\n            max-width: 75px;\r\n\r\n            background: var(--var-large-bg);\r\n\r\n            display: flex;\r\n            flex-direction: column;\r\n\r\n            &.active label {\r\n                background: var(--var-glist-activeLabel);\r\n                color: #fff;\r\n            }\r\n\r\n            label {\r\n                background: var(--var-glist-label);\r\n\r\n                font-size: 9pt;\r\n                font-weight: 500;\r\n                text-align: center;\r\n                white-space: nowrap;\r\n                text-overflow: ellipsis;\r\n                \r\n                padding: 2px;\r\n\r\n                overflow: hidden;\r\n            }\r\n\r\n            canvas {\r\n                width: 100%;\r\n                height: auto;\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/welcome.scss":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/welcome.scss ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "article.welcome {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; }\n  article.welcome > div {\n    width: 350px;\n    height: calc(100vh - 80px);\n    margin: 60px;\n    display: flex;\n    flex-direction: column; }\n    article.welcome > div div.recentFiles {\n      flex-grow: 1;\n      overflow-y: auto; }\n    article.welcome > div div.buttons {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: 2px; }\n    article.welcome > div h1 {\n      font-size: 40pt;\n      line-height: 1;\n      margin: 0;\n      text-align: center; }\n    article.welcome > div h3 {\n      font-size: 14pt;\n      font-weight: 400;\n      margin: 0px 0px 24px 0px;\n      text-align: center; }\n    article.welcome > div h2 {\n      font-weight: 400;\n      margin-bottom: 8px; }\n    article.welcome > div button {\n      width: 100%;\n      background: var(--var-panel-bg);\n      color: var(--var-text-fg);\n      font-family: \"Inter\";\n      border: none;\n      outline: none;\n      padding: 7px 8px;\n      border: 1px solid var(--var-panel-sep);\n      border-radius: 4px;\n      margin-bottom: 2px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      article.welcome > div button.recent {\n        flex-direction: column;\n        justify-content: flex-start; }\n      article.welcome > div button label.name {\n        font-size: 12pt;\n        font-weight: 500; }\n      article.welcome > div button label.path {\n        opacity: 0.6; }\n      article.welcome > div button:hover {\n        background: var(--var-button-hover); }\n      article.welcome > div button:active {\n        background: var(--var-button-active); }\n      article.welcome > div button img {\n        margin-right: 8px; }\n        article.welcome > div button img.preview {\n          width: 332px;\n          height: auto;\n          margin: 0; }\n  article.welcome canvas.previewGenerator {\n    position: absolute;\n    pointer-events: none;\n    opacity: 0; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/welcome.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,uBAAuB;EACvB,uBAAuB,EAAA;EAH3B;IAMQ,YAAY;IACZ,0BAA0B;IAE1B,YAAY;IAEZ,aAAa;IACb,sBAAsB,EAAA;IAZ9B;MAeY,YAAY;MACZ,gBAAgB,EAAA;IAhB5B;MAoBY,aAAa;MACb,qCAAqC;MACrC,QAAQ,EAAA;IAtBpB;MA0BY,eAAe;MACf,cAAc;MAEd,SAAS;MAET,kBAAkB,EAAA;IA/B9B;MAmCY,eAAe;MACf,gBAAgB;MAEhB,wBAAwB;MAExB,kBAAkB,EAAA;IAxC9B;MA4CY,gBAAgB;MAEhB,kBAAkB,EAAA;IA9C9B;MAkDY,WAAW;MAEX,+BAA+B;MAC/B,yBAAyB;MAEzB,oBAAoB;MAEpB,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,sCAAsC;MACtC,kBAAkB;MAClB,kBAAkB;MAElB,aAAa;MACb,mBAAmB;MACnB,uBAAuB,EAAA;MAlEnC;QAqEgB,sBAAsB;QACtB,2BAA2B,EAAA;MAtE3C;QA0EgB,eAAe;QACf,gBAAgB,EAAA;MA3EhC;QA+EgB,YAAY,EAAA;MA/E5B;QAmFgB,mCAAmC,EAAA;MAnFnD;QAuFgB,oCAAoC,EAAA;MAvFpD;QA2FgB,iBAAiB,EAAA;QA3FjC;UA8FoB,YAAY;UACZ,YAAY;UAEZ,SAAS,EAAA;EAjG7B;IAwGQ,kBAAkB;IAClB,oBAAoB;IACpB,UAAU,EAAA","sourcesContent":["article.welcome {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-start;\r\n\r\n    & > div {\r\n        width: 350px;\r\n        height: calc(100vh - 80px);\r\n\r\n        margin: 60px;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n\r\n        div.recentFiles {\r\n            flex-grow: 1;\r\n            overflow-y: auto;\r\n        }\r\n\r\n        div.buttons {\r\n            display: grid;\r\n            grid-template-columns: repeat(2, 1fr);\r\n            gap: 2px;\r\n        }\r\n\r\n        h1 {\r\n            font-size: 40pt;\r\n            line-height: 1;\r\n\r\n            margin: 0;\r\n\r\n            text-align: center;\r\n        }\r\n\r\n        h3 {\r\n            font-size: 14pt;\r\n            font-weight: 400;\r\n\r\n            margin: 0px 0px 24px 0px;\r\n\r\n            text-align: center;\r\n        }\r\n\r\n        h2 {\r\n            font-weight: 400;\r\n            \r\n            margin-bottom: 8px;\r\n        }\r\n\r\n        button {\r\n            width: 100%;\r\n\r\n            background: var(--var-panel-bg);\r\n            color: var(--var-text-fg);\r\n\r\n            font-family: \"Inter\";\r\n\r\n            border: none;\r\n            outline: none;\r\n            padding: 7px 8px;\r\n            border: 1px solid var(--var-panel-sep);\r\n            border-radius: 4px;\r\n            margin-bottom: 2px;\r\n\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n\r\n            &.recent {\r\n                flex-direction: column;\r\n                justify-content: flex-start;\r\n            }\r\n\r\n            label.name {\r\n                font-size: 12pt;\r\n                font-weight: 500;\r\n            }\r\n\r\n            label.path {\r\n                opacity: 0.6;\r\n            }\r\n    \r\n            &:hover {\r\n                background: var(--var-button-hover);\r\n            }\r\n        \r\n            &:active {\r\n                background: var(--var-button-active);\r\n            }\r\n\r\n            img {\r\n                margin-right: 8px;\r\n\r\n                &.preview {\r\n                    width: 332px;\r\n                    height: auto;\r\n\r\n                    margin: 0;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    canvas.previewGenerator {\r\n        position: absolute;\r\n        pointer-events: none;\r\n        opacity: 0;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/editor.ts":
/*!***********************!*\
  !*** ./src/editor.ts ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _typeedit_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeedit/styles/app.scss */ "./src/typeedit/styles/app.scss");
/* harmony import */ var _typeedit_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeedit_styles_app_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeedit/styles/app/main.scss */ "./src/typeedit/styles/app/main.scss");
/* harmony import */ var _typeedit_styles_app_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _typeedit_styles_app_panel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeedit/styles/app/panel.scss */ "./src/typeedit/styles/app/panel.scss");
/* harmony import */ var _typeedit_styles_app_panel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_panel_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeedit/styles/app/editor.scss */ "./src/typeedit/styles/app/editor.scss");
/* harmony import */ var _typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typeedit_styles_app_controls_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeedit/styles/app/controls.scss */ "./src/typeedit/styles/app/controls.scss");
/* harmony import */ var _typeedit_styles_app_controls_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_controls_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./typeedit/styles/welcome.scss */ "./src/typeedit/styles/welcome.scss");
/* harmony import */ var _typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _typeedit_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typeedit/app */ "./src/typeedit/app.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! paper */ "paper");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _typeedit_font_font__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typeedit/font/font */ "./src/typeedit/font/font.ts");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _typeedit_io_otfcc_import__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./typeedit/io/otfcc/import */ "./src/typeedit/io/otfcc/import.ts");
/* harmony import */ var _typeedit_utils_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./typeedit/utils/preview */ "./src/typeedit/utils/preview.ts");
/* harmony import */ var _typeedit_io_io__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./typeedit/io/io */ "./src/typeedit/io/io.ts");
/* harmony import */ var _typeedit_ui_panel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./typeedit/ui/panel */ "./src/typeedit/ui/panel.ts");
var _a;
















console.log(electron__WEBPACK_IMPORTED_MODULE_8__["remote"]);
var scope = new paper__WEBPACK_IMPORTED_MODULE_7___default.a.PaperScope();
scope.install(window);
scope.setup(new paper__WEBPACK_IMPORTED_MODULE_7___default.a.Size(1000, 1000));
var recentFiles = (_a = JSON.parse(localStorage.getItem("recentFiles"))) !== null && _a !== void 0 ? _a : [];
if (Object(fs__WEBPACK_IMPORTED_MODULE_11__["existsSync"])("./otfcc_test")) {
    // There are otfcc binaries
    // NOTE: still testing this part, so they aren't included in the repo
    Object(_typeedit_io_otfcc_import__WEBPACK_IMPORTED_MODULE_12__["setOtfccPath"])("./otfcc_test");
}
recentFiles.forEach(function (file) {
    var btn = document.createElement("button");
    btn.classList.add("recent");
    var fontPreview = document.createElement("img");
    fontPreview.classList.add("preview");
    fontPreview.src = file.thumbnail;
    btn.appendChild(fontPreview);
    var fontNameLabel = document.createElement("label");
    fontNameLabel.classList.add("name");
    fontNameLabel.textContent = file.fontName;
    btn.appendChild(fontNameLabel);
    var filePathLabel = document.createElement("label");
    filePathLabel.classList.add("path");
    filePathLabel.textContent = Object(path__WEBPACK_IMPORTED_MODULE_9__["basename"])(file.filePath);
    btn.appendChild(filePathLabel);
    btn.addEventListener("click", function () {
        var font = Object(_typeedit_io_io__WEBPACK_IMPORTED_MODULE_14__["openFont"])(file.filePath);
        var welcome = document.querySelector("article.welcome");
        welcome.style.display = "none";
        Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_6__["default"])(font);
        var index = recentFiles.findIndex(function (p) { return p.filePath === file.filePath; });
        if (index >= 0) {
            var item = recentFiles[index];
            recentFiles.splice(index, 1);
            recentFiles.unshift(item);
            localStorage.setItem("recentFiles", JSON.stringify(recentFiles.slice(0, 8)));
        }
    });
    document.querySelector("div.recentFiles").appendChild(btn);
});
document.querySelectorAll("button.newFont").forEach(function (btn) { return btn.addEventListener("click", function () {
    var welcome = document.querySelector("article.welcome");
    welcome.style.display = "none";
    Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_6__["default"])(_typeedit_font_font__WEBPACK_IMPORTED_MODULE_10__["Font"].createBlank());
}); });
document.querySelectorAll("button.openFont").forEach(function (btn) { return btn.addEventListener("click", function () {
    electron__WEBPACK_IMPORTED_MODULE_8__["remote"].dialog.showOpenDialog(electron__WEBPACK_IMPORTED_MODULE_8__["remote"].getCurrentWindow(), {
        filters: [
            {
                name: "Supported fonts",
                extensions: [
                    "ftex", "otf", "ttf"
                ]
            },
            {
                name: "FTEX project file",
                extensions: ["ftex"]
            },
            {
                name: "OpenType fonts",
                extensions: ["otf"]
            },
            {
                name: "TrueType fonts",
                extensions: ["ttf"]
            }
        ],
        properties: ["openFile"]
    }).then(function (result) {
        if (result.canceled ||
            result.filePaths.length !== 1)
            return;
        try {
            var font = Object(_typeedit_io_io__WEBPACK_IMPORTED_MODULE_14__["openFont"])(result.filePaths[0]);
            var welcome = document.querySelector("article.welcome");
            welcome.style.display = "none";
            Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_6__["default"])(font);
            var index = recentFiles.findIndex(function (p) { return p.filePath === result.filePaths[0]; });
            if (index >= 0)
                recentFiles.splice(index, 1);
            recentFiles.unshift({
                filePath: result.filePaths[0],
                fontName: font.info.fontFamily + " " +
                    font.info.fontSubfamily,
                thumbnail: Object(_typeedit_utils_preview__WEBPACK_IMPORTED_MODULE_13__["createFontPreview"])(font)
            });
            localStorage.setItem("recentFiles", JSON.stringify(recentFiles.slice(0, 8)));
        }
        catch (e) {
            // Well, error!
            console.error(e);
            alert("Couldn't load the font file.");
        }
    });
}); });
document.querySelectorAll("button.saveFont").forEach(function (btn) { return btn.addEventListener("click", function () {
    electron__WEBPACK_IMPORTED_MODULE_8__["remote"].dialog.showSaveDialog(electron__WEBPACK_IMPORTED_MODULE_8__["remote"].getCurrentWindow(), {
        filters: [
            {
                name: "FTEX project file",
                extensions: ["ftex"]
            },
            {
                name: "OpenType fonts",
                extensions: ["otf"]
            },
            {
                name: "TrueType fonts",
                extensions: ["ttf"]
            }
        ],
        defaultPath: _typeedit_app__WEBPACK_IMPORTED_MODULE_6__["currentFont"].info.fontFamily +
            "-" + _typeedit_app__WEBPACK_IMPORTED_MODULE_6__["currentFont"].info.fontSubfamily
    }).then(function (result) {
        if (result.canceled)
            return;
        Object(_typeedit_io_io__WEBPACK_IMPORTED_MODULE_14__["saveFont"])(_typeedit_app__WEBPACK_IMPORTED_MODULE_6__["currentFont"], result.filePath);
    });
}); });
document.body.addEventListener("keydown", function (e) {
    if (e.code === "KeyZ" && e.ctrlKey) {
        e.preventDefault();
    }
});
document.addEventListener("drop", function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!e.dataTransfer.files.length)
        return;
    try {
        var path_1 = e.dataTransfer.files.item(0).path;
        var font = Object(_typeedit_io_io__WEBPACK_IMPORTED_MODULE_14__["openFont"])(path_1);
        if (!font)
            return;
        var welcome = document.querySelector("article.welcome");
        welcome.style.display = "none";
        Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_6__["default"])(font);
        var index = recentFiles.findIndex(function (p) { return p.filePath === path_1; });
        if (index >= 0)
            recentFiles.splice(index, 1);
        recentFiles.unshift({
            filePath: path_1,
            fontName: font.info.fontFamily + " " +
                font.info.fontSubfamily,
            thumbnail: Object(_typeedit_utils_preview__WEBPACK_IMPORTED_MODULE_13__["createFontPreview"])(font)
        });
        localStorage.setItem("recentFiles", JSON.stringify(recentFiles.slice(0, 8)));
    }
    catch (e) {
        // Well, error!
        console.error(e);
        alert("Couldn't load the font file.");
    }
});
document.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
});
Object(_typeedit_ui_panel__WEBPACK_IMPORTED_MODULE_15__["prepareTabbedPanel"])();
// load("test/Inter-Regular.otf").then(
//     (font) => {
//         app(font)
//     }
// )


/***/ }),

/***/ "./src/typeedit/app.ts":
/*!*****************************!*\
  !*** ./src/typeedit/app.ts ***!
  \*****************************/
/*! exports provided: currentFont, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentFont", function() { return currentFont; });
/* harmony import */ var _viewport_tools_bezierPen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./viewport/tools/bezierPen */ "./src/typeedit/viewport/tools/bezierPen.ts");
/* harmony import */ var _viewport_tools_handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewport/tools/handle */ "./src/typeedit/viewport/tools/handle.ts");
/* harmony import */ var _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewport/context/glyph */ "./src/typeedit/viewport/context/glyph.ts");
/* harmony import */ var _ui_actionbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/actionbar */ "./src/typeedit/ui/actionbar.ts");
/* harmony import */ var _ui_viewport__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/viewport */ "./src/typeedit/ui/viewport.ts");
/* harmony import */ var _ui_glyphBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/glyphBar */ "./src/typeedit/ui/glyphBar.ts");
/* harmony import */ var _ui_glyphList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ui/glyphList */ "./src/typeedit/ui/glyphList.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./undo/history */ "./src/typeedit/undo/history.ts");
/* harmony import */ var _ui_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/toolbar */ "./src/typeedit/ui/toolbar.ts");
/* harmony import */ var _viewport_tools_rectangle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./viewport/tools/rectangle */ "./src/typeedit/viewport/tools/rectangle.ts");
/* harmony import */ var _viewport_tools_ellipse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./viewport/tools/ellipse */ "./src/typeedit/viewport/tools/ellipse.ts");
/* harmony import */ var _ui_panel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/panel */ "./src/typeedit/ui/panel.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};












var currentFont = null;
var globalSubActions = [
    {
        name: "Undo",
        icon: "undo",
        accelerator: "^KeyZ",
        handler: function () {
            Object(_undo_history__WEBPACK_IMPORTED_MODULE_7__["undo"])();
        }
    },
    {
        name: "Redo",
        icon: "redo",
        accelerator: "^+KeyZ",
        handler: function () {
            Object(_undo_history__WEBPACK_IMPORTED_MODULE_7__["redo"])();
        }
    },
];
var globalTools = [
    new _viewport_tools_handle__WEBPACK_IMPORTED_MODULE_1__["HandleTool"](),
    new _viewport_tools_bezierPen__WEBPACK_IMPORTED_MODULE_0__["BezierPenTool"](),
    new _viewport_tools_rectangle__WEBPACK_IMPORTED_MODULE_9__["RectangleTool"](),
    new _viewport_tools_ellipse__WEBPACK_IMPORTED_MODULE_10__["EllipseTool"]()
];
var currentKeybCallback = null;
/* harmony default export */ __webpack_exports__["default"] = (function (font) {
    currentFont = font;
    document.title = font.info.fontFamily + " - FTE";
    Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_6__["prepareGlyphList"])(font);
    Object(_ui_panel__WEBPACK_IMPORTED_MODULE_11__["prepareFontSettings"])();
    Object(_ui_panel__WEBPACK_IMPORTED_MODULE_11__["addFontSettingsEvents"])();
    var context = new _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_2__["GlyphContext"]("ABC".split("").map(function (chr) { return font.glyphs.find(function (g) { return g.codePoint === chr.codePointAt(0); }); }), 0);
    var viewport = Object(_ui_viewport__WEBPACK_IMPORTED_MODULE_4__["setupViewport"])(context);
    viewport.setTool(new _viewport_tools_handle__WEBPACK_IMPORTED_MODULE_1__["HandleTool"]());
    Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, __spreadArrays([globalSubActions], viewport.tool.subactions.map(function (s) { return s.subactions; })));
    Object(_ui_toolbar__WEBPACK_IMPORTED_MODULE_8__["prepareToolbar"])(globalTools, globalTools[0], function (tool) {
        viewport.setTool(tool);
        Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, __spreadArrays([globalSubActions], tool.subactions.map(function (s) { return s.subactions; })));
    });
    Object(_ui_glyphBar__WEBPACK_IMPORTED_MODULE_5__["prepareGlyphBar"])(viewport);
    viewport.updateViewportSize(false);
    viewport.co.translate((viewport.domCanvas.width - context.glyph.metrics.rightBearing) / 2, (viewport.domCanvas.height - 512) / 2);
    viewport.render();
    font.on("settingChanged", function () { return viewport.render(); });
    if (currentKeybCallback)
        window.removeEventListener("keyup", currentKeybCallback);
    currentKeybCallback = function (e) {
        if (document.activeElement !== document.body)
            return; // for now
        var accelString = e.code;
        if (e.shiftKey)
            accelString = "+" + accelString;
        if (e.ctrlKey)
            accelString = "^" + accelString;
        for (var _i = 0, _a = __spreadArrays([
            globalTools,
            globalSubActions
        ], viewport.tool.subactions.map(function (s) { return s.subactions; })).flat(); _i < _a.length; _i++) {
            var action = _a[_i];
            if (action.accelerator === accelString) {
                if ("handler" in action) {
                    action.handler();
                    viewport.render();
                    if (viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_2__["GlyphContext"])
                        viewport.context.glyph.emit("modified");
                }
                else {
                    viewport.setTool(action);
                    Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, __spreadArrays([globalSubActions], action.subactions.map(function (s) { return s.subactions; })));
                    Object(_ui_toolbar__WEBPACK_IMPORTED_MODULE_8__["setActiveTool"])(globalTools.indexOf(action));
                }
                e.preventDefault();
                return false;
            }
        }
    };
    window.addEventListener("keyup", currentKeybCallback);
});


/***/ }),

/***/ "./src/typeedit/font/font.ts":
/*!***********************************!*\
  !*** ./src/typeedit/font/font.ts ***!
  \***********************************/
/*! exports provided: Font */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Font", function() { return Font; });
/* harmony import */ var _glyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glyph */ "./src/typeedit/font/glyph.ts");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/settings */ "./src/typeedit/settings/settings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};



var Font = /** @class */ (function (_super) {
    __extends(Font, _super);
    function Font(info, metrics, glyphs) {
        var _this = _super.call(this) || this;
        _this.info = info;
        _this.metrics = metrics;
        _this.glyphs = glyphs;
        _this.palette = [];
        _this._fontSettings = {};
        _this.settings = Object(_settings_settings__WEBPACK_IMPORTED_MODULE_2__["createFontSettings"])(_this, _this._fontSettings);
        _this.info = Object.assign({
            copyright: "",
            description: "",
            designer: "",
            designerURL: "",
            fontFamily: "",
            fontSubfamily: "",
            fullName: "",
            license: "",
            licenseURL: "",
            manufacturer: "",
            manufacturerURL: "",
            postScriptName: "",
            uniqueID: "",
            version: "",
            trademark: "",
            compatibleFullName: ""
        }, _this.info);
        return _this;
    }
    Font.createBlank = function () {
        // Just the base Latin alphanumeric for now
        var baseCharacterSet = " 0123456789-=_+!@#$%^&*(){}[]\\\/,.<>?;':\"~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        var specialNames = {
            " ": "space",
            "'": "quote",
            "\"": "dblquote",
            "!": "exclam",
            "@": "at",
            "#": "hash",
            "$": "dollar",
            "%": "percent",
            "^": "caret",
            "&": "ampersand",
            "*": "asterisk"
        };
        var font = new Font({
            fontFamily: "New font",
            fontSubfamily: "Regular"
        }, {
            ascender: -96,
            descender: 512 + 96,
            xHeight: 196
        }, []);
        font.addGlyph.apply(font, __spreadArrays([new _glyph__WEBPACK_IMPORTED_MODULE_0__["Glyph"](font, ".notdef", null, {
                leftBearing: 0,
                rightBearing: 320
            }, [])], baseCharacterSet.split("").map(function (char) {
            var name = (char in specialNames) ? specialNames[char] : char;
            return new _glyph__WEBPACK_IMPORTED_MODULE_0__["Glyph"](font, name, char.codePointAt(0), {
                leftBearing: 0,
                rightBearing: 320
            }, []);
        })));
        return font;
    };
    Font.prototype.addGlyph = function () {
        var _a;
        var glyphs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            glyphs[_i] = arguments[_i];
        }
        (_a = this.glyphs).push.apply(_a, glyphs);
    };
    return Font;
}(events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]));



/***/ }),

/***/ "./src/typeedit/font/glyph.ts":
/*!************************************!*\
  !*** ./src/typeedit/font/glyph.ts ***!
  \************************************/
/*! exports provided: Glyph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Glyph", function() { return Glyph; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Glyph = /** @class */ (function (_super) {
    __extends(Glyph, _super);
    function Glyph(font, name, codePoint, metrics, beziers) {
        var _this = _super.call(this) || this;
        _this.font = font;
        _this.name = name;
        _this.codePoint = codePoint;
        _this.metrics = metrics;
        _this.beziers = beziers;
        _this.finalBeziers = [];
        if (!name) {
            _this.name = codePoint ?
                "uni" + codePoint.toString(16).toUpperCase().padStart(4, "0") :
                ".notdef";
        }
        _this.beziers.forEach(function (b) { return b.glyph = _this; });
        _this.finalBeziers = beziers; // for now
        _this.on("modified", function () {
            _this.font.emit("glyphModified", _this);
        });
        return _this;
    }
    Object.defineProperty(Glyph.prototype, "comparableCodePoint", {
        get: function () {
            var _a;
            if (this.name === ".notdef")
                return -2;
            if (this.name === ".null")
                return -1;
            return (_a = this.codePoint) !== null && _a !== void 0 ? _a : Infinity;
        },
        enumerable: false,
        configurable: true
    });
    Glyph.prototype.updateBeziers = function () {
        // Nothing for now
        // TODO: modifiers
        this.finalBeziers = this.beziers;
    };
    return Glyph;
}(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]));



/***/ }),

/***/ "./src/typeedit/geometry/bezier/curve.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/geometry/bezier/curve.ts ***!
  \***********************************************/
/*! exports provided: BezierCurve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierCurve", function() { return BezierCurve; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "paper");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _utils_lerp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/lerp */ "./src/typeedit/utils/lerp.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();





var BezierCurve = /** @class */ (function (_super) {
    __extends(BezierCurve, _super);
    function BezierCurve(glyph) {
        var _this = _super.call(this) || this;
        _this.glyph = glyph;
        _this.points = [];
        _this.closed = true;
        _this.on("modified", function () {
            if (_this.glyph)
                _this.glyph.emit("modified");
        });
        return _this;
    }
    BezierCurve.prototype.addPoint = function (point) {
        point.curve = this;
        this.points.push(point);
        this.emit("modified");
        this.emit("newPoint", point);
    };
    BezierCurve.prototype.lineTo = function (x, y) {
        this.addPoint(new _point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y)));
    };
    BezierCurve.prototype.cubicCurveTo = function (c1x, c1y, c2x, c2y, x, y) {
        if (!this.points.length)
            return;
        var prev = this.points[this.points.length - 1];
        prev.after.x = c1x;
        prev.after.y = c1y;
        this.addPoint(new _point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](c2x, c2y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y)));
    };
    BezierCurve.prototype.quadraticCurveTo = function (cx, cy, x, y) {
        if (!this.points.length)
            return;
        var prev = this.points[this.points.length - 1];
        prev.after.x = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_4__["lerp"])(2 / 3, prev.base.x, cx);
        prev.after.y = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_4__["lerp"])(2 / 3, prev.base.y, cy);
        this.addPoint(new _point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_4__["lerp"])(1 / 3, cx, x), Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_4__["lerp"])(1 / 3, cy, y)), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](x, y)));
    };
    Object.defineProperty(BezierCurve.prototype, "clockwise", {
        // see: https://www.element84.com/blog/determining-the-winding-of-a-polygon-given-as-a-set-of-ordered-points
        get: function () {
            var sum = 0;
            for (var i = 0; i < this.points.length; i++) {
                var point = this.points[i].base;
                var next = this.points[(i + 1) % this.points.length].base;
                sum += (next.x - point.x) * (next.y - point.y);
            }
            return sum < 0; // inverted Y axis!
        },
        enumerable: false,
        configurable: true
    });
    BezierCurve.prototype.reverse = function () {
        this.points.forEach(function (p) { return p.reverse(); });
        this.points = this.points.reverse();
    };
    BezierCurve.getPath2D = function (beziers) {
        var path = new Path2D();
        for (var _i = 0, beziers_1 = beziers; _i < beziers_1.length; _i++) {
            var bezier = beziers_1[_i];
            for (var i = 0; i < bezier.points.length; i++) {
                var p1 = bezier.points[i];
                var p2 = bezier.points[(i + 1) % bezier.points.length];
                if (i === 0)
                    path.moveTo(p1.base.x, p1.base.y);
                path.bezierCurveTo(p1.after.x, p1.after.y, p2.before.x, p2.before.y, p2.base.x, p2.base.y);
            }
        }
        return path;
    };
    BezierCurve.prototype.getPaperPath = function () {
        var path = new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path();
        if (!this.points.length)
            return path;
        var first = this.points[0].base;
        path.moveTo(new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(first.x, first.y));
        for (var i = 0; i < this.points.length; i++) {
            var pt = this.points[i];
            var next = this.points[(i + 1) % this.points.length];
            var c1 = pt.after;
            var c2 = next.before;
            var b = next.base;
            path.cubicCurveTo(new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(c1.x, c1.y), new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(c2.x, c2.y), new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(b.x, b.y));
        }
        path.closePath();
        return path;
    };
    BezierCurve.fromPaperPath = function (path) {
        var curve = new BezierCurve();
        path.segments.forEach(function (seg) { return curve.addPoint(new _point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x, seg.point.y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x + seg.handleIn.x, seg.point.y + seg.handleIn.y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x + seg.handleOut.x, seg.point.y + seg.handleOut.y))); });
        return curve;
    };
    BezierCurve.fromPaperPathItem = function (item) {
        if (item instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path)
            return [BezierCurve.fromPaperPath(item)];
        else if (item instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.CompoundPath)
            return item.children.map(function (ch) {
                if (ch instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path)
                    return BezierCurve.fromPaperPath(ch);
                return null;
            }).filter(function (c) { return c; });
        return [];
    };
    return BezierCurve;
}(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]));



/***/ }),

/***/ "./src/typeedit/geometry/bezier/point.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/geometry/bezier/point.ts ***!
  \***********************************************/
/*! exports provided: BezierPointType, BezierPoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPointType", function() { return BezierPointType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPoint", function() { return BezierPoint; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BezierPointType;
(function (BezierPointType) {
    BezierPointType[BezierPointType["free"] = 0] = "free";
    BezierPointType[BezierPointType["auto"] = 1] = "auto";
    BezierPointType[BezierPointType["sharp"] = 2] = "sharp";
})(BezierPointType || (BezierPointType = {}));
var BezierPoint = /** @class */ (function (_super) {
    __extends(BezierPoint, _super);
    function BezierPoint(base, before, after, type) {
        if (type === void 0) { type = BezierPointType.auto; }
        var _this = _super.call(this) || this;
        _this.base = base;
        _this.before = before;
        _this.after = after;
        _this.type = type;
        _this.curve = null;
        _this.on("modified", function () {
            if (_this.curve)
                _this.curve.emit("modified");
        });
        return _this;
    }
    BezierPoint.prototype.reverse = function () {
        var t = this.before;
        this.before = this.after;
        this.after = t;
    };
    BezierPoint.prototype.determineType = function () {
        var radius1 = this.after.distance(this.base);
        var radius2 = this.before.distance(this.base);
        if (radius1 < 0.0001 && radius2 < 0.0001) {
            this.type = BezierPointType.sharp;
            return;
        }
        var angle1 = this.after.angle(this.base);
        var angle2 = this.before.angle(this.base);
        var angleDiff = Math.abs(angle1 - angle2);
        var piDiff = angleDiff / Math.PI;
        if (Math.abs(piDiff - Math.round(piDiff)) < 0.0001)
            this.type = BezierPointType.auto;
    };
    BezierPoint.prototype.movePoint = function (point, dPos) {
        if (point === this.base) {
            this.base.move(dPos.x, dPos.y);
            this.before.move(dPos.x, dPos.y);
            this.after.move(dPos.x, dPos.y);
        }
        else {
            var otherPoint = point === this.before ?
                this.after : this.before;
            point.move(dPos.x, dPos.y);
            if (this.type === BezierPointType.auto) {
                var otherRadius = otherPoint.distance(this.base);
                var angle = point.angle(this.base);
                otherPoint.x = otherRadius * Math.cos(angle + Math.PI) + this.base.x;
                otherPoint.y = otherRadius * Math.sin(angle + Math.PI) + this.base.y;
            }
        }
        this.curve.emit("modified");
    };
    return BezierPoint;
}(events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]));



/***/ }),

/***/ "./src/typeedit/geometry/point.ts":
/*!****************************************!*\
  !*** ./src/typeedit/geometry/point.ts ***!
  \****************************************/
/*! exports provided: Point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    Point.prototype.distance = function (other) {
        return Math.hypot(this.x - other.x, this.y - other.y);
    };
    Point.prototype.angle = function (origin) {
        return Math.atan2(this.y - origin.y, this.x - origin.x);
    };
    Point.prototype.getDiff = function (last) {
        return new Point(this.x - last.x, this.y - last.y);
    };
    Point.prototype.copy = function (ref) {
        this.x = ref.x;
        this.y = ref.y;
    };
    return Point;
}());



/***/ }),

/***/ "./src/typeedit/io/ftex/ftex.ts":
/*!**************************************!*\
  !*** ./src/typeedit/io/ftex/ftex.ts ***!
  \**************************************/
/*! exports provided: FTEX1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FTEX1", function() { return FTEX1; });
/* harmony import */ var smart_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smart-buffer */ "smart-buffer");
/* harmony import */ var smart_buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smart_buffer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zlib */ "zlib");
/* harmony import */ var zlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zlib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _font_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../font/font */ "./src/typeedit/font/font.ts");
/* harmony import */ var _font_glyph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../font/glyph */ "./src/typeedit/font/glyph.ts");
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var fontInfoIndices = [
    "copyright",
    "description",
    "designer",
    "designerURL",
    "fontFamily",
    "fontSubfamily",
    "fullName",
    "license",
    "licenseURL",
    "manufacturer",
    "manufacturerURL",
    "postScriptName",
    "uniqueID",
    "version",
    "trademark",
    "compatibleFullName"
];
var FTEX1 = /** @class */ (function () {
    function FTEX1() {
        this.ftexVersion = 1;
        this.outl = [];
        this.glph = [];
        this.fnam = [];
        this.defl = [];
    }
    Object.defineProperty(FTEX1.prototype, "tableCount", {
        get: function () {
            var count = 0;
            if (this.fnam.length)
                count++;
            if (this.fmet)
                count++;
            if (this.outl.length)
                count++;
            if (this.glph.length)
                count++;
            return count;
        },
        enumerable: false,
        configurable: true
    });
    FTEX1.fromFont = function (font) {
        var ftex = new FTEX1();
        ftex.setFMET(font);
        ftex.setGLPH(font);
        ftex.setFNAM(font);
        return ftex;
    };
    FTEX1.prototype.getFont = function () {
        var _this = this;
        if (this.tableCount < 4)
            return null;
        var info = {};
        this.fnam.forEach(function (name) { return info[fontInfoIndices[name.index]] = name.name; });
        var metrics = this.fmet;
        var font = new _font_font__WEBPACK_IMPORTED_MODULE_2__["Font"](info, metrics, []);
        this.glph.forEach(function (g) {
            if (!g.outlines.length)
                return;
            font.addGlyph(new _font_glyph__WEBPACK_IMPORTED_MODULE_3__["Glyph"](font, g.name, (g.codePoint === 0) ? undefined : g.codePoint, {
                leftBearing: g.leftSide,
                rightBearing: g.rightSide
            }, _this.getCurvesFromOUTL(_this.outl[g.outlines[0]])));
        });
        return font;
    };
    FTEX1.prototype.getCurvesFromOUTL = function (outl) {
        return outl.startIndices.map(function (index, i) {
            var handles = (i === outl.startIndices.length - 1) ?
                outl.handles.slice(index) :
                outl.handles.slice(index, outl.startIndices[i + 1]);
            var curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_4__["BezierCurve"]();
            handles.forEach(function (h) {
                var point = new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_5__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_6__["Point"](h.base[0], h.base[1]), new _geometry_point__WEBPACK_IMPORTED_MODULE_6__["Point"](h.before[0], h.before[1]), new _geometry_point__WEBPACK_IMPORTED_MODULE_6__["Point"](h.after[0], h.after[1]));
                point.type = h.type;
                curve.addPoint(point);
            });
            return curve;
        });
    };
    FTEX1.prototype.encode = function () {
        var buf = new smart_buffer__WEBPACK_IMPORTED_MODULE_0__["SmartBuffer"]();
        this.encodeFTEXHeader(buf);
        // The OUTL table will be compressed by default
        var outlData = new smart_buffer__WEBPACK_IMPORTED_MODULE_0__["SmartBuffer"]();
        this.encodeOUTL(outlData);
        this.compressTable(outlData);
        this.encodeDEFL(buf);
        if (this.fnam.length)
            this.encodeFNAM(buf);
        if (this.fmet)
            this.encodeFMET(buf);
        // if (this.outl.length) this.encodeOUTL(buf)
        if (this.glph.length)
            this.encodeGLPH(buf);
        return buf;
    };
    FTEX1.prototype.decode = function (buffer) {
        var _this = this;
        if (buffer.readString(4, "ascii") !== "FTEX")
            throw new Error("Not a supported FTEX file.");
        if (buffer.readUInt8() !== this.ftexVersion)
            throw new Error("Not a supported FTEX version.");
        var numTables = buffer.readUInt16LE();
        var requiredTables = [
            "OUTL", "GLPH", "FMET", "FNAM"
        ];
        var supportedTables = __spreadArrays(requiredTables, [
            "DEFL"
        ]);
        for (var i = 0; i < numTables; i++) {
            var tag = buffer.readString(4, "ascii");
            if (!supportedTables.includes(tag))
                throw new Error("Unsupported table: " + tag + ".");
            var index = requiredTables.indexOf(tag);
            if (index >= 0)
                requiredTables.splice(index, 1);
            this.decodeTable(tag, buffer);
        }
        this.defl.forEach(function (buf) {
            var tableBuffer = _this.decompressTable(buf);
            var tag = tableBuffer.readString(4, "ascii");
            if (!supportedTables.includes(tag))
                throw new Error("Unsupported table: " + tag + ".");
            var index = requiredTables.indexOf(tag);
            if (index >= 0)
                requiredTables.splice(index, 1);
            _this.decodeTable(tag, tableBuffer);
        });
        if (requiredTables.length)
            throw new Error("The following required tables were not found: " + requiredTables.join(", ") + ".");
    };
    FTEX1.prototype.decodeTable = function (tag, buffer) {
        switch (tag) {
            case "DEFL":
                this.decodeDEFL(buffer);
                break;
            case "FMET":
                this.decodeFMET(buffer);
                break;
            case "FNAM":
                this.decodeFNAM(buffer);
                break;
            case "OUTL":
                this.decodeOUTL(buffer);
                break;
            case "GLPH":
                this.decodeGLPH(buffer);
                break;
        }
    };
    FTEX1.prototype.encodeVString = function (buf, str) {
        buf.writeUInt16LE(str.length);
        buf.writeString(str, "utf-8");
    };
    FTEX1.prototype.decodeVString = function (buf) {
        var length = buf.readUInt16LE();
        return buf.readString(length, "utf-8");
    };
    // FTEX - File Header
    FTEX1.prototype.encodeFTEXHeader = function (buffer) {
        buffer.writeString("FTEX", "ascii");
        buffer.writeUInt8(this.ftexVersion);
        buffer.writeUInt16LE(this.tableCount);
    };
    // DEFL - Compressed Tables
    FTEX1.prototype.compressTable = function (table) {
        var buf = table.toBuffer();
        this.defl.push(Object(zlib__WEBPACK_IMPORTED_MODULE_1__["deflateSync"])(buf));
    };
    FTEX1.prototype.decompressTable = function (defl) {
        return smart_buffer__WEBPACK_IMPORTED_MODULE_0__["SmartBuffer"].fromBuffer(Object(zlib__WEBPACK_IMPORTED_MODULE_1__["inflateSync"])(defl));
    };
    FTEX1.prototype.encodeDEFL = function (buffer) {
        buffer.writeString("DEFL", "ascii");
        buffer.writeUInt16LE(this.defl.length);
        this.defl.forEach(function (buf) {
            buffer.writeUInt32LE(buf.length);
            buffer.writeBuffer(buf);
        });
    };
    FTEX1.prototype.decodeDEFL = function (buffer) {
        var count = buffer.readUInt16LE();
        for (var i = 0; i < count; i++) {
            var length_1 = buffer.readUInt32LE();
            this.defl.push(buffer.readBuffer(length_1));
        }
    };
    // FMET - Font Vertical Metrics
    FTEX1.prototype.setFMET = function (font) {
        this.fmet = font.metrics;
    };
    FTEX1.prototype.encodeFMET = function (buffer) {
        buffer.writeString("FMET", "ascii");
        buffer.writeFloatLE(this.fmet.ascender);
        buffer.writeFloatLE(this.fmet.descender);
        buffer.writeFloatLE(this.fmet.xHeight);
    };
    FTEX1.prototype.decodeFMET = function (buffer) {
        this.fmet = {
            ascender: buffer.readFloatLE(),
            descender: buffer.readFloatLE(),
            xHeight: buffer.readFloatLE()
        };
    };
    // OUTL - Outlines
    FTEX1.prototype.addOUTL = function (beziers) {
        var handles = beziers.map(function (b) { return b.points; }).flat().map(function (p) {
            return {
                type: p.type,
                base: [p.base.x, p.base.y],
                before: [p.before.x, p.before.y],
                after: [p.after.x, p.after.y]
            };
        });
        var startIndices = [];
        var acc = 0;
        beziers.forEach(function (b) {
            startIndices.push(acc);
            acc += b.points.length;
        });
        return this.outl.push({
            handles: handles,
            startIndices: startIndices
        }) - 1;
    };
    FTEX1.prototype.encodeOUTL = function (buffer) {
        buffer.writeString("OUTL", "ascii");
        buffer.writeUInt32LE(this.outl.length);
        this.outl.forEach(function (outl) {
            buffer.writeUInt16LE(outl.handles.length);
            buffer.writeUInt16LE(outl.startIndices.length);
            outl.handles.forEach(function (h) {
                buffer.writeUInt8(h.type);
                buffer.writeFloatLE(h.base[0]);
                buffer.writeFloatLE(h.base[1]);
                buffer.writeFloatLE(h.before[0]);
                buffer.writeFloatLE(h.before[1]);
                buffer.writeFloatLE(h.after[0]);
                buffer.writeFloatLE(h.after[1]);
            });
            outl.startIndices.forEach(function (idx) { return buffer.writeUInt16LE(idx); });
        });
    };
    FTEX1.prototype.decodeOUTL = function (buffer) {
        var count = buffer.readUInt32LE();
        for (var i = 0; i < count; i++) {
            var handleCount = buffer.readInt16LE();
            var curveCount = buffer.readInt16LE();
            var handles = [];
            var startIndices = [];
            for (var j = 0; j < handleCount; j++) {
                handles.push({
                    type: buffer.readUInt8(),
                    base: [
                        buffer.readFloatLE(),
                        buffer.readFloatLE()
                    ],
                    before: [
                        buffer.readFloatLE(),
                        buffer.readFloatLE()
                    ],
                    after: [
                        buffer.readFloatLE(),
                        buffer.readFloatLE()
                    ]
                });
            }
            for (var j = 0; j < curveCount; j++) {
                startIndices.push(buffer.readUInt16LE());
            }
            this.outl.push({
                handles: handles, startIndices: startIndices
            });
        }
    };
    // GLPH - Glyphs
    FTEX1.prototype.setGLPH = function (font) {
        var _this = this;
        font.glyphs.forEach(function (g) {
            var outlines = [g.beziers].map(function (beziers) { return _this.addOUTL(beziers); });
            _this.glph.push({
                codePoint: g.codePoint,
                leftSide: g.metrics.leftBearing,
                rightSide: g.metrics.rightBearing,
                name: g.name,
                outlines: outlines
            });
        });
    };
    FTEX1.prototype.encodeGLPH = function (buffer) {
        var _this = this;
        buffer.writeString("GLPH", "ascii");
        buffer.writeUInt32LE(this.glph.length);
        this.glph.forEach(function (g) {
            var _a;
            buffer.writeUInt32LE((_a = g.codePoint) !== null && _a !== void 0 ? _a : 0);
            _this.encodeVString(buffer, g.name);
            buffer.writeFloatLE(g.leftSide);
            buffer.writeFloatLE(g.rightSide);
            buffer.writeUInt16LE(g.outlines.length);
            g.outlines.forEach(function (idx) { return buffer.writeUInt32LE(idx); });
        });
    };
    FTEX1.prototype.decodeGLPH = function (buffer) {
        var count = buffer.readUInt32LE();
        for (var i = 0; i < count; i++) {
            var outlines = [];
            var glyph = {
                codePoint: buffer.readUInt32LE(),
                name: this.decodeVString(buffer),
                leftSide: buffer.readFloatLE(),
                rightSide: buffer.readFloatLE(),
                outlines: outlines
            };
            var outlineCount = buffer.readUInt16LE();
            for (var j = 0; j < outlineCount; j++) {
                outlines.push(buffer.readUInt32LE());
            }
            this.glph.push(glyph);
        }
    };
    // FNAM - Font Names
    FTEX1.prototype.setFNAM = function (font) {
        var _this = this;
        Object.keys(font.info).forEach(function (key) {
            var index = fontInfoIndices.indexOf(key);
            if (index < 0)
                return;
            _this.fnam.push({
                index: index,
                name: font.info[key]
            });
        });
    };
    FTEX1.prototype.encodeFNAM = function (buffer) {
        var _this = this;
        buffer.writeString("FNAM", "ascii");
        buffer.writeUInt8(this.fnam.length);
        this.fnam.forEach(function (n) {
            buffer.writeUInt8(n.index);
            _this.encodeVString(buffer, n.name);
        });
    };
    FTEX1.prototype.decodeFNAM = function (buffer) {
        var count = buffer.readUInt8();
        for (var i = 0; i < count; i++) {
            var type = buffer.readUInt8();
            var str = this.decodeVString(buffer);
            this.fnam.push({
                index: type,
                name: str
            });
        }
    };
    return FTEX1;
}());



/***/ }),

/***/ "./src/typeedit/io/io.ts":
/*!*******************************!*\
  !*** ./src/typeedit/io/io.ts ***!
  \*******************************/
/*! exports provided: openFont, saveFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFont", function() { return openFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFont", function() { return saveFont; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var smart_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! smart-buffer */ "smart-buffer");
/* harmony import */ var smart_buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(smart_buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ftex_ftex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ftex/ftex */ "./src/typeedit/io/ftex/ftex.ts");
/* harmony import */ var _opentype_js_export__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./opentype.js/export */ "./src/typeedit/io/opentype.js/export.ts");
/* harmony import */ var _opentype_js_import__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./opentype.js/import */ "./src/typeedit/io/opentype.js/import.ts");






function openFont(filePath) {
    var ext = Object(path__WEBPACK_IMPORTED_MODULE_1__["extname"])(filePath.toLowerCase());
    if (ext === ".ftex") {
        // FTE Font
        var ftex = new _ftex_ftex__WEBPACK_IMPORTED_MODULE_3__["FTEX1"]();
        ftex.decode(smart_buffer__WEBPACK_IMPORTED_MODULE_2__["SmartBuffer"].fromBuffer(Object(fs__WEBPACK_IMPORTED_MODULE_0__["readFileSync"])(filePath)));
        return ftex.getFont();
    }
    else {
        // Opentype.js, take over
        return Object(_opentype_js_import__WEBPACK_IMPORTED_MODULE_5__["importFont_opentype"])(filePath);
    }
}
function saveFont(font, filePath) {
    var ext = Object(path__WEBPACK_IMPORTED_MODULE_1__["extname"])(filePath.toLowerCase());
    if (ext === ".ftex") {
        // FTE Font
        var ftex = _ftex_ftex__WEBPACK_IMPORTED_MODULE_3__["FTEX1"].fromFont(font);
        var buf = ftex.encode().toBuffer();
        Object(fs__WEBPACK_IMPORTED_MODULE_0__["writeFileSync"])(filePath, buf);
    }
    else if (ext === ".ttf" || ext === ".otf") {
        // Opentype.js
        Object(_opentype_js_export__WEBPACK_IMPORTED_MODULE_4__["exportFont_opentype"])(font, filePath);
    }
}


/***/ }),

/***/ "./src/typeedit/io/opentype.js/export.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/io/opentype.js/export.ts ***!
  \***********************************************/
/*! exports provided: exportFont_opentype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportFont_opentype", function() { return exportFont_opentype; });
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentype.js */ "opentype.js");
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentype_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};


function glyphToOTPath(glyph, targetCapHeight) {
    if (targetCapHeight === void 0) { targetCapHeight = 1000; }
    var path = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Path"]();
    var scaleFactor = targetCapHeight / 512;
    var conv = function (point) {
        return {
            x: (point.x - glyph.metrics.leftBearing) * scaleFactor,
            y: (512 - point.y) * scaleFactor
        };
    };
    for (var _i = 0, _a = glyph.finalBeziers; _i < _a.length; _i++) {
        var bezier = _a[_i];
        if (!bezier.points.length)
            continue;
        var first = conv(bezier.points[0].base);
        path.moveTo(first.x, first.y);
        for (var i = 0; i < bezier.points.length; i++) {
            var pt = bezier.points[i];
            var next = bezier.points[(i + 1) % bezier.points.length];
            var c1 = conv(pt.after);
            var c2 = conv(next.before);
            var b = conv(next.base);
            path.curveTo(c1.x, c1.y, c2.x, c2.y, b.x, b.y);
        }
        path.closePath();
    }
    return path;
}
function exportFont_opentype(font, targetFile) {
    var notDef = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Glyph"]({
        name: ".notdef",
        unicode: 0,
        advanceWidth: 650,
        path: new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Path"]()
    });
    var targetCapHeight = 2000;
    var scaleFactor = targetCapHeight / 512;
    var otfont = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Font"]({
        familyName: font.info.fontFamily,
        styleName: font.info.fontSubfamily,
        postScriptName: font.info.fontFamily + "-" + font.info.fontSubfamily,
        unitsPerEm: (font.metrics.descender - font.metrics.ascender) * scaleFactor,
        ascender: (512 - font.metrics.ascender) * scaleFactor,
        descender: (512 - font.metrics.descender) * scaleFactor,
        glyphs: __spreadArrays(font.glyphs.map(function (g) { return new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Glyph"]({
            name: g.name,
            unicode: g.codePoint,
            advanceWidth: Math.round((g.metrics.rightBearing - g.metrics.leftBearing) * scaleFactor),
            path: glyphToOTPath(g, targetCapHeight)
        }); }), [
            notDef
        ]),
        ///@ts-ignore
        tables: {
            version: 4,
            achVendID: "SFTE",
            sCapHeight: targetCapHeight,
            sxHeight: (512 - font.metrics.xHeight) * scaleFactor,
            sTypoAscender: (512 - font.metrics.ascender) * scaleFactor,
            sTypoDescender: (512 - font.metrics.descender) * scaleFactor
        }
    });
    var buf = Buffer.from(otfont.toArrayBuffer());
    Object(fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"])(targetFile, buf);
}


/***/ }),

/***/ "./src/typeedit/io/opentype.js/import.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/io/opentype.js/import.ts ***!
  \***********************************************/
/*! exports provided: importFont_opentype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFont_opentype", function() { return importFont_opentype; });
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentype.js */ "opentype.js");
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentype_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _font_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../font/font */ "./src/typeedit/font/font.ts");
/* harmony import */ var _font_glyph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../font/glyph */ "./src/typeedit/font/glyph.ts");
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _utils_lerp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/lerp */ "./src/typeedit/utils/lerp.ts");







function convertOTCoordinates(otfont, x, y) {
    var scaleFactor = 512 / otfont.tables.os2.sCapHeight;
    return {
        x: x * scaleFactor,
        y: (otfont.tables.os2.sCapHeight - y) * scaleFactor // easier to work with
    };
}
function generateCurvesFromOTGlyph(otfont, otglyph) {
    var curves = [];
    var curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
    var conv = function (x, y) { return convertOTCoordinates(otfont, x, y); };
    ///@ts-ignore
    otglyph.path.commands.forEach(function (cmd) {
        switch (cmd.type) {
            case "M": {
                if (curve.points.length)
                    curves.push(curve);
                curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
                var coords = conv(cmd.x, cmd.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPointType"].free));
                break;
            }
            case "L": {
                var coords = conv(cmd.x, cmd.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "C": {
                var c1coords = conv(cmd.x1, cmd.y1);
                var c2coords = conv(cmd.x2, cmd.y2);
                var coords = conv(cmd.x, cmd.y);
                if (!curve.points.length)
                    return; // WHO MALFORMED MY OTF
                var prevPoint = curve.points[curve.points.length - 1];
                prevPoint.after.x = c1coords.x;
                prevPoint.after.y = c1coords.y;
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](c2coords.x, c2coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "Q": {
                var c1coords = conv(cmd.x1, cmd.y1);
                var coords = conv(cmd.x, cmd.y);
                if (!curve.points.length)
                    return; // WHO MALFORMED MY OTF
                var prevPoint = curve.points[curve.points.length - 1];
                prevPoint.after.x = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.x, prevPoint.base.x);
                prevPoint.after.y = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.y, prevPoint.base.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.x, coords.x), Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.y, coords.y)), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "Z": {
                if (curve.points.length) {
                    var first = curve.points[0];
                    if (curve.points.length > 1) {
                        var last = curve.points[curve.points.length - 1];
                        if (first.base.x === last.base.x &&
                            first.base.y === last.base.y) {
                            first.before.x = last.before.x;
                            first.before.y = last.before.y;
                            curve.points.splice(curve.points.length - 1, 1);
                        }
                    }
                    curve.points.forEach(function (p) { return p.determineType(); });
                    curves.push(curve);
                }
                curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
                break;
            }
        }
    });
    if (curve.points.length) {
        curve.points.forEach(function (p) { return p.determineType(); });
        curves.push(curve);
    }
    return curves;
}
function fteGlyphFromOTGlyph(font, otfont, otglyph) {
    var scaleFactor = 512 / otfont.tables.os2.sCapHeight;
    var beziers = generateCurvesFromOTGlyph(otfont, otglyph);
    var glyphMetrics = otglyph.getMetrics();
    return new _font_glyph__WEBPACK_IMPORTED_MODULE_2__["Glyph"](font, otglyph.name, otglyph.unicode, {
        leftBearing: 0,
        rightBearing: (glyphMetrics.rightSideBearing + glyphMetrics.xMax) * scaleFactor
    }, beziers);
}
function fteFontFromOTFont(otfont) {
    var glyphs = []; // For now, don't want to import the entirety of Inter just yet
    var scaleFactor = 512 / otfont.tables.os2.sCapHeight;
    var info = {};
    var names = otfont.names;
    Object.keys(otfont.names).forEach(function (k) {
        var _a, _b;
        if (!names[k])
            info[k] = "";
        info[k] = (_b = (_a = names[k]) === null || _a === void 0 ? void 0 : _a.en) !== null && _b !== void 0 ? _b : "";
    });
    return new _font_font__WEBPACK_IMPORTED_MODULE_1__["Font"](info, {
        descender: -otfont.descender * scaleFactor + 512,
        ascender: -(otfont.ascender - otfont.tables.os2.sCapHeight) * scaleFactor,
        xHeight: (otfont.tables.os2.sCapHeight - otfont.tables.os2.sxHeight) * scaleFactor
    }, glyphs);
}
function importFont_opentype(filePath) {
    var otfont = Object(opentype_js__WEBPACK_IMPORTED_MODULE_0__["loadSync"])(filePath);
    var font = fteFontFromOTFont(otfont);
    var glyphs = [];
    for (var i = 0; i < otfont.glyphs.length; i++) {
        glyphs.push(fteGlyphFromOTGlyph(font, otfont, otfont.glyphs.get(i)));
    }
    font.addGlyph.apply(font, glyphs);
    return font;
}


/***/ }),

/***/ "./src/typeedit/io/otfcc/import.ts":
/*!*****************************************!*\
  !*** ./src/typeedit/io/otfcc/import.ts ***!
  \*****************************************/
/*! exports provided: setOtfccPath, importFontData_otfcc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setOtfccPath", function() { return setOtfccPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFontData_otfcc", function() { return importFontData_otfcc; });
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var otfccPath;
function setOtfccPath(path) {
    otfccPath = path;
}
var novar = function (x) {
    if (typeof x === "number")
        return x;
    return x[0];
};
function convertOTFCCCoordinates(data, x, y) {
    var scaleFactor = 512 / data.OS_2.sCapHeight;
    return {
        x: x * scaleFactor,
        y: (data.OS_2.sCapHeight - y) * scaleFactor // easier to work with
    };
}
function importFontData_otfcc(filePath) {
    return __awaiter(this, void 0, void 0, function () {
        var stdout, data;
        return __generator(this, function (_a) {
            if (!otfccPath)
                return [2 /*return*/];
            stdout = Object(child_process__WEBPACK_IMPORTED_MODULE_0__["execSync"])("\"" + Object(path__WEBPACK_IMPORTED_MODULE_1__["join"])(otfccPath, "otfccdump") + "\" \"" + filePath + "\"", {
                maxBuffer: 100 * 1024 * 1024
            }).toString("utf-8").trim();
            data = JSON.parse(stdout);
            return [2 /*return*/, data];
        });
    });
}


/***/ }),

/***/ "./src/typeedit/settings/defaults.ts":
/*!*******************************************!*\
  !*** ./src/typeedit/settings/defaults.ts ***!
  \*******************************************/
/*! exports provided: defaultAppSettings, defaultPerFontSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultAppSettings", function() { return defaultAppSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultPerFontSettings", function() { return defaultPerFontSettings; });
var defaultAppSettings = {
    theme: "dark"
};
var defaultPerFontSettings = {
    gridActive: true,
    gridMainGap: 16,
    gridSubdivisions: 4
};


/***/ }),

/***/ "./src/typeedit/settings/proxy.ts":
/*!****************************************!*\
  !*** ./src/typeedit/settings/proxy.ts ***!
  \****************************************/
/*! exports provided: createSettingsProxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSettingsProxy", function() { return createSettingsProxy; });
function createSettingsProxy(source, defaults, eventTarget) {
    return new Proxy(defaults, {
        get: function (o, key, recv) {
            if (key in source)
                return source[key];
            return defaults[key];
        },
        set: function (o, key, value, recv) {
            source[key] = value;
            eventTarget.emit("settingChanged", key);
            return true;
        },
        deleteProperty: function (o, key) {
            if (key in source)
                delete source[key];
            return true;
        }
    });
}


/***/ }),

/***/ "./src/typeedit/settings/settings.ts":
/*!*******************************************!*\
  !*** ./src/typeedit/settings/settings.ts ***!
  \*******************************************/
/*! exports provided: settingsEvent, settings, createFontSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsEvent", function() { return settingsEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontSettings", function() { return createFontSettings; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaults__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaults */ "./src/typeedit/settings/defaults.ts");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proxy */ "./src/typeedit/settings/proxy.ts");



var appSettings = {};
var settingsEvent = new events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
var settings = Object(_proxy__WEBPACK_IMPORTED_MODULE_2__["createSettingsProxy"])(appSettings, _defaults__WEBPACK_IMPORTED_MODULE_1__["defaultAppSettings"], settingsEvent);
function createFontSettings(font, settings) {
    return Object(_proxy__WEBPACK_IMPORTED_MODULE_2__["createSettingsProxy"])(settings, _defaults__WEBPACK_IMPORTED_MODULE_1__["defaultPerFontSettings"], font);
}


/***/ }),

/***/ "./src/typeedit/styles/app.scss":
/*!**************************************!*\
  !*** ./src/typeedit/styles/app.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/styles/app/controls.scss":
/*!***********************************************!*\
  !*** ./src/typeedit/styles/app/controls.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./controls.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/controls.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/styles/app/editor.scss":
/*!*********************************************!*\
  !*** ./src/typeedit/styles/app/editor.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/editor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/styles/app/main.scss":
/*!*******************************************!*\
  !*** ./src/typeedit/styles/app/main.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/styles/app/panel.scss":
/*!********************************************!*\
  !*** ./src/typeedit/styles/app/panel.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./panel.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/app/panel.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/styles/welcome.scss":
/*!******************************************!*\
  !*** ./src/typeedit/styles/welcome.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./welcome.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/typeedit/styles/welcome.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/typeedit/ui/actionbar.ts":
/*!**************************************!*\
  !*** ./src/typeedit/ui/actionbar.ts ***!
  \**************************************/
/*! exports provided: updateSubactions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSubactions", function() { return updateSubactions; });
/* harmony import */ var _utils_accelerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/accelerator */ "./src/typeedit/utils/accelerator.ts");

var subactionContainer = document.querySelector("div.subactions");
function updateSubactions(viewport, subactionGroups) {
    subactionContainer.innerHTML = "";
    for (var _i = 0, subactionGroups_1 = subactionGroups; _i < subactionGroups_1.length; _i++) {
        var group = subactionGroups_1[_i];
        var subactionGroup = document.createElement("div");
        var _loop_1 = function (subaction) {
            var button = document.createElement("button");
            button.title = "" + subaction.name + (subaction.accelerator ? " (" + Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_0__["accelStringToUserFriendly"])(subaction.accelerator) + ")" : "");
            button.addEventListener("click", function () {
                subaction.handler();
                viewport.render();
            });
            button.innerHTML = "\n                <img src=\"res/icons/" + subaction.icon + ".svg\">\n            ";
            subactionGroup.appendChild(button);
        };
        for (var _a = 0, group_1 = group; _a < group_1.length; _a++) {
            var subaction = group_1[_a];
            _loop_1(subaction);
        }
        subactionContainer.appendChild(subactionGroup);
    }
}


/***/ }),

/***/ "./src/typeedit/ui/glyphBar.ts":
/*!*************************************!*\
  !*** ./src/typeedit/ui/glyphBar.ts ***!
  \*************************************/
/*! exports provided: getGlyphBarGlyphs, appendCharacter, prepareGlyphBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGlyphBarGlyphs", function() { return getGlyphBarGlyphs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendCharacter", function() { return appendCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareGlyphBar", function() { return prepareGlyphBar; });
/* harmony import */ var _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport/context/glyph */ "./src/typeedit/viewport/context/glyph.ts");

var glyphBar = document.querySelector("div.glyphBar");
function getGlyphBarGlyphs(allGlyphs) {
    var glyphs = [];
    glyphBar.childNodes.forEach(function (node) {
        if (node instanceof Text) {
            glyphs.push.apply(glyphs, node.textContent.split("").map(function (chr) { return allGlyphs.find(function (g) { return g.codePoint === chr.codePointAt(0); }); }));
        }
        else if (node instanceof HTMLDivElement) {
            glyphs.push(allGlyphs.find(function (g) { return g.name === node.textContent; }));
        }
    });
    return glyphs;
}
function appendCharacter(glyph) {
    if (glyph.codePoint >= 32) {
        glyphBar.append(String.fromCharCode(glyph.codePoint));
    }
    else {
        var nonTextGlyph = document.createElement("div");
        nonTextGlyph.className = "ntglyph";
        nonTextGlyph.contentEditable = "false";
        nonTextGlyph.innerHTML = "<span>" + glyph.name + "</span>";
        glyphBar.appendChild(nonTextGlyph);
    }
    glyphBar.dispatchEvent(new InputEvent("input"));
}
function prepareGlyphBar(viewport) {
    glyphBar.addEventListener("keydown", function (e) {
        if (e.code === "KeyZ" && e.ctrlKey) {
            e.preventDefault();
        }
    });
    glyphBar.addEventListener("input", function () {
        if (!(viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__["GlyphContext"]))
            return;
        var glyphs = getGlyphBarGlyphs(viewport.context.glyph.font.glyphs);
        if (!glyphs.length)
            return;
        viewport.context.setGlyphs(glyphs);
        viewport.tool.updateContext(viewport.context);
        viewport.render();
    });
    document.querySelector("button.prevGlyph").addEventListener("click", function () {
        if (!(viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__["GlyphContext"]))
            return;
        viewport.context.setGlyphs(null, viewport.context.currentIndex === 0 ?
            viewport.context.glyphs.length - 1 :
            viewport.context.currentIndex - 1);
        viewport.tool.updateContext(viewport.context);
        viewport.render();
    });
    document.querySelector("button.nextGlyph").addEventListener("click", function () {
        if (!(viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__["GlyphContext"]))
            return;
        viewport.context.setGlyphs(null, viewport.context.currentIndex === viewport.context.glyphs.length - 1 ?
            0 :
            viewport.context.currentIndex + 1);
        viewport.tool.updateContext(viewport.context);
        viewport.render();
    });
}


/***/ }),

/***/ "./src/typeedit/ui/glyphList.ts":
/*!**************************************!*\
  !*** ./src/typeedit/ui/glyphList.ts ***!
  \**************************************/
/*! exports provided: setActiveGlyph, prepareGlyphList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveGlyph", function() { return setActiveGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareGlyphList", function() { return prepareGlyphList; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _glyphBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glyphBar */ "./src/typeedit/ui/glyphBar.ts");


var glyphListContainer = document.querySelector("div.glyphList");
function drawGlyphPreview(glyph) {
    var canvas = glyphListContainer.querySelector("div[data-name=\"" + glyph.name + "\"] canvas");
    if (!canvas)
        return;
    var ctx = canvas.getContext("2d");
    ctx.resetTransform();
    ctx.clearRect(0, 0, 90, 90);
    var path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
    var width = (glyph.metrics.rightBearing - glyph.metrics.leftBearing) * 50 / 512;
    ctx.translate((90 - width) / 2, 20);
    ctx.scale(50 / 512, 50 / 512);
    ctx.fillStyle = "#000";
    ctx.fill(path);
}
function setActiveGlyph(glyph) {
    var currentActiveGlyph = glyphListContainer.querySelector("div.glyph.active");
    if (currentActiveGlyph)
        currentActiveGlyph.classList.remove("active");
    document.querySelector("div[data-name=\"" + glyph.name + "\"]").classList.add("active");
}
function prepareGlyphList(font) {
    glyphListContainer.innerHTML = "";
    font.glyphs.sort(function (g1, g2) { return g1.comparableCodePoint - g2.comparableCodePoint; }).forEach(function (glyph) {
        var glyphDiv = document.createElement("div");
        glyphDiv.className = "glyph";
        glyphDiv.setAttribute("data-name", glyph.name);
        var glyphLabel = document.createElement("label");
        glyphLabel.textContent = glyph.name;
        glyphDiv.appendChild(glyphLabel);
        var glyphCanvas = document.createElement("canvas");
        glyphCanvas.width = 90;
        glyphCanvas.height = 90;
        glyphDiv.appendChild(glyphCanvas);
        glyphListContainer.appendChild(glyphDiv);
        glyphDiv.addEventListener("dblclick", function () {
            Object(_glyphBar__WEBPACK_IMPORTED_MODULE_1__["appendCharacter"])(glyph);
        });
        drawGlyphPreview(glyph);
    });
    font.on("glyphModified", function (glyph) {
        drawGlyphPreview(glyph);
    });
}


/***/ }),

/***/ "./src/typeedit/ui/panel.ts":
/*!**********************************!*\
  !*** ./src/typeedit/ui/panel.ts ***!
  \**********************************/
/*! exports provided: prepareTabbedPanel, prepareFontSettings, addFontSettingsEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareTabbedPanel", function() { return prepareTabbedPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareFontSettings", function() { return prepareFontSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFontSettingsEvents", function() { return addFontSettingsEvents; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app */ "./src/typeedit/app.ts");

var preparedFontSettings = false;
function prepareTabbedPanel() {
    document.querySelectorAll("aside nav button").forEach(function (button) {
        var tabId = button.getAttribute("data-tab");
        button.addEventListener("click", function () {
            var currentButton = document.querySelector("aside nav button.active");
            var currentPanel = document.querySelector("aside div.panelContents.active");
            if (currentButton && currentPanel) {
                currentButton.classList.remove("active");
                currentPanel.classList.remove("active");
            }
            document.querySelector("aside div.panelContents[data-tab=" + tabId + "]").classList.add("active");
            button.classList.add("active");
        });
    });
}
function prepareFontSettings() {
    if (preparedFontSettings)
        return;
    preparedFontSettings = true;
    document.querySelectorAll("input[data-font-setting]").forEach(function (input) {
        var key = input.getAttribute("data-font-setting");
        if (!(key in _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings))
            return;
        input.value = _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key].toString();
        input.addEventListener("input", function () {
            if (typeof _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key] === "number")
                _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key] = +input.value;
            else if (typeof _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key] === "string")
                _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key] = input.value;
        });
    });
}
function addFontSettingsEvents() {
    _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].on("settingChanged", function (key) {
        var input = document.querySelector("input[data-font-setting=" + key + "]");
        if (!input)
            return;
        input.value = _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings[key].toString();
    });
}


/***/ }),

/***/ "./src/typeedit/ui/theme.ts":
/*!**********************************!*\
  !*** ./src/typeedit/ui/theme.ts ***!
  \**********************************/
/*! exports provided: getThemeColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemeColor", function() { return getThemeColor; });
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings/settings */ "./src/typeedit/settings/settings.ts");

var fteThemes = [
    {
        theme: "light",
        handleSelected: "#111",
        handleFill: "#fff",
        handleMetricFill: "#444",
        handleControlArm: "#555",
        handleControlFill: "#555",
        glyphOutline: "#000",
        glyphGapOutline: "#fff",
        glyphFill: "#888",
        glyphOtherFill: "#000",
        glyphMetric: "#3338",
        gindicatorActive: "#aaa",
        gindicatorActiveText: "#555",
        gindicator: "#eee",
        gindicatorText: "#aaa",
        guideActive: "#f0f",
        guideGrid: "#3332"
    },
    {
        theme: "dark",
        handleSelected: "#eee",
        handleFill: "#000",
        handleMetricFill: "#888",
        handleControlArm: "#999",
        handleControlFill: "#999",
        glyphOutline: "#fff",
        glyphGapOutline: "#222",
        glyphFill: "#333",
        glyphOtherFill: "#fff",
        glyphMetric: "#aaa8",
        gindicatorActive: "#777",
        gindicatorActiveText: "#aaa",
        gindicator: "#333",
        gindicatorText: "#555",
        guideActive: "#f0f",
        guideGrid: "#9992"
    }
];
function getThemeColor(colorName) {
    var themeName = _settings_settings__WEBPACK_IMPORTED_MODULE_0__["settings"].theme;
    var theme = fteThemes.find(function (t) { return t.theme === themeName; });
    return theme[colorName];
}


/***/ }),

/***/ "./src/typeedit/ui/toolbar.ts":
/*!************************************!*\
  !*** ./src/typeedit/ui/toolbar.ts ***!
  \************************************/
/*! exports provided: setActiveTool, prepareToolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveTool", function() { return setActiveTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareToolbar", function() { return prepareToolbar; });
/* harmony import */ var _utils_accelerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/accelerator */ "./src/typeedit/utils/accelerator.ts");

function setActiveTool(index) {
    var toolbar = document.querySelector("div.tools");
    toolbar.querySelector("button.active").classList.remove("active");
    toolbar.children[index].classList.add("active");
}
function prepareToolbar(tools, defaultTool, callback) {
    var toolbar = document.querySelector("div.tools");
    toolbar.innerHTML = "";
    tools.forEach(function (tool) {
        var button = document.createElement("button");
        button.title = tool.name + " (" + Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_0__["accelStringToUserFriendly"])(tool.accelerator) + ")";
        button.innerHTML = "\n                <img src=\"res/icons/" + tool.icon + ".svg\">\n            ";
        if (tool === defaultTool)
            button.classList.add("active");
        button.addEventListener("click", function () {
            toolbar.querySelector("button.active").classList.remove("active");
            callback(tool);
            button.classList.add("active");
        });
        toolbar.appendChild(button);
    });
}


/***/ }),

/***/ "./src/typeedit/ui/viewport.ts":
/*!*************************************!*\
  !*** ./src/typeedit/ui/viewport.ts ***!
  \*************************************/
/*! exports provided: setupViewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupViewport", function() { return setupViewport; });
/* harmony import */ var _viewport_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewport/viewport */ "./src/typeedit/viewport/viewport.ts");

function setupViewport(context) {
    var container = document.querySelector("div.viewport");
    var prevViewport = container.querySelector("canvas");
    if (prevViewport) {
        container.removeChild(prevViewport);
    }
    var viewport = new _viewport_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"](context, [], null);
    container.appendChild(viewport.domCanvas);
    window.addEventListener("resize", function () {
        viewport.updateViewportSize();
    });
    return viewport;
}


/***/ }),

/***/ "./src/typeedit/undo/actions/array.ts":
/*!********************************************!*\
  !*** ./src/typeedit/undo/actions/array.ts ***!
  \********************************************/
/*! exports provided: ArrayAddAction, ArrayRemoveAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayAddAction", function() { return ArrayAddAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayRemoveAction", function() { return ArrayRemoveAction; });
var ArrayAddAction = /** @class */ (function () {
    function ArrayAddAction(target, object, index) {
        this.target = target;
        this.object = object;
        this.index = index;
    }
    ArrayAddAction.prototype.undo = function () {
        this.target.splice(this.index, 1);
    };
    ArrayAddAction.prototype.redo = function () {
        this.target.splice(this.index, 0, this.object);
    };
    ArrayAddAction.prototype.finalize = function () { };
    Object.defineProperty(ArrayAddAction.prototype, "valid", {
        get: function () {
            return this.index !== -1;
        },
        enumerable: false,
        configurable: true
    });
    return ArrayAddAction;
}());

var ArrayRemoveAction = /** @class */ (function () {
    function ArrayRemoveAction(target, object, index) {
        this.target = target;
        this.object = object;
        this.index = index;
    }
    ArrayRemoveAction.prototype.undo = function () {
        this.target.splice(this.index, 0, this.object);
    };
    ArrayRemoveAction.prototype.redo = function () {
        this.target.splice(this.index, 1);
    };
    ArrayRemoveAction.prototype.finalize = function () { };
    Object.defineProperty(ArrayRemoveAction.prototype, "valid", {
        get: function () {
            return this.index !== -1;
        },
        enumerable: false,
        configurable: true
    });
    return ArrayRemoveAction;
}());



/***/ }),

/***/ "./src/typeedit/undo/actions/value.ts":
/*!********************************************!*\
  !*** ./src/typeedit/undo/actions/value.ts ***!
  \********************************************/
/*! exports provided: ValueChangeAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueChangeAction", function() { return ValueChangeAction; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "events");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

var ValueChangeAction = /** @class */ (function () {
    function ValueChangeAction(target, keys) {
        this.target = target;
        this.keys = keys;
        this.beforeState = {};
        this.afterState = {};
        this.captureState(this.beforeState);
    }
    ValueChangeAction.prototype.captureState = function (stateTarget) {
        var _this = this;
        this.keys.forEach(function (key) { return stateTarget[key] = _this.target[key]; });
    };
    ValueChangeAction.prototype.undo = function () {
        Object.assign(this.target, this.beforeState);
        if (this.target instanceof events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
            this.target.emit("modified");
    };
    ValueChangeAction.prototype.redo = function () {
        Object.assign(this.target, this.afterState);
        if (this.target instanceof events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
            this.target.emit("modified");
    };
    ValueChangeAction.prototype.finalize = function () {
        this.captureState(this.afterState);
    };
    Object.defineProperty(ValueChangeAction.prototype, "valid", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return ValueChangeAction;
}());



/***/ }),

/***/ "./src/typeedit/undo/context.ts":
/*!**************************************!*\
  !*** ./src/typeedit/undo/context.ts ***!
  \**************************************/
/*! exports provided: UndoContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UndoContext", function() { return UndoContext; });
var UndoContext = /** @class */ (function () {
    function UndoContext() {
        this.actions = [];
        this.name = "Unknown";
    }
    UndoContext.prototype.addAction = function () {
        var _a;
        var actions = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            actions[_i] = arguments[_i];
        }
        (_a = this.actions).push.apply(_a, actions);
    };
    UndoContext.prototype.undo = function () {
        for (var i = this.actions.length - 1; i >= 0; i--) {
            this.actions[i].undo();
        }
    };
    UndoContext.prototype.redo = function () {
        for (var i = 0; i < this.actions.length; i++) {
            this.actions[i].redo();
        }
    };
    UndoContext.prototype.finalize = function (name) {
        this.actions = this.actions.filter(function (a) { return a.valid; });
        this.actions.forEach(function (a) { return a.finalize(); });
        if (name)
            this.name = name;
    };
    return UndoContext;
}());



/***/ }),

/***/ "./src/typeedit/undo/history.ts":
/*!**************************************!*\
  !*** ./src/typeedit/undo/history.ts ***!
  \**************************************/
/*! exports provided: undoContext, finalizeUndoContext, canUndo, canRedo, undo, redo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undoContext", function() { return undoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finalizeUndoContext", function() { return finalizeUndoContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUndo", function() { return canUndo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canRedo", function() { return canRedo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "redo", function() { return redo; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./src/typeedit/undo/context.ts");

var undoContexts = [];
var redoContexts = [];
var undoContext = new _context__WEBPACK_IMPORTED_MODULE_0__["UndoContext"]();
function finalizeUndoContext(name) {
    if (undoContext.actions.length) {
        undoContext.finalize(name);
        undoContexts.push(undoContext);
        if (redoContexts.length)
            redoContexts = [];
    }
    undoContext = new _context__WEBPACK_IMPORTED_MODULE_0__["UndoContext"]();
}
function canUndo() {
    return undoContexts.length > 0;
}
function canRedo() {
    return redoContexts.length > 0;
}
function undo() {
    if (!canUndo())
        return;
    var ctx = undoContexts.pop();
    redoContexts.unshift(ctx);
    ctx.undo();
}
function redo() {
    if (!canRedo())
        return;
    var ctx = redoContexts.shift();
    undoContexts.push(ctx);
    ctx.redo();
}


/***/ }),

/***/ "./src/typeedit/utils/accelerator.ts":
/*!*******************************************!*\
  !*** ./src/typeedit/utils/accelerator.ts ***!
  \*******************************************/
/*! exports provided: accelStringToUserFriendly, accelStringToElectron */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accelStringToUserFriendly", function() { return accelStringToUserFriendly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accelStringToElectron", function() { return accelStringToElectron; });
function accelStringToUserFriendly(str) {
    return str.replace("^", "Ctrl-")
        .replace("+", "Shift-")
        .replace("!", "Alt-")
        .replace("Key", "");
}
function accelStringToElectron(str) {
    return str.replace("+", "Shift+")
        .replace("^", "CmdOrCtrl+")
        .replace("!", "Alt+")
        .replace("Key", "");
}


/***/ }),

/***/ "./src/typeedit/utils/lerp.ts":
/*!************************************!*\
  !*** ./src/typeedit/utils/lerp.ts ***!
  \************************************/
/*! exports provided: lerp, unlerp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lerp", function() { return lerp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unlerp", function() { return unlerp; });
function lerp(x, a, b) {
    return a + x * (b - a);
}
function unlerp(X, a, b) {
    if (a === b)
        return 0;
    return (X - a) / (b - a);
}


/***/ }),

/***/ "./src/typeedit/utils/preview.ts":
/*!***************************************!*\
  !*** ./src/typeedit/utils/preview.ts ***!
  \***************************************/
/*! exports provided: createFontPreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFontPreview", function() { return createFontPreview; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");

var previewStrings = [
    "Quick brown cat",
    "General relativity",
    "01123581321",
    "Typography",
    "Audiovisual",
    "Another one bites the dust"
];
function createFontPreview(font) {
    var canvas = document.querySelector("canvas.previewGenerator");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var testString = previewStrings[Math.floor(previewStrings.length * Math.random())];
    var glyphs = testString.split("").map(function (chr) { return font.glyphs.find(function (g) { return g.codePoint === chr.codePointAt(0); }); }).filter(function (g) { return g; });
    ctx.translate(0, 10);
    ctx.scale(30 / 512, 30 / 512);
    ctx.fillStyle = "#000";
    glyphs.forEach(function (g) {
        var path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(g.finalBeziers);
        ctx.fill(path);
        ctx.translate(g.metrics.rightBearing - g.metrics.leftBearing, 0);
    });
    return canvas.toDataURL();
}


/***/ }),

/***/ "./src/typeedit/viewport/context/bezier.ts":
/*!*************************************************!*\
  !*** ./src/typeedit/viewport/context/bezier.ts ***!
  \*************************************************/
/*! exports provided: BezierContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierContext", function() { return BezierContext; });
var BezierContext = /** @class */ (function () {
    function BezierContext(beziers) {
        this.beziers = beziers;
        this.handles = [];
        this.guides = [];
        this.grids = [];
    }
    BezierContext.prototype.render = function (v, ctx) {
        // Nothing tbh
    };
    return BezierContext;
}());



/***/ }),

/***/ "./src/typeedit/viewport/context/glyph.ts":
/*!************************************************!*\
  !*** ./src/typeedit/viewport/context/glyph.ts ***!
  \************************************************/
/*! exports provided: GlyphContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlyphContext", function() { return GlyphContext; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _ui_glyphList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/glyphList */ "./src/typeedit/ui/glyphList.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");
/* harmony import */ var _guides_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guides/curve */ "./src/typeedit/viewport/guides/curve.ts");
/* harmony import */ var _guides_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guides/grid */ "./src/typeedit/viewport/guides/grid.ts");
/* harmony import */ var _guides_line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guides/line */ "./src/typeedit/viewport/guides/line.ts");
/* harmony import */ var _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../handles/fontMetric */ "./src/typeedit/viewport/handles/fontMetric.ts");
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bezier */ "./src/typeedit/viewport/context/bezier.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








var GlyphContext = /** @class */ (function (_super) {
    __extends(GlyphContext, _super);
    function GlyphContext(glyphs, currentIndex) {
        var _this = _super.call(this, glyphs[currentIndex].beziers) || this;
        _this.glyphs = glyphs;
        _this.currentIndex = currentIndex;
        _this.setupHandlesAndGuides();
        Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_1__["setActiveGlyph"])(_this.glyph);
        return _this;
    }
    Object.defineProperty(GlyphContext.prototype, "glyph", {
        get: function () {
            return this.glyphs[this.currentIndex];
        },
        enumerable: false,
        configurable: true
    });
    GlyphContext.prototype.setupHandlesAndGuides = function () {
        var _this = this;
        this.handles = [
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandleType"].leftBearing),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandleType"].rightBearing),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandleType"].ascender),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandleType"].descender),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_6__["FontMetricHandleType"].xHeight)
        ];
        this.grids = [
            new _guides_grid__WEBPACK_IMPORTED_MODULE_4__["GridGuide"]()
        ];
        this.guides = [
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["HorizontalGuide"](0),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["HorizontalGuide"](512),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["HorizontalGuide"](function () { return _this.glyph.font.metrics.ascender; }, this.handles[2]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["HorizontalGuide"](function () { return _this.glyph.font.metrics.descender; }, this.handles[3]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["HorizontalGuide"](function () { return _this.glyph.font.metrics.xHeight; }, this.handles[4]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["VerticalGuide"](function () { return _this.glyph.metrics.leftBearing; }, this.handles[0]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_5__["VerticalGuide"](function () { return _this.glyph.metrics.rightBearing; }, this.handles[1])
        ];
        this.beziers.forEach(function (b) { return _this.guides.push(new _guides_curve__WEBPACK_IMPORTED_MODULE_3__["CurveGuide"](b)); });
        // for (let bezier of this.beziers) {
        //     for (let point of bezier.points) {
        //         this.guides.push(
        //             new PointGuide(point.base)
        //         )
        //     }
        // }
    };
    GlyphContext.prototype.setGlyphs = function (glyphs, currentIndex) {
        if (glyphs)
            this.glyphs = glyphs;
        if (typeof currentIndex === "number")
            this.currentIndex = currentIndex;
        else if (this.currentIndex >= this.glyphs.length)
            this.currentIndex = this.glyphs.length - 1;
        this.beziers = this.glyph.beziers;
        this.setupHandlesAndGuides();
        Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_1__["setActiveGlyph"])(this.glyph);
    };
    GlyphContext.prototype.renderNonEditableGlyphs = function (v, ctx) {
        var currentOffset = 0;
        if (this.currentIndex < this.glyphs.length - 1) {
            for (var i = this.currentIndex + 1; i < this.glyphs.length; i++) {
                var prevGlyph = this.glyphs[i - 1];
                var glyph = this.glyphs[i];
                var offset = prevGlyph.metrics.rightBearing -
                    glyph.metrics.leftBearing;
                var path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
                ctx.fillStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphOtherFill");
                ctx.translate(offset, 0);
                ctx.fill(path);
                this.renderGlyphIndicator(v, ctx, glyph);
                currentOffset += offset;
            }
        }
        ctx.translate(-currentOffset, 0);
        currentOffset = 0;
        if (this.currentIndex > 0) {
            for (var i = this.currentIndex - 1; i >= 0; i--) {
                var nextGlyph = this.glyphs[i + 1];
                var glyph = this.glyphs[i];
                var offset = nextGlyph.metrics.leftBearing -
                    glyph.metrics.rightBearing;
                var path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
                ctx.fillStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphOtherFill");
                ctx.translate(offset, 0);
                ctx.fill(path);
                this.renderGlyphIndicator(v, ctx, glyph);
                currentOffset += offset;
            }
        }
        ctx.translate(-currentOffset, 0);
        currentOffset = 0;
    };
    GlyphContext.prototype.renderGlyphIndicator = function (v, ctx, glyph) {
        var x = glyph.metrics.leftBearing;
        var w = glyph.metrics.rightBearing - x;
        var y = glyph.font.metrics.ascender - 20 / v.co.scaleFactor;
        ctx.fillStyle = (this.glyph === glyph) ?
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("gindicatorActive") :
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("gindicator");
        ctx.fillRect(x, y - 8 / v.co.scaleFactor, w, 8 / v.co.scaleFactor);
        ctx.font = "400 " + 20 / v.co.scaleFactor + "px Inter";
        ctx.textAlign = "center";
        ctx.fillStyle = (this.glyph === glyph) ?
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("gindicatorActiveText") :
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("gindicatorText");
        ctx.fillText(glyph.name, x + w / 2, y - 16 / v.co.scaleFactor);
    };
    GlyphContext.prototype.render = function (v, ctx) {
        this.renderNonEditableGlyphs(v, ctx);
        // Glyph metric lines
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphMetric");
        ctx.lineWidth = 1 / v.co.scaleFactor;
        ctx.beginPath();
        ctx.moveTo(-9999, 512); // 512 is the bottom - baseline
        ctx.lineTo(9999, 512);
        ctx.moveTo(-9999, 0); // 0 is the top - cap height
        ctx.lineTo(9999, 0);
        ctx.stroke();
        ctx.setLineDash([10 / v.co.scaleFactor, 10 / v.co.scaleFactor]);
        // x-height
        ctx.beginPath();
        ctx.moveTo(-9999, this.glyph.font.metrics.xHeight);
        ctx.lineTo(9999, this.glyph.font.metrics.xHeight);
        // Ascender
        ctx.moveTo(-9999, this.glyph.font.metrics.ascender);
        ctx.lineTo(9999, this.glyph.font.metrics.ascender);
        // Descender
        ctx.moveTo(-9999, this.glyph.font.metrics.descender);
        ctx.lineTo(9999, this.glyph.font.metrics.descender);
        ctx.moveTo(this.glyph.metrics.leftBearing, -9999);
        ctx.lineTo(this.glyph.metrics.leftBearing, 9999);
        ctx.moveTo(this.glyph.metrics.rightBearing, -9999);
        ctx.lineTo(this.glyph.metrics.rightBearing, 9999);
        ctx.stroke();
        // Glyph
        var workingPath = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(this.glyph.beziers);
        var finalPath = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(this.glyph.finalBeziers);
        ctx.fillStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphFill");
        ctx.fill(finalPath);
        ctx.setLineDash([]);
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphGapOutline");
        ctx.lineWidth = 4 / v.co.scaleFactor;
        ctx.stroke(workingPath);
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("glyphOutline");
        ctx.lineWidth = 1 / v.co.scaleFactor;
        ctx.stroke(workingPath);
        this.renderGlyphIndicator(v, ctx, this.glyph);
    };
    return GlyphContext;
}(_bezier__WEBPACK_IMPORTED_MODULE_7__["BezierContext"]));



/***/ }),

/***/ "./src/typeedit/viewport/coordinates.ts":
/*!**********************************************!*\
  !*** ./src/typeedit/viewport/coordinates.ts ***!
  \**********************************************/
/*! exports provided: ViewportCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportCoordinates", function() { return ViewportCoordinates; });
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/point */ "./src/typeedit/geometry/point.ts");

var ViewportCoordinates = /** @class */ (function () {
    function ViewportCoordinates() {
        this.dx = 0;
        this.dy = 0;
        this.scaleFactor = 1;
    }
    // dx, dy in screen coordinates
    ViewportCoordinates.prototype.translate = function (dx, dy) {
        this.dx += dx;
        this.dy += dy;
    };
    ViewportCoordinates.prototype.scale = function (factor, ox, oy) {
        var newScale = this.scaleFactor * factor;
        this.dx = this.dx + this.scaleFactor * ox - newScale * ox;
        this.dy = this.dy + this.scaleFactor * oy - newScale * oy;
        this.scaleFactor = newScale;
    };
    ViewportCoordinates.prototype.transformCanvas = function (ctx) {
        ctx.translate(this.dx, this.dy);
        ctx.scale(this.scaleFactor, this.scaleFactor);
    };
    ViewportCoordinates.prototype.clientToWorld = function (x, y) {
        return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"]((x - this.dx) / this.scaleFactor, (y - this.dy) / this.scaleFactor);
    };
    ViewportCoordinates.prototype.worldToClient = function (x, y) {
        return {
            x: x * this.scaleFactor + this.dx,
            y: y * this.scaleFactor + this.dy
        };
    };
    ViewportCoordinates.prototype.moveInClientDx = function (point, dx, dy) {
        var pos = this.worldToClient(point.x, point.y);
        pos.x += dx;
        pos.y += dy;
        var _a = this.clientToWorld(pos.x, pos.y), x = _a.x, y = _a.y;
        point.x = x;
        point.y = y;
    };
    return ViewportCoordinates;
}());



/***/ }),

/***/ "./src/typeedit/viewport/guides/curve.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/viewport/guides/curve.ts ***!
  \***********************************************/
/*! exports provided: CurveGuide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurveGuide", function() { return CurveGuide; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../handles/bezierBasePoint */ "./src/typeedit/viewport/handles/bezierBasePoint.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! paper */ "paper");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");





var CurveGuide = /** @class */ (function () {
    function CurveGuide(source) {
        this.source = source;
        this.active = false;
        this.worldRender = true;
    }
    CurveGuide.prototype.nudge = function (v, pos, obj) {
        if (obj instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_2__["BezierBasePointHandle"] &&
            obj.point.curve === this.source)
            return null;
        var paperPath = this.source.getPaperPath();
        var paperPoint = new paper__WEBPACK_IMPORTED_MODULE_3___default.a.Point(pos.x, pos.y);
        var nearest = paperPath.getNearestPoint(paperPoint);
        if (!nearest) {
            this.active = false;
            return null;
        }
        var clientPos = v.co.worldToClient(pos.x, pos.y);
        var clientTarget = v.co.worldToClient(nearest.x, nearest.y);
        if (Math.hypot(clientPos.x - clientTarget.x, clientPos.y - clientTarget.y) < 10) {
            this.active = true;
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_1__["Point"](nearest.x, nearest.y);
        }
        else {
            this.active = false;
        }
        return null;
    };
    CurveGuide.prototype.render = function (v, ctx) {
        var path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D([this.source]);
        ctx.lineWidth = 1 / v.co.scaleFactor;
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_4__["getThemeColor"])("guideActive");
        ctx.stroke(path);
    };
    return CurveGuide;
}());



/***/ }),

/***/ "./src/typeedit/viewport/guides/grid.ts":
/*!**********************************************!*\
  !*** ./src/typeedit/viewport/guides/grid.ts ***!
  \**********************************************/
/*! exports provided: GridGuide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridGuide", function() { return GridGuide; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app */ "./src/typeedit/app.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");



var GridGuide = /** @class */ (function () {
    function GridGuide() {
        this.active = false;
        this.lastPoint = new _geometry_point__WEBPACK_IMPORTED_MODULE_1__["Point"](-100000, -100000);
    }
    Object.defineProperty(GridGuide.prototype, "baseGap", {
        get: function () {
            return _app__WEBPACK_IMPORTED_MODULE_0__["currentFont"].settings.gridMainGap;
        },
        enumerable: false,
        configurable: true
    });
    GridGuide.prototype.calculateGap = function (v) {
        var clientGap = this.baseGap * v.co.scaleFactor;
        while (clientGap < 12) {
            clientGap *= 2;
        }
        return clientGap / v.co.scaleFactor;
    };
    GridGuide.prototype.nudge = function (v, pos, obj) {
        var gap = this.calculateGap(v);
        var target = new _geometry_point__WEBPACK_IMPORTED_MODULE_1__["Point"](Math.round(pos.x / gap) * gap, Math.round(pos.y / gap) * gap);
        var delta = 8 / v.co.scaleFactor;
        this.active = false;
        this.lastPoint.x = NaN;
        this.lastPoint.y = NaN;
        if (Math.abs(pos.x - target.x) < delta) {
            this.lastPoint.x = target.x;
            this.active = true;
        }
        if (Math.abs(pos.y - target.y) < delta) {
            this.lastPoint.y = target.y;
            this.active = true;
        }
        if (this.active) {
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_1__["Point"](isNaN(this.lastPoint.x) ? pos.x : target.x, isNaN(this.lastPoint.y) ? pos.y : target.y);
        }
        return null;
    };
    GridGuide.prototype.render = function (v, ctx) {
        var gap = this.calculateGap(v);
        var minXY = v.co.clientToWorld(0, 0);
        var maxXY = v.co.clientToWorld(v.domCanvas.width, v.domCanvas.height);
        minXY.x = Math.round(minXY.x / gap) * gap;
        minXY.y = Math.round(minXY.y / gap) * gap;
        maxXY.x = Math.round(maxXY.x / gap) * gap;
        maxXY.y = Math.round(maxXY.y / gap) * gap;
        ctx.lineWidth = 1;
        for (var x = minXY.x; x <= maxXY.x; x += gap) {
            var client = v.co.worldToClient(x, 0);
            ctx.beginPath();
            ctx.moveTo(Math.round(client.x) + 0.5, -9999);
            ctx.lineTo(Math.round(client.x) + 0.5, 9999);
            ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("guideGrid");
            if (this.active && this.lastPoint.x === x)
                ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("guideActive");
            ctx.stroke();
        }
        for (var y = minXY.y; y <= maxXY.y; y += gap) {
            var client = v.co.worldToClient(0, y);
            ctx.beginPath();
            ctx.moveTo(-9999, Math.round(client.y) + 0.5);
            ctx.lineTo(9999, Math.round(client.y) + 0.5);
            ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("guideGrid");
            if (this.active && this.lastPoint.y === y)
                ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("guideActive");
            ctx.stroke();
        }
    };
    return GridGuide;
}());



/***/ }),

/***/ "./src/typeedit/viewport/guides/line.ts":
/*!**********************************************!*\
  !*** ./src/typeedit/viewport/guides/line.ts ***!
  \**********************************************/
/*! exports provided: HorizontalGuide, VerticalGuide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalGuide", function() { return HorizontalGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalGuide", function() { return VerticalGuide; });
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");


var HorizontalGuide = /** @class */ (function () {
    function HorizontalGuide(valueHandler, source) {
        this.valueHandler = valueHandler;
        this.source = source;
        this.active = false;
    }
    Object.defineProperty(HorizontalGuide.prototype, "value", {
        get: function () {
            if (this.valueHandler instanceof Function)
                return this.valueHandler();
            return this.valueHandler;
        },
        enumerable: false,
        configurable: true
    });
    HorizontalGuide.prototype.nudge = function (v, pos, obj) {
        if (obj && this.source && obj === this.source) {
            this.active = false;
            return null;
        }
        var clientPos = v.co.worldToClient(pos.x, pos.y);
        var clientTarget = v.co.worldToClient(pos.x, this.value);
        if (Math.abs(clientPos.y - clientTarget.y) < 8) {
            this.active = true;
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](pos.x, this.value);
        }
        else {
            this.active = false;
        }
        return null;
    };
    HorizontalGuide.prototype.render = function (v, ctx) {
        var clientPos = v.co.worldToClient(0, this.value);
        clientPos.y = Math.round(clientPos.y) + 0.5;
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("guideActive");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-9999, clientPos.y);
        ctx.lineTo(9999, clientPos.y);
        ctx.stroke();
    };
    return HorizontalGuide;
}());

var VerticalGuide = /** @class */ (function () {
    function VerticalGuide(valueHandler, source) {
        this.valueHandler = valueHandler;
        this.source = source;
        this.active = false;
    }
    Object.defineProperty(VerticalGuide.prototype, "value", {
        get: function () {
            if (this.valueHandler instanceof Function)
                return this.valueHandler();
            return this.valueHandler;
        },
        enumerable: false,
        configurable: true
    });
    VerticalGuide.prototype.nudge = function (v, pos, obj) {
        if (obj && this.source && obj === this.source) {
            this.active = false;
            return null;
        }
        var clientPos = v.co.worldToClient(pos.x, pos.y);
        var clientTarget = v.co.worldToClient(this.value, pos.y);
        if (Math.abs(clientPos.x - clientTarget.x) < 8) {
            this.active = true;
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.value, pos.y);
        }
        else {
            this.active = false;
        }
        return null;
    };
    VerticalGuide.prototype.render = function (v, ctx) {
        var clientPos = v.co.worldToClient(this.value, 0);
        clientPos.x = Math.round(clientPos.x) + 0.5;
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("guideActive");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(clientPos.x, -9999);
        ctx.lineTo(clientPos.x, 9999);
        ctx.stroke();
    };
    return VerticalGuide;
}());



/***/ }),

/***/ "./src/typeedit/viewport/guides/point.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/viewport/guides/point.ts ***!
  \***********************************************/
/*! exports provided: PointGuide, HandleGuide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointGuide", function() { return PointGuide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleGuide", function() { return HandleGuide; });
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PointGuide = /** @class */ (function () {
    function PointGuide(source) {
        this.source = source;
        this.active = false;
    }
    PointGuide.prototype.nudge = function (v, pos, obj) {
        if (obj && this.source &&
            (obj === this.source ||
                ("position" in obj &&
                    obj.position === this.source))) {
            this.active = false;
            return;
        }
        var clientPos = v.co.worldToClient(pos.x, pos.y);
        var clientTarget = v.co.worldToClient(this.source.x, this.source.y);
        if (Math.hypot(clientPos.x - clientTarget.x, clientPos.y - clientTarget.y) < 10) {
            this.active = true;
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.source.x, this.source.y);
        }
        else {
            this.active = false;
            return null;
        }
    };
    PointGuide.prototype.render = function (v, ctx) {
        var clientPos = v.co.worldToClient(this.source.x, this.source.y);
        clientPos.x = Math.round(clientPos.x) + 0.5;
        clientPos.y = Math.round(clientPos.y) + 0.5;
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("guideActive");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(clientPos.x - 16, clientPos.y);
        ctx.lineTo(clientPos.x + 16, clientPos.y);
        ctx.moveTo(clientPos.x, clientPos.y - 16);
        ctx.lineTo(clientPos.x, clientPos.y + 16);
        ctx.stroke();
    };
    return PointGuide;
}());

var HandleGuide = /** @class */ (function (_super) {
    __extends(HandleGuide, _super);
    function HandleGuide(handle) {
        var _this = _super.call(this, handle.position) || this;
        _this.handle = handle;
        return _this;
    }
    HandleGuide.prototype.nudge = function (v, pos, obj) {
        if (this.handle.selected ||
            this.handle === obj)
            return null;
        return _super.prototype.nudge.call(this, v, pos, obj);
    };
    return HandleGuide;
}(PointGuide));



/***/ }),

/***/ "./src/typeedit/viewport/handles/bezierBasePoint.ts":
/*!**********************************************************!*\
  !*** ./src/typeedit/viewport/handles/bezierBasePoint.ts ***!
  \**********************************************************/
/*! exports provided: BezierBasePointHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierBasePointHandle", function() { return BezierBasePointHandle; });
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../undo/actions/value */ "./src/typeedit/undo/actions/value.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");



var BezierBasePointHandle = /** @class */ (function () {
    function BezierBasePointHandle(point) {
        this.point = point;
        this.hitRadius = 10;
        this.selected = false;
        this.type = "BezierBasePointHandle";
    }
    Object.defineProperty(BezierBasePointHandle.prototype, "position", {
        get: function () {
            return this.point.base;
        },
        enumerable: false,
        configurable: true
    });
    BezierBasePointHandle.prototype.move = function (v, pos, dPos, pivot, e) {
        this.point.movePoint(this.point.base, dPos);
    };
    BezierBasePointHandle.prototype.prepareUndo = function (uc) {
        uc.addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.after, ["x", "y"]));
    };
    BezierBasePointHandle.prototype.render = function (v, ctx) {
        var angle = this.point.after.angle(this.point.base);
        ctx.beginPath();
        switch (this.point.type) {
            case _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_0__["BezierPointType"].auto:
                ctx.moveTo(5 * Math.cos(angle), 5 * Math.sin(angle));
                ctx.lineTo(5 * Math.cos(angle + Math.PI / 2), 5 * Math.sin(angle + Math.PI / 2));
                ctx.lineTo(5 * Math.cos(angle + Math.PI), 5 * Math.sin(angle + Math.PI));
                ctx.lineTo(5 * Math.cos(angle + 3 * Math.PI / 2), 5 * Math.sin(angle + 3 * Math.PI / 2));
                break;
            case _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_0__["BezierPointType"].sharp:
                ctx.rect(-4, -4, 8, 8);
                break;
            default:
                ctx.arc(0, 0, 5, 0, Math.PI * 2);
        }
        ctx.closePath();
        ctx.fillStyle = this.selected ?
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleSelected") :
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleFill");
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleSelected");
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    };
    return BezierBasePointHandle;
}());



/***/ }),

/***/ "./src/typeedit/viewport/handles/bezierControlPoint.ts":
/*!*************************************************************!*\
  !*** ./src/typeedit/viewport/handles/bezierControlPoint.ts ***!
  \*************************************************************/
/*! exports provided: BezierControlPointHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierControlPointHandle", function() { return BezierControlPointHandle; });
/* harmony import */ var _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../undo/actions/value */ "./src/typeedit/undo/actions/value.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");


var BezierControlPointHandle = /** @class */ (function () {
    function BezierControlPointHandle(point, cpoint) {
        this.point = point;
        this.cpoint = cpoint;
        this.hitRadius = 6;
        this.selected = false;
        this.type = "BezierControlPointHandle";
        this.hidden = false;
    }
    Object.defineProperty(BezierControlPointHandle.prototype, "position", {
        get: function () {
            return this.cpoint;
        },
        enumerable: false,
        configurable: true
    });
    BezierControlPointHandle.prototype.move = function (v, pos, dPos, pivot, e) {
        // let forceType = null
        // if (
        //     this.point.type !== BezierPointType.free &&
        //     e.altKey
        // )
        //     forceType = BezierPointType.free
        this.point.movePoint(this.cpoint, dPos);
    };
    BezierControlPointHandle.prototype.prepareUndo = function (uc) {
        uc.addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.after, ["x", "y"]));
    };
    BezierControlPointHandle.prototype.render = function (v, ctx) {
        var basePos = v.co.worldToClient(this.point.base.x, this.point.base.y);
        var ctrlPos = v.co.worldToClient(this.cpoint.x, this.cpoint.y);
        var distance = Math.hypot(basePos.x - ctrlPos.x, basePos.y - ctrlPos.y);
        this.hidden = distance <= 8;
        if (this.hidden)
            return;
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("handleControlArm");
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(basePos.x - ctrlPos.x, basePos.y - ctrlPos.y);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.fillStyle = this.selected ?
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("handleSelected") :
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_1__["getThemeColor"])("handleControlFill");
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, 2 * Math.PI);
        ctx.fill();
    };
    return BezierControlPointHandle;
}());



/***/ }),

/***/ "./src/typeedit/viewport/handles/fontMetric.ts":
/*!*****************************************************!*\
  !*** ./src/typeedit/viewport/handles/fontMetric.ts ***!
  \*****************************************************/
/*! exports provided: FontMetricHandleType, FontMetricHandle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontMetricHandleType", function() { return FontMetricHandleType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontMetricHandle", function() { return FontMetricHandle; });
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../undo/actions/value */ "./src/typeedit/undo/actions/value.ts");
/* harmony import */ var _ui_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/theme */ "./src/typeedit/ui/theme.ts");



var FontMetricHandleType;
(function (FontMetricHandleType) {
    FontMetricHandleType[FontMetricHandleType["leftBearing"] = 0] = "leftBearing";
    FontMetricHandleType[FontMetricHandleType["rightBearing"] = 1] = "rightBearing";
    FontMetricHandleType[FontMetricHandleType["ascender"] = 2] = "ascender";
    FontMetricHandleType[FontMetricHandleType["descender"] = 3] = "descender";
    FontMetricHandleType[FontMetricHandleType["xHeight"] = 4] = "xHeight";
})(FontMetricHandleType || (FontMetricHandleType = {}));
var FontMetricHandleDir;
(function (FontMetricHandleDir) {
    FontMetricHandleDir[FontMetricHandleDir["horz"] = 0] = "horz";
    FontMetricHandleDir[FontMetricHandleDir["vert"] = 1] = "vert";
})(FontMetricHandleDir || (FontMetricHandleDir = {}));
var FontMetricHandle = /** @class */ (function () {
    function FontMetricHandle(glyph, metric) {
        this.glyph = glyph;
        this.metric = metric;
        this.hitRadius = 10;
        this.selected = false;
        this.type = "FontMetricHandle";
        this.dir = FontMetricHandleDir.horz;
        if (metric === FontMetricHandleType.leftBearing ||
            metric === FontMetricHandleType.rightBearing)
            this.dir = FontMetricHandleDir.vert;
    }
    FontMetricHandle.prototype.prepareUndo = function (uc) {
        var action = null;
        switch (this.metric) {
            case FontMetricHandleType.ascender:
                action = new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.glyph.font.metrics, ["ascender"]);
                break;
            case FontMetricHandleType.descender:
                action = new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.glyph.font.metrics, ["descender"]);
                break;
            case FontMetricHandleType.xHeight:
                action = new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.glyph.font.metrics, ["xHeight"]);
                break;
            case FontMetricHandleType.leftBearing:
                action = new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.glyph.metrics, ["leftBearing"]);
                break;
            case FontMetricHandleType.rightBearing:
                action = new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.glyph.metrics, ["rightBearing"]);
                break;
        }
        if (action)
            uc.addAction(action);
    };
    Object.defineProperty(FontMetricHandle.prototype, "value", {
        get: function () {
            switch (this.metric) {
                case FontMetricHandleType.ascender:
                    return this.glyph.font.metrics.ascender;
                case FontMetricHandleType.descender:
                    return this.glyph.font.metrics.descender;
                case FontMetricHandleType.xHeight:
                    return this.glyph.font.metrics.xHeight;
                case FontMetricHandleType.leftBearing:
                    return this.glyph.metrics.leftBearing;
                case FontMetricHandleType.rightBearing:
                    return this.glyph.metrics.rightBearing;
            }
            return 0;
        },
        set: function (x) {
            switch (this.metric) {
                case FontMetricHandleType.ascender:
                    this.glyph.font.metrics.ascender = Math.min(x, 0);
                    break;
                case FontMetricHandleType.descender:
                    this.glyph.font.metrics.descender = Math.max(x, 512);
                    break;
                case FontMetricHandleType.xHeight:
                    this.glyph.font.metrics.xHeight = Math.max(Math.min(x, 512), 0);
                    break;
                case FontMetricHandleType.leftBearing:
                    this.glyph.metrics.leftBearing = x;
                    break;
                case FontMetricHandleType.rightBearing:
                    this.glyph.metrics.rightBearing = x;
                    break;
            }
            this.glyph.emit("modified");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FontMetricHandle.prototype, "position", {
        get: function () {
            if (this.dir === FontMetricHandleDir.horz)
                return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](-20, this.value);
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.value, 532);
        },
        enumerable: false,
        configurable: true
    });
    FontMetricHandle.prototype.move = function (v, pos, dPos, pivot, e) {
        if (this.dir === FontMetricHandleDir.horz) {
            this.value = pos.y;
        }
        else {
            this.value = pos.x;
        }
    };
    FontMetricHandle.prototype.render = function (v, ctx) {
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, 2 * Math.PI);
        ctx.moveTo(0, 0);
        if (this.dir === FontMetricHandleDir.horz)
            ctx.lineTo(20 * v.co.scaleFactor, 0);
        else
            ctx.lineTo(0, -20 * v.co.scaleFactor);
        ctx.fillStyle = this.selected ?
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleSelected") :
            Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleMetricFill");
        ctx.strokeStyle = Object(_ui_theme__WEBPACK_IMPORTED_MODULE_2__["getThemeColor"])("handleSelected");
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
        ctx.fill();
    };
    return FontMetricHandle;
}());



/***/ }),

/***/ "./src/typeedit/viewport/tools/bezierPen.ts":
/*!**************************************************!*\
  !*** ./src/typeedit/viewport/tools/bezierPen.ts ***!
  \**************************************************/
/*! exports provided: BezierPenTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierPenTool", function() { return BezierPenTool; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../undo/actions/array */ "./src/typeedit/undo/actions/array.ts");
/* harmony import */ var _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../undo/actions/value */ "./src/typeedit/undo/actions/value.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../undo/history */ "./src/typeedit/undo/history.ts");
/* harmony import */ var _context_bezier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/bezier */ "./src/typeedit/viewport/context/bezier.ts");
/* harmony import */ var _context_glyph__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/glyph */ "./src/typeedit/viewport/context/glyph.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../guides/point */ "./src/typeedit/viewport/guides/point.ts");
/* harmony import */ var _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../handles/bezierBasePoint */ "./src/typeedit/viewport/handles/bezierBasePoint.ts");
/* harmony import */ var _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../handles/bezierControlPoint */ "./src/typeedit/viewport/handles/bezierControlPoint.ts");











var BezierPenTool = /** @class */ (function () {
    function BezierPenTool() {
        var _this = this;
        this.name = "Pen";
        this.icon = "beziertool";
        this.accelerator = "KeyB";
        this.currentBezier = null;
        this.finalAdjustmentStage = false;
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [
            {
                name: "Edit",
                subactions: [
                    {
                        name: "Delete last point",
                        icon: "delete",
                        accelerator: "Delete",
                        handler: function () {
                            if (!_this.currentBezier)
                                return;
                            var idx = _this.currentBezier.points.length - 1;
                            var point = _this.currentBezier.points[idx];
                            _this.currentBezier.points.splice(idx, 1);
                            _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayRemoveAction"](_this.currentBezier.points, point, idx));
                            var cpHandles = _this.handles.filter(function (h) { return h instanceof _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__["BezierControlPointHandle"] &&
                                h.point === point; }); // length always = 2
                            var hIndex = _this.handles.findIndex(function (h) { return h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"] &&
                                h.point == point; });
                            _this.handles.splice(hIndex, 1);
                            var cpIndex0 = _this.handles.indexOf(cpHandles[0]);
                            _this.handles.splice(cpIndex0, 1);
                            var cpIndex1 = _this.handles.indexOf(cpHandles[1]);
                            _this.handles.splice(cpIndex1, 1);
                            _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayRemoveAction"](_this.handles, _this.handles[hIndex], hIndex), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayRemoveAction"](_this.handles, _this.handles[cpIndex0], cpIndex0), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayRemoveAction"](_this.handles, _this.handles[cpIndex1], cpIndex1));
                            if (!_this.currentBezier.points.length) {
                                var bIdx = _this.glyph.beziers.indexOf(_this.currentBezier);
                                _this.glyph.beziers.splice(bIdx, 1);
                                _this.currentBezier = null;
                                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayRemoveAction"](_this.glyph.beziers, _this.currentBezier, bIdx));
                            }
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Delete last point");
                        }
                    }
                ]
            }
        ];
    }
    Object.defineProperty(BezierPenTool.prototype, "currentPoint", {
        get: function () {
            if (!this.currentBezier)
                return null;
            if (this.finalAdjustmentStage)
                return this.currentBezier.points[0];
            return this.currentBezier.points[this.currentBezier.points.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    BezierPenTool.prototype.handleMouseEvent = function (v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_6__["BezierContext"]))
            return;
        var pos = v.co.clientToWorld(x, y);
        var rawPos = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"]();
        rawPos.copy(pos);
        if (this.currentBezier && this.currentBezier.points.length) {
            v.restrictAngles(this.currentBezier.points[this.currentBezier.points.length - 1].base, pos, e);
        }
        v.nudgePoint(pos);
        if (e.type === "mousedown" && e.buttons & 1) {
            if (!this.currentBezier) {
                this.currentBezier = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"](this.glyph);
                var length_1 = v.context.beziers.push(this.currentBezier);
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](v.context.beziers, this.currentBezier, length_1 - 1));
            }
            var nearHandle = v.nearHandle(pos.x, pos.y, "BezierBasePointHandle");
            if (this.currentBezier && this.currentBezier.points.length) {
                var rawNearHandle = v.nearHandle(rawPos.x, rawPos.y, "BezierBasePointHandle");
                if (rawNearHandle &&
                    nearHandle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"] &&
                    nearHandle.position === this.currentBezier.points[0].base)
                    nearHandle = rawNearHandle;
            }
            if (nearHandle &&
                nearHandle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"] &&
                nearHandle.position === this.currentBezier.points[0].base) {
                // Forget the curve, but allow last adjustments
                this.finalAdjustmentStage = true;
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.after, ["x", "y"]));
            }
            else {
                // Add a point
                var point = new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y));
                this.currentBezier.addPoint(point);
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.currentBezier.points, point, this.currentBezier.points.length - 1));
                var length_2 = this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__["BezierControlPointHandle"](point, point.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__["BezierControlPointHandle"](point, point.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"](point));
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length_2 - 3], length_2 - 3), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length_2 - 2], length_2 - 2), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length_2 - 1], length_2 - 1));
            }
        }
        else if (e.type === "mousemove" && e.buttons & 1 &&
            this.currentPoint) {
            this.currentPoint.after.x = pos.x;
            this.currentPoint.after.y = pos.y;
            if (!e.altKey) {
                this.currentPoint.type = _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPointType"].auto;
                this.currentPoint.before.x = 2 * this.currentPoint.base.x - pos.x;
                this.currentPoint.before.y = 2 * this.currentPoint.base.y - pos.y;
            }
            else {
                this.currentPoint.type = _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPointType"].free;
            }
        }
        else if (e.type === "mouseup") {
            if (this.finalAdjustmentStage) {
                this.handles = [];
                this.currentBezier.points[0].determineType();
                this.currentBezier = null;
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Close curve");
            }
            else if (this.currentBezier && this.currentBezier.points.length === 1) {
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Create curve");
            }
            else {
                this.currentPoint.determineType();
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Add point");
            }
            this.finalAdjustmentStage = false;
            this.glyph.emit("modified");
        }
    };
    BezierPenTool.prototype.render = function (v, ctx) {
    };
    BezierPenTool.prototype.updateContext = function (context) {
        if (!(context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_7__["GlyphContext"]))
            return;
        this.glyph = context.glyph;
        this.handles = [];
        this.guides = [];
        this.currentBezier = null;
        for (var _i = 0, _a = context.beziers; _i < _a.length; _i++) {
            var bezier = _a[_i];
            for (var _b = 0, _c = bezier.points; _b < _c.length; _b++) {
                var point = _c[_b];
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_8__["PointGuide"](point.base));
            }
        }
    };
    return BezierPenTool;
}());



/***/ }),

/***/ "./src/typeedit/viewport/tools/ellipse.ts":
/*!************************************************!*\
  !*** ./src/typeedit/viewport/tools/ellipse.ts ***!
  \************************************************/
/*! exports provided: EllipseTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EllipseTool", function() { return EllipseTool; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../undo/actions/array */ "./src/typeedit/undo/actions/array.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../undo/history */ "./src/typeedit/undo/history.ts");
/* harmony import */ var _context_bezier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/bezier */ "./src/typeedit/viewport/context/bezier.ts");
/* harmony import */ var _context_glyph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/glyph */ "./src/typeedit/viewport/context/glyph.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guides/point */ "./src/typeedit/viewport/guides/point.ts");








// ~ magic number ~
var magic = 4 * (Math.SQRT2 - 1) / 3;
var EllipseTool = /** @class */ (function () {
    function EllipseTool() {
        this.name = "Ellipse";
        this.icon = "ellipsetool";
        this.accelerator = "KeyE";
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [];
    }
    EllipseTool.prototype.createEllipse = function () {
        var curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"](this.glyph);
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        return curve;
    };
    EllipseTool.prototype.updateEllipse = function (pos, e) {
        var origin = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.startPoint.x, this.startPoint.y);
        var radius = Math.abs(pos.y - origin.y);
        var scale = Math.abs((pos.x - origin.x) / (pos.y - origin.y));
        if (e.shiftKey) {
            radius = Math.max(radius, Math.abs(pos.x - origin.x));
            scale = 1;
        }
        if (!e.ctrlKey) {
            radius /= 2;
            origin.x += radius * scale * Math.sign(pos.x - origin.x);
            origin.y += radius * Math.sign(pos.y - origin.y);
        }
        this.currentBezier.points[0].base.x = origin.x;
        this.currentBezier.points[0].base.y = origin.y - radius;
        this.currentBezier.points[0].before.x = origin.x - magic * radius * scale;
        this.currentBezier.points[0].before.y = origin.y - radius;
        this.currentBezier.points[0].after.x = origin.x + magic * radius * scale;
        this.currentBezier.points[0].after.y = origin.y - radius;
        this.currentBezier.points[1].base.x = origin.x + radius * scale;
        this.currentBezier.points[1].base.y = origin.y;
        this.currentBezier.points[1].before.x = origin.x + radius * scale;
        this.currentBezier.points[1].before.y = origin.y - magic * radius;
        this.currentBezier.points[1].after.x = origin.x + radius * scale;
        this.currentBezier.points[1].after.y = origin.y + magic * radius;
        this.currentBezier.points[2].base.x = origin.x;
        this.currentBezier.points[2].base.y = origin.y + radius;
        this.currentBezier.points[2].before.x = origin.x + magic * radius * scale;
        this.currentBezier.points[2].before.y = origin.y + radius;
        this.currentBezier.points[2].after.x = origin.x - magic * radius * scale;
        this.currentBezier.points[2].after.y = origin.y + radius;
        this.currentBezier.points[3].base.x = origin.x - radius * scale;
        this.currentBezier.points[3].base.y = origin.y;
        this.currentBezier.points[3].before.x = origin.x - radius * scale;
        this.currentBezier.points[3].before.y = origin.y + magic * radius;
        this.currentBezier.points[3].after.x = origin.x - radius * scale;
        this.currentBezier.points[3].after.y = origin.y - magic * radius;
    };
    EllipseTool.prototype.handleMouseEvent = function (v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        var pos = v.co.clientToWorld(x, y);
        v.nudgePoint(pos);
        if (e.type === "mousedown" && e.buttons & 1) {
            this.currentBezier = this.createEllipse();
            this.startPoint = pos;
            this.updateEllipse(pos, e);
            v.context.beziers.push(this.currentBezier);
            _undo_history__WEBPACK_IMPORTED_MODULE_4__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](v.context.beziers, this.currentBezier, v.context.beziers.length - 1));
        }
        else if (e.type === "mousemove" && e.buttons & 1 &&
            this.startPoint) {
            this.updateEllipse(pos, e);
        }
        else if (e.type === "mouseup") {
            if (this.currentBezier) {
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_4__["finalizeUndoContext"])("Ellipse");
                this.currentBezier = null;
                this.startPoint = null;
                this.glyph.emit("modified");
            }
        }
    };
    EllipseTool.prototype.render = function (v, ctx) {
    };
    EllipseTool.prototype.updateContext = function (context) {
        if (!(context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_6__["GlyphContext"]))
            return;
        this.glyph = context.glyph;
        this.handles = [];
        this.guides = [];
        for (var _i = 0, _a = context.beziers; _i < _a.length; _i++) {
            var bezier = _a[_i];
            for (var _b = 0, _c = bezier.points; _b < _c.length; _b++) {
                var point = _c[_b];
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_7__["PointGuide"](point.base));
            }
        }
    };
    return EllipseTool;
}());



/***/ }),

/***/ "./src/typeedit/viewport/tools/handle.ts":
/*!***********************************************!*\
  !*** ./src/typeedit/viewport/tools/handle.ts ***!
  \***********************************************/
/*! exports provided: HandleTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleTool", function() { return HandleTool; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../undo/actions/array */ "./src/typeedit/undo/actions/array.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../undo/history */ "./src/typeedit/undo/history.ts");
/* harmony import */ var _utils_lerp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/lerp */ "./src/typeedit/utils/lerp.ts");
/* harmony import */ var _context_glyph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/glyph */ "./src/typeedit/viewport/context/glyph.ts");
/* harmony import */ var _guides_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guides/curve */ "./src/typeedit/viewport/guides/curve.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guides/point */ "./src/typeedit/viewport/guides/point.ts");
/* harmony import */ var _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../handles/bezierBasePoint */ "./src/typeedit/viewport/handles/bezierBasePoint.ts");
/* harmony import */ var _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../handles/bezierControlPoint */ "./src/typeedit/viewport/handles/bezierControlPoint.ts");









var HandleTool = /** @class */ (function () {
    function HandleTool() {
        var _this = this;
        this.name = "Curve edit";
        this.icon = "handletool";
        this.accelerator = "KeyA";
        this.selecting = false;
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = true;
        this.beziers = [];
        this.subactions = [
            {
                name: "Edit",
                subactions: [
                    {
                        name: "Delete",
                        icon: "delete",
                        accelerator: "Delete",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var curves = _this.getSelectedCurves();
                            selected.forEach(function (handle) {
                                if (!(handle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]))
                                    return;
                                var point = handle.point;
                                var index = point.curve.points.indexOf(point);
                                point.curve.points.splice(index, 1);
                                var cpHandles = _this.handles.filter(function (h) { return h instanceof _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"] &&
                                    h.point === point; }); // length always = 2
                                var hIndex = _this.handles.indexOf(handle);
                                _this.handles.splice(hIndex, 1);
                                var cpIndex0 = _this.handles.indexOf(cpHandles[0]);
                                _this.handles.splice(cpIndex0, 1);
                                var cpIndex1 = _this.handles.indexOf(cpHandles[1]);
                                _this.handles.splice(cpIndex1, 1);
                                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](point.curve.points, point, index), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.handles, handle, hIndex), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.handles, cpHandles[0], cpIndex0), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.handles, cpHandles[1], cpIndex1));
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Delete points");
                        }
                    },
                    {
                        name: "Reverse direction",
                        icon: "reversecurve",
                        accelerator: "KeyR",
                        handler: function () {
                            _this.getSelectedCurves().forEach(function (c) { return c.reverse(); });
                        }
                    }
                ]
            },
            {
                name: "Select",
                subactions: [
                    {
                        name: "Select all",
                        icon: "allsel",
                        accelerator: "^KeyA",
                        handler: function () {
                            _this.handles.forEach(function (handle) { return handle.selected = true; });
                        }
                    },
                    {
                        name: "Deselect all",
                        icon: "removesel",
                        accelerator: "^KeyD",
                        handler: function () {
                            _this.handles.forEach(function (handle) { return handle.selected = false; });
                        }
                    },
                    {
                        name: "Invert selection",
                        icon: "invertsel",
                        accelerator: "^KeyI",
                        handler: function () {
                            _this.handles.forEach(function (handle) { return handle.selected = !handle.selected; });
                        }
                    },
                    {
                        name: "Select connected",
                        icon: "curvesel",
                        accelerator: "^KeyL",
                        handler: function () {
                            var curves = _this.getSelectedCurves();
                            for (var _i = 0, curves_1 = curves; _i < curves_1.length; _i++) {
                                var bezier = curves_1[_i];
                                var _loop_1 = function (point) {
                                    var handle = _this.handles.find(function (h) { return h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"] &&
                                        h.point === point; });
                                    if (handle)
                                        handle.selected = true;
                                };
                                for (var _a = 0, _b = bezier.points; _a < _b.length; _a++) {
                                    var point = _b[_a];
                                    _loop_1(point);
                                }
                            }
                        }
                    }
                ]
            },
            {
                name: "Construct",
                collapse: true,
                subactions: [
                    {
                        name: "Union",
                        icon: "union",
                        accelerator: "",
                        handler: function () {
                            _this.performCSGOperation(function (out, item) { return out.unite(item, {
                                insert: false
                            }); });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Union");
                        }
                    },
                    {
                        name: "Difference",
                        icon: "difference",
                        accelerator: "",
                        handler: function () {
                            _this.performCSGOperation(function (out, item) { return out.subtract(item, {
                                insert: false
                            }); });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Difference");
                        }
                    },
                    {
                        name: "Intersection",
                        icon: "intersection",
                        accelerator: "",
                        handler: function () {
                            _this.performCSGOperation(function (out, item) { return out.intersect(item, {
                                insert: false
                            }); });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Intersection");
                        }
                    },
                    {
                        name: "Exclusion",
                        icon: "xor",
                        accelerator: "",
                        handler: function () {
                            _this.performCSGOperation(function (out, item) { return out.exclude(item, {
                                insert: false
                            }); });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Exclusion");
                        }
                    }
                ]
            },
            {
                name: "Transform",
                collapse: true,
                subactions: [
                    {
                        name: "Flip X",
                        icon: "flipx",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.x = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["lerp"])(1 - Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["unlerp"])(handle.position.x, bbox.left, bbox.right), bbox.left, bbox.right);
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Flip X");
                        }
                    },
                    {
                        name: "Flip Y",
                        icon: "flipy",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.y = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["lerp"])(1 - Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["unlerp"])(handle.position.y, bbox.top, bbox.bottom), bbox.top, bbox.bottom);
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Flip Y");
                        }
                    }
                ]
            },
            {
                name: "Alignment",
                collapse: true,
                subactions: [
                    {
                        name: "Align to left",
                        icon: "alignleft",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.x = bbox.left;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to left");
                        }
                    },
                    {
                        name: "Align to right",
                        icon: "alignright",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.x = bbox.right;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to right");
                        }
                    },
                    {
                        name: "Align to top",
                        icon: "aligntop",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.y = bbox.top;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to top");
                        }
                    },
                    {
                        name: "Align to bottom",
                        icon: "alignbottom",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.y = bbox.bottom;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to bottom");
                        }
                    },
                    {
                        name: "Align to center",
                        icon: "alignhcenter",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.y = (bbox.top + bbox.bottom) / 2;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to center");
                        }
                    },
                    {
                        name: "Align to middle",
                        icon: "alignvcenter",
                        accelerator: "",
                        handler: function () {
                            var selected = _this.handles.filter(function (h) { return h.selected; });
                            var bbox = _this.getHandlesBBox(selected);
                            _this.addHandlesToUndoContext(selected);
                            selected.forEach(function (handle) {
                                handle.position.x = (bbox.left + bbox.right) / 2;
                            });
                            Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to middle");
                        }
                    }
                ]
            }
        ];
    }
    HandleTool.prototype.performCSGOperation = function (operation) {
        var _this = this;
        var curves = this.getSelectedCurves();
        if (!curves.length)
            return;
        var targetWinding = curves[0].clockwise;
        var paperPaths = curves.map(function (c) { return c.getPaperPath(); });
        var out = paperPaths[0];
        var insertIdx = Math.min.apply(Math, curves.map(function (c) { return _this.beziers.indexOf(c); }));
        for (var i = 1; i < paperPaths.length; i++) {
            out = operation(out, paperPaths[i]);
        }
        var newCurves = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].fromPaperPathItem(out);
        if (newCurves.length) {
            var referenceWinding_1 = newCurves[0].clockwise;
            newCurves.forEach(function (c) {
                c.glyph = _this.glyph;
                if (referenceWinding_1 !== targetWinding)
                    c.reverse();
                _this.beziers.splice(insertIdx, 0, c);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](_this.beziers, c, insertIdx));
                var gIdx = _this.guides.length;
                var guide = new _guides_curve__WEBPACK_IMPORTED_MODULE_5__["CurveGuide"](c);
                _this.guides.push(guide);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](_this.guides, guide, gIdx));
                c.points.forEach(function (p) {
                    var index = _this.handles.length;
                    _this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"](p));
                    _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](_this.handles, _this.handles[index], index), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](_this.handles, _this.handles[index + 1], index + 1), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](_this.handles, _this.handles[index + 2], index + 2));
                });
                insertIdx++;
            });
        }
        curves.forEach(function (c) {
            var index = _this.beziers.indexOf(c);
            _this.beziers.splice(index, 1);
            _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.beziers, c, index));
            var gIdx = _this.guides.findIndex(function (g) { return g instanceof _guides_curve__WEBPACK_IMPORTED_MODULE_5__["CurveGuide"] &&
                g.source === c; });
            _this.guides.splice(gIdx, 1);
            _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.guides, _this.guides[gIdx], gIdx));
            _this.handles.filter(function (h) { return (h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"] ||
                h instanceof _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"]) &&
                h.point.curve === c; }).forEach(function (h) {
                var index = _this.handles.indexOf(h);
                _this.handles.splice(index, 1);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](_this.handles, h, index));
            });
        });
        this.glyph.emit("modifier");
    };
    HandleTool.prototype.addHandlesToUndoContext = function (handles) {
        handles.forEach(function (handle) {
            if (!("prepareUndo" in handle))
                return;
            handle.prepareUndo(_undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"]);
        });
    };
    HandleTool.prototype.getHandlesBBox = function (handles) {
        var xs = handles.map(function (h) { return h.position.x; });
        var ys = handles.map(function (h) { return h.position.y; });
        return {
            left: Math.min.apply(Math, xs),
            top: Math.min.apply(Math, ys),
            right: Math.max.apply(Math, xs),
            bottom: Math.max.apply(Math, ys)
        };
    };
    HandleTool.prototype.selectHandleBox = function (exclusive) {
        if (exclusive === void 0) { exclusive = true; }
        var left = Math.min(this.selectionOrigin.x, this.selectionTarget.x);
        var right = Math.max(this.selectionOrigin.x, this.selectionTarget.x);
        var top = Math.min(this.selectionOrigin.y, this.selectionTarget.y);
        var bottom = Math.max(this.selectionOrigin.y, this.selectionTarget.y);
        for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
            var handle = _a[_i];
            var selected = handle.position.x >= left &&
                handle.position.x < right &&
                handle.position.y >= top &&
                handle.position.y < bottom;
            if (exclusive)
                handle.selected = selected;
            else
                handle.selected = selected || handle.selected;
        }
    };
    HandleTool.prototype.getSelectedCurves = function () {
        var curves = [];
        for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
            var handle = _a[_i];
            if (!handle.selected ||
                !(handle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]))
                continue;
            if (!curves.includes(handle.point.curve))
                curves.push(handle.point.curve);
        }
        return curves;
    };
    HandleTool.prototype.handleMouseEvent = function (v, e, x, y) {
        var pos = v.co.clientToWorld(x, y);
        if (this.moveStartPoint)
            v.restrictAngles(this.moveStartPoint, pos, e);
        if (e.type === "mousedown" && e.buttons & 1) {
            var handle = v.nearHandle(pos.x, pos.y);
            if (!handle) {
                this.pivotHandle = null;
                v.selectHandles([], !e.shiftKey);
                this.selecting = true;
                this.selectionOrigin = pos;
                this.selectionTarget = pos;
            }
            else {
                this.pivotHandle = handle;
                if (!handle.selected) {
                    v.selectHandles([handle], !e.shiftKey);
                }
                this.addHandlesToUndoContext(v.getSelectedHandles());
                // First movement - snapping to the cursor
                // const dPos = pos.getDiff(this.pivotHandle.position)
                // this.pivotHandle.move(
                //     v, pos, dPos, this.pivotHandle, e
                // )
                // for (let handle of this.handles) {
                //     if (
                //         handle.selected &&
                //         handle !== this.pivotHandle &&
                //         handle.type === this.pivotHandle.type
                //     )
                //         handle.move(
                //             v, pos, dPos, this.pivotHandle, e
                //         )
                // }
                this.moveStartPoint = pos;
                this.moveLastPoint = pos;
            }
        }
        else if (e.type === "mousemove" && e.buttons & 1) {
            if (this.selecting) {
                this.selectionTarget = pos;
            }
            else {
                if (!this.pivotHandle)
                    return;
                var rawX = pos.x, rawY = pos.y;
                v.nudgePoint(pos, this.pivotHandle);
                var inPointDiff = this.moveLastPoint.getDiff(this.pivotHandle.position);
                var dPos = pos.getDiff(this.moveLastPoint);
                this.moveLastPoint = pos;
                if (rawX !== pos.x || rawY !== pos.y) {
                    // Center on cursor when snapping happens
                    pos.x -= inPointDiff.x;
                    pos.y -= inPointDiff.y;
                }
                // Pivot gets moved first
                this.pivotHandle.move(v, pos, dPos, this.pivotHandle, e);
                for (var _i = 0, _a = this.handles; _i < _a.length; _i++) {
                    var handle = _a[_i];
                    if (handle.selected &&
                        handle !== this.pivotHandle &&
                        handle.type === this.pivotHandle.type)
                        handle.move(v, pos, dPos, this.pivotHandle, e);
                }
            }
        }
        else if (e.type === "mouseup") {
            if (this.selecting) {
                this.selectHandleBox(!e.shiftKey);
                this.selecting = false;
            }
            else {
                v.disableAllGuides();
                if (v.getSelectedHandles().length)
                    Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Move points");
            }
            this.moveStartPoint = null;
        }
    };
    HandleTool.prototype.render = function (v, ctx) {
        if (this.selecting) {
            ctx.fillStyle = "#08f3";
            ctx.fillRect(this.selectionOrigin.x, this.selectionOrigin.y, this.selectionTarget.x - this.selectionOrigin.x, this.selectionTarget.y - this.selectionOrigin.y);
        }
    };
    HandleTool.prototype.updateContext = function (context) {
        var _this = this;
        if (!(context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_4__["GlyphContext"]))
            return;
        this.glyph = context.glyph;
        this.beziers = context.beziers;
        this.handles = [];
        context.beziers.forEach(function (bezier) {
            bezier.points.forEach(function (p) { return _this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"](p)); });
        });
        this.guides = this.handles.filter(function (h) { return h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]; }).map(function (h) { return new _guides_point__WEBPACK_IMPORTED_MODULE_6__["HandleGuide"](h); });
    };
    return HandleTool;
}());



/***/ }),

/***/ "./src/typeedit/viewport/tools/rectangle.ts":
/*!**************************************************!*\
  !*** ./src/typeedit/viewport/tools/rectangle.ts ***!
  \**************************************************/
/*! exports provided: RectangleTool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleTool", function() { return RectangleTool; });
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../undo/actions/array */ "./src/typeedit/undo/actions/array.ts");
/* harmony import */ var _undo_history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../undo/history */ "./src/typeedit/undo/history.ts");
/* harmony import */ var _context_bezier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/bezier */ "./src/typeedit/viewport/context/bezier.ts");
/* harmony import */ var _context_glyph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/glyph */ "./src/typeedit/viewport/context/glyph.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guides/point */ "./src/typeedit/viewport/guides/point.ts");








var RectangleTool = /** @class */ (function () {
    function RectangleTool() {
        this.name = "Rectangle";
        this.icon = "rectangletool";
        this.accelerator = "KeyS";
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [];
    }
    RectangleTool.prototype.createRect = function () {
        var curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"](this.glyph);
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.points.forEach(function (p) { return p.determineType(); });
        return curve;
    };
    RectangleTool.prototype.updateRectangle = function (pos, e) {
        var min = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.startPoint.x, this.startPoint.y);
        var max = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y);
        if (e.shiftKey) {
            var w = max.x - min.x;
            var h = max.y - min.y;
            var size = Math.min(Math.abs(w), Math.abs(h));
            max.x = Math.sign(w) * size + min.x;
            max.y = Math.sign(h) * size + min.y;
        }
        if (e.ctrlKey) {
            min.x = 2 * min.x - max.x;
            min.y = 2 * min.y - max.y;
        }
        this.currentBezier.points[0].base.x = min.x;
        this.currentBezier.points[0].base.y = min.y;
        this.currentBezier.points[0].before.x = min.x;
        this.currentBezier.points[0].before.y = min.y;
        this.currentBezier.points[0].after.x = min.x;
        this.currentBezier.points[0].after.y = min.y;
        this.currentBezier.points[1].base.x = max.x;
        this.currentBezier.points[1].base.y = min.y;
        this.currentBezier.points[1].before.x = max.x;
        this.currentBezier.points[1].before.y = min.y;
        this.currentBezier.points[1].after.x = max.x;
        this.currentBezier.points[1].after.y = min.y;
        this.currentBezier.points[2].base.x = max.x;
        this.currentBezier.points[2].base.y = max.y;
        this.currentBezier.points[2].before.x = max.x;
        this.currentBezier.points[2].before.y = max.y;
        this.currentBezier.points[2].after.x = max.x;
        this.currentBezier.points[2].after.y = max.y;
        this.currentBezier.points[3].base.x = min.x;
        this.currentBezier.points[3].base.y = max.y;
        this.currentBezier.points[3].before.x = min.x;
        this.currentBezier.points[3].before.y = max.y;
        this.currentBezier.points[3].after.x = min.x;
        this.currentBezier.points[3].after.y = max.y;
    };
    RectangleTool.prototype.handleMouseEvent = function (v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        var pos = v.co.clientToWorld(x, y);
        v.nudgePoint(pos);
        if (e.type === "mousedown" && e.buttons & 1) {
            this.currentBezier = this.createRect();
            this.startPoint = pos;
            this.updateRectangle(pos, e);
            v.context.beziers.push(this.currentBezier);
            _undo_history__WEBPACK_IMPORTED_MODULE_4__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](v.context.beziers, this.currentBezier, v.context.beziers.length - 1));
        }
        else if (e.type === "mousemove" && e.buttons & 1 &&
            this.startPoint) {
            this.updateRectangle(pos, e);
        }
        else if (e.type === "mouseup") {
            if (this.currentBezier) {
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_4__["finalizeUndoContext"])("Rectangle");
                this.currentBezier = null;
                this.startPoint = null;
                this.glyph.emit("modified");
            }
        }
    };
    RectangleTool.prototype.render = function (v, ctx) {
    };
    RectangleTool.prototype.updateContext = function (context) {
        if (!(context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_6__["GlyphContext"]))
            return;
        this.glyph = context.glyph;
        this.handles = [];
        this.guides = [];
        for (var _i = 0, _a = context.beziers; _i < _a.length; _i++) {
            var bezier = _a[_i];
            for (var _b = 0, _c = bezier.points; _b < _c.length; _b++) {
                var point = _c[_b];
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_7__["PointGuide"](point.base));
            }
        }
    };
    return RectangleTool;
}());



/***/ }),

/***/ "./src/typeedit/viewport/viewport.ts":
/*!*******************************************!*\
  !*** ./src/typeedit/viewport/viewport.ts ***!
  \*******************************************/
/*! exports provided: Viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony import */ var _coordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinates */ "./src/typeedit/viewport/coordinates.ts");
/* harmony import */ var _guides_curve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides/curve */ "./src/typeedit/viewport/guides/curve.ts");
/* harmony import */ var _guides_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guides/grid */ "./src/typeedit/viewport/guides/grid.ts");
/* harmony import */ var _guides_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guides/line */ "./src/typeedit/viewport/guides/line.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guides/point */ "./src/typeedit/viewport/guides/point.ts");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_accelerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/accelerator */ "./src/typeedit/utils/accelerator.ts");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};







var Viewport = /** @class */ (function () {
    function Viewport(context, handles, tool) {
        this.context = context;
        this.handles = handles;
        this.tool = tool;
        this.domCanvas = document.createElement("canvas");
        this.ctx = this.domCanvas.getContext("2d");
        this.co = new _coordinates__WEBPACK_IMPORTED_MODULE_0__["ViewportCoordinates"]();
        this.setupCanvasEvents();
    }
    Viewport.prototype.dispatchMouseEvent = function (e) {
        var box = this.domCanvas.getBoundingClientRect();
        if (!this.tool)
            return;
        this.tool.handleMouseEvent(this, e, e.clientX - box.left, e.clientY - box.top);
        this.render();
    };
    Viewport.prototype.setupCanvasEvents = function () {
        var _this = this;
        this.domCanvas.addEventListener("click", function (e) {
        });
        this.domCanvas.addEventListener("mousedown", function (e) {
            _this.dispatchMouseEvent(e);
        });
        this.domCanvas.addEventListener("contextmenu", function () {
            var menuItems = [];
            _this.tool.subactions.forEach(function (section, i) {
                if (section.collapse) {
                    menuItems.push({
                        type: "submenu",
                        label: section.name,
                        submenu: section.subactions.map(function (a) {
                            return {
                                label: a.name,
                                click: function () { return a.handler(); },
                                accelerator: Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_6__["accelStringToElectron"])(a.accelerator)
                            };
                        })
                    });
                }
                else {
                    menuItems.push.apply(menuItems, section.subactions.map(function (a) {
                        return {
                            label: a.name,
                            click: function () { return a.handler(); },
                            accelerator: Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_6__["accelStringToElectron"])(a.accelerator)
                        };
                    }));
                }
                if (i < _this.tool.subactions.length - 1) {
                    menuItems.push({
                        type: "separator"
                    });
                }
            });
            var menu = electron__WEBPACK_IMPORTED_MODULE_5__["remote"].Menu.buildFromTemplate(menuItems);
            menu.popup();
        });
        this.domCanvas.addEventListener("mouseup", function (e) {
            _this.dispatchMouseEvent(e);
        });
        this.domCanvas.addEventListener("mousemove", function (e) {
            if (e.buttons & 4) { // Middle Button
                _this.co.translate(e.movementX, e.movementY);
                _this.render();
            }
            else {
                _this.dispatchMouseEvent(e);
            }
        });
        this.domCanvas.addEventListener("wheel", function (e) {
            if (e.buttons & 4 || e.ctrlKey) { // Middle Button
                var box = _this.domCanvas.getBoundingClientRect();
                var pos = _this.co.clientToWorld(e.clientX - box.left, e.clientY - box.top);
                _this.co.scale(Math.pow(1.2, Math.sign(-e.deltaY)), pos.x, pos.y);
                _this.render();
            }
            else {
                if (e.shiftKey && !e.deltaX) {
                    _this.co.translate(-e.deltaY, 0);
                }
                else {
                    _this.co.translate(-e.deltaX, -e.deltaY);
                }
                _this.render();
            }
        });
    };
    Viewport.prototype.nearHandle = function (x, y, type) {
        var handles = __spreadArrays(this.context.handles, this.tool.handles);
        for (var i = handles.length - 1; i >= 0; i--) {
            var handle = handles[i];
            if (type && handle.type !== type || handle.hidden)
                continue;
            var dist = Math.hypot(handle.position.x - x, handle.position.y - y);
            if (dist < handle.hitRadius / this.co.scaleFactor)
                return handle;
        }
        return null;
    };
    Viewport.prototype.selectHandles = function (select, exclusive) {
        if (exclusive === void 0) { exclusive = true; }
        var handles = __spreadArrays(this.context.handles, this.tool.handles);
        if (exclusive) {
            for (var _i = 0, handles_1 = handles; _i < handles_1.length; _i++) {
                var handle = handles_1[_i];
                handle.selected = false;
            }
        }
        for (var _a = 0, select_1 = select; _a < select_1.length; _a++) {
            var handle = select_1[_a];
            handle.selected = true;
        }
    };
    Viewport.prototype.getSelectedHandles = function () {
        var handles = __spreadArrays(this.context.handles, this.tool.handles);
        return handles.filter(function (h) { return h.selected; });
    };
    Viewport.prototype.purgeHandles = function () {
        this.handles = [];
    };
    Viewport.prototype.updateViewportSize = function (autoCenter) {
        if (autoCenter === void 0) { autoCenter = true; }
        var parent = this.domCanvas.parentElement;
        if (!parent)
            return;
        var rect = parent.getBoundingClientRect();
        if (autoCenter) {
            this.co.translate((rect.width - this.domCanvas.width) / 2, (rect.height - this.domCanvas.height) / 2);
        }
        this.domCanvas.width = rect.width;
        this.domCanvas.height = rect.height;
        this.render();
    };
    Viewport.prototype.drawHandles = function (handles) {
        for (var _i = 0, handles_2 = handles; _i < handles_2.length; _i++) {
            var handle = handles_2[_i];
            var clientPos = this.co.worldToClient(handle.position.x, handle.position.y);
            this.ctx.resetTransform();
            this.ctx.translate(Math.round(clientPos.x) + 0.5, Math.round(clientPos.y) + 0.5);
            handle.render(this, this.ctx);
        }
    };
    Viewport.prototype.nudgeToGuides = function (pos, obj, guides) {
        var _this = this;
        var nudgedPoints = [];
        guides.forEach(function (g) {
            var point = g.nudge(_this, pos, obj);
            if (point && pos.distance(point))
                nudgedPoints.push(point);
        });
        if (nudgedPoints.length) {
            var distances = nudgedPoints.map(function (p) { return p.distance(pos); });
            var minDist = Math.min.apply(Math, distances);
            var minIndex = distances.indexOf(minDist);
            pos.copy(nudgedPoints[minIndex]);
        }
    };
    Viewport.prototype.nudgePoint = function (pos, obj) {
        var guides = __spreadArrays(this.context.guides, this.tool.guides);
        this.nudgeToGuides(pos, obj, guides.filter(function (g) { return g instanceof _guides_curve__WEBPACK_IMPORTED_MODULE_1__["CurveGuide"]; }));
        this.nudgeToGuides(pos, obj, this.context.grids);
        this.nudgeToGuides(pos, obj, guides.filter(function (g) { return g instanceof _guides_line__WEBPACK_IMPORTED_MODULE_3__["HorizontalGuide"] ||
            g instanceof _guides_line__WEBPACK_IMPORTED_MODULE_3__["VerticalGuide"]; }));
        this.nudgeToGuides(pos, obj, guides.filter(function (g) { return g instanceof _guides_point__WEBPACK_IMPORTED_MODULE_4__["PointGuide"]; }));
    };
    Viewport.prototype.restrictAngles = function (start, pos, e) {
        var dx = Math.abs(pos.x - start.x);
        var dy = Math.abs(pos.y - start.y);
        if (e.shiftKey) {
            if (dx > dy)
                pos.y = start.y;
            else
                pos.x = start.x;
        }
    };
    Viewport.prototype.disableAllGuides = function () {
        this.context.grids.forEach(function (g) { return g.active = false; });
        this.context.guides.forEach(function (g) { return g.active = false; });
        this.tool.guides.forEach(function (g) { return g.active = false; });
    };
    Viewport.prototype.render = function () {
        var _this = this;
        this.ctx.resetTransform();
        this.ctx.clearRect(0, 0, this.domCanvas.width, this.domCanvas.height);
        this.co.transformCanvas(this.ctx);
        this.context.render(this, this.ctx);
        this.ctx.resetTransform();
        this.context.grids.forEach(function (g) { return g.render(_this, _this.ctx); });
        Array.apply(void 0, __spreadArrays(this.context.guides, this.tool.guides)).forEach(function (guide) {
            if (guide.active || guide instanceof _guides_grid__WEBPACK_IMPORTED_MODULE_2__["GridGuide"]) {
                _this.ctx.resetTransform();
                if (guide.worldRender)
                    _this.co.transformCanvas(_this.ctx);
                guide.render(_this, _this.ctx);
            }
        });
        if (this.tool && this.tool.supportsForeignHandles) {
            this.drawHandles(this.context.handles);
            this.drawHandles(this.handles);
        }
        if (this.tool) {
            this.drawHandles(this.tool.handles);
        }
        this.ctx.resetTransform();
        this.co.transformCanvas(this.ctx);
        if (this.tool)
            this.tool.render(this, this.ctx);
    };
    Viewport.prototype.setTool = function (tool) {
        this.tool = tool;
        this.tool.updateContext(this.context);
        this.disableAllGuides();
        this.render();
    };
    return Viewport;
}());



/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "opentype.js":
/*!******************************!*\
  !*** external "opentype.js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("opentype.js");

/***/ }),

/***/ "paper":
/*!************************!*\
  !*** external "paper" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("paper");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "smart-buffer":
/*!*******************************!*\
  !*** external "smart-buffer" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("smart-buffer");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map