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
    contain: content;
    color: blue;
    min-width: 325px;
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
/******/ 	__webpack_require__.h = () => ("b3d2ca901e775978b8a4")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmExNTY3MWIzM2I4OGYxZTNkZjE0LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFROztDQUU5QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7OztDQVNqQixDQUFDO0FBT0YsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVyxTQUFRLGdFQUFXO0lBQTNDOztRQUNVLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFDTixhQUFRLEdBQVksS0FBSyxDQUFDO0lBQ3pELENBQUM7Q0FBQTtBQUZTO0lBQUwseURBQUk7NENBQTRCO0FBQ047SUFBMUIsNkRBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQzs0Q0FBMkI7QUFGNUMsVUFBVTtJQUx0QixzRUFBYSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsUUFBUTtRQUNSLE1BQU07S0FDVCxDQUFDO0dBQ1csVUFBVSxDQUd0QjtBQUhzQjs7Ozs7Ozs7O1VDdkJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxsby13b3JsZC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZBU1RFbGVtZW50LCBjdXN0b21FbGVtZW50LCBhdHRyLCBodG1sLCBjc3MgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxIZWxsb1dvcmxkPmBcbiAgICA8aDI+SGVsbG8gJHt4ID0+IHguZ3JlZXRpbmd9PC9oMj5cbiAgICA8ZGl2IHBhcnQ9XCJibGFja1wiPlRoaXMgaXMgc3VwcG9zZWQgdG8gYmUgYmxhY2s8L2Rpdj5cbmA7XG5cbmNvbnN0IHN0eWxlcyA9IGNzc2BcbiAgOmhvc3Qge1xuICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgbWluLXdpZHRoOiAzMjVweDtcbiAgfVxuICA6OnBhcnQoYmxhY2spIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbmA7XG5cbkBjdXN0b21FbGVtZW50KHtcbiAgICBuYW1lOiAnaGVsbG8td29ybGQnLFxuICAgIHRlbXBsYXRlLFxuICAgIHN0eWxlc1xufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIEBhdHRyIGdyZWV0aW5nOiBzdHJpbmcgPSAnV29ybGQnO1xuICAgIEBhdHRyKHsgbW9kZTogJ2Jvb2xlYW4nIH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjNkMmNhOTAxZTc3NTk3OGI4YTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=