(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-calculatermm></app-calculatermm>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculatermm/calculatermm.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculatermm/calculatermm.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row\">\n    <img src=\"../../assets/pictures/Header.png\" alt=\"Header\" style=\"max-height: 80px;\">\n\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <form [formGroup]=\"form1\" (submit)=\"submit()\">\n        <h2>Freddie Mac - Calculate RMM & UPB</h2>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"form-group col-6\">\n              <label><b>Group Pool Percent</b></label>\n              <input class=\"form-control\" formControlName=\"groupPoolPercent\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>FM Participation Percent</b></label>\n              <input class=\"form-control\" formControlName=\"fmPartPercent\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>UPB Investor Prior Amount</b></label>\n              <input class=\"form-control\" formControlName=\"uPBInvestorPriorAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Mortgage UPB Prior Amount</b></label>\n              <input class=\"form-control\" formControlName=\"mortgageUPBPriorAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>UPB Current Amount</b></label>\n              <input class=\"form-control\" formControlName=\"mortgageUPBAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>P&I Payment Amount</b></label>\n              <input class=\"form-control\" formControlName=\"monthlyPIPaymtAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Note Rate</b></label>\n              <input class=\"form-control\" formControlName=\"couponRate\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Pool Term</b></label>\n              <input class=\"form-control\" formControlName=\"poolTerm\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Security Product Code</b></label>\n              <input class=\"form-control\" formControlName=\"securityProdCode\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Maturity Date</b></label>\n              <input class=\"form-control\" formControlName=\"maturityDate\" type=\"date\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Note Maturity Date</b></label>\n              <input class=\"form-control\" formControlName=\"noteMaturityDate\" type=\"date\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Principal Amortization Code</b></label>\n              <select class=\"custom-select\" formControlName=\"principalAmmortizationCode\">\n                <option value=\"\">Choose from the following</option>\n                <option *ngFor=\"let val of Values | keyvalue\" [ngValue]=\"val.key\">{{val.key}}</option>\n              </select>\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Active Inactive Edit Code</b></label>\n              <select class=\"custom-select\" formControlName=\"activeInactiveEditCode\">\n                <option value=\"\">Choose from the following</option>\n                <option *ngFor=\"let flag of Flags | keyvalue\" [ngValue]=\"flag.key\">{{flag.key}}</option>\n              </select>\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Negative Amortization Amount</b></label>\n              <input class=\"form-control\" formControlName=\"negativeAmortizationAdjAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>DDLPI</b></label>\n              <input class=\"form-control\" formControlName=\"interestPaidToDate\" type=\"date\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>UPB Adjustment Amount Current</b></label>\n              <input class=\"form-control\" formControlName=\"actualUpbAdjustmentAmt\" type=\"text\">\n            </div>\n            <div class=\"form-group col-6\">\n              <label><b>Loan Status</b></label>\n              <select class=\"custom-select\" formControlName=\"loanStatusCode\">\n                <option value=\"\">Choose from the following</option>\n                <option *ngFor=\"let stat of Status | keyvalue\" [ngValue]=\"stat.key\">{{stat.key}}</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"card\" *ngIf=\"loanData\">\n            <form [formGroup]=\"form2\">\n              <table class=\"table table-hover\">\n\n                <tr>\n                  <td><b> RMM : {{ loanData. rmm }} </b></td>\n                  <td> <b> UPB: {{ loanData. upb }} </b></td>\n                </tr>\n\n\n\n              </table>\n            </form>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"col-12\">\n              <button class=\"btn btn-success m-1\" (click)=\"submit()\" type=\"button\" name=\"submit\"> Calculate </button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <img src=\"../../assets/pictures/Footer.png\" alt=\"Footer\" style=\"max-height: 100px; max-width: 1100px;\">\n    <br>\n  </div>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sap-rmm-app';
    }
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _calculatermm_calculatermm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calculatermm/calculatermm.component */ "./src/app/calculatermm/calculatermm.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _calculatermm_calculatermm_component__WEBPACK_IMPORTED_MODULE_5__["CalculatermmComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculatermm/calculatermm.component.css":
/*!*********************************************************!*\
  !*** ./src/app/calculatermm/calculatermm.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input[type=date],input[type=datetime-local], input[type=month]{\n    -webkit-appearance: listbox;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    width: 100%;\n}\n\nselect{\n    -webkit-appearance: listbox;\n    padding: 7px 5px;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    width: 100%;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsY3VsYXRlcm1tL2NhbGN1bGF0ZXJtbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLFdBQVc7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9jYWxjdWxhdGVybW0vY2FsY3VsYXRlcm1tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPWRhdGVdLGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdLCBpbnB1dFt0eXBlPW1vbnRoXXtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGxpc3Rib3g7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIG1hcmdpbjogOHB4IDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuc2VsZWN0e1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbGlzdGJveDtcbiAgICBwYWRkaW5nOiA3cHggNXB4O1xuICAgIHBhZGRpbmc6IDEycHggMjBweDtcbiAgICBtYXJnaW46IDhweCAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG5cbn0iXX0= */");

/***/ }),

/***/ "./src/app/calculatermm/calculatermm.component.ts":
/*!********************************************************!*\
  !*** ./src/app/calculatermm/calculatermm.component.ts ***!
  \********************************************************/
/*! exports provided: CalculatermmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatermmComponent", function() { return CalculatermmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var src_app_rmmubpcal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rmmubpcal.service */ "./src/app/rmmubpcal.service.ts");




var CalculatermmComponent = /** @class */ (function () {
    function CalculatermmComponent(fb, fb1, _rmmubpcal) {
        this.fb = fb;
        this.fb1 = fb1;
        this._rmmubpcal = _rmmubpcal;
        this.Values = new Map([
            ['1-OLD-75DAY-GURANTOR', 1],
            ['2-ACTUAL-PRIN-BALANCE', 2],
            ['3-OLD-75DAY-CASH', 3],
        ]);
        this.Flags = new Map([
            ['Y-Active', 'Y'],
            ['N-Inactive', 'N']
        ]);
        this.Status = new Map([
            ['1-Active', 1],
            ['2-Delinquent', 2],
            ['3-Foreclosure', 3],
        ]);
        this.loanData = "";
    }
    CalculatermmComponent.prototype.ngOnInit = function () {
        this.form1 = this.fb.group({
            groupPoolPercent: [""],
            fmPartPercent: ["1"],
            uPBInvestorPriorAmt: [""],
            mortgageUPBPriorAmt: [""],
            mortgageUPBAmt: [""],
            monthlyPIPaymtAmt: [""],
            couponRate: [""],
            poolTerm: [""],
            securityProdCode: [""],
            maturityDate: [""],
            noteMaturityDate: [""],
            principalAmmortizationCode: [""],
            activeInactiveEditCode: [""],
            negativeAmortizationAdjAmt: [""],
            interestPaidToDate: [""],
            actualUpbAdjustmentAmt: [""],
            loanStatusCode: [""]
        });
        this.form2 = this.fb1.group({
            rmm: [""],
            upb: [""]
        });
    };
    CalculatermmComponent.prototype.submit = function () {
        var _this = this;
        console.log(this.form1.value);
        this._rmmubpcal.postMethod(this.form1.value).subscribe(function (data) {
            _this.loanData = data;
            console.log(_this.loanData);
        });
    };
    CalculatermmComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_rmmubpcal_service__WEBPACK_IMPORTED_MODULE_3__["RmmubpcalService"] }
    ]; };
    CalculatermmComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculatermm',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calculatermm.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculatermm/calculatermm.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calculatermm.component.css */ "./src/app/calculatermm/calculatermm.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_rmmubpcal_service__WEBPACK_IMPORTED_MODULE_3__["RmmubpcalService"]])
    ], CalculatermmComponent);
    return CalculatermmComponent;
}());



/***/ }),

/***/ "./src/app/rmmubpcal.service.ts":
/*!**************************************!*\
  !*** ./src/app/rmmubpcal.service.ts ***!
  \**************************************/
/*! exports provided: RmmubpcalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RmmubpcalService", function() { return RmmubpcalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var URL = "http://localhost:8081/sap/rmmValue";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-control': 'no-cache',
        'Expires': '0',
        'Pragma': 'no-cache'
    })
};
var RmmubpcalService = /** @class */ (function () {
    function RmmubpcalService(http) {
        this.http = http;
        this.loanData = "";
    }
    RmmubpcalService.prototype.postMethod = function (formObj) {
        return this.http.post(URL, formObj, httpOptions);
    };
    RmmubpcalService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"])
    ], RmmubpcalService.prototype, "form1", void 0);
    RmmubpcalService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RmmubpcalService);
    return RmmubpcalService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/subik/Desktop/FMJava/sap-rmm-angular/src/main/resources/sap-rmm-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map