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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.js":
/*!*****************************!*\
  !*** ./client/src/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/macbook/Desktop/mobileVibrate/client/src/index.js: Unexpected token (14:12)\\n\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m    render() {\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 14 | \\u001b[39m            \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m            \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 15 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33mBoiler\\u001b[39m \\u001b[33mPlate\\u001b[39m\\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mh1\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 | \\u001b[39m                \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 17 | \\u001b[39m                    \\u001b[33m<\\u001b[39m\\u001b[33mContainer\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Parser.unexpected (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5167:16)\\n    at Parser.parseExprAtom (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6328:20)\\n    at Parser.parseExprSubscripts (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Parser.parseMaybeUnary (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Parser.parseExprOps (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Parser.parseMaybeConditional (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Parser.parseMaybeAssign (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6466:28)\\n    at Parser.parseExprAtom (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6260:21)\\n    at Parser.parseExprSubscripts (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5914:23)\\n    at Parser.parseMaybeUnary (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5894:21)\\n    at Parser.parseExprOps (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5781:23)\\n    at Parser.parseMaybeConditional (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5754:23)\\n    at Parser.parseMaybeAssign (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5701:21)\\n    at Parser.parseExpression (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:5649:23)\\n    at Parser.parseReturnStatement (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7660:28)\\n    at Parser.parseStatementContent (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7339:21)\\n    at Parser.parseStatement (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7291:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7868:25)\\n    at Parser.parseBlockBody (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7855:10)\\n    at Parser.parseBlock (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7839:10)\\n    at Parser.parseFunctionBody (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6909:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6879:10)\\n    at Parser.parseMethod (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:6835:10)\\n    at Parser.pushClassMethod (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:8264:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:8189:12)\\n    at Parser.parseClassMember (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:8128:10)\\n    at withTopicForbiddingContext (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:8083:14)\\n    at Parser.withTopicForbiddingContext (/Users/macbook/Desktop/mobileVibrate/node_modules/@babel/parser/lib/index.js:7185:14)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzLmpzIiwic291cmNlcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/index.js\n");

/***/ })

/******/ });