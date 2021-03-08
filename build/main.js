/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/configs/cors.ts":
/*!*****************************!*\
  !*** ./src/configs/cors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var corsOptions = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (corsOptions);


/***/ }),

/***/ "./src/configs/swagger.ts":
/*!********************************!*\
  !*** ./src/configs/swagger.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "swaggerDocument": () => (/* binding */ swaggerDocument)
/* harmony export */ });
var swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'Architecture Base API',
        description: 'Architecture base for nodejs/express/ts api',
        termsOfService: '',
        contact: {
            name: 'Patricio Cordero',
            email: 'patricio@espejozen.cl',
            url: 'https://patriciocordero.me'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    }
};


/***/ }),

/***/ "./src/routes/api.routes.ts":
/*!**********************************!*\
  !*** ./src/routes/api.routes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_auth_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/auth/auth */ "./src/shared/auth/auth.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/services/users.service.ts");



var router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
var auth = new _shared_auth_auth__WEBPACK_IMPORTED_MODULE_1__.Auth();
router.get('/', function (req, res) { res.redirect('/docs'); });
router.get('/users', auth.handleAuth.bind(undefined, 'private'), _services__WEBPACK_IMPORTED_MODULE_2__.index);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pub": () => (/* binding */ pub),
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var _public_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.routes */ "./src/routes/public.routes.ts");
/* harmony import */ var _api_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.routes */ "./src/routes/api.routes.ts");


var pub = _public_routes__WEBPACK_IMPORTED_MODULE_0__.default;
var api = _api_routes__WEBPACK_IMPORTED_MODULE_1__.default;


/***/ }),

/***/ "./src/routes/public.routes.ts":
/*!*************************************!*\
  !*** ./src/routes/public.routes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export router */
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/services/public.service.ts");


var router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
router.get('/', _services__WEBPACK_IMPORTED_MODULE_1__.index);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/services/public.service.ts":
/*!****************************************!*\
  !*** ./src/services/public.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index": () => (/* binding */ index)
/* harmony export */ });
var index = function (req, res) {
    res.status(200).json({ message: 'public' });
};


/***/ }),

/***/ "./src/services/users.service.ts":
/*!***************************************!*\
  !*** ./src/services/users.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "index": () => (/* binding */ index)
/* harmony export */ });
var index = function (req, res) {
    res.status(200).json({ message: 'users' });
};


/***/ }),

/***/ "./src/shared/auth/auth.ts":
/*!*********************************!*\
  !*** ./src/shared/auth/auth.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Auth": () => (/* binding */ Auth)
/* harmony export */ });
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
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.prototype.handleAuth = function (level, req, res, next) {
        return __awaiter(this, void 0, Promise, function () {
            var authorization, auth;
            return __generator(this, function (_a) {
                authorization = req.headers.authorization;
                auth = true;
                console.log(authorization);
                if (level == 'private' && auth)
                    next();
                else if (level == 'public')
                    next();
                else
                    res.status(401).json({ message: 'Unauthorized access' });
                return [2 /*return*/];
            });
        });
    };
    return Auth;
}());



/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");;

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");;

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/server.ts ***!
  \***********************/
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cors */ "cors");
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./configs/cors */ "./src/configs/cors.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _configs_swagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/swagger */ "./src/configs/swagger.ts");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/index */ "./src/routes/index.ts");








var app = express__WEBPACK_IMPORTED_MODULE_0__();
var NODE_ENV = "development";
app.use(morgan__WEBPACK_IMPORTED_MODULE_3__(NODE_ENV == 'development' ? 'dev' : 'tiny'));
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(_configs_cors__WEBPACK_IMPORTED_MODULE_5__));
app.use((0,body_parser__WEBPACK_IMPORTED_MODULE_2__.json)());
app.use((0,body_parser__WEBPACK_IMPORTED_MODULE_2__.urlencoded)({ extended: true }));
app.use('/docs', swagger_ui_express__WEBPACK_IMPORTED_MODULE_4__.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_4__.setup(_configs_swagger__WEBPACK_IMPORTED_MODULE_6__.swaggerDocument));
app.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_7__.pub);
app.use('/api', _routes_index__WEBPACK_IMPORTED_MODULE_7__.api);
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.listen(PORT, function () {
    console.log("Server started at http://localhost:" + PORT);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map