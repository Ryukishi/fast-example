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
  <div class="header">
    <h3>${x => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>

  <div class="body">Computer</div>

  <div class="footer"></div>
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
        this.greeting = 'Hello World';
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
/******/ 	__webpack_require__.h = () => ("03ed6a8125d1cdca96d7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjA4MzgyYjQ1OGUxNGE0NDU2MDU1LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZOztVQUV2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFOzs7Ozs7O0NBT3RDLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7Ozs7Ozs7Ozs7Q0FXakIsQ0FBQztBQU9GLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxnRUFBVztJQUEzQzs7UUFDVSxhQUFRLEdBQVcsYUFBYSxDQUFDO0lBQzNDLENBQUM7Q0FBQTtBQURTO0lBQUwseURBQUk7NENBQWtDO0FBRDlCLFVBQVU7SUFMdEIsc0VBQWEsQ0FBQztRQUNYLElBQUksRUFBRSxhQUFhO1FBQ25CLFFBQVE7UUFDUixNQUFNO0tBQ1QsQ0FBQztHQUNXLFVBQVUsQ0FFdEI7QUFGc0I7Ozs7Ozs7OztVQy9CdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaGVsbG8td29ybGQudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQVNURWxlbWVudCwgY3VzdG9tRWxlbWVudCwgYXR0ciwgaHRtbCwgY3NzIH0gZnJvbSAnQG1pY3Jvc29mdC9mYXN0LWVsZW1lbnQnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWw8SGVsbG9Xb3JsZD5gXG4gIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICA8aDM+JHt4ID0+IHguZ3JlZXRpbmcudG9VcHBlckNhc2UoKX08L2gzPlxuICAgIDxoND5teSBuYW1lIGlzPC9oND5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImJvZHlcIj5Db21wdXRlcjwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb290ZXJcIj48L2Rpdj5cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG4gIH1cbmA7XG5cbkBjdXN0b21FbGVtZW50KHtcbiAgICBuYW1lOiAnaGVsbG8td29ybGQnLFxuICAgIHRlbXBsYXRlLFxuICAgIHN0eWxlc1xufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIEBhdHRyIGdyZWV0aW5nOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQnO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjAzZWQ2YTgxMjVkMWNkY2E5NmQ3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9