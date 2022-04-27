"use strict";
self["webpackHotUpdate"]("app",{

/***/ "./src/hello-world.ts":
/*!****************************!*\
  !*** ./src/hello-world.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelloWorld": () => (/* binding */ HelloWorld)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/templating/template.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/styles/css.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/fast-element.js");
/* harmony import */ var _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/fast-element */ "./node_modules/@microsoft/fast-element/dist/esm/components/attributes.js");


const template = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_0__.html `
    <h2>Hello ${x => x.greeting}</h2>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.css `
  :host {
    display: block;
    contain: content;
    color: white;
    background: var(--fill-color);
    border-radius: var(--border-radius);
    min-width: 325px;
    text-align: center;
    box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0,0,0,.5);
  }
`;
let HelloWorld = class HelloWorld extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    constructor() {
        super(...arguments);
        this.greeting = 'World';
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], HelloWorld.prototype, "greeting", void 0);
HelloWorld = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.customElement)({
        name: 'hello-world',
        template,
        styles
    })
], HelloWorld);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a5f18745b854964861b9")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc5YTg1NTM4ODJmMDg1MGI0MGU3LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRO0NBQzlCLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7Ozs7Ozs7Ozs7Q0FXakIsQ0FBQztBQU9GLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxnRUFBVztJQUEzQzs7UUFDVSxhQUFRLEdBQVcsT0FBTyxDQUFDO0lBQ3JDLENBQUM7Q0FBQTtBQURTO0lBQUwseURBQUk7NENBQTRCO0FBRHhCLFVBQVU7SUFMdEIsc0VBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQztHQUNXLFVBQVUsQ0FFdEI7QUFGc0I7Ozs7Ozs7OztVQ3hCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQVNURWxlbWVudCwgY3VzdG9tRWxlbWVudCwgYXR0ciwgaHRtbCwgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8SGVsbG9Xb3JsZD5gXG4gICAgPGgyPkhlbGxvICR7eCA9PiB4LmdyZWV0aW5nfTwvaDI+XG5gO1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250YWluOiBjb250ZW50O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1maWxsLWNvbG9yKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcbiAgICBtaW4td2lkdGg6IDMyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIDAgY2FsYyh2YXIoLS1kZXB0aCkgKiAxcHgpIHJnYmEoMCwwLDAsLjUpO1xuICB9XG5gO1xuXG5AY3VzdG9tRWxlbWVudCh7XG4gICAgbmFtZTogJ2hlbGxvLXdvcmxkJyxcbiAgICB0ZW1wbGF0ZSxcbiAgICBzdHlsZXNcbn0pXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIEZBU1RFbGVtZW50IHtcbiAgICBAYXR0ciBncmVldGluZzogc3RyaW5nID0gJ1dvcmxkJztcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhNWYxODc0NWI4NTQ5NjQ4NjFiOVwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==