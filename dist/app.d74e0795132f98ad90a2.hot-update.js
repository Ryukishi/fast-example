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
    <h2>${x => x.greeting}</h2>
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
/******/ 	__webpack_require__.h = () => ("79a8553882f0850b40e7")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmQ3NGUwNzk1MTMyZjk4YWQ5MGEyLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO1VBQ3ZCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVE7Q0FDeEIsQ0FBQztBQUVGLE1BQU0sTUFBTSxHQUFHLHdEQUFHOzs7Ozs7Ozs7OztDQVdqQixDQUFDO0FBT0YsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVyxTQUFRLGdFQUFXO0lBQTNDOztRQUNVLGFBQVEsR0FBVyxhQUFhLENBQUM7SUFDM0MsQ0FBQztDQUFBO0FBRFM7SUFBTCx5REFBSTs0Q0FBa0M7QUFEOUIsVUFBVTtJQUx0QixzRUFBYSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsUUFBUTtRQUNSLE1BQU07S0FDVCxDQUFDO0dBQ1csVUFBVSxDQUV0QjtBQUZzQjs7Ozs7Ozs7O1VDeEJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxsby13b3JsZC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZBU1RFbGVtZW50LCBjdXN0b21FbGVtZW50LCBhdHRyLCBodG1sLCBjc3MgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxIZWxsb1dvcmxkPmBcbiAgICA8aDI+JHt4ID0+IHguZ3JlZXRpbmd9PC9oMj5cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG4gIH1cbmA7XG5cbkBjdXN0b21FbGVtZW50KHtcbiAgICBuYW1lOiAnaGVsbG8td29ybGQnLFxuICAgIHRlbXBsYXRlLFxuICAgIHN0eWxlc1xufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIEBhdHRyIGdyZWV0aW5nOiBzdHJpbmcgPSAnSGVsbG8gV29ybGQnO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc5YTg1NTM4ODJmMDg1MGI0MGU3XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9