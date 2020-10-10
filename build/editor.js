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
___CSS_LOADER_EXPORT___.push([module.i, "body {\n  background: #fff;\n  font-family: \"Inter\";\n  user-select: none; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app.scss"],"names":[],"mappings":"AAAA;EACI,gBAAgB;EAEhB,oBAAoB;EAEpB,iBAAiB,EAAA","sourcesContent":["body {\n    background: #fff;\n\n    font-family: \"Inter\";\n\n    user-select: none;\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "section.edit {\n  position: relative;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-rows: 1fr auto; }\n  section.edit div.viewport {\n    position: relative; }\n    section.edit div.viewport canvas {\n      position: absolute;\n      left: 0;\n      top: 0; }\n  section.edit aside {\n    min-width: 320px;\n    width: 320px;\n    border-left: 1px solid #ddd;\n    display: flex;\n    flex-direction: column; }\n    section.edit aside nav {\n      display: flex; }\n      section.edit aside nav button {\n        background: transparent;\n        font-family: \"Inter\";\n        font-size: 10pt;\n        font-weight: 400;\n        padding: 6px 20px;\n        border: none;\n        border-bottom: none;\n        outline: none;\n        flex-grow: 1; }\n        section.edit aside nav button.active {\n          box-shadow: inset 0px -2px #333; }\n    section.edit aside div.listContainer {\n      height: 0;\n      flex-grow: 1;\n      overflow-y: scroll; }\n    section.edit aside div.glyphList {\n      background: #eee;\n      display: grid;\n      grid-template-columns: repeat(4, 1fr);\n      gap: 1px; }\n      section.edit aside div.glyphList div.glyph {\n        max-width: 75px;\n        background: #fff;\n        display: flex;\n        flex-direction: column; }\n        section.edit aside div.glyphList div.glyph.active label {\n          background: #6d7599;\n          color: #fff; }\n        section.edit aside div.glyphList div.glyph label {\n          background: #fafafa;\n          font-size: 9pt;\n          font-weight: 500;\n          text-align: center;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          padding: 2px;\n          overflow: hidden; }\n        section.edit aside div.glyphList div.glyph canvas {\n          width: 100%;\n          height: auto; }\n  section.edit div.glyphBar {\n    font-family: \"Inter\";\n    font-size: 24pt;\n    text-align: center;\n    border: none;\n    outline: none;\n    padding: 6px 20px; }\n    section.edit div.glyphBar div.ntglyph {\n      height: 1em;\n      box-sizing: border-box;\n      background: #eee;\n      border-radius: 4px;\n      border: 1px solid #ddd;\n      margin: 0px 1px;\n      display: inline-flex;\n      align-items: center; }\n      section.edit div.glyphBar div.ntglyph span {\n        font-size: 16pt; }\n  section.edit div.glyphSwitchButtons {\n    position: absolute;\n    left: 8px;\n    right: 8px;\n    top: 0;\n    bottom: 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    pointer-events: none; }\n  section.edit button.prevGlyph,\n  section.edit button.nextGlyph {\n    background: #fff;\n    font-size: 0;\n    outline: none;\n    padding: 6px 8px;\n    border-radius: 4px;\n    border: 1px solid #ddd;\n    box-shadow: 0px 2px 4px #0001;\n    pointer-events: all;\n    z-index: 10; }\n    section.edit button.prevGlyph:hover,\n    section.edit button.nextGlyph:hover {\n      background: #eee; }\n    section.edit button.prevGlyph:active,\n    section.edit button.nextGlyph:active {\n      background: #ddd; }\n    section.edit button.prevGlyph img,\n    section.edit button.nextGlyph img {\n      width: 16px;\n      height: 16px; }\n  section.edit div.tools {\n    padding: 8px 2px;\n    display: flex;\n    flex-direction: column;\n    border-right: 1px solid #ddd;\n    grid-row: 1 / span 2; }\n    section.edit div.tools button {\n      background: transparent;\n      font-size: 0;\n      border: none;\n      outline: none;\n      padding: 7px 8px;\n      border-radius: 4px; }\n      section.edit div.tools button:hover {\n        background: #eee; }\n      section.edit div.tools button:active {\n        background: #ddd; }\n      section.edit div.tools button.active {\n        background: #eee;\n        box-shadow: inset 0px 0px 0px 1px #bbb; }\n      section.edit div.tools button img {\n        width: 16px;\n        height: 16px; }\n  section.edit div.subactionsBar {\n    position: absolute;\n    left: 8px;\n    right: 8px;\n    top: 8px;\n    display: flex;\n    justify-content: flex-start; }\n  section.edit div.subactions {\n    background: #fff;\n    padding: 2px;\n    border-radius: 4px;\n    border: 1px solid #bbb;\n    box-shadow: 0px 2px 4px #0001;\n    display: flex;\n    z-index: 10; }\n    section.edit div.subactions > div:not(:last-child) {\n      border-right: 1px solid #ddd;\n      padding-right: 2px; }\n    section.edit div.subactions > div:not(:first-child) {\n      padding-left: 2px; }\n    section.edit div.subactions button {\n      background: transparent;\n      font-size: 0;\n      border: none;\n      outline: none;\n      padding: 4px 6px;\n      border-radius: 2px; }\n      section.edit div.subactions button:disabled img {\n        filter: grayscale(1) opacity(0.5); }\n      section.edit div.subactions button:hover {\n        background: #eee; }\n      section.edit div.subactions button:active {\n        background: #ddd; }\n      section.edit div.subactions button img {\n        width: 16px;\n        height: 16px; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/editor.scss"],"names":[],"mappings":"AAAA;EACI,kBAAkB;EAClB,aAAa;EACb,oCAAoC;EACpC,4BAA4B,EAAA;EAJhC;IAOQ,kBAAkB,EAAA;IAP1B;MAUY,kBAAkB;MAClB,OAAO;MACP,MAAM,EAAA;EAZlB;IAiBQ,gBAAgB;IAChB,YAAY;IAEZ,2BAA2B;IAE3B,aAAa;IACb,sBAAsB,EAAA;IAvB9B;MA0BY,aAAa,EAAA;MA1BzB;QA6BgB,uBAAuB;QAEvB,oBAAoB;QACpB,eAAe;QACf,gBAAgB;QAEhB,iBAAiB;QACjB,YAAY;QACZ,mBAAmB;QACnB,aAAa;QAEb,YAAY,EAAA;QAxC5B;UA2CoB,+BAA+B,EAAA;IA3CnD;MAiDY,SAAS;MAET,YAAY;MACZ,kBAAkB,EAAA;IApD9B;MAwDY,gBAAgB;MAEhB,aAAa;MACb,qCAAqC;MACrC,QAAQ,EAAA;MA5DpB;QA+DgB,eAAe;QAEf,gBAAgB;QAEhB,aAAa;QACb,sBAAsB,EAAA;QApEtC;UAuEoB,mBAAmB;UACnB,WAAW,EAAA;QAxE/B;UA4EoB,mBAAmB;UAEnB,cAAc;UACd,gBAAgB;UAChB,kBAAkB;UAClB,mBAAmB;UACnB,uBAAuB;UAEvB,YAAY;UAEZ,gBAAgB,EAAA;QAtFpC;UA0FoB,WAAW;UACX,YAAY,EAAA;EA3FhC;IAkGQ,oBAAoB;IACpB,eAAe;IACf,kBAAkB;IAElB,YAAY;IACZ,aAAa;IACb,iBAAiB,EAAA;IAxGzB;MA2GY,WAAW;MACX,sBAAsB;MAEtB,gBAAgB;MAChB,kBAAkB;MAClB,sBAAsB;MACtB,eAAe;MAEf,oBAAoB;MACpB,mBAAmB,EAAA;MApH/B;QAuHgB,eAAe,EAAA;EAvH/B;IA6HQ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,MAAM;IACN,SAAS;IAET,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,oBAAoB,EAAA;EAtI5B;;IA2IQ,gBAAgB;IAEhB,YAAY;IAEZ,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,sBAAsB;IACtB,6BAA6B;IAE7B,mBAAmB;IACnB,WAAW,EAAA;IAtJnB;;MAyJY,gBAAgB,EAAA;IAzJ5B;;MA6JY,gBAAgB,EAAA;IA7J5B;;MAiKY,WAAW;MACX,YAAY,EAAA;EAlKxB;IAuKQ,gBAAgB;IAEhB,aAAa;IACb,sBAAsB;IAEtB,4BAA4B;IAE5B,oBAAoB,EAAA;IA9K5B;MAiLY,uBAAuB;MAEvB,YAAY;MAEZ,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,kBAAkB,EAAA;MAxL9B;QA2LgB,gBAAgB,EAAA;MA3LhC;QA+LgB,gBAAgB,EAAA;MA/LhC;QAmMgB,gBAAgB;QAChB,sCAAsC,EAAA;MApMtD;QAwMgB,WAAW;QACX,YAAY,EAAA;EAzM5B;IA+MQ,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,QAAQ;IAER,aAAa;IACb,2BAA2B,EAAA;EArNnC;IAyNQ,gBAAgB;IAEhB,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IAEtB,6BAA6B;IAE7B,aAAa;IACb,WAAW,EAAA;IAlOnB;MAqOY,4BAA4B;MAC5B,kBAAkB,EAAA;IAtO9B;MA0OY,iBAAiB,EAAA;IA1O7B;MA8OY,uBAAuB;MAEvB,YAAY;MAEZ,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,kBAAkB,EAAA;MArP9B;QAwPgB,iCAAiC,EAAA;MAxPjD;QA4PgB,gBAAgB,EAAA;MA5PhC;QAgQgB,gBAAgB,EAAA;MAhQhC;QAoQgB,WAAW;QACX,YAAY,EAAA","sourcesContent":["section.edit {\n    position: relative;\n    display: grid;\n    grid-template-columns: auto 1fr auto;\n    grid-template-rows: 1fr auto;\n\n    div.viewport {\n        position: relative;\n\n        canvas {\n            position: absolute;\n            left: 0;\n            top: 0;\n        }\n    }\n\n    aside {\n        min-width: 320px;\n        width: 320px;\n\n        border-left: 1px solid #ddd;\n        \n        display: flex;\n        flex-direction: column;\n\n        nav {\n            display: flex;\n\n            button {\n                background: transparent;\n\n                font-family: \"Inter\";\n                font-size: 10pt;\n                font-weight: 400;\n\n                padding: 6px 20px;\n                border: none;\n                border-bottom: none;\n                outline: none;\n\n                flex-grow: 1;\n\n                &.active {\n                    box-shadow: inset 0px -2px #333;\n                }\n            }\n        }\n\n        div.listContainer {\n            height: 0; // WTF???\n\n            flex-grow: 1;\n            overflow-y: scroll;\n        }\n\n        div.glyphList {\n            background: #eee;\n\n            display: grid;\n            grid-template-columns: repeat(4, 1fr);\n            gap: 1px;\n\n            div.glyph {\n                max-width: 75px;\n\n                background: #fff;\n\n                display: flex;\n                flex-direction: column;\n\n                &.active label {\n                    background: #6d7599;\n                    color: #fff;\n                }\n\n                label {\n                    background: #fafafa;\n\n                    font-size: 9pt;\n                    font-weight: 500;\n                    text-align: center;\n                    white-space: nowrap;\n                    text-overflow: ellipsis;\n                    \n                    padding: 2px;\n\n                    overflow: hidden;\n                }\n\n                canvas {\n                    width: 100%;\n                    height: auto;\n                }\n            }\n        }\n    }\n\n    div.glyphBar {\n        font-family: \"Inter\";\n        font-size: 24pt;\n        text-align: center;\n\n        border: none;\n        outline: none;\n        padding: 6px 20px;\n\n        div.ntglyph {\n            height: 1em;\n            box-sizing: border-box;\n\n            background: #eee;\n            border-radius: 4px;\n            border: 1px solid #ddd;\n            margin: 0px 1px;\n\n            display: inline-flex;\n            align-items: center;\n\n            span {            \n                font-size: 16pt;\n            }\n        }\n    }\n\n    div.glyphSwitchButtons {\n        position: absolute;\n        left: 8px;\n        right: 8px;\n        top: 0;\n        bottom: 0;\n\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        pointer-events: none;\n    }\n\n    button.prevGlyph,\n    button.nextGlyph {\n        background: #fff;\n\n        font-size: 0;\n\n        outline: none;\n        padding: 6px 8px;\n        border-radius: 4px;\n        border: 1px solid #ddd;\n        box-shadow: 0px 2px 4px #0001;\n\n        pointer-events: all;\n        z-index: 10;\n\n        &:hover {\n            background: #eee;\n        }\n\n        &:active {\n            background: #ddd;\n        }\n\n        img {\n            width: 16px;\n            height: 16px;\n        }\n    }\n\n    div.tools {\n        padding: 8px 2px;\n\n        display: flex;\n        flex-direction: column;\n\n        border-right: 1px solid #ddd;\n\n        grid-row: 1 / span 2;\n\n        button {\n            background: transparent;\n\n            font-size: 0;\n\n            border: none;\n            outline: none;\n            padding: 7px 8px;\n            border-radius: 4px;\n\n            &:hover {\n                background: #eee;\n            }\n\n            &:active {\n                background: #ddd;\n            }\n\n            &.active {\n                background: #eee;\n                box-shadow: inset 0px 0px 0px 1px #bbb;\n            }\n\n            img {\n                width: 16px;\n                height: 16px;\n            }\n        }\n    }\n\n    div.subactionsBar {\n        position: absolute;\n        left: 8px;\n        right: 8px;\n        top: 8px;\n\n        display: flex;\n        justify-content: flex-start;\n    }\n\n    div.subactions {\n        background: #fff;\n\n        padding: 2px;\n        border-radius: 4px;\n        border: 1px solid #bbb;\n\n        box-shadow: 0px 2px 4px #0001;\n\n        display: flex;\n        z-index: 10;\n\n        & > div:not(:last-child) {\n            border-right: 1px solid #ddd;\n            padding-right: 2px;\n        }\n\n        & > div:not(:first-child) {\n            padding-left: 2px;\n        }\n\n        button {\n            background: transparent;\n\n            font-size: 0;\n\n            border: none;\n            outline: none;\n            padding: 4px 6px;\n            border-radius: 2px;\n            \n            &:disabled img {\n                filter: grayscale(1) opacity(0.5);\n            }\n\n            &:hover {\n                background: #eee;\n            }\n\n            &:active {\n                background: #ddd;\n            }\n\n            img {\n                width: 16px;\n                height: 16px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "main {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background: #f6f6f6;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start; }\n  main > nav {\n    width: 100%;\n    padding: 0px;\n    box-shadow: inset 0px -2px 2px #00000005;\n    display: flex; }\n    main > nav div.actions {\n      display: flex; }\n      main > nav div.actions button {\n        background: transparent;\n        border: none;\n        outline: none;\n        padding: 7px 10px;\n        border-radius: 4px;\n        margin-bottom: 2px;\n        display: flex;\n        align-items: center;\n        justify-content: center; }\n        main > nav div.actions button:hover {\n          background: #ddd; }\n        main > nav div.actions button:active {\n          background: #c0c0c0; }\n        main > nav div.actions button img {\n          width: 16px;\n          height: 16px; }\n    main > nav div.tabs {\n      display: flex;\n      flex-grow: 1;\n      justify-content: center; }\n      main > nav div.tabs button {\n        background: transparent;\n        font-family: \"Inter\";\n        font-size: 10pt;\n        font-weight: 500;\n        padding: 6px 20px;\n        border: none;\n        border-bottom: none;\n        border-radius: 2px 2px 0px 0px;\n        outline: none; }\n        main > nav div.tabs button.active {\n          background: #fff; }\n  main section {\n    position: relative;\n    background: #fff;\n    width: 100vw;\n    flex-grow: 1; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/app/main.scss"],"names":[],"mappings":"AAAA;EACI,eAAe;EACf,OAAO;EACP,MAAM;EACN,QAAQ;EACR,SAAS;EAET,mBAAmB;EAEnB,aAAa;EACb,sBAAsB;EACtB,uBAAuB,EAAA;EAX3B;IAcQ,WAAW;IAEX,YAAY;IAEZ,wCAAwC;IACxC,aAAa,EAAA;IAnBrB;MAsBY,aAAa,EAAA;MAtBzB;QAyBgB,uBAAuB;QAEvB,YAAY;QACZ,aAAa;QACb,iBAAiB;QACjB,kBAAkB;QAClB,kBAAkB;QAElB,aAAa;QACb,mBAAmB;QACnB,uBAAuB,EAAA;QAnCvC;UAsCoB,gBAAgB,EAAA;QAtCpC;UA0CoB,mBAAmB,EAAA;QA1CvC;UA8CoB,WAAW;UACX,YAAY,EAAA;IA/ChC;MAqDY,aAAa;MACb,YAAY;MACZ,uBAAuB,EAAA;MAvDnC;QA0DgB,uBAAuB;QAEvB,oBAAoB;QACpB,eAAe;QACf,gBAAgB;QAEhB,iBAAiB;QACjB,YAAY;QACZ,mBAAmB;QACnB,8BAA8B;QAC9B,aAAa,EAAA;QApE7B;UAuEoB,gBAAgB,EAAA;EAvEpC;IA8EQ,kBAAkB;IAElB,gBAAgB;IAEhB,YAAY;IAEZ,YAAY,EAAA","sourcesContent":["main {\n    position: fixed;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n\n    background: #f6f6f6;\n\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n\n    & > nav {\n        width: 100%;\n\n        padding: 0px;\n\n        box-shadow: inset 0px -2px 2px #00000005;\n        display: flex;\n\n        div.actions {\n            display: flex;\n\n            button {    \n                background: transparent;\n    \n                border: none;\n                outline: none;\n                padding: 7px 10px;\n                border-radius: 4px;\n                margin-bottom: 2px;\n    \n                display: flex;\n                align-items: center;\n                justify-content: center;\n    \n                &:hover {\n                    background: #ddd;\n                }\n    \n                &:active {\n                    background: #c0c0c0;\n                }\n    \n                img {\n                    width: 16px;\n                    height: 16px;\n                }\n            }\n        }\n\n        div.tabs {\n            display: flex;\n            flex-grow: 1;\n            justify-content: center;\n\n            button {\n                background: transparent;\n    \n                font-family: \"Inter\";\n                font-size: 10pt;\n                font-weight: 500;\n    \n                padding: 6px 20px;\n                border: none;\n                border-bottom: none;\n                border-radius: 2px 2px 0px 0px;\n                outline: none;\n    \n                &.active {\n                    background: #fff;\n                }\n            }\n        }\n    }\n\n    section {\n        position: relative;\n\n        background: #fff;\n\n        width: 100vw;\n\n        flex-grow: 1;\n    }\n}"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.i, "article.welcome {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start; }\n  article.welcome > div {\n    width: 350px;\n    margin: 60px; }\n    article.welcome > div div.buttons {\n      display: grid;\n      grid-template-columns: repeat(2, 1fr);\n      gap: 2px; }\n    article.welcome > div h1 {\n      font-size: 40pt;\n      line-height: 1;\n      margin: 0;\n      text-align: center; }\n    article.welcome > div h3 {\n      font-size: 14pt;\n      font-weight: 400;\n      margin: 0px 0px 24px 0px;\n      text-align: center; }\n    article.welcome > div h2 {\n      font-weight: 400;\n      margin-bottom: 8px; }\n    article.welcome > div button {\n      width: 100%;\n      background: transparent;\n      font-family: \"Inter\";\n      border: none;\n      outline: none;\n      padding: 7px 8px;\n      border: 1px solid #bbb;\n      border-radius: 4px;\n      margin-bottom: 2px;\n      display: flex;\n      align-items: center;\n      justify-content: center; }\n      article.welcome > div button:hover {\n        background: #eee; }\n      article.welcome > div button:active {\n        background: #ddd; }\n      article.welcome > div button img {\n        width: 16px;\n        height: 16px;\n        margin-right: 8px; }\n", "",{"version":3,"sources":["webpack://src/typeedit/styles/welcome.scss"],"names":[],"mappings":"AAAA;EACI,aAAa;EACb,uBAAuB;EACvB,uBAAuB,EAAA;EAH3B;IAMQ,YAAY;IAEZ,YAAY,EAAA;IARpB;MAWY,aAAa;MACb,qCAAqC;MACrC,QAAQ,EAAA;IAbpB;MAiBY,eAAe;MACf,cAAc;MAEd,SAAS;MAET,kBAAkB,EAAA;IAtB9B;MA0BY,eAAe;MACf,gBAAgB;MAEhB,wBAAwB;MAExB,kBAAkB,EAAA;IA/B9B;MAmCY,gBAAgB;MAEhB,kBAAkB,EAAA;IArC9B;MAyCY,WAAW;MAEX,uBAAuB;MAEvB,oBAAoB;MAEpB,YAAY;MACZ,aAAa;MACb,gBAAgB;MAChB,sBAAsB;MACtB,kBAAkB;MAClB,kBAAkB;MAElB,aAAa;MACb,mBAAmB;MACnB,uBAAuB,EAAA;MAxDnC;QA2DgB,gBAAgB,EAAA;MA3DhC;QA+DgB,gBAAgB,EAAA;MA/DhC;QAmEgB,WAAW;QACX,YAAY;QAEZ,iBAAiB,EAAA","sourcesContent":["article.welcome {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n\n    & > div {     \n        width: 350px;\n\n        margin: 60px;\n\n        div.buttons {\n            display: grid;\n            grid-template-columns: repeat(2, 1fr);\n            gap: 2px;\n        }\n\n        h1 {\n            font-size: 40pt;\n            line-height: 1;\n\n            margin: 0;\n\n            text-align: center;\n        }\n\n        h3 {\n            font-size: 14pt;\n            font-weight: 400;\n\n            margin: 0px 0px 24px 0px;\n\n            text-align: center;\n        }\n\n        h2 {\n            font-weight: 400;\n            \n            margin-bottom: 8px;\n        }\n\n        button {\n            width: 100%;\n\n            background: transparent;\n\n            font-family: \"Inter\";\n\n            border: none;\n            outline: none;\n            padding: 7px 8px;\n            border: 1px solid #bbb;\n            border-radius: 4px;\n            margin-bottom: 2px;\n\n            display: flex;\n            align-items: center;\n            justify-content: center;\n\n            &:hover {\n                background: #eee;\n            }\n\n            &:active {\n                background: #ddd;\n            }\n\n            img {\n                width: 16px;\n                height: 16px;\n\n                margin-right: 8px;\n            }\n        }\n    }\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./typeedit/styles/app/editor.scss */ "./src/typeedit/styles/app/editor.scss");
/* harmony import */ var _typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_app_editor_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typeedit/styles/welcome.scss */ "./src/typeedit/styles/welcome.scss");
/* harmony import */ var _typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_typeedit_styles_welcome_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _typeedit_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./typeedit/app */ "./src/typeedit/app.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! paper */ "paper");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _typeedit_io_import__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typeedit/io/import */ "./src/typeedit/io/import.ts");
/* harmony import */ var _typeedit_font_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typeedit/font/font */ "./src/typeedit/font/font.ts");
/* harmony import */ var _typeedit_io_export__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typeedit/io/export */ "./src/typeedit/io/export.ts");
var _a;











console.log(electron__WEBPACK_IMPORTED_MODULE_6__["remote"]);
const scope = new paper__WEBPACK_IMPORTED_MODULE_5___default.a.PaperScope();
scope.install(window);
scope.setup(new paper__WEBPACK_IMPORTED_MODULE_5___default.a.Size(1000, 1000));
const recentFiles = (_a = JSON.parse(localStorage.getItem("recentFiles"))) !== null && _a !== void 0 ? _a : [];
recentFiles.forEach(file => {
    const btn = document.createElement("button");
    btn.textContent = Object(path__WEBPACK_IMPORTED_MODULE_7__["basename"])(file);
    btn.addEventListener("click", () => {
        Object(_typeedit_io_import__WEBPACK_IMPORTED_MODULE_8__["importFont"])(file).then(font => {
            const welcome = document.querySelector("article.welcome");
            welcome.style.display = "none";
            Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_4__["default"])(font);
        });
    });
    document.querySelector("div.recentFiles").appendChild(btn);
});
document.querySelectorAll("button.newFont").forEach(btn => btn.addEventListener("click", () => {
    const welcome = document.querySelector("article.welcome");
    welcome.style.display = "none";
    Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_4__["default"])(_typeedit_font_font__WEBPACK_IMPORTED_MODULE_9__["Font"].createBlank());
}));
document.querySelectorAll("button.openFont").forEach(btn => btn.addEventListener("click", () => {
    electron__WEBPACK_IMPORTED_MODULE_6__["remote"].dialog.showOpenDialog(electron__WEBPACK_IMPORTED_MODULE_6__["remote"].getCurrentWindow(), {
        filters: [
            {
                name: "Fonts",
                extensions: ["otf", "ttf"]
            }
        ],
        properties: ["openFile"]
    }).then(result => {
        if (result.canceled ||
            result.filePaths.length !== 1)
            return;
        Object(_typeedit_io_import__WEBPACK_IMPORTED_MODULE_8__["importFont"])(result.filePaths[0]).then(font => {
            const welcome = document.querySelector("article.welcome");
            welcome.style.display = "none";
            Object(_typeedit_app__WEBPACK_IMPORTED_MODULE_4__["default"])(font);
            recentFiles.unshift(result.filePaths[0]);
            localStorage.setItem("recentFiles", JSON.stringify(recentFiles));
        });
    });
}));
document.querySelectorAll("button.saveFont").forEach(btn => btn.addEventListener("click", () => {
    electron__WEBPACK_IMPORTED_MODULE_6__["remote"].dialog.showSaveDialog(electron__WEBPACK_IMPORTED_MODULE_6__["remote"].getCurrentWindow(), {
        filters: [
            {
                name: "Fonts",
                extensions: ["otf", "ttf"]
            }
        ],
        defaultPath: _typeedit_app__WEBPACK_IMPORTED_MODULE_4__["currentFont"].info.fontFamily +
            "-" + _typeedit_app__WEBPACK_IMPORTED_MODULE_4__["currentFont"].info.fontSubfamily +
            ".otf"
    }).then(result => {
        if (result.canceled)
            return;
        Object(_typeedit_io_export__WEBPACK_IMPORTED_MODULE_10__["exportFont"])(_typeedit_app__WEBPACK_IMPORTED_MODULE_4__["currentFont"], result.filePath);
    });
}));
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











let currentFont = null;
const globalSubActions = [
    {
        name: "Undo",
        icon: "undo",
        accelerator: "^KeyZ",
        handler: () => {
            Object(_undo_history__WEBPACK_IMPORTED_MODULE_7__["undo"])();
        }
    },
    {
        name: "Redo",
        icon: "redo",
        accelerator: "^+KeyZ",
        handler: () => {
            Object(_undo_history__WEBPACK_IMPORTED_MODULE_7__["redo"])();
        }
    },
];
const globalTools = [
    new _viewport_tools_handle__WEBPACK_IMPORTED_MODULE_1__["HandleTool"](),
    new _viewport_tools_bezierPen__WEBPACK_IMPORTED_MODULE_0__["BezierPenTool"](),
    new _viewport_tools_rectangle__WEBPACK_IMPORTED_MODULE_9__["RectangleTool"](),
    new _viewport_tools_ellipse__WEBPACK_IMPORTED_MODULE_10__["EllipseTool"]()
];
let currentKeybCallback = null;
/* harmony default export */ __webpack_exports__["default"] = ((font) => {
    currentFont = font;
    document.title = `${font.info.fontFamily} - FTE`;
    Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_6__["prepareGlyphList"])(font);
    const context = new _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_2__["GlyphContext"]("ABC".split("").map(chr => font.glyphs.find(g => g.codePoint === chr.codePointAt(0))), 0);
    const viewport = Object(_ui_viewport__WEBPACK_IMPORTED_MODULE_4__["setupViewport"])(context);
    viewport.setTool(new _viewport_tools_handle__WEBPACK_IMPORTED_MODULE_1__["HandleTool"]());
    Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, [globalSubActions, ...viewport.tool.subactions]);
    Object(_ui_toolbar__WEBPACK_IMPORTED_MODULE_8__["prepareToolbar"])(globalTools, globalTools[0], (tool) => {
        viewport.setTool(tool);
        Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, [globalSubActions, ...tool.subactions]);
    });
    Object(_ui_glyphBar__WEBPACK_IMPORTED_MODULE_5__["prepareGlyphBar"])(viewport);
    viewport.updateViewportSize();
    if (currentKeybCallback)
        window.removeEventListener("keyup", currentKeybCallback);
    currentKeybCallback = (e) => {
        if (document.activeElement !== document.body)
            return; // for now
        let accelString = e.code;
        if (e.shiftKey)
            accelString = "+" + accelString;
        if (e.ctrlKey)
            accelString = "^" + accelString;
        for (let action of [
            globalTools,
            globalSubActions, ...viewport.tool.subactions
        ].flat()) {
            if (action.accelerator === accelString) {
                if ("handler" in action) {
                    action.handler();
                    viewport.render();
                    if (viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_2__["GlyphContext"])
                        viewport.context.glyph.emit("modified");
                }
                else {
                    viewport.setTool(action);
                    Object(_ui_actionbar__WEBPACK_IMPORTED_MODULE_3__["updateSubactions"])(viewport, [globalSubActions, ...action.subactions]);
                    Object(_ui_toolbar__WEBPACK_IMPORTED_MODULE_8__["setActiveTool"])(globalTools.indexOf(action));
                }
                return;
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


class Font extends events__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"] {
    constructor(info, metrics, glyphs) {
        super();
        this.info = info;
        this.metrics = metrics;
        this.glyphs = glyphs;
        this.info = Object.assign({
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
            version: ""
        }, this.info);
    }
    static createBlank() {
        // Just the base Latin alphanumeric for now
        const baseCharacterSet = " 0123456789-=_+!@#$%^&*(){}[]\\\/,.<>?;':\"~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        const specialNames = {
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
        const font = new Font({
            fontFamily: "New font",
            fontSubfamily: "Regular"
        }, {
            ascender: -96,
            descender: 512 + 96,
            xHeight: 196
        }, []);
        font.addGlyph(new _glyph__WEBPACK_IMPORTED_MODULE_0__["Glyph"](font, ".notdef", null, {
            leftBearing: 0,
            rightBearing: 320
        }, []), ...baseCharacterSet.split("").map(char => {
            const name = (char in specialNames) ? specialNames[char] : char;
            return new _glyph__WEBPACK_IMPORTED_MODULE_0__["Glyph"](font, name, char.codePointAt(0), {
                leftBearing: 0,
                rightBearing: 320
            }, []);
        }));
        return font;
    }
    static fromOTFont(otfont) {
        const glyphs = []; // For now, don't want to import the entirety of Inter just yet
        console.log(otfont);
        const scaleFactor = 512 / otfont.tables.os2.sCapHeight;
        const info = {};
        const names = otfont.names;
        Object.keys(otfont.names).forEach(k => {
            var _a, _b;
            if (!names[k])
                info[k] = "";
            info[k] = (_b = (_a = names[k]) === null || _a === void 0 ? void 0 : _a.en) !== null && _b !== void 0 ? _b : "";
        });
        return new Font(info, {
            descender: -otfont.descender * scaleFactor + 512,
            ascender: -(otfont.ascender - otfont.tables.os2.sCapHeight) * scaleFactor,
            xHeight: (otfont.tables.os2.sCapHeight - otfont.tables.os2.sxHeight) * scaleFactor
        }, glyphs);
    }
    addGlyph(...glyphs) {
        this.glyphs.push(...glyphs);
    }
}


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
/* harmony import */ var _io_import__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../io/import */ "./src/typeedit/io/import.ts");


class Glyph extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
    constructor(font, name, codePoint, metrics, beziers) {
        super();
        this.font = font;
        this.name = name;
        this.codePoint = codePoint;
        this.metrics = metrics;
        this.beziers = beziers;
        this.finalBeziers = [];
        if (!name) {
            this.name = codePoint ?
                `uni${codePoint.toString(16).toUpperCase().padStart(4, "0")}` :
                ".notdef";
        }
        this.beziers.forEach(b => b.glyph = this);
        this.finalBeziers = beziers; // for now
        this.on("modified", () => {
            this.font.emit("glyphModified", this);
        });
    }
    get comparableCodePoint() {
        var _a;
        if (this.name === ".notdef")
            return -2;
        if (this.name === ".null")
            return -1;
        return (_a = this.codePoint) !== null && _a !== void 0 ? _a : Infinity;
    }
    static fromOTGlyph(font, otfont, otglyph) {
        const scaleFactor = 512 / otfont.tables.os2.sCapHeight;
        const beziers = Object(_io_import__WEBPACK_IMPORTED_MODULE_1__["generateCurvesFromOTGlyph"])(otfont, otglyph);
        const glyphMetrics = otglyph.getMetrics();
        return new Glyph(font, otglyph.name, otglyph.unicode, {
            leftBearing: 0,
            rightBearing: (glyphMetrics.rightSideBearing + glyphMetrics.xMax) * scaleFactor
        }, beziers);
    }
    updateBeziers() {
        // Nothing for now
        // TODO: modifiers
        this.finalBeziers = this.beziers;
    }
}


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




class BezierCurve extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
    constructor(glyph) {
        super();
        this.glyph = glyph;
        this.points = [];
        this.closed = true;
        this.on("modified", () => {
            if (this.glyph)
                this.glyph.emit("modified");
        });
    }
    addPoint(point) {
        point.curve = this;
        this.points.push(point);
        this.emit("modified");
        this.emit("newPoint", point);
    }
    // see: https://www.element84.com/blog/determining-the-winding-of-a-polygon-given-as-a-set-of-ordered-points
    get clockwise() {
        let sum = 0;
        for (let i = 0; i < this.points.length; i++) {
            const point = this.points[i].base;
            const next = this.points[(i + 1) % this.points.length].base;
            sum += (next.x - point.x) * (next.y - point.y);
        }
        return sum < 0; // inverted Y axis!
    }
    reverse() {
        this.points.forEach(p => p.reverse());
        this.points = this.points.reverse();
    }
    static getPath2D(beziers) {
        const path = new Path2D();
        for (let bezier of beziers) {
            for (let i = 0; i < bezier.points.length; i++) {
                const p1 = bezier.points[i];
                const p2 = bezier.points[(i + 1) % bezier.points.length];
                if (i === 0)
                    path.moveTo(p1.base.x, p1.base.y);
                path.bezierCurveTo(p1.after.x, p1.after.y, p2.before.x, p2.before.y, p2.base.x, p2.base.y);
            }
        }
        return path;
    }
    getPaperPath() {
        const path = new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path();
        if (!this.points.length)
            return path;
        const first = this.points[0].base;
        path.moveTo(new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(first.x, first.y));
        for (let i = 0; i < this.points.length; i++) {
            const pt = this.points[i];
            const next = this.points[(i + 1) % this.points.length];
            const c1 = pt.after;
            const c2 = next.before;
            const b = next.base;
            path.cubicCurveTo(new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(c1.x, c1.y), new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(c2.x, c2.y), new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(b.x, b.y));
        }
        path.closePath();
        return path;
    }
    static fromPaperPath(path) {
        const curve = new BezierCurve();
        path.segments.forEach(seg => curve.addPoint(new _point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x, seg.point.y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x + seg.handleIn.x, seg.point.y + seg.handleIn.y), new _point__WEBPACK_IMPORTED_MODULE_3__["Point"](seg.point.x + seg.handleOut.x, seg.point.y + seg.handleOut.y))));
        return curve;
    }
    static fromPaperPathItem(item) {
        if (item instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path)
            return [BezierCurve.fromPaperPath(item)];
        else if (item instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.CompoundPath)
            return item.children.map(ch => {
                if (ch instanceof paper__WEBPACK_IMPORTED_MODULE_2___default.a.Path)
                    return BezierCurve.fromPaperPath(ch);
                return null;
            }).filter(c => c);
        return [];
    }
}


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

var BezierPointType;
(function (BezierPointType) {
    BezierPointType[BezierPointType["free"] = 0] = "free";
    BezierPointType[BezierPointType["auto"] = 1] = "auto";
    BezierPointType[BezierPointType["sharp"] = 2] = "sharp";
})(BezierPointType || (BezierPointType = {}));
class BezierPoint extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
    constructor(base, before, after, type = BezierPointType.auto) {
        super();
        this.base = base;
        this.before = before;
        this.after = after;
        this.type = type;
        this.curve = null;
        this.on("modified", () => {
            if (this.curve)
                this.curve.emit("modified");
        });
    }
    reverse() {
        const t = this.before;
        this.before = this.after;
        this.after = t;
    }
    determineType() {
        const radius1 = this.after.distance(this.base);
        const radius2 = this.before.distance(this.base);
        if (radius1 < 0.0001 && radius2 < 0.0001) {
            this.type = BezierPointType.sharp;
            return;
        }
        const angle1 = this.after.angle(this.base);
        const angle2 = this.before.angle(this.base);
        const angleDiff = Math.abs(angle1 - angle2);
        const piDiff = angleDiff / Math.PI;
        if (Math.abs(piDiff - Math.round(piDiff)) < 0.0001)
            this.type = BezierPointType.auto;
    }
    movePoint(point, dPos) {
        if (point === this.base) {
            this.base.move(dPos.x, dPos.y);
            this.before.move(dPos.x, dPos.y);
            this.after.move(dPos.x, dPos.y);
        }
        else {
            const otherPoint = point === this.before ?
                this.after : this.before;
            point.move(dPos.x, dPos.y);
            if (this.type === BezierPointType.auto) {
                const otherRadius = otherPoint.distance(this.base);
                const angle = point.angle(this.base);
                otherPoint.x = otherRadius * Math.cos(angle + Math.PI) + this.base.x;
                otherPoint.y = otherRadius * Math.sin(angle + Math.PI) + this.base.y;
            }
        }
        this.curve.emit("modified");
    }
}


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
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    distance(other) {
        return Math.hypot(this.x - other.x, this.y - other.y);
    }
    angle(origin) {
        return Math.atan2(this.y - origin.y, this.x - origin.x);
    }
    getDiff(last) {
        return new Point(this.x - last.x, this.y - last.y);
    }
}


/***/ }),

/***/ "./src/typeedit/io/export.ts":
/*!***********************************!*\
  !*** ./src/typeedit/io/export.ts ***!
  \***********************************/
/*! exports provided: exportFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportFont", function() { return exportFont; });
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentype.js */ "opentype.js");
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentype_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


function glyphToOTPath(glyph, targetCapHeight = 1000) {
    const path = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Path"]();
    const scaleFactor = targetCapHeight / 512;
    const conv = (point) => {
        return {
            x: (point.x - glyph.metrics.leftBearing) * scaleFactor,
            y: (512 - point.y) * scaleFactor
        };
    };
    for (const bezier of glyph.finalBeziers) {
        if (!bezier.points.length)
            continue;
        const first = conv(bezier.points[0].base);
        path.moveTo(first.x, first.y);
        for (let i = 0; i < bezier.points.length; i++) {
            const pt = bezier.points[i];
            const next = bezier.points[(i + 1) % bezier.points.length];
            const c1 = conv(pt.after);
            const c2 = conv(next.before);
            const b = conv(next.base);
            path.curveTo(c1.x, c1.y, c2.x, c2.y, b.x, b.y);
        }
        path.closePath();
    }
    return path;
}
function exportFont(font, targetFile) {
    const notDef = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Glyph"]({
        name: ".notdef",
        unicode: 0,
        advanceWidth: 650,
        path: new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Path"]()
    });
    const targetCapHeight = 2000;
    const scaleFactor = targetCapHeight / 512;
    const otfont = new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Font"]({
        familyName: font.info.fontFamily,
        styleName: font.info.fontSubfamily,
        postScriptName: `${font.info.fontFamily}-${font.info.fontSubfamily}`,
        unitsPerEm: (font.metrics.descender - font.metrics.ascender) * scaleFactor,
        ascender: (512 - font.metrics.ascender) * scaleFactor,
        descender: (512 - font.metrics.descender) * scaleFactor,
        glyphs: [
            ...font.glyphs.map(g => new opentype_js__WEBPACK_IMPORTED_MODULE_0__["Glyph"]({
                name: g.name,
                unicode: g.codePoint,
                advanceWidth: Math.round((g.metrics.rightBearing - g.metrics.leftBearing) * scaleFactor),
                path: glyphToOTPath(g, targetCapHeight)
            })),
            notDef
        ],
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
    const buf = Buffer.from(otfont.toArrayBuffer());
    Object(fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"])(targetFile, buf);
}


/***/ }),

/***/ "./src/typeedit/io/import.ts":
/*!***********************************!*\
  !*** ./src/typeedit/io/import.ts ***!
  \***********************************/
/*! exports provided: generateCurvesFromOTGlyph, importFont */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateCurvesFromOTGlyph", function() { return generateCurvesFromOTGlyph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFont", function() { return importFont; });
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentype.js */ "opentype.js");
/* harmony import */ var opentype_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(opentype_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _font_font__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../font/font */ "./src/typeedit/font/font.ts");
/* harmony import */ var _font_glyph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../font/glyph */ "./src/typeedit/font/glyph.ts");
/* harmony import */ var _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/bezier/curve */ "./src/typeedit/geometry/bezier/curve.ts");
/* harmony import */ var _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/bezier/point */ "./src/typeedit/geometry/bezier/point.ts");
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/point */ "./src/typeedit/geometry/point.ts");
/* harmony import */ var _utils_lerp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/lerp */ "./src/typeedit/utils/lerp.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







function convertOTCoordinates(otfont, x, y) {
    const scaleFactor = 512 / otfont.tables.os2.sCapHeight;
    return {
        x: x * scaleFactor,
        y: (otfont.tables.os2.sCapHeight - y) * scaleFactor // easier to work with
    };
}
function generateCurvesFromOTGlyph(otfont, otglyph) {
    const curves = [];
    let curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
    const conv = (x, y) => convertOTCoordinates(otfont, x, y);
    ///@ts-ignore
    otglyph.path.commands.forEach((cmd) => {
        switch (cmd.type) {
            case "M": {
                if (curve.points.length)
                    curves.push(curve);
                curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
                const coords = conv(cmd.x, cmd.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPointType"].free));
                break;
            }
            case "L": {
                const coords = conv(cmd.x, cmd.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "C": {
                const c1coords = conv(cmd.x1, cmd.y1);
                const c2coords = conv(cmd.x2, cmd.y2);
                const coords = conv(cmd.x, cmd.y);
                if (!curve.points.length)
                    return; // WHO MALFORMED MY OTF
                const prevPoint = curve.points[curve.points.length - 1];
                prevPoint.after.x = c1coords.x;
                prevPoint.after.y = c1coords.y;
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](c2coords.x, c2coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "Q": {
                const c1coords = conv(cmd.x1, cmd.y1);
                const coords = conv(cmd.x, cmd.y);
                if (!curve.points.length)
                    return; // WHO MALFORMED MY OTF
                const prevPoint = curve.points[curve.points.length - 1];
                prevPoint.after.x = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.x, prevPoint.base.x);
                prevPoint.after.y = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.y, prevPoint.base.y);
                curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_4__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.x, coords.x), Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_6__["lerp"])(1 / 3, c1coords.y, coords.y)), new _geometry_point__WEBPACK_IMPORTED_MODULE_5__["Point"](coords.x, coords.y)));
                break;
            }
            case "Z": {
                if (curve.points.length) {
                    const first = curve.points[0];
                    if (curve.points.length > 1) {
                        const last = curve.points[curve.points.length - 1];
                        if (first.base.x === last.base.x &&
                            first.base.y === last.base.y) {
                            first.before.x = last.before.x;
                            first.before.y = last.before.y;
                            curve.points.splice(curve.points.length - 1, 1);
                        }
                    }
                    curve.points.forEach(p => p.determineType());
                    curves.push(curve);
                }
                curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_3__["BezierCurve"]();
                break;
            }
        }
    });
    if (curve.points.length) {
        curve.points.forEach(p => p.determineType());
        curves.push(curve);
    }
    return curves;
}
function importFont(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            Object(opentype_js__WEBPACK_IMPORTED_MODULE_0__["load"])(filePath, (err, otfont) => {
                const font = _font_font__WEBPACK_IMPORTED_MODULE_1__["Font"].fromOTFont(otfont);
                const glyphs = [];
                for (let i = 0; i < otfont.glyphs.length; i++) {
                    glyphs.push(_font_glyph__WEBPACK_IMPORTED_MODULE_2__["Glyph"].fromOTGlyph(font, otfont, otfont.glyphs.get(i)));
                }
                font.addGlyph(...glyphs);
                resolve(font);
            });
        });
    });
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

const subactionContainer = document.querySelector("div.subactions");
function updateSubactions(viewport, subactionGroups) {
    subactionContainer.innerHTML = "";
    for (const group of subactionGroups) {
        const subactionGroup = document.createElement("div");
        for (const subaction of group) {
            const button = document.createElement("button");
            button.title = `${subaction.name}${subaction.accelerator ? ` (${Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_0__["accelStringToUserFriendly"])(subaction.accelerator)})` : ""}`;
            button.addEventListener("click", () => {
                subaction.handler();
                viewport.render();
            });
            button.innerHTML = `
                <img src="res/icons/${subaction.icon}.svg">
            `;
            subactionGroup.appendChild(button);
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

const glyphBar = document.querySelector("div.glyphBar");
function getGlyphBarGlyphs(allGlyphs) {
    const glyphs = [];
    glyphBar.childNodes.forEach(node => {
        if (node instanceof Text) {
            glyphs.push(...node.textContent.split("").map(chr => allGlyphs.find(g => g.codePoint === chr.codePointAt(0))));
        }
        else if (node instanceof HTMLDivElement) {
            glyphs.push(allGlyphs.find(g => g.name === node.textContent));
        }
    });
    return glyphs;
}
function appendCharacter(glyph) {
    if (glyph.codePoint >= 32) {
        glyphBar.append(String.fromCharCode(glyph.codePoint));
    }
    else {
        const nonTextGlyph = document.createElement("div");
        nonTextGlyph.className = "ntglyph";
        nonTextGlyph.contentEditable = "false";
        nonTextGlyph.innerHTML = `<span>${glyph.name}</span>`;
        glyphBar.appendChild(nonTextGlyph);
    }
    glyphBar.dispatchEvent(new InputEvent("input"));
}
function prepareGlyphBar(viewport) {
    glyphBar.addEventListener("input", () => {
        if (!(viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__["GlyphContext"]))
            return;
        const glyphs = getGlyphBarGlyphs(viewport.context.glyph.font.glyphs);
        if (!glyphs.length)
            return;
        viewport.context.setGlyphs(glyphs);
        viewport.tool.updateContext(viewport.context);
        viewport.render();
    });
    document.querySelector("button.prevGlyph").addEventListener("click", () => {
        if (!(viewport.context instanceof _viewport_context_glyph__WEBPACK_IMPORTED_MODULE_0__["GlyphContext"]))
            return;
        viewport.context.setGlyphs(null, viewport.context.currentIndex === 0 ?
            viewport.context.glyphs.length - 1 :
            viewport.context.currentIndex - 1);
        viewport.tool.updateContext(viewport.context);
        viewport.render();
    });
    document.querySelector("button.nextGlyph").addEventListener("click", () => {
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


const glyphListContainer = document.querySelector("div.glyphList");
function drawGlyphPreview(glyph) {
    const canvas = glyphListContainer.querySelector(`div[data-name="${glyph.name}"] canvas`);
    if (!canvas)
        return;
    const ctx = canvas.getContext("2d");
    ctx.resetTransform();
    ctx.clearRect(0, 0, 90, 90);
    const path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
    const width = (glyph.metrics.rightBearing - glyph.metrics.leftBearing) * 50 / 512;
    ctx.translate((90 - width) / 2, 20);
    ctx.scale(50 / 512, 50 / 512);
    ctx.fillStyle = "#000";
    ctx.fill(path);
}
function setActiveGlyph(glyph) {
    const currentActiveGlyph = glyphListContainer.querySelector("div.glyph.active");
    if (currentActiveGlyph)
        currentActiveGlyph.classList.remove("active");
    document.querySelector(`div[data-name="${glyph.name}"]`).classList.add("active");
}
function prepareGlyphList(font) {
    glyphListContainer.innerHTML = "";
    font.glyphs.sort((g1, g2) => g1.comparableCodePoint - g2.comparableCodePoint).forEach(glyph => {
        const glyphDiv = document.createElement("div");
        glyphDiv.className = "glyph";
        glyphDiv.setAttribute("data-name", glyph.name);
        const glyphLabel = document.createElement("label");
        glyphLabel.textContent = glyph.name;
        glyphDiv.appendChild(glyphLabel);
        const glyphCanvas = document.createElement("canvas");
        glyphCanvas.width = 90;
        glyphCanvas.height = 90;
        glyphDiv.appendChild(glyphCanvas);
        glyphListContainer.appendChild(glyphDiv);
        glyphDiv.addEventListener("dblclick", () => {
            Object(_glyphBar__WEBPACK_IMPORTED_MODULE_1__["appendCharacter"])(glyph);
        });
        drawGlyphPreview(glyph);
    });
    font.on("glyphModified", (glyph) => {
        drawGlyphPreview(glyph);
    });
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
    const toolbar = document.querySelector("div.tools");
    toolbar.querySelector("button.active").classList.remove("active");
    toolbar.children[index].classList.add("active");
}
function prepareToolbar(tools, defaultTool, callback) {
    const toolbar = document.querySelector("div.tools");
    toolbar.innerHTML = "";
    tools.forEach(tool => {
        const button = document.createElement("button");
        button.title = `${tool.name} (${Object(_utils_accelerator__WEBPACK_IMPORTED_MODULE_0__["accelStringToUserFriendly"])(tool.accelerator)})`;
        button.innerHTML = `
                <img src="res/icons/${tool.icon}.svg">
            `;
        if (tool === defaultTool)
            button.classList.add("active");
        button.addEventListener("click", () => {
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
    const container = document.querySelector("div.viewport");
    const prevViewport = container.querySelector("canvas");
    if (prevViewport) {
        container.removeChild(prevViewport);
    }
    const viewport = new _viewport_viewport__WEBPACK_IMPORTED_MODULE_0__["Viewport"](context, [], null);
    container.appendChild(viewport.domCanvas);
    window.addEventListener("resize", () => {
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
class ArrayAddAction {
    constructor(target, object, index) {
        this.target = target;
        this.object = object;
        this.index = index;
    }
    undo() {
        this.target.splice(this.index, 1);
    }
    redo() {
        this.target.splice(this.index, 0, this.object);
    }
    finalize() { }
}
class ArrayRemoveAction {
    constructor(target, object, index) {
        this.target = target;
        this.object = object;
        this.index = index;
    }
    undo() {
        this.target.splice(this.index, 0, this.object);
    }
    redo() {
        this.target.splice(this.index, 1);
    }
    finalize() { }
}


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

class ValueChangeAction {
    constructor(target, keys) {
        this.target = target;
        this.keys = keys;
        this.beforeState = {};
        this.afterState = {};
        this.captureState(this.beforeState);
    }
    captureState(stateTarget) {
        this.keys.forEach(key => stateTarget[key] = this.target[key]);
    }
    undo() {
        Object.assign(this.target, this.beforeState);
        if (this.target instanceof events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
            this.target.emit("modified");
    }
    redo() {
        Object.assign(this.target, this.afterState);
        if (this.target instanceof events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
            this.target.emit("modified");
    }
    finalize() {
        this.captureState(this.afterState);
    }
}


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
class UndoContext {
    constructor() {
        this.actions = [];
        this.name = "Unknown";
    }
    addAction(...actions) {
        this.actions.push(...actions);
    }
    undo() {
        for (let i = this.actions.length - 1; i >= 0; i--) {
            this.actions[i].undo();
        }
    }
    redo() {
        for (let i = 0; i < this.actions.length; i++) {
            this.actions[i].redo();
        }
    }
    finalize(name) {
        this.actions.forEach(a => a.finalize());
        if (name)
            this.name = name;
    }
}


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

let undoContexts = [];
let redoContexts = [];
let undoContext = new _context__WEBPACK_IMPORTED_MODULE_0__["UndoContext"]();
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
    const ctx = undoContexts.pop();
    redoContexts.unshift(ctx);
    ctx.undo();
}
function redo() {
    if (!canRedo())
        return;
    const ctx = redoContexts.shift();
    undoContexts.push(ctx);
    ctx.redo();
}


/***/ }),

/***/ "./src/typeedit/utils/accelerator.ts":
/*!*******************************************!*\
  !*** ./src/typeedit/utils/accelerator.ts ***!
  \*******************************************/
/*! exports provided: accelStringToUserFriendly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accelStringToUserFriendly", function() { return accelStringToUserFriendly; });
function accelStringToUserFriendly(str) {
    return str.replace("^", "Ctrl-")
        .replace("+", "Shift-")
        .replace("!", "Alt-")
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

/***/ "./src/typeedit/viewport/context/bezier.ts":
/*!*************************************************!*\
  !*** ./src/typeedit/viewport/context/bezier.ts ***!
  \*************************************************/
/*! exports provided: BezierContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BezierContext", function() { return BezierContext; });
class BezierContext {
    constructor(beziers) {
        this.beziers = beziers;
        this.handles = [];
        this.guides = [];
        this.grids = [];
    }
    render(v, ctx) {
        // Nothing tbh
    }
}


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
/* harmony import */ var _guides_curve__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guides/curve */ "./src/typeedit/viewport/guides/curve.ts");
/* harmony import */ var _guides_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guides/grid */ "./src/typeedit/viewport/guides/grid.ts");
/* harmony import */ var _guides_line__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guides/line */ "./src/typeedit/viewport/guides/line.ts");
/* harmony import */ var _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../handles/fontMetric */ "./src/typeedit/viewport/handles/fontMetric.ts");
/* harmony import */ var _bezier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bezier */ "./src/typeedit/viewport/context/bezier.ts");







class GlyphContext extends _bezier__WEBPACK_IMPORTED_MODULE_6__["BezierContext"] {
    constructor(glyphs, currentIndex) {
        super(glyphs[currentIndex].beziers);
        this.glyphs = glyphs;
        this.currentIndex = currentIndex;
        this.setupHandlesAndGuides();
        Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_1__["setActiveGlyph"])(this.glyph);
    }
    get glyph() {
        return this.glyphs[this.currentIndex];
    }
    setupHandlesAndGuides() {
        this.handles = [
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandleType"].leftBearing),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandleType"].rightBearing),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandleType"].ascender),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandleType"].descender),
            new _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandle"](this.glyph, _handles_fontMetric__WEBPACK_IMPORTED_MODULE_5__["FontMetricHandleType"].xHeight)
        ];
        this.grids = [
            new _guides_grid__WEBPACK_IMPORTED_MODULE_3__["GridGuide"](16)
        ];
        this.guides = [
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["HorizontalGuide"](0),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["HorizontalGuide"](512),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["HorizontalGuide"](() => this.glyph.font.metrics.ascender, this.handles[2]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["HorizontalGuide"](() => this.glyph.font.metrics.descender, this.handles[3]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["HorizontalGuide"](() => this.glyph.font.metrics.xHeight, this.handles[4]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["VerticalGuide"](() => this.glyph.metrics.leftBearing, this.handles[0]),
            new _guides_line__WEBPACK_IMPORTED_MODULE_4__["VerticalGuide"](() => this.glyph.metrics.rightBearing, this.handles[1])
        ];
        this.beziers.forEach(b => this.guides.push(new _guides_curve__WEBPACK_IMPORTED_MODULE_2__["CurveGuide"](b)));
        // for (let bezier of this.beziers) {
        //     for (let point of bezier.points) {
        //         this.guides.push(
        //             new PointGuide(point.base)
        //         )
        //     }
        // }
    }
    setGlyphs(glyphs, currentIndex) {
        if (glyphs)
            this.glyphs = glyphs;
        if (typeof currentIndex === "number")
            this.currentIndex = currentIndex;
        else if (this.currentIndex >= this.glyphs.length)
            this.currentIndex = this.glyphs.length - 1;
        this.beziers = this.glyph.beziers;
        this.setupHandlesAndGuides();
        Object(_ui_glyphList__WEBPACK_IMPORTED_MODULE_1__["setActiveGlyph"])(this.glyph);
    }
    renderNonEditableGlyphs(v, ctx) {
        let currentOffset = 0;
        if (this.currentIndex < this.glyphs.length - 1) {
            for (let i = this.currentIndex + 1; i < this.glyphs.length; i++) {
                const prevGlyph = this.glyphs[i - 1];
                const glyph = this.glyphs[i];
                const offset = prevGlyph.metrics.rightBearing -
                    glyph.metrics.leftBearing;
                const path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
                ctx.fillStyle = "#000";
                ctx.translate(offset, 0);
                ctx.fill(path);
                this.renderGlyphIndicator(v, ctx, glyph);
                currentOffset += offset;
            }
        }
        ctx.translate(-currentOffset, 0);
        currentOffset = 0;
        if (this.currentIndex > 0) {
            for (let i = this.currentIndex - 1; i >= 0; i--) {
                const nextGlyph = this.glyphs[i + 1];
                const glyph = this.glyphs[i];
                const offset = nextGlyph.metrics.leftBearing -
                    glyph.metrics.rightBearing;
                const path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(glyph.finalBeziers);
                ctx.fillStyle = "#000";
                ctx.translate(offset, 0);
                ctx.fill(path);
                this.renderGlyphIndicator(v, ctx, glyph);
                currentOffset += offset;
            }
        }
        ctx.translate(-currentOffset, 0);
        currentOffset = 0;
    }
    renderGlyphIndicator(v, ctx, glyph) {
        const x = glyph.metrics.leftBearing;
        const w = glyph.metrics.rightBearing - x;
        const y = glyph.font.metrics.ascender - 20 / v.co.scaleFactor;
        ctx.fillStyle = (this.glyph === glyph) ? "#aaa" : "#eee";
        ctx.fillRect(x, y - 8 / v.co.scaleFactor, w, 8 / v.co.scaleFactor);
        ctx.font = `400 ${20 / v.co.scaleFactor}px Inter`;
        ctx.textAlign = "center";
        ctx.fillStyle = (this.glyph === glyph) ? "#555" : "#aaa";
        ctx.fillText(glyph.name, x + w / 2, y - 16 / v.co.scaleFactor);
    }
    render(v, ctx) {
        this.renderNonEditableGlyphs(v, ctx);
        // Glyph metric lines
        ctx.strokeStyle = "#3338";
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
        const workingPath = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(this.glyph.beziers);
        const finalPath = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D(this.glyph.finalBeziers);
        ctx.fillStyle = "#888";
        ctx.fill(finalPath);
        ctx.setLineDash([]);
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 4 / v.co.scaleFactor;
        ctx.stroke(workingPath);
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 1 / v.co.scaleFactor;
        ctx.stroke(workingPath);
        this.renderGlyphIndicator(v, ctx, this.glyph);
    }
}


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

class ViewportCoordinates {
    constructor() {
        this.dx = 0;
        this.dy = 0;
        this.scaleFactor = 1;
    }
    // dx, dy in screen coordinates
    translate(dx, dy) {
        this.dx += dx;
        this.dy += dy;
    }
    scale(factor, ox, oy) {
        const newScale = this.scaleFactor * factor;
        this.dx = this.dx + this.scaleFactor * ox - newScale * ox;
        this.dy = this.dy + this.scaleFactor * oy - newScale * oy;
        this.scaleFactor = newScale;
    }
    transformCanvas(ctx) {
        ctx.translate(this.dx, this.dy);
        ctx.scale(this.scaleFactor, this.scaleFactor);
    }
    clientToWorld(x, y) {
        return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"]((x - this.dx) / this.scaleFactor, (y - this.dy) / this.scaleFactor);
    }
    worldToClient(x, y) {
        return {
            x: x * this.scaleFactor + this.dx,
            y: y * this.scaleFactor + this.dy
        };
    }
    moveInClientDx(point, dx, dy) {
        const pos = this.worldToClient(point.x, point.y);
        pos.x += dx;
        pos.y += dy;
        const { x, y } = this.clientToWorld(pos.x, pos.y);
        point.x = x;
        point.y = y;
    }
}


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
/* harmony import */ var _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../handles/bezierBasePoint */ "./src/typeedit/viewport/handles/bezierBasePoint.ts");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! paper */ "paper");
/* harmony import */ var paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(paper__WEBPACK_IMPORTED_MODULE_2__);



class CurveGuide {
    constructor(source) {
        this.source = source;
        this.active = false;
        this.worldRender = true;
    }
    nudge(v, pos, obj) {
        if (obj instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_1__["BezierBasePointHandle"] &&
            obj.point.curve === this.source)
            return;
        const paperPath = this.source.getPaperPath();
        const paperPoint = new paper__WEBPACK_IMPORTED_MODULE_2___default.a.Point(pos.x, pos.y);
        const nearest = paperPath.getNearestPoint(paperPoint);
        if (!nearest) {
            this.active = false;
            return;
        }
        const clientPos = v.co.worldToClient(pos.x, pos.y);
        const clientTarget = v.co.worldToClient(nearest.x, nearest.y);
        if (Math.hypot(clientPos.x - clientTarget.x, clientPos.y - clientTarget.y) < 10) {
            pos.x = nearest.x;
            pos.y = nearest.y;
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    render(v, ctx) {
        const path = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].getPath2D([this.source]);
        ctx.lineWidth = 1 / v.co.scaleFactor;
        ctx.strokeStyle = "#f0f";
        ctx.stroke(path);
    }
}


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
/* harmony import */ var _geometry_point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../geometry/point */ "./src/typeedit/geometry/point.ts");

class GridGuide {
    constructor(gap) {
        this.gap = gap;
        this.active = false;
        this.lastPoint = new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](-100000, -100000);
    }
    nudge(v, pos, obj) {
        const target = new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](Math.round(pos.x / this.gap) * this.gap, Math.round(pos.y / this.gap) * this.gap);
        const delta = 8 / v.co.scaleFactor;
        this.active = false;
        this.lastPoint.x = NaN;
        this.lastPoint.y = NaN;
        if (Math.abs(pos.x - target.x) < delta) {
            pos.x = target.x;
            this.lastPoint.x = target.x;
            this.active = true;
        }
        if (Math.abs(pos.y - target.y) < delta) {
            pos.y = target.y;
            this.lastPoint.y = target.y;
            this.active = true;
        }
    }
    render(v, ctx) {
        const minXY = v.co.clientToWorld(0, 0);
        const maxXY = v.co.clientToWorld(v.domCanvas.width, v.domCanvas.height);
        minXY.x = Math.round(minXY.x / this.gap) * this.gap;
        minXY.y = Math.round(minXY.y / this.gap) * this.gap;
        maxXY.x = Math.round(maxXY.x / this.gap) * this.gap;
        maxXY.y = Math.round(maxXY.y / this.gap) * this.gap;
        ctx.lineWidth = 1;
        for (let x = minXY.x; x <= maxXY.x; x += this.gap) {
            const client = v.co.worldToClient(x, 0);
            ctx.beginPath();
            ctx.moveTo(Math.round(client.x) + 0.5, -9999);
            ctx.lineTo(Math.round(client.x) + 0.5, 9999);
            ctx.strokeStyle = "#3332";
            if (this.active && this.lastPoint.x === x)
                ctx.strokeStyle = "#f0f";
            ctx.stroke();
        }
        for (let y = minXY.y; y <= maxXY.y; y += this.gap) {
            const client = v.co.worldToClient(0, y);
            ctx.beginPath();
            ctx.moveTo(-9999, Math.round(client.y) + 0.5);
            ctx.lineTo(9999, Math.round(client.y) + 0.5);
            ctx.strokeStyle = "#3332";
            if (this.active && this.lastPoint.y === y)
                ctx.strokeStyle = "#f0f";
            ctx.stroke();
        }
    }
}


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
class HorizontalGuide {
    constructor(valueHandler, source) {
        this.valueHandler = valueHandler;
        this.source = source;
        this.active = false;
    }
    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler();
        return this.valueHandler;
    }
    nudge(v, pos, obj) {
        if (obj && this.source && obj === this.source) {
            this.active = false;
            return;
        }
        const clientPos = v.co.worldToClient(pos.x, pos.y);
        const clientTarget = v.co.worldToClient(pos.x, this.value);
        if (Math.abs(clientPos.y - clientTarget.y) < 8) {
            pos.y = this.value;
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    render(v, ctx) {
        const clientPos = v.co.worldToClient(0, this.value);
        clientPos.y = Math.round(clientPos.y) + 0.5;
        ctx.strokeStyle = "#f0f";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-9999, clientPos.y);
        ctx.lineTo(9999, clientPos.y);
        ctx.stroke();
    }
}
class VerticalGuide {
    constructor(valueHandler, source) {
        this.valueHandler = valueHandler;
        this.source = source;
        this.active = false;
    }
    get value() {
        if (this.valueHandler instanceof Function)
            return this.valueHandler();
        return this.valueHandler;
    }
    nudge(v, pos, obj) {
        if (obj && this.source && obj === this.source) {
            this.active = false;
            return;
        }
        const clientPos = v.co.worldToClient(pos.x, pos.y);
        const clientTarget = v.co.worldToClient(this.value, pos.y);
        if (Math.abs(clientPos.x - clientTarget.x) < 8) {
            pos.x = this.value;
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    render(v, ctx) {
        const clientPos = v.co.worldToClient(this.value, 0);
        clientPos.x = Math.round(clientPos.x) + 0.5;
        ctx.strokeStyle = "#f0f";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(clientPos.x, -9999);
        ctx.lineTo(clientPos.x, 9999);
        ctx.stroke();
    }
}


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
class PointGuide {
    constructor(source) {
        this.source = source;
        this.active = false;
    }
    nudge(v, pos, obj) {
        if (obj && this.source &&
            (obj === this.source ||
                ("position" in obj &&
                    obj.position === this.source))) {
            this.active = false;
            return;
        }
        const clientPos = v.co.worldToClient(pos.x, pos.y);
        const clientTarget = v.co.worldToClient(this.source.x, this.source.y);
        if (Math.hypot(clientPos.x - clientTarget.x, clientPos.y - clientTarget.y) < 10) {
            pos.x = this.source.x;
            pos.y = this.source.y;
            this.active = true;
        }
        else {
            this.active = false;
        }
    }
    render(v, ctx) {
        const clientPos = v.co.worldToClient(this.source.x, this.source.y);
        clientPos.x = Math.round(clientPos.x) + 0.5;
        clientPos.y = Math.round(clientPos.y) + 0.5;
        ctx.strokeStyle = "#f0f";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(clientPos.x - 16, clientPos.y);
        ctx.lineTo(clientPos.x + 16, clientPos.y);
        ctx.moveTo(clientPos.x, clientPos.y - 16);
        ctx.lineTo(clientPos.x, clientPos.y + 16);
        ctx.stroke();
    }
}
class HandleGuide extends PointGuide {
    constructor(handle) {
        super(handle.position);
        this.handle = handle;
    }
    nudge(v, pos, obj) {
        if (this.handle.selected ||
            this.handle === obj)
            return;
        super.nudge(v, pos, obj);
    }
}


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


class BezierBasePointHandle {
    constructor(point) {
        this.point = point;
        this.hitRadius = 10;
        this.selected = false;
        this.type = "BezierBasePointHandle";
    }
    get position() {
        return this.point.base;
    }
    move(v, pos, dPos, pivot, e) {
        this.point.movePoint(this.point.base, dPos);
    }
    prepareUndo(uc) {
        uc.addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_1__["ValueChangeAction"](this.point.after, ["x", "y"]));
    }
    render(v, ctx) {
        const angle = this.point.after.angle(this.point.base);
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
        ctx.fillStyle = this.selected ? "#111" : "#fff";
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
}


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

class BezierControlPointHandle {
    constructor(point, cpoint) {
        this.point = point;
        this.cpoint = cpoint;
        this.hitRadius = 6;
        this.selected = false;
        this.type = "BezierControlPointHandle";
    }
    get position() {
        return this.cpoint;
    }
    move(v, pos, dPos, pivot, e) {
        // let forceType = null
        // if (
        //     this.point.type !== BezierPointType.free &&
        //     e.altKey
        // )
        //     forceType = BezierPointType.free
        this.point.movePoint(this.cpoint, dPos);
    }
    prepareUndo(uc) {
        uc.addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_0__["ValueChangeAction"](this.point.after, ["x", "y"]));
    }
    render(v, ctx) {
        const basePos = v.co.worldToClient(this.point.base.x, this.point.base.y);
        const ctrlPos = v.co.worldToClient(this.cpoint.x, this.cpoint.y);
        ctx.strokeStyle = "#555";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(basePos.x - ctrlPos.x, basePos.y - ctrlPos.y);
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.fillStyle = this.selected ? "#111" : "#555";
        ctx.beginPath();
        ctx.arc(0, 0, 3, 0, 2 * Math.PI);
        ctx.fill();
    }
}


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
class FontMetricHandle {
    constructor(glyph, metric) {
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
    prepareUndo(uc) {
        let action = null;
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
    }
    get value() {
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
    }
    set value(x) {
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
    }
    get position() {
        if (this.dir === FontMetricHandleDir.horz)
            return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](-20, this.value);
        return new _geometry_point__WEBPACK_IMPORTED_MODULE_0__["Point"](this.value, 532);
    }
    move(v, pos, dPos, pivot, e) {
        if (this.dir === FontMetricHandleDir.horz) {
            this.value = pos.y;
        }
        else {
            this.value = pos.x;
        }
    }
    render(v, ctx) {
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, 2 * Math.PI);
        ctx.moveTo(0, 0);
        if (this.dir === FontMetricHandleDir.horz)
            ctx.lineTo(20 * v.co.scaleFactor, 0);
        else
            ctx.lineTo(0, -20 * v.co.scaleFactor);
        ctx.fillStyle = this.selected ? "#111" : "#444";
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 1;
        ctx.setLineDash([]);
        ctx.stroke();
        ctx.fill();
    }
}


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











class BezierPenTool {
    constructor() {
        this.name = "Pen";
        this.icon = "beziertool";
        this.accelerator = "KeyP";
        this.currentBezier = null;
        this.finalAdjustmentStage = false;
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [];
    }
    get currentPoint() {
        if (!this.currentBezier)
            return null;
        if (this.finalAdjustmentStage)
            return this.currentBezier.points[0];
        return this.currentBezier.points[this.currentBezier.points.length - 1];
    }
    handleMouseEvent(v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_6__["BezierContext"]))
            return;
        const pos = v.co.clientToWorld(x, y);
        let glyph = null;
        if (v.context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_7__["GlyphContext"])
            glyph = v.context.glyph;
        v.nudgePoint(pos);
        if (e.type === "mousedown" && e.buttons & 1) {
            if (!this.currentBezier) {
                this.currentBezier = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"](glyph);
                const length = v.context.beziers.push(this.currentBezier);
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](v.context.beziers, this.currentBezier, length - 1));
            }
            const nearHandle = v.nearHandle(pos.x, pos.y, "BezierBasePointHandle");
            if (nearHandle &&
                nearHandle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"] &&
                nearHandle.position === this.currentBezier.points[0].base) {
                // Forget the curve, but allow last adjustments
                this.finalAdjustmentStage = true;
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.base, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.before, ["x", "y"]), new _undo_actions_value__WEBPACK_IMPORTED_MODULE_4__["ValueChangeAction"](this.currentPoint.after, ["x", "y"]));
            }
            else {
                // Add a point
                const point = new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y));
                this.currentBezier.addPoint(point);
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.currentBezier.points, point, this.currentBezier.points.length - 1));
                const length = this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__["BezierControlPointHandle"](point, point.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_10__["BezierControlPointHandle"](point, point.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_9__["BezierBasePointHandle"](point));
                _undo_history__WEBPACK_IMPORTED_MODULE_5__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length - 3], length - 3), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length - 2], length - 2), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_3__["ArrayAddAction"](this.handles, this.handles[length - 1], length - 1));
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
                this.currentBezier = null;
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Close curve");
            }
            else if (this.currentBezier.points.length === 1) {
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Create curve");
            }
            else {
                Object(_undo_history__WEBPACK_IMPORTED_MODULE_5__["finalizeUndoContext"])("Add point");
            }
            this.finalAdjustmentStage = false;
            if (v.context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_7__["GlyphContext"])
                v.context.glyph.emit("modified");
        }
    }
    render(v, ctx) {
    }
    updateContext(context) {
        if (!(context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_6__["BezierContext"]))
            return;
        this.handles = [];
        this.guides = [];
        for (let bezier of context.beziers) {
            for (let point of bezier.points) {
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_8__["PointGuide"](point.base));
            }
        }
    }
}


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
const magic = 4 * (Math.SQRT2 - 1) / 3;
class EllipseTool {
    constructor() {
        this.name = "Ellipse";
        this.icon = "ellipsetool";
        this.accelerator = "KeyE";
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [];
    }
    createEllipse() {
        const curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"]();
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        return curve;
    }
    updateEllipse(pos, e) {
        const origin = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.startPoint.x, this.startPoint.y);
        let radius = Math.abs(pos.y - origin.y);
        let scale = Math.abs((pos.x - origin.x) / (pos.y - origin.y));
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
    }
    handleMouseEvent(v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        const pos = v.co.clientToWorld(x, y);
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
                if (v.context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_6__["GlyphContext"])
                    v.context.glyph.emit("modified");
            }
        }
    }
    render(v, ctx) {
    }
    updateContext(context) {
        if (!(context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        this.handles = [];
        this.guides = [];
        for (let bezier of context.beziers) {
            for (let point of bezier.points) {
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_7__["PointGuide"](point.base));
            }
        }
    }
}


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
/* harmony import */ var _context_bezier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/bezier */ "./src/typeedit/viewport/context/bezier.ts");
/* harmony import */ var _guides_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guides/curve */ "./src/typeedit/viewport/guides/curve.ts");
/* harmony import */ var _guides_point__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guides/point */ "./src/typeedit/viewport/guides/point.ts");
/* harmony import */ var _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../handles/bezierBasePoint */ "./src/typeedit/viewport/handles/bezierBasePoint.ts");
/* harmony import */ var _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../handles/bezierControlPoint */ "./src/typeedit/viewport/handles/bezierControlPoint.ts");









class HandleTool {
    constructor() {
        this.name = "Curve edit";
        this.icon = "handletool";
        this.accelerator = "KeyA";
        this.selecting = false;
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = true;
        this.beziers = [];
        this.subactions = [
            [
                {
                    name: "Delete",
                    icon: "delete",
                    accelerator: "Delete",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const curves = this.getSelectedCurves();
                        selected.forEach(handle => {
                            if (!(handle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]))
                                return;
                            const point = handle.point;
                            const index = point.curve.points.indexOf(point);
                            point.curve.points.splice(index, 1);
                            const cpHandles = this.handles.filter(h => h instanceof _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"] &&
                                h.point === point); // length always = 2
                            const hIndex = this.handles.indexOf(handle);
                            this.handles.splice(hIndex, 1);
                            const cpIndex0 = this.handles.indexOf(cpHandles[0]);
                            this.handles.splice(cpIndex0, 1);
                            const cpIndex1 = this.handles.indexOf(cpHandles[1]);
                            this.handles.splice(cpIndex1, 1);
                            _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](point.curve.points, point, index), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.handles, handle, hIndex), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.handles, cpHandles[0], cpIndex0), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.handles, cpHandles[1], cpIndex1));
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Delete points");
                    }
                }
            ],
            [
                {
                    name: "Select all",
                    icon: "allsel",
                    accelerator: "^KeyA",
                    handler: () => {
                        this.handles.forEach(handle => handle.selected = true);
                    }
                },
                {
                    name: "Deselect all",
                    icon: "removesel",
                    accelerator: "^KeyD",
                    handler: () => {
                        this.handles.forEach(handle => handle.selected = false);
                    }
                },
                {
                    name: "Invert selection",
                    icon: "invertsel",
                    accelerator: "^KeyI",
                    handler: () => {
                        this.handles.forEach(handle => handle.selected = !handle.selected);
                    }
                },
                {
                    name: "Select connected",
                    icon: "curvesel",
                    accelerator: "^KeyL",
                    handler: () => {
                        const curves = this.getSelectedCurves();
                        for (let bezier of curves) {
                            for (let point of bezier.points) {
                                const handle = this.handles.find(h => h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"] &&
                                    h.point === point);
                                if (handle)
                                    handle.selected = true;
                            }
                        }
                    }
                }
            ],
            [
                {
                    name: "Reverse direction",
                    icon: "reversecurve",
                    accelerator: "KeyR",
                    handler: () => {
                        this.getSelectedCurves().forEach(c => c.reverse());
                    }
                }
            ],
            [
                {
                    name: "Union",
                    icon: "union",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation((out, item) => out.unite(item, {
                            insert: false
                        }));
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Union");
                    }
                },
                {
                    name: "Difference",
                    icon: "difference",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation((out, item) => out.subtract(item, {
                            insert: false
                        }));
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Difference");
                    }
                },
                {
                    name: "Intersection",
                    icon: "intersection",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation((out, item) => out.intersect(item, {
                            insert: false
                        }));
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Intersection");
                    }
                },
                {
                    name: "Exclusion",
                    icon: "xor",
                    accelerator: "",
                    handler: () => {
                        this.performCSGOperation((out, item) => out.exclude(item, {
                            insert: false
                        }));
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Exclusion");
                    }
                }
            ],
            [
                {
                    name: "Flip X",
                    icon: "flipx",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.x = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["lerp"])(1 - Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["unlerp"])(handle.position.x, bbox.left, bbox.right), bbox.left, bbox.right);
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Flip X");
                    }
                },
                {
                    name: "Flip Y",
                    icon: "flipy",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.y = Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["lerp"])(1 - Object(_utils_lerp__WEBPACK_IMPORTED_MODULE_3__["unlerp"])(handle.position.y, bbox.top, bbox.bottom), bbox.top, bbox.bottom);
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Flip Y");
                    }
                }
            ],
            [
                {
                    name: "Align to left",
                    icon: "alignleft",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.x = bbox.left;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to left");
                    }
                },
                {
                    name: "Align to right",
                    icon: "alignright",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.x = bbox.right;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to right");
                    }
                },
                {
                    name: "Align to top",
                    icon: "aligntop",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.y = bbox.top;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to top");
                    }
                },
                {
                    name: "Align to bottom",
                    icon: "alignbottom",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.y = bbox.bottom;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to bottom");
                    }
                },
                {
                    name: "Align to center",
                    icon: "alignhcenter",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.y = (bbox.top + bbox.bottom) / 2;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to center");
                    }
                },
                {
                    name: "Align to middle",
                    icon: "alignvcenter",
                    accelerator: "",
                    handler: () => {
                        const selected = this.handles.filter(h => h.selected);
                        const bbox = this.getHandlesBBox(selected);
                        this.addHandlesToUndoContext(selected);
                        selected.forEach(handle => {
                            handle.position.x = (bbox.left + bbox.right) / 2;
                        });
                        Object(_undo_history__WEBPACK_IMPORTED_MODULE_2__["finalizeUndoContext"])("Align to middle");
                    }
                }
            ]
        ];
    }
    performCSGOperation(operation) {
        const curves = this.getSelectedCurves();
        if (!curves.length)
            return;
        const targetWinding = curves[0].clockwise;
        console.log(this.beziers.map(b => b.clockwise));
        console.log(curves.map(b => b.clockwise));
        const paperPaths = curves.map(c => c.getPaperPath());
        let out = paperPaths[0];
        let insertIdx = Math.min(...curves.map(c => this.beziers.indexOf(c)));
        for (let i = 1; i < paperPaths.length; i++) {
            out = operation(out, paperPaths[i]);
        }
        const newCurves = _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"].fromPaperPathItem(out);
        if (newCurves.length) {
            const referenceWinding = newCurves[0].clockwise;
            console.log(targetWinding, referenceWinding);
            newCurves.forEach(c => {
                if (referenceWinding !== targetWinding)
                    c.reverse();
                this.beziers.splice(insertIdx, 0, c);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](this.beziers, c, insertIdx));
                const gIdx = this.guides.length;
                const guide = new _guides_curve__WEBPACK_IMPORTED_MODULE_5__["CurveGuide"](c);
                this.guides.push(guide);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](this.guides, guide, gIdx));
                c.points.forEach(p => {
                    const index = this.handles.length;
                    this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"](p));
                    _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](this.handles, this.handles[index], index), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](this.handles, this.handles[index + 1], index + 1), new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayAddAction"](this.handles, this.handles[index + 2], index + 2));
                });
                insertIdx++;
            });
        }
        curves.forEach(c => {
            const index = this.beziers.indexOf(c);
            this.beziers.splice(index, 1);
            _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.beziers, c, index));
            const gIdx = this.guides.findIndex(g => g instanceof _guides_curve__WEBPACK_IMPORTED_MODULE_5__["CurveGuide"] &&
                g.source === c);
            this.guides.splice(gIdx, 1);
            _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.guides, this.guides[gIdx], gIdx));
            this.handles.filter(h => (h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"] ||
                h instanceof _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"]) &&
                h.point.curve === c).forEach(h => {
                const index = this.handles.indexOf(h);
                this.handles.splice(index, 1);
                _undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"].addAction(new _undo_actions_array__WEBPACK_IMPORTED_MODULE_1__["ArrayRemoveAction"](this.handles, h, index));
            });
        });
        console.log(this.beziers.map(b => b.clockwise));
    }
    addHandlesToUndoContext(handles) {
        handles.forEach(handle => {
            if (!("prepareUndo" in handle))
                return;
            handle.prepareUndo(_undo_history__WEBPACK_IMPORTED_MODULE_2__["undoContext"]);
        });
    }
    getHandlesBBox(handles) {
        const xs = handles.map(h => h.position.x);
        const ys = handles.map(h => h.position.y);
        return {
            left: Math.min(...xs),
            top: Math.min(...ys),
            right: Math.max(...xs),
            bottom: Math.max(...ys)
        };
    }
    selectHandleBox(exclusive = true) {
        const left = Math.min(this.selectionOrigin.x, this.selectionTarget.x);
        const right = Math.max(this.selectionOrigin.x, this.selectionTarget.x);
        const top = Math.min(this.selectionOrigin.y, this.selectionTarget.y);
        const bottom = Math.max(this.selectionOrigin.y, this.selectionTarget.y);
        for (let handle of this.handles) {
            const selected = handle.position.x >= left &&
                handle.position.x < right &&
                handle.position.y >= top &&
                handle.position.y < bottom;
            if (exclusive)
                handle.selected = selected;
            else
                handle.selected = selected || handle.selected;
        }
    }
    getSelectedCurves() {
        const curves = [];
        for (let handle of this.handles) {
            if (!handle.selected ||
                !(handle instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]))
                continue;
            if (!curves.includes(handle.point.curve))
                curves.push(handle.point.curve);
        }
        return curves;
    }
    restrictAngles(pos, e) {
        const dx = Math.abs(pos.x - this.moveStartPoint.x);
        const dy = Math.abs(pos.y - this.moveStartPoint.y);
        if (e.shiftKey) {
            if (dx > dy)
                pos.y = this.moveStartPoint.y;
            else
                pos.x = this.moveStartPoint.x;
        }
    }
    handleMouseEvent(v, e, x, y) {
        const pos = v.co.clientToWorld(x, y);
        if (this.moveStartPoint)
            this.restrictAngles(pos, e);
        if (e.type === "mousedown" && e.buttons & 1) {
            const handle = v.nearHandle(pos.x, pos.y);
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
                const rawX = pos.x, rawY = pos.y;
                v.nudgePoint(pos, this.pivotHandle);
                const inPointDiff = this.moveLastPoint.getDiff(this.pivotHandle.position);
                const dPos = pos.getDiff(this.moveLastPoint);
                this.moveLastPoint = pos;
                if (rawX !== pos.x || rawY !== pos.y) {
                    // Center on cursor when snapping happens
                    pos.x -= inPointDiff.x;
                    pos.y -= inPointDiff.y;
                }
                // Pivot gets moved first
                this.pivotHandle.move(v, pos, dPos, this.pivotHandle, e);
                for (let handle of this.handles) {
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
    }
    render(v, ctx) {
        if (this.selecting) {
            ctx.fillStyle = "#08f3";
            ctx.fillRect(this.selectionOrigin.x, this.selectionOrigin.y, this.selectionTarget.x - this.selectionOrigin.x, this.selectionTarget.y - this.selectionOrigin.y);
        }
    }
    updateContext(context) {
        if (!(context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_4__["BezierContext"]))
            return;
        this.beziers = context.beziers;
        this.handles = [];
        context.beziers.forEach(bezier => {
            bezier.points.forEach(p => this.handles.push(new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.before), new _handles_bezierControlPoint__WEBPACK_IMPORTED_MODULE_8__["BezierControlPointHandle"](p, p.after), new _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"](p)));
        });
        this.guides = this.handles.filter(h => h instanceof _handles_bezierBasePoint__WEBPACK_IMPORTED_MODULE_7__["BezierBasePointHandle"]).map(h => new _guides_point__WEBPACK_IMPORTED_MODULE_6__["HandleGuide"](h));
    }
}


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








class RectangleTool {
    constructor() {
        this.name = "Rectangle";
        this.icon = "rectangletool";
        this.accelerator = "KeyS";
        this.handles = [];
        this.guides = [];
        this.supportsForeignHandles = false;
        this.subactions = [];
    }
    createRect() {
        const curve = new _geometry_bezier_curve__WEBPACK_IMPORTED_MODULE_0__["BezierCurve"]();
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.addPoint(new _geometry_bezier_point__WEBPACK_IMPORTED_MODULE_1__["BezierPoint"](new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0), new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](0, 0)));
        curve.points.forEach(p => p.determineType());
        return curve;
    }
    updateRectangle(pos, e) {
        const min = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](this.startPoint.x, this.startPoint.y);
        const max = new _geometry_point__WEBPACK_IMPORTED_MODULE_2__["Point"](pos.x, pos.y);
        if (e.shiftKey) {
            const w = max.x - min.x;
            const h = max.y - min.y;
            const size = Math.min(Math.abs(w), Math.abs(h));
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
    }
    handleMouseEvent(v, e, x, y) {
        if (!(v.context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        const pos = v.co.clientToWorld(x, y);
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
                if (v.context instanceof _context_glyph__WEBPACK_IMPORTED_MODULE_6__["GlyphContext"])
                    v.context.glyph.emit("modified");
            }
        }
    }
    render(v, ctx) {
    }
    updateContext(context) {
        if (!(context instanceof _context_bezier__WEBPACK_IMPORTED_MODULE_5__["BezierContext"]))
            return;
        this.handles = [];
        this.guides = [];
        for (let bezier of context.beziers) {
            for (let point of bezier.points) {
                this.guides.push(new _guides_point__WEBPACK_IMPORTED_MODULE_7__["PointGuide"](point.base));
            }
        }
    }
}


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
/* harmony import */ var _guides_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guides/grid */ "./src/typeedit/viewport/guides/grid.ts");


class Viewport {
    constructor(context, handles, tool) {
        this.context = context;
        this.handles = handles;
        this.tool = tool;
        this.domCanvas = document.createElement("canvas");
        this.ctx = this.domCanvas.getContext("2d");
        this.co = new _coordinates__WEBPACK_IMPORTED_MODULE_0__["ViewportCoordinates"]();
        this.setupCanvasEvents();
    }
    dispatchMouseEvent(e) {
        const box = this.domCanvas.getBoundingClientRect();
        if (!this.tool)
            return;
        this.tool.handleMouseEvent(this, e, e.clientX - box.left, e.clientY - box.top);
        this.render();
    }
    setupCanvasEvents() {
        this.domCanvas.addEventListener("click", (e) => {
        });
        this.domCanvas.addEventListener("mousedown", (e) => {
            this.dispatchMouseEvent(e);
        });
        this.domCanvas.addEventListener("mouseup", (e) => {
            this.dispatchMouseEvent(e);
        });
        this.domCanvas.addEventListener("mousemove", (e) => {
            if (e.buttons & 4) { // Middle Button
                this.co.translate(e.movementX, e.movementY);
                this.render();
            }
            else {
                this.dispatchMouseEvent(e);
            }
        });
        this.domCanvas.addEventListener("wheel", (e) => {
            if (e.buttons & 4 || e.ctrlKey) { // Middle Button
                const box = this.domCanvas.getBoundingClientRect();
                const pos = this.co.clientToWorld(e.clientX - box.left, e.clientY - box.top);
                this.co.scale(Math.pow(1.2, Math.sign(-e.deltaY)), pos.x, pos.y);
                this.render();
            }
            else {
                if (e.shiftKey && !e.deltaX) {
                    this.co.translate(-e.deltaY, 0);
                }
                else {
                    this.co.translate(-e.deltaX, -e.deltaY);
                }
                this.render();
            }
        });
    }
    nearHandle(x, y, type) {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ];
        for (let i = handles.length - 1; i >= 0; i--) {
            const handle = handles[i];
            if (type && handle.type !== type)
                continue;
            const dist = Math.hypot(handle.position.x - x, handle.position.y - y);
            if (dist < handle.hitRadius / this.co.scaleFactor)
                return handle;
        }
        return null;
    }
    selectHandles(select, exclusive = true) {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ];
        if (exclusive) {
            for (let handle of handles) {
                handle.selected = false;
            }
        }
        for (let handle of select) {
            handle.selected = true;
        }
    }
    getSelectedHandles() {
        const handles = [
            ...this.context.handles,
            ...this.tool.handles
        ];
        return handles.filter(h => h.selected);
    }
    purgeHandles() {
        this.handles = [];
    }
    updateViewportSize() {
        const parent = this.domCanvas.parentElement;
        if (!parent)
            return;
        const rect = parent.getBoundingClientRect();
        this.domCanvas.width = rect.width;
        this.domCanvas.height = rect.height;
        this.render();
    }
    drawHandles(handles) {
        for (let handle of handles) {
            const clientPos = this.co.worldToClient(handle.position.x, handle.position.y);
            this.ctx.resetTransform();
            this.ctx.translate(Math.round(clientPos.x) + 0.5, Math.round(clientPos.y) + 0.5);
            handle.render(this, this.ctx);
        }
    }
    nudgePoint(pos, obj) {
        this.context.grids.forEach(g => g.nudge(this, pos, obj));
        this.context.guides.forEach(g => g.nudge(this, pos, obj));
        this.tool.guides.forEach(g => g.nudge(this, pos, obj));
    }
    disableAllGuides() {
        this.context.grids.forEach(g => g.active = false);
        this.context.guides.forEach(g => g.active = false);
        this.tool.guides.forEach(g => g.active = false);
    }
    render() {
        this.ctx.resetTransform();
        this.ctx.clearRect(0, 0, this.domCanvas.width, this.domCanvas.height);
        this.co.transformCanvas(this.ctx);
        this.context.render(this, this.ctx);
        this.ctx.resetTransform();
        this.context.grids.forEach(g => g.render(this, this.ctx));
        Array(...this.context.guides, ...this.tool.guides).forEach(guide => {
            if (guide.active || guide instanceof _guides_grid__WEBPACK_IMPORTED_MODULE_1__["GridGuide"]) {
                this.ctx.resetTransform();
                if (guide.worldRender)
                    this.co.transformCanvas(this.ctx);
                guide.render(this, this.ctx);
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
    }
    setTool(tool) {
        this.tool = tool;
        this.tool.updateContext(this.context);
        this.disableAllGuides();
        this.render();
    }
}


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

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map