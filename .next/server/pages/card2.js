module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/card2.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/card2.js":
/*!************************!*\
  !*** ./pages/card2.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/Users/abdullahnbail/Desktop/cs50-frontend/pages/card2.js\";\n\nconst Card2 = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"card2\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          className: \"img-d\",\n          src: \"/images/PicsArt_01-07-02.10.04.png\",\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 6,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"text2\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: \"\\u0645\\u0633\\u062A\\u0648\\u064A\\u0627\\u062A \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F : \\u0645\\u0646 \\u0627\\u0644\\u0623\\u0643\\u062B\\u0631 \\u0627\\u0644\\u0623\\u0634\\u064A\\u0627\\u0621 \\u0627\\u0644\\u0645\\u0647\\u0645\\u0629 \\u0641\\u064A \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0648\\u0627\\u0644\\u062A\\u064A \\u064A\\u0639\\u062A\\u0645\\u062F \\u0639\\u0644\\u064A\\u0647\\u0627 \\u0641\\u064A \\u0627\\u0644\\u062A\\u062F\\u0631\\u064A\\u0628 \\u0648\\u0637\\u0631\\u0642 \\u0627\\u0644\\u062A\\u0639\\u0627\\u0645\\u0644 \\u0647\\u064A \\u0645\\u0639\\u0631\\u0641\\u0629 \\u0645\\u0633\\u062A\\u0648\\u0649 \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0644\\u062F\\u0649 \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0648\\u0645\\u062F\\u0649 \\u0642\\u0648\\u062A\\u0647 \\u062D\\u062A\\u0649 \\u064A\\u062A\\u0645 \\u0645\\u0639\\u0631\\u0641\\u0629 \\u0646\\u0642\\u0627\\u0637 \\u0627\\u0644\\u0642\\u0648\\u0629 \\u0648\\u0627\\u0644\\u0636\\u0639\\u0641 \\u0644\\u062F\\u0649 \\u0637\\u0641\\u0644 \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0644\\u0627\\u0646 \\u0645\\u0639\\u0627\\u0645\\u0644\\u0629 \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0628 \\u0628\\u062A\\u0648\\u062D\\u062F \\u062E\\u0641\\u064A\\u0641 \\u062A\\u062E\\u062A\\u0644\\u0641 \\u0639\\u0646 \\u0645\\u0639\\u0627\\u0645\\u0644\\u0629 \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0628 \\u0628\\u062A\\u0648\\u062D\\u062F \\u0639\\u0627\\u0644\\u064A \\u0628\\u0639\\u062F\\u0645\\u0627 \\u0643\\u0627\\u0646 \\u0647\\u0646\\u0627\\u0643 \\u0639\\u062F\\u0629 \\u0627\\u0636\\u0637\\u0631\\u0627\\u0628\\u0627\\u062A \\u0648\\u062C\\u0639\\u0644\\u0647\\u0627 \\u062A\\u062D\\u062A \\u0645\\u0633\\u0645\\u0649 \\u0648\\u0627\\u062D\\u062F \\u0648\\u0647\\u0648 (\\u0627\\u0644\\u062A\\u0648\\u062D\\u062F) \\u062C\\u0627\\u0621 \\u0627\\u0644\\u062F\\u0648\\u0631 \\u0644\\u062A\\u0642\\u0633\\u064A\\u0645\\u0647 \\u0644\\u0639\\u062F\\u0629 \\u0627\\u0642\\u0633\\u0627\\u0645 \\u0627\\u062C\\u0645\\u0639 \\u0627\\u0644\\u062E\\u0628\\u0631\\u0627\\u0621 \\u0639\\u0644\\u0649 \\u062A\\u0642\\u0633\\u064A\\u0645\\u0647\\u0627 \\u0644\\u062B\\u0644\\u0627\\u062B \\u0645\\u0633\\u062A\\u0648\\u064A\\u0627\\u062A \\u0648\\u0628\\u0639\\u0636\\u0647\\u0645 \\u0642\\u0633\\u0645\\u0647\\u0627 \\u0644\\u062E\\u0645\\u0633\\u0629 \\u0645\\u0633\\u062A\\u0648\\u064A\\u0627\\u062A \\u062A\\u062D\\u062F\\u064A\\u062F \\u0645\\u0633\\u062A\\u0648\\u0649 \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0644\\u062F\\u0649 \\u0627\\u0644\\u0637\\u0641\\u0644 \\u064A\\u0633\\u0647\\u0644 \\u0627\\u0644\\u062A\\u0639\\u0627\\u0645\\u0644 \\u0645\\u0639\\u0647 \\u0648 \\u064A\\u0643\\u0648\\u0646 \\u0645\\u0641\\u064A\\u062F\\u064B\\u0627 \\u0644\\u0641\\u0647\\u0645 \\u0643\\u064A\\u0641 \\u0645\\u0646 \\u0627\\u0644\\u0645\\u0631\\u062C\\u062D \\u0623\\u0646 \\u064A\\u0643\\u0648\\u0646 \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0627\\u0644\\u0630\\u064A \\u064A\\u0639\\u0645\\u0644 \\u0628\\u0634\\u0643\\u0644 \\u0645\\u0631\\u062A\\u0641\\u0639 \\u0623\\u0648 \\u0645\\u0646\\u062E\\u0641\\u0636 \\u0648\\u062A\\u062D\\u062F\\u064A\\u062F \\u0623\\u0646\\u0648\\u0627\\u0639 \\u0627\\u0644\\u062E\\u062F\\u0645\\u0627\\u062A \\u0648\\u0627\\u0644\\u062F\\u0639\\u0645 \\u0627\\u0644\\u062A\\u064A \\u0633\\u062A\\u062E\\u062F\\u0645\\u0647\\u0647 \\u0628\\u0634\\u0643\\u0644 \\u0623\\u0641\\u0636\\u0644 \\u063A\\u0627\\u0644\\u0628\\u0627 \\u064A\\u062A\\u0645 \\u0645\\u0639\\u0631\\u0641\\u0629 \\u0645\\u0633\\u062A\\u0648\\u0649 \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0639\\u0646\\u062F \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0639\\u0646 \\u0637\\u0631\\u064A\\u0642 \\u0627\\u0644\\u0645\\u062F\\u0631\\u0628\\u064A\\u0646 \\u0627\\u0648 \\u0627\\u0644\\u0627\\u0637\\u0628\\u0627\\u0621 \\u0641\\u064A \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0628\\u0633\\u0628\\u0628 \\u0645\\u0639\\u0631\\u0641\\u062A\\u0647\\u0645 \\u0627\\u0644\\u0643\\u0627\\u0641\\u064A\\u0629 \\u0648\\u0627\\u0644\\u0623\\u0646 \\u062A\\u0648\\u062C\\u062F \\u0628\\u0639\\u0636 \\u0627\\u0644\\u0641\\u062D\\u0648\\u0635\\u0627\\u062A \\u0627\\u0644\\u064A \\u062A\\u0648\\u0636\\u062D \\u0645\\u062F\\u0649 \\u062A\\u0623\\u062B\\u064A\\u0631 \\u0627\\u0644\\u062A\\u0648\\u062D\\u062F \\u0641\\u064A \\u0627\\u0644\\u0637\\u0641\\u0644 \\u0648\\u062A\\u0637\\u0648\\u0631\\u0627\\u062A\\u0647 \\u0639\\u0644\\u0627\\u0648\\u0629 \\u0639\\u0644\\u0649 \\u0630\\u0644\\u0643 \\u060C \\u064A\\u0645\\u0643\\u0646 \\u0623\\u0646 \\u064A\\u062A\\u063A\\u064A\\u0631 \\u0627\\u0644\\u0645\\u0633\\u062A\\u0648\\u0649 \\u0627\\u0644\\u0630\\u064A \\u062A\\u0645 \\u062A\\u0639\\u064A\\u064A\\u0646\\u0647 \\u0644\\u0644\\u0637\\u0641\\u0644 \\u0639\\u0646\\u062F \\u062A\\u0634\\u062E\\u064A\\u0635\\u0647 \\u0644\\u0623\\u0648\\u0644 \\u0645\\u0631\\u0629 \\u0645\\u0639 \\u062A\\u0637\\u0648\\u0631 \\u0648\\u0635\\u0642\\u0644 \\u0627\\u0644\\u0645\\u0647\\u0627\\u0631\\u0627\\u062A \\u0627\\u0644\\u0627\\u062C\\u062A\\u0645\\u0627\\u0639\\u064A\\u0629 \\u0648\\u0645\\u0639 \\u0627\\u0646\\u062E\\u0641\\u0627\\u0636 \\u062D\\u062F\\u0629 \\u0627\\u0644\\u0645\\u0634\\u0643\\u0644\\u0627\\u062A \\u0645\\u062B\\u0644 \\u0627\\u0644\\u0642\\u0644\\u0642 \\u0623\\u0648 \\u0627\\u0644\\u0627\\u0643\\u062A\\u0626\\u0627\\u0628 \\u060C \\u0627\\u0644\\u0634\\u0627\\u0626\\u0639\\u0629 \\u0628\\u064A\\u0646 \\u0627\\u0644\\u0645\\u0635\\u0627\\u0628\\u064A\\u0646 \\u0628\\u0627\\u0644\\u062A\\u0648\\u062D\\u062F.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 5,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jYXJkMi5qcz8xYzYzIl0sIm5hbWVzIjpbIkNhcmQyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsTUFBTUEsS0FBSyxHQUFHLE1BQU07QUFDbEIsc0JBQ0U7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsT0FEWjtBQUVFLGFBQUcsRUFBQyxvQ0FGTjtBQUdFLGFBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFPRTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFpQ0QsQ0FsQ0Q7O0FBbUNlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhcmQyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ2FyZDIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZDJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZFwiXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL1BpY3NBcnRfMDEtMDctMDIuMTAuMDQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dDJcIj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICDZhdiz2KrZiNmK2KfYqiDYp9mE2KrZiNit2K8gOiDZhdmGINin2YTYo9mD2KvYsSDYp9mE2KPYtNmK2KfYoSDYp9mE2YXZh9mF2Kkg2YHZiiDYp9mE2KrZiNit2K8g2YjYp9mE2KrZiiDZiti52KrZhdivXG4gICAgICAgICAgICAgINi52YTZitmH2Kcg2YHZiiDYp9mE2KrYr9ix2YrYqCDZiNi32LHZgiDYp9mE2KrYudin2YXZhCDZh9mKINmF2LnYsdmB2Kkg2YXYs9iq2YjZiSDYp9mE2KrZiNit2K8g2YTYr9mJINin2YTYt9mB2YQg2YjZhdiv2YlcbiAgICAgICAgICAgICAg2YLZiNiq2Ycg2K3YqtmJINmK2KrZhSDZhdi52LHZgdipINmG2YLYp9i3INin2YTZgtmI2Kkg2YjYp9mE2LbYudmBINmE2K/ZiSDYt9mB2YQg2KfZhNiq2YjYrdivINmE2KfZhiDZhdi52KfZhdmE2KlcbiAgICAgICAgICAgICAg2KfZhNi32YHZhCDYp9mE2YXYtdin2Kgg2KjYqtmI2K3YryDYrtmB2YrZgSDYqtiu2KrZhNmBINi52YYg2YXYudin2YXZhNipINin2YTYt9mB2YQg2KfZhNmF2LXYp9ioINio2KrZiNit2K8g2LnYp9mE2YpcbiAgICAgICAgICAgICAg2KjYudiv2YXYpyDZg9in2YYg2YfZhtin2YMg2LnYr9ipINin2LbYt9ix2KfYqNin2Kog2YjYrNi52YTZh9inINiq2K3YqiDZhdiz2YXZiSDZiNin2K3YryDZiNmH2YggKNin2YTYqtmI2K3Yrykg2KzYp9ihXG4gICAgICAgICAgICAgINin2YTYr9mI2LEg2YTYqtmC2LPZitmF2Ycg2YTYudiv2Kkg2KfZgtiz2KfZhSDYp9is2YXYuSDYp9mE2K7YqNix2KfYoSDYudmE2Ykg2KrZgtiz2YrZhdmH2Kcg2YTYq9mE2KfYqyDZhdiz2KrZiNmK2KfYqlxuICAgICAgICAgICAgICDZiNio2LnYttmH2YUg2YLYs9mF2YfYpyDZhNiu2YXYs9ipINmF2LPYqtmI2YrYp9iqINiq2K3Yr9mK2K8g2YXYs9iq2YjZiSDYp9mE2KrZiNit2K8g2YTYr9mJINin2YTYt9mB2YQg2YrYs9mH2YRcbiAgICAgICAgICAgICAg2KfZhNiq2LnYp9mF2YQg2YXYudmHINmIINmK2YPZiNmGINmF2YHZitiv2YvYpyDZhNmB2YfZhSDZg9mK2YEg2YXZhiDYp9mE2YXYsdis2K0g2KPZhiDZitmD2YjZhiDYp9mE2LfZgdmEINin2YTYsNmKXG4gICAgICAgICAgICAgINmK2LnZhdmEINio2LTZg9mEINmF2LHYqtmB2Lkg2KPZiCDZhdmG2K7Zgdi2INmI2KrYrdiv2YrYryDYo9mG2YjYp9i5INin2YTYrtiv2YXYp9iqINmI2KfZhNiv2LnZhSDYp9mE2KrZiiDYs9iq2K7Yr9mF2YfZh1xuICAgICAgICAgICAgICDYqNi02YPZhCDYo9mB2LbZhCDYutin2YTYqNinINmK2KrZhSDZhdi52LHZgdipINmF2LPYqtmI2Ykg2KfZhNiq2YjYrdivINi52YbYryDYp9mE2LfZgdmEINi52YYg2LfYsdmK2YIg2KfZhNmF2K/Ysdio2YrZhlxuICAgICAgICAgICAgICDYp9mIINin2YTYp9i32KjYp9ihINmB2Yog2KfZhNiq2YjYrdivINio2LPYqNioINmF2LnYsdmB2KrZh9mFINin2YTZg9in2YHZitipINmI2KfZhNij2YYg2KrZiNis2K8g2KjYudi2INin2YTZgdit2YjYtdin2KpcbiAgICAgICAgICAgICAg2KfZhNmKINiq2YjYttitINmF2K/ZiSDYqtij2KvZitixINin2YTYqtmI2K3YryDZgdmKINin2YTYt9mB2YQg2YjYqti32YjYsdin2KrZhyDYudmE2KfZiNipINi52YTZiSDYsNmE2YMg2Iwg2YrZhdmD2YZcbiAgICAgICAgICAgICAg2KPZhiDZitiq2LrZitixINin2YTZhdiz2KrZiNmJINin2YTYsNmKINiq2YUg2KrYudmK2YrZhtmHINmE2YTYt9mB2YQg2LnZhtivINiq2LTYrtmK2LXZhyDZhNij2YjZhCDZhdix2Kkg2YXYuSDYqti32YjYsVxuICAgICAgICAgICAgICDZiNi12YLZhCDYp9mE2YXZh9in2LHYp9iqINin2YTYp9is2KrZhdin2LnZitipINmI2YXYuSDYp9mG2K7Zgdin2LYg2K3Yr9ipINin2YTZhdi02YPZhNin2Kog2YXYq9mEINin2YTZgtmE2YIg2KPZiFxuICAgICAgICAgICAgICDYp9mE2KfZg9iq2KbYp9ioINiMINin2YTYtNin2KbYudipINio2YrZhiDYp9mE2YXYtdin2KjZitmGINio2KfZhNiq2YjYrdivLlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhcmQyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/card2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });