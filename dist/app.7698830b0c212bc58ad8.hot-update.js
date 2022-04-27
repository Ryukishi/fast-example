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
  display: inline-block;
  contain: content;
  color: white;
  background: var(--fill-color);
  border-radius: var(--border-radius);
  min-width: 325px;
  text-align: center;
  box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0,0,0,.5);
}`;
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
/******/ 	__webpack_require__.h = () => ("5137c788eac4dda5f437")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjc2OTg4MzBiMGMyMTJiYzU4YWQ4LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZOztVQUV2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFOzs7Ozs7O0NBT3RDLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRyx3REFBRzs7Ozs7Ozs7OztFQVVoQixDQUFDO0FBT0gsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVyxTQUFRLGdFQUFXO0lBQTNDOztRQUNVLGFBQVEsR0FBVyxhQUFhLENBQUM7SUFDM0MsQ0FBQztDQUFBO0FBRFM7SUFBTCx5REFBSTs0Q0FBa0M7QUFEOUIsVUFBVTtJQUx0QixzRUFBYSxDQUFDO1FBQ1gsSUFBSSxFQUFFLGFBQWE7UUFDbkIsUUFBUTtRQUNSLE1BQU07S0FDVCxDQUFDO0dBQ1csVUFBVSxDQUV0QjtBQUZzQjs7Ozs7Ozs7O1VDOUJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9oZWxsby13b3JsZC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZBU1RFbGVtZW50LCBjdXN0b21FbGVtZW50LCBhdHRyLCBodG1sLCBjc3MgfSBmcm9tICdAbWljcm9zb2Z0L2Zhc3QtZWxlbWVudCc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbDxIZWxsb1dvcmxkPmBcbiAgPGRpdiBjbGFzcz1cImhlYWRlclwiPlxuICAgIDxoMz4ke3ggPT4geC5ncmVldGluZy50b1VwcGVyQ2FzZSgpfTwvaDM+XG4gICAgPGg0Pm15IG5hbWUgaXM8L2g0PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiYm9keVwiPkNvbXB1dGVyPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvb3RlclwiPjwvZGl2PlxuYDtcblxuY29uc3Qgc3R5bGVzID0gY3NzYFxuOmhvc3Qge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRhaW46IGNvbnRlbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZmlsbC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICBtaW4td2lkdGg6IDMyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG59YDtcblxuQGN1c3RvbUVsZW1lbnQoe1xuICAgIG5hbWU6ICdoZWxsby13b3JsZCcsXG4gICAgdGVtcGxhdGUsXG4gICAgc3R5bGVzXG59KVxuZXhwb3J0IGNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBGQVNURWxlbWVudCB7XG4gICAgQGF0dHIgZ3JlZXRpbmc6IHN0cmluZyA9ICdIZWxsbyBXb3JsZCc7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTEzN2M3ODhlYWM0ZGRhNWY0MzdcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=