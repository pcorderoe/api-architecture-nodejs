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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");
/* harmony import */ var _shared_auth_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth/auth */ "./src/shared/auth/auth.ts");
/* harmony import */ var _shared_helpers_api_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/helpers/api.response */ "./src/shared/helpers/api.response.ts");




var router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
var auth = new _shared_auth_auth__WEBPACK_IMPORTED_MODULE_2__.Auth();
router.get("/", function (req, res) {
    res.redirect("/docs");
});
var namespace = '/users';
router.post("/token", _services__WEBPACK_IMPORTED_MODULE_1__.usersService.token);
router.get("" + namespace, auth.handleAuth, _services__WEBPACK_IMPORTED_MODULE_1__.usersService.index);
router.get(namespace + "/:id", auth.handleAuth, _services__WEBPACK_IMPORTED_MODULE_1__.usersService.getById);
router.put(namespace + "/:id", auth.handleAuth, _services__WEBPACK_IMPORTED_MODULE_1__.usersService.update);
router.delete(namespace + "/:id", auth.handleAuth, _services__WEBPACK_IMPORTED_MODULE_1__.usersService.remove);
router.post("" + namespace, auth.handleAuth, _services__WEBPACK_IMPORTED_MODULE_1__.usersService.create);
router.post(namespace + "/register", _services__WEBPACK_IMPORTED_MODULE_1__.usersService.register);
namespace = '/booking';
/*router.get(`${namespace}`, auth.handleAuth, usersService.index)
router.get(`${namespace}/:id`, auth.handleAuth, usersService.getById)
router.put(`${namespace}/:id`, auth.handleAuth, usersService.update)
router.delete(`${namespace}/:id`, auth.handleAuth, usersService.delete)
router.post(`${namespace}`, auth.handleAuth, usersService.create)
router.post(`${namespace}/register`, usersService.register)
router.post(`${namespace}/token`, usersService.token)
*/
router.use('*', _shared_helpers_api_response__WEBPACK_IMPORTED_MODULE_3__.handleApiResponse);
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
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/services/index.ts");


var router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();
router.get('/', _services__WEBPACK_IMPORTED_MODULE_1__.pubService.index);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/services/index.ts":
/*!*******************************!*\
  !*** ./src/services/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pubService": () => (/* reexport module object */ _public_service__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   "usersService": () => (/* reexport module object */ _users_service__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _public_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public.service */ "./src/services/public.service.ts");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.service */ "./src/services/users.service.ts");






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
/* harmony export */   "index": () => (/* binding */ index),
/* harmony export */   "getById": () => (/* binding */ getById),
/* harmony export */   "update": () => (/* binding */ update),
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "register": () => (/* binding */ register),
/* harmony export */   "token": () => (/* binding */ token)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ "@prisma/client");
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_helpers_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/helpers/util */ "./src/shared/helpers/util.ts");
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


var prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
var index = function (req, res, next) { return __awaiter(void 0, void 0, Promise, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, prisma.user.findMany({ take: 50 })];
            case 1:
                users = _a.sent();
                res.status(200).json({ error: null, data: (0,_shared_helpers_util__WEBPACK_IMPORTED_MODULE_1__.toJsonArr)(users) });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                next(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var getById = function (req, res) {
    res.status(200).json({ message: 'user:getById' });
};
var update = function (req, res) {
    res.status(200).json({ message: 'user:update' });
};
var remove = function (req, res) {
    res.status(200).json({ message: 'user:remove' });
};
var create = function (req, res) {
    res.status(200).json({ message: 'user:create' });
};
var register = function (req, res) {
    res.status(200).json({ message: 'user:register' });
};
var token = function (req, res) {
    res.status(200).json({ message: 'user:token' });
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

/***/ "./src/shared/helpers/api.response.ts":
/*!********************************************!*\
  !*** ./src/shared/helpers/api.response.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleApiResponse": () => (/* binding */ handleApiResponse)
/* harmony export */ });
var handleApiResponse = function (err, req, res, next) {
    //console.log(err)
    if (err) {
        res.status(500).json({ error: err.message, data: null });
    }
    //  console.log('restssss')
    // console.log('err', err)
    //console.log('handler',req)
};


/***/ }),

/***/ "./src/shared/helpers/util.ts":
/*!************************************!*\
  !*** ./src/shared/helpers/util.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toJsonArr": () => (/* binding */ toJsonArr)
/* harmony export */ });
/* unused harmony export toJson */
var toJson = function (data) {
    if (data !== undefined) {
        var intCount_1 = 0, repCount_1 = 0;
        var json = JSON.stringify(data, function (_, v) {
            if (typeof v === 'bigint') {
                intCount_1++;
                return v + "#bigint";
            }
            return v;
        });
        var res = json.replace(/"(-?\d+)#bigint"/g, function (_, a) {
            repCount_1++;
            return a;
        });
        if (repCount_1 > intCount_1) {
            // You have a string somewhere that looks like "123#bigint";
            throw new Error("BigInt serialization conflict with a string value.");
        }
        return JSON.parse(res);
    }
};
var toJsonArr = function (data) {
    return data.map(function (v) { return toJson(v); });
};


/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");;

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
/* harmony import */ var _configs_cors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configs/cors */ "./src/configs/cors.ts");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! body-parser */ "body-parser");
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! morgan */ "morgan");
/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swagger-ui-express */ "swagger-ui-express");
/* harmony import */ var swagger_ui_express__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _configs_swagger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configs/swagger */ "./src/configs/swagger.ts");
/* harmony import */ var _routes_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/index */ "./src/routes/index.ts");








var app = express__WEBPACK_IMPORTED_MODULE_0__();
var NODE_ENV = "development";
app.use(morgan__WEBPACK_IMPORTED_MODULE_4__(NODE_ENV == 'development' ? 'dev' : 'tiny'));
app.use(cors__WEBPACK_IMPORTED_MODULE_1___default()(_configs_cors__WEBPACK_IMPORTED_MODULE_2__));
app.use((0,body_parser__WEBPACK_IMPORTED_MODULE_3__.json)());
app.use((0,body_parser__WEBPACK_IMPORTED_MODULE_3__.urlencoded)({ extended: true }));
app.use('/docs', swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__.serve, swagger_ui_express__WEBPACK_IMPORTED_MODULE_5__.setup(_configs_swagger__WEBPACK_IMPORTED_MODULE_6__.swaggerDocument));
app.use('/', _routes_index__WEBPACK_IMPORTED_MODULE_7__.pub);
app.use('/api', _routes_index__WEBPACK_IMPORTED_MODULE_7__.api);
//app.use('*', handleApiResponse)
var _a = process.env.PORT, PORT = _a === void 0 ? 3000 : _a;
app.listen(PORT, function () {
    console.log("Server started at http://localhost:" + PORT);
});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map