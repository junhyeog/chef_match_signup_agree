module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\User\\Downloads\\WaaS\\chef_match_signup_agree\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = () => {
  return __jsx(BackGround, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx(HeaderBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(Slogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\uD68C\uC6D0\uAC00\uC785")), __jsx(Professional_chef, {
    src: "/static/professional_chef.png",
    srcSet: "/static/professional_chef@2x.png 2x,/static/professional_chef@3x.png 3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx(ContentTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "My Private Chef"), __jsx(ContentSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\uC170\uD504\uC758 \uC694\uB9AC\uAC00 \uC6B0\uB9AC \uC9D1\uC73C\uB85C!"), __jsx(CheckBoxContainer, {
    style: {
      top: "54px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(CheckBox, {
    type: "checkbox",
    id: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx(Label, {
    htmlFor: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "\uB9C8\uD504\uC170 \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758")), __jsx(CheckBoxContainer, {
    style: {
      top: "99px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(CheckBox, {
    type: "checkbox",
    id: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(Label, {
    htmlFor: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "\uC804\uC790\uAE08\uC735\uAC70\uB798 \uC774\uC6A9\uC57D\uAD00 \uB3D9\uC758")), __jsx(CheckBoxContainer, {
    style: {
      top: "139px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(CheckBox, {
    type: "checkbox",
    id: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(Label, {
    htmlFor: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "\uAC1C\uC778\uC815\uBCF4 \uC218\uC9D1\uC774\uC6A9 \uB3D9\uC758")), __jsx(CheckBoxContainer, {
    style: {
      top: "179px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx(CheckBox, {
    type: "checkbox",
    id: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx(Label, {
    htmlFor: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, "\uB098\uB294 \uB9CC 14\uC138 \uC774\uC0C1\uC785\uB2C8\uB2E4.")), __jsx(CheckBoxContainer, {
    style: {
      top: "219px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(CheckBox, {
    type: "checkbox",
    id: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx(Label, {
    htmlFor: "term1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "(\uC120\uD0DD) \uB9C8\uCF00\uD305 \uC815\uBCF4 \uC218\uC2E0\uB3D9\uC758")), __jsx(NavBar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx(NavSlogan, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "\uB2E4\uC74C\uC73C\uB85C")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);
const BackGround = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__BackGround",
  componentId: "lo9ks6-0"
})(["width:100vw;height:100vh;background-color:#ffffff;"]);
const HeaderBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__HeaderBox",
  componentId: "lo9ks6-1"
})(["position:absolute;top:0px;width:100%;height:52px;box-shadow:0 1px 2px 0 rgba(0,0,0,0.16);background-color:#ffffff;"]);
const Slogan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Slogan",
  componentId: "lo9ks6-2"
})(["position:absolute;top:17px;left:50%;transform:translate(-50%,0%);width:100px;height:19px;font-family:NotoSansCJKKR;font-size:16px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:0.75;letter-spacing:normal;text-align:center;color:#2b2d30;"]);
const Professional_chef = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "pages__Professional_chef",
  componentId: "lo9ks6-3"
})(["display:block;width:100%;height:auto;object-fit:contain;"]);
const ContentTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ContentTitle",
  componentId: "lo9ks6-4"
})(["position:relative;top:32px;left:50%;transform:translate(-50%,0%);width:300px;height:39px;font-family:Dynalight;font-size:32px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.22;letter-spacing:normal;text-align:center;color:#003a2b;"]);
const ContentSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__ContentSubtitle",
  componentId: "lo9ks6-5"
})(["position:relative;top:46px;left:50%;transform:translate(-50%,0%);width:200px;height:15px;font-family:NotoSansCJKKR;font-size:12px;font-weight:normal;font-stretch:normal;font-style:normal;line-height:1.17;letter-spacing:normal;text-align:center;color:#003a2b;"]);
const CheckBoxContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__CheckBoxContainer",
  componentId: "lo9ks6-6"
})(["position:relative;left:50%;top:100px;transform:translate(-50%,0%);"]);
const CheckBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "pages__CheckBox",
  componentId: "lo9ks6-7"
})(["display:none;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "pages__Label",
  componentId: "lo9ks6-8"
})(["padding-left:25px;cursor:pointer;&::before{content:\"\";width:24px;height:24px;margin-right:10px;position:absolute;left:0;border-radius:2px;background-color:#0d6412;}"]);
const NavBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NavBar",
  componentId: "lo9ks6-9"
})(["position:absolute;bottom:0px;width:100vw;height:66px;background-color:#0d6412;"]);
const NavSlogan = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NavSlogan",
  componentId: "lo9ks6-10"
})(["position:absolute;top:24px;left:50%;transform:translate(-50%,0%);width:100px;height:24px;font-family:NotoSansCJKKR;font-size:20px;font-weight:bold;font-stretch:normal;font-style:normal;line-height:1.2;letter-spacing:normal;text-align:center;color:#ffffff;"]);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\User\Downloads\WaaS\chef_match_signup_agree\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map