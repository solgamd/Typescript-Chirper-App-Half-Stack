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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar chirpstore = __webpack_require__(/*! ../utils/chirpstore */ \"./src/server/utils/chirpstore.js\");\nvar router = express_1.Router();\n// router.get('/:id?', (req, res) => { //REMOVE ID IF ONLY WANT THIS ROUTE TO GET ALL CHIRPS\n//     // const data = [\n//     //     {\n//     //         id: 1,\n//     //         user: \"Tolita\",\n//     //         text: \"I barf a lot!\"\n//     //     },\n//     //     {\n//     //         id: 2,\n//     //         user: \"Mishkita\",\n//     //         text: \"I eat twice as much as Toli!\"\n//     //     }\n//     // ]\n//     // res.json(data);\n//     let id = req.params.id;\n//     if (id) {\n//         res.json(chirpstore.GetChirp(id));\n//     } else {\n//         let chirps = chirpstore.GetChirps();\n//         let data = Object['keys'](chirps).map(key => {\n//             return {\n//                 id: key,\n//                 user: chirps[key].user,\n//                 text: chirps[key].text\n//             }\n//         });\n//         // data.pop();\n//         res.json(data);\n//     }\n// });\nrouter.get('/', function (req, res) {\n    var chirps = chirpstore.GetChirps();\n    // let data = Object['keys'](chirps).map(key => {\n    //     return {\n    //         id: key,\n    //         user: chirps[key].user,\n    //         text: chirps[key].text\n    //     }\n    // });\n    res.json(chirps);\n});\nrouter.get('/:id', function (req, res) {\n    var id = req.params.id;\n    res.json(chirpstore.GetChirp(id));\n});\nrouter.post('/', function (req, res) {\n    chirpstore.CreateChirp(req.body);\n    res.sendStatus(200); // Challenge: make this respond with chirps instead\n});\nrouter.put('/:id/admin', function (req, res) {\n    var id = req.params.id;\n    var chirp = req.body;\n    chirpstore.UpdateChirp(id, chirp);\n    res.sendStatus(200);\n});\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\nvar router = express_1.Router();\nrouter.use('/chirps', chirps_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.static('public'));\napp.use(express.json());\napp.use('/api', routes_1.default);\nvar port = process.env.PORT || 3000;\napp.listen(port, function () {\n    console.log(\"Server listening on port: \" + port);\n});\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "./src/server/utils/chirpstore.js":
/*!****************************************!*\
  !*** ./src/server/utils/chirpstore.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const fs = __webpack_require__(/*! fs */ \"fs\");\nlet chirps = { nextid: 0 };\n\nif(fs.existsSync('chirps.json')) {\n    chirps = JSON.parse(fs.readFileSync('chirps.json'));\n}\n\nlet getChirps = () => {\n    return Object.assign({}, chirps); //create a copy and return it\n}\n\nlet getChirp = id => {\n    return Object.assign({}, chirps[id]); //create a copy and return it\n}\n\nlet createChirp = (chirp) => {\n    chirps[chirps.nextid++] = chirp;\n    writeChirps();\n};\n\nlet updateChirp = (id, chirp) => {\n    chirps[id] = chirp;\n    writeChirps();\n}\n\nlet deleteChirp = id => {\n    delete chirps[id];\n    writeChirps();\n}\n\nlet writeChirps = () => {\n    fs.writeFileSync('chirps.json', JSON.stringify(chirps));\n};\n\nmodule.exports = {\n    CreateChirp: createChirp,\n    DeleteChirp: deleteChirp,\n    GetChirps: getChirps,\n    GetChirp: getChirp,\n    UpdateChirp: updateChirp\n}\n\n\n\n//# sourceURL=webpack:///./src/server/utils/chirpstore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ })

/******/ });