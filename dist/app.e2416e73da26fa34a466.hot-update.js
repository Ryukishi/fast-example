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
    color: white;
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
/******/ 	__webpack_require__.h = () => ("0a8acc813d36b314cfff")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmUyNDE2ZTczZGEyNmZhMzRhNDY2LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFROztDQUU5QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhakIsQ0FBQztBQU9GLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxnRUFBVztJQUEzQzs7UUFDVSxhQUFRLEdBQVcsT0FBTyxDQUFDO1FBQ04sYUFBUSxHQUFZLEtBQUssQ0FBQztJQUN6RCxDQUFDO0NBQUE7QUFGUztJQUFMLHlEQUFJOzRDQUE0QjtBQUNOO0lBQTFCLDZEQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7NENBQTJCO0FBRjVDLFVBQVU7SUFMdEIsc0VBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQztHQUNXLFVBQVUsQ0FHdEI7QUFIc0I7Ozs7Ozs7OztVQzNCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQVNURWxlbWVudCwgY3VzdG9tRWxlbWVudCwgYXR0ciwgaHRtbCwgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8SGVsbG9Xb3JsZD5gXG4gICAgPGgyPkhlbGxvICR7eCA9PiB4LmdyZWV0aW5nfTwvaDI+XG4gICAgPGRpdiBwYXJ0PVwieWVsbG93XCI+VGhpcyBpcyBzdXBwb3NlZCB0byBiZSB5ZWxsb3c8L2Rpdj5cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG4gIH1cbiAgOjpwYXJ0KHllbGxvdykge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbmA7XG5cbkBjdXN0b21FbGVtZW50KHtcbiAgICBuYW1lOiAnaGVsbG8td29ybGQnLFxuICAgIHRlbXBsYXRlLFxuICAgIHN0eWxlc1xufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIEBhdHRyIGdyZWV0aW5nOiBzdHJpbmcgPSAnV29ybGQnO1xuICAgIEBhdHRyKHsgbW9kZTogJ2Jvb2xlYW4nIH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGE4YWNjODEzZDM2YjMxNGNmZmZcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=