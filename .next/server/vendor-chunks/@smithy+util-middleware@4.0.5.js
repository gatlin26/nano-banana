"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@smithy+util-middleware@4.0.5";
exports.ids = ["vendor-chunks/@smithy+util-middleware@4.0.5"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* binding */ getSmithyContext)\n/* harmony export */ });\n/* harmony import */ var _smithy_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @smithy/types */ \"(rsc)/./node_modules/.pnpm/@smithy+types@4.3.2/node_modules/@smithy/types/dist-es/index.js\");\n\nconst getSmithyContext = (context) => context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] || (context[_smithy_types__WEBPACK_IMPORTED_MODULE_0__.SMITHY_CONTEXT_KEY] = {});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVANC4wLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1taWRkbGV3YXJlL2Rpc3QtZXMvZ2V0U21pdGh5Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRDtBQUM1Qyw4Q0FBOEMsNkRBQWtCLGNBQWMsNkRBQWtCLE1BQU0iLCJzb3VyY2VzIjpbIkQ6XFxjb2RlXFx3ZWJcXG5hbm8tYmFuYW5hXFxub2RlX21vZHVsZXNcXC5wbnBtXFxAc21pdGh5K3V0aWwtbWlkZGxld2FyZUA0LjAuNVxcbm9kZV9tb2R1bGVzXFxAc21pdGh5XFx1dGlsLW1pZGRsZXdhcmVcXGRpc3QtZXNcXGdldFNtaXRoeUNvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU01JVEhZX0NPTlRFWFRfS0VZIH0gZnJvbSBcIkBzbWl0aHkvdHlwZXNcIjtcbmV4cG9ydCBjb25zdCBnZXRTbWl0aHlDb250ZXh0ID0gKGNvbnRleHQpID0+IGNvbnRleHRbU01JVEhZX0NPTlRFWFRfS0VZXSB8fCAoY29udGV4dFtTTUlUSFlfQ09OVEVYVF9LRVldID0ge30pO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/index.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/index.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getSmithyContext: () => (/* reexport safe */ _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__.getSmithyContext),\n/* harmony export */   normalizeProvider: () => (/* reexport safe */ _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__.normalizeProvider)\n/* harmony export */ });\n/* harmony import */ var _getSmithyContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSmithyContext */ \"(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js\");\n/* harmony import */ var _normalizeProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalizeProvider */ \"(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js\");\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVANC4wLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1taWRkbGV3YXJlL2Rpc3QtZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFtQztBQUNDIiwic291cmNlcyI6WyJEOlxcY29kZVxcd2ViXFxuYW5vLWJhbmFuYVxcbm9kZV9tb2R1bGVzXFwucG5wbVxcQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVANC4wLjVcXG5vZGVfbW9kdWxlc1xcQHNtaXRoeVxcdXRpbC1taWRkbGV3YXJlXFxkaXN0LWVzXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tIFwiLi9nZXRTbWl0aHlDb250ZXh0XCI7XG5leHBvcnQgKiBmcm9tIFwiLi9ub3JtYWxpemVQcm92aWRlclwiO1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeProvider: () => (/* binding */ normalizeProvider)\n/* harmony export */ });\nconst normalizeProvider = (input) => {\n    if (typeof input === \"function\")\n        return input;\n    const promisified = Promise.resolve(input);\n    return () => promisified;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vQHNtaXRoeSt1dGlsLW1pZGRsZXdhcmVANC4wLjUvbm9kZV9tb2R1bGVzL0BzbWl0aHkvdXRpbC1taWRkbGV3YXJlL2Rpc3QtZXMvbm9ybWFsaXplUHJvdmlkZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiRDpcXGNvZGVcXHdlYlxcbmFuby1iYW5hbmFcXG5vZGVfbW9kdWxlc1xcLnBucG1cXEBzbWl0aHkrdXRpbC1taWRkbGV3YXJlQDQuMC41XFxub2RlX21vZHVsZXNcXEBzbWl0aHlcXHV0aWwtbWlkZGxld2FyZVxcZGlzdC1lc1xcbm9ybWFsaXplUHJvdmlkZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVByb3ZpZGVyID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgY29uc3QgcHJvbWlzaWZpZWQgPSBQcm9taXNlLnJlc29sdmUoaW5wdXQpO1xuICAgIHJldHVybiAoKSA9PiBwcm9taXNpZmllZDtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/@smithy+util-middleware@4.0.5/node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js\n");

/***/ })

};
;