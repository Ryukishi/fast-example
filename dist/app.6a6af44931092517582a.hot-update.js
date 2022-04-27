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
    background: var(--fill-color);
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
/******/ 	__webpack_require__.h = () => ("61c052f2e3c283867330")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjZhNmFmNDQ5MzEwOTI1MTc1ODJhLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRjtBQUV0RixNQUFNLFFBQVEsR0FBRyx5REFBSSxDQUFZO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFROztDQUU5QixDQUFDO0FBRUYsTUFBTSxNQUFNLEdBQUcsd0RBQUc7Ozs7Ozs7Ozs7Ozs7O0NBY2pCLENBQUM7QUFPRixJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFXLFNBQVEsZ0VBQVc7SUFBM0M7O1FBQ1UsYUFBUSxHQUFXLE9BQU8sQ0FBQztRQUNOLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFDekQsQ0FBQztDQUFBO0FBRlM7SUFBTCx5REFBSTs0Q0FBNEI7QUFDTjtJQUExQiw2REFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDOzRDQUEyQjtBQUY1QyxVQUFVO0lBTHRCLHNFQUFhLENBQUM7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixRQUFRO1FBQ1IsTUFBTTtLQUNULENBQUM7R0FDVyxVQUFVLENBR3RCO0FBSHNCOzs7Ozs7Ozs7VUM1QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2hlbGxvLXdvcmxkLnRzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkFTVEVsZW1lbnQsIGN1c3RvbUVsZW1lbnQsIGF0dHIsIGh0bWwsIGNzcyB9IGZyb20gJ0BtaWNyb3NvZnQvZmFzdC1lbGVtZW50JztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sPEhlbGxvV29ybGQ+YFxuICAgIDxoMj5IZWxsbyAke3ggPT4geC5ncmVldGluZ308L2gyPlxuICAgIDxkaXYgcGFydD1cInllbGxvd1wiPlRoaXMgaXMgc3VwcG9zZWQgdG8gYmUgeWVsbG93PC9kaXY+XG5gO1xuXG5jb25zdCBzdHlsZXMgPSBjc3NgXG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb250YWluOiBjb250ZW50O1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWZpbGwtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xuICAgIG1pbi13aWR0aDogMzI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDAgMCBjYWxjKHZhcigtLWRlcHRoKSAqIDFweCkgcmdiYSgwLDAsMCwuNSk7XG4gIH1cbiAgOjpwYXJ0KHllbGxvdykge1xuICAgIGNvbG9yOiB5ZWxsb3c7XG4gIH1cbmA7XG5cbkBjdXN0b21FbGVtZW50KHtcbiAgICBuYW1lOiAnaGVsbG8td29ybGQnLFxuICAgIHRlbXBsYXRlLFxuICAgIHN0eWxlc1xufSlcbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgRkFTVEVsZW1lbnQge1xuICAgIEBhdHRyIGdyZWV0aW5nOiBzdHJpbmcgPSAnV29ybGQnO1xuICAgIEBhdHRyKHsgbW9kZTogJ2Jvb2xlYW4nIH0pIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNjFjMDUyZjJlM2MyODM4NjczMzBcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=