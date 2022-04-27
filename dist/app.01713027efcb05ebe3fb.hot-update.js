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
    <div part="black">This is supposed to be black</div>
`;
const styles = _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_1__.css `
  :host {
    display: block;
    contain: content;
    color: blue;
    border-radius: var(--border-radius);
    min-width: 325px;
    text-align: center;
    box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0,0,0,.5);
  }
  ::part(black) {
    color: black;
  }
`;
let HelloWorld = class HelloWorld extends _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_2__.FASTElement {
    constructor() {
        super(...arguments);
        this.greeting = 'World';
        this.disabled = false;
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    _microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr
], HelloWorld.prototype, "greeting", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_microsoft_fast_element__WEBPACK_IMPORTED_MODULE_4__.attr)({ mode: 'boolean' })
], HelloWorld.prototype, "disabled", void 0);
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
/******/ 	__webpack_require__.h = () => ("fae73b77bb7dfe129346")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjAxNzEzMDI3ZWZjYjA1ZWJlM2ZiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFROztDQUU5QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhakIsQ0FBQztBQU9GLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxnRUFBVztJQUEzQzs7UUFDVSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQ04sYUFBUSxHQUFZLEtBQUssQ0FBQztJQUN6RCxDQUFDO0NBQUE7QUFGUztJQUFMLHlEQUFJOzRDQUE0QjtBQUNOO0lBQTFCLDZEQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7NENBQTJCO0FBRjVDLFVBQVU7SUFMdEIsc0VBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQztHQUNXLFVBQVUsQ0FHdEI7QUFIc0I7Ozs7Ozs7OztVQzNCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQVNURWxlbWVudCwgY3VzdG9tRWxlbWVudCwgYXR0ciwgaHRtbCwgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8SGVsbG9Xb3JsZD5gXG4gICAgPGgyPkhlbGxvICR7eCA9PiB4LmdyZWV0aW5nfTwvaDI+XG4gICAgPGRpdiBwYXJ0PVwiYmxhY2tcIj5UaGlzIGlzIHN1cHBvc2VkIHRvIGJlIGJsYWNrPC9kaXY+XG5gO1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250YWluOiBjb250ZW50O1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG4gIH1cbiAgOjpwYXJ0KGJsYWNrKSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5gO1xuXG5AY3VzdG9tRWxlbWVudCh7XG4gICAgbmFtZTogJ2hlbGxvLXdvcmxkJyxcbiAgICB0ZW1wbGF0ZSxcbiAgICBzdHlsZXNcbn0pXG5leHBvcnQgY2xhc3MgSGVsbG9Xb3JsZCBleHRlbmRzIEZBU1RFbGVtZW50IHtcbiAgICBAYXR0ciBncmVldGluZzogc3RyaW5nID0gJ1dvcmxkJztcbiAgICBAYXR0cih7IG1vZGU6ICdib29sZWFuJyB9KSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZhZTczYjc3YmI3ZGZlMTI5MzQ2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9