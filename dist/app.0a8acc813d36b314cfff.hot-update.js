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
    <div part="yellow">This is supposed to be yellow</div>
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
  ::part(yellow) {
    color: yellow;
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
/******/ 	__webpack_require__.h = () => ("8cbfe871663ef706d0d2")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjBhOGFjYzgxM2QzNmIzMTRjZmZmLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFROztDQUU5QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhakIsQ0FBQztBQU9GLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxnRUFBVztJQUEzQzs7UUFDVSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQ04sYUFBUSxHQUFZLEtBQUssQ0FBQztJQUN6RCxDQUFDO0NBQUE7QUFGUztJQUFMLHlEQUFJOzRDQUE0QjtBQUNOO0lBQTFCLDZEQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7NENBQTJCO0FBRjVDLFVBQVU7SUFMdEIsc0VBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQztHQUNXLFVBQVUsQ0FHdEI7QUFIc0I7Ozs7Ozs7OztVQzNCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQVNURWxlbWVudCwgY3VzdG9tRWxlbWVudCwgYXR0ciwgaHRtbCwgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8SGVsbG9Xb3JsZD5gXG4gICAgPGgyPkhlbGxvICR7eCA9PiB4LmdyZWV0aW5nfTwvaDI+XG4gICAgPGRpdiBwYXJ0PVwieWVsbG93XCI+VGhpcyBpcyBzdXBwb3NlZCB0byBiZSB5ZWxsb3c8L2Rpdj5cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XG4gICAgbWluLXdpZHRoOiAzMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAwIGNhbGModmFyKC0tZGVwdGgpICogMXB4KSByZ2JhKDAsMCwwLC41KTtcbiAgfVxuICA6OnBhcnQoeWVsbG93KSB7XG4gICAgY29sb3I6IHllbGxvdztcbiAgfVxuYDtcblxuQGN1c3RvbUVsZW1lbnQoe1xuICAgIG5hbWU6ICdoZWxsby13b3JsZCcsXG4gICAgdGVtcGxhdGUsXG4gICAgc3R5bGVzXG59KVxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBGQVNURWxlbWVudCB7XG4gICAgQGF0dHIgZ3JlZXRpbmc6IHN0cmluZyA9ICdXb3JsZCc7XG4gICAgQGF0dHIoeyBtb2RlOiAnYm9vbGVhbicgfSkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI4Y2JmZTg3MTY2M2VmNzA2ZDBkMlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==