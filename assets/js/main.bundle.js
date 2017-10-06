webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selector-for-some-widget {\n    box-sizing: content-box;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<br>\n<div class=\"container text-center\">    \n  <app-product></app-product>\n  <app-utility></app-utility>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () { };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_product_component__ = __webpack_require__("../../../../../src/app/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility_utility_component__ = __webpack_require__("../../../../../src/app/utility/utility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__product_product_filter_cost_product_filter_cost_component__ = __webpack_require__("../../../../../src/app/product/product-filter-cost/product-filter-cost.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__product_product_filter_color_product_filter_color_component__ = __webpack_require__("../../../../../src/app/product/product-filter-color/product-filter-color.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__product_product_filter_type_product_filter_type_component__ = __webpack_require__("../../../../../src/app/product/product-filter-type/product-filter-type.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__product_product_filter_text_product_filter_text_component__ = __webpack_require__("../../../../../src/app/product/product-filter-text/product-filter-text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__email_email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__utility_utility_socialmedia_utility_socialmedia_component__ = __webpack_require__("../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__utility_utility_weather_utility_weather_component__ = __webpack_require__("../../../../../src/app/utility/utility-weather/utility-weather.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__utility_utility_news_utility_news_component__ = __webpack_require__("../../../../../src/app/utility/utility-news/utility-news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_product_overview_product_overview_component__ = __webpack_require__("../../../../../src/app/product/product-overview/product-overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_5__product_product_component__["a" /* ProductComponent */],
            __WEBPACK_IMPORTED_MODULE_6__utility_utility_component__["a" /* UtilityComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__product_product_detail_product_detail_component__["a" /* ProductDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_9__product_product_filter_cost_product_filter_cost_component__["a" /* ProductFilterCostComponent */],
            __WEBPACK_IMPORTED_MODULE_10__product_product_filter_color_product_filter_color_component__["a" /* ProductFilterColorComponent */],
            __WEBPACK_IMPORTED_MODULE_11__product_product_filter_type_product_filter_type_component__["a" /* ProductFilterTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__product_product_filter_text_product_filter_text_component__["a" /* ProductFilterTextComponent */],
            __WEBPACK_IMPORTED_MODULE_13__email_email_component__["a" /* EmailComponent */],
            __WEBPACK_IMPORTED_MODULE_14__utility_utility_socialmedia_utility_socialmedia_component__["a" /* UtilitySocialmediaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__utility_utility_weather_utility_weather_component__["a" /* UtilityWeatherComponent */],
            __WEBPACK_IMPORTED_MODULE_16__utility_utility_news_utility_news_component__["a" /* UtilityNewsComponent */],
            __WEBPACK_IMPORTED_MODULE_17__product_product_overview_product_overview_component__["a" /* ProductOverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_20_ng2_nouislider__["NouisliderComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["b" /* MatChipsModule */],
            __WEBPACK_IMPORTED_MODULE_22__angular_material__["a" /* MatButtonModule */]
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_19__services_searchproduct_service__["a" /* SearchproductService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 66rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-2\"> \n    <div class=\"card text-center\">\n        <div class=\"card-body\">\n            <form>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                  <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\">\n                </div>\n                </form>\n                \n      </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmailComponent = (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EmailComponent);

//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        \n      </ul>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">Link</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#\">some other Menu</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theMinHeight{\n    min-height: 18rem;\n}\ndiv.center-cropped {\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n}\ndiv.center-cropped img {\n    width: 30%;\n    height: 30%;\n    margin: 0px 0px 0px 0px;\n}\n\na {\n    text-decoration: none;\n    display: inline-block;\n    padding: 8px 16px;\n}\na.disabled {\n    background-color: #979797;\n    color: black;\n}\n\na:hover {\n    background-color: #1AA8E0;\n    color: black;\n}\n\n.previous {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.next {\n    background-color: #4CAF50;\n    color: white;\n}\n\n.round {\n    border-radius: 50%;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container card \">\n    <div class=\"row align-items-center \" *ngIf=\"product==null\">\n      Nothing found to display. your criteria could not felt any results.\n      </div>\n    <div class=\"row align-items-center \" *ngIf=\"product!=null\">\n     <div class=\"col-lr-6\">\n          <div class=\"center-cropped clearfix\">\n            <img [src]=\"product.photoURL\" class=\"pull-left gap-right \" alt=\"...\"/>\n          </div>\n      </div>\n      <div class=\"col-lr-6\">\n          <h4 class=\"card-title\">{{product.headerText}}</h4>\n          <p class=\"card-text\">{{product.bodyText}}</p> \n          <button mat-mini-fab *ngFor=\"let color of product.color\"\n            [color]=\"color\"\n            class=\"text-center\"\n            (click)=\"selected($event)\">{{color}} &nbsp; </button> \n            <br>\n      </div>\n      <br>\n    </div>\n    <div class=\"card-footer \">\n        <div class=\"row\">\n            <div class=\"col-md-1 text-left\">\n              <a style=\"cursor: pointer;\" \n              [ngClass]=\"{'disabled': paginatedInfo==null || !paginatedInfo.hasPrev() }\"\n              (click)=\"prev($event); $event.stopPropagation()\" \n              [attr.disabled]=\"paginatedInfo==null || !paginatedInfo.hasPrev()\" \n              class=\"previous round text-right\">\n                &#8249;\n              </a>\n            </div>\n            <div class=\"col-md-10 text-center\"></div>\n            <div class=\"col-md-1 text-right\">\n              <a style=\"cursor: pointer;\" \n                  [ngClass]=\"{'disabled': paginatedInfo==null || !paginatedInfo.hasNext() }\"\n                  (click)=\"next($event); $event.stopPropagation()\" \n                  [attr.disabled]=\"paginatedInfo==null || !paginatedInfo.hasNext()\" \n                  class=\"next round text-left\">\n                  &#8250;\n              </a>\n            </div>\n        </div>\n      </div>\n  </div>\n\n"

/***/ }),

/***/ "../../../../../src/app/product/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDisplayComponent = (function () {
    function ProductDisplayComponent(searchproductService) {
        this.searchproductService = searchproductService;
        this.product = null;
        this.paginatedInfo = null;
    }
    ProductDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchproductService.paginationAnnouncement$.subscribe(function (paginatedInfo) {
            _this.paginatedInfo = paginatedInfo;
        });
        this.searchproductService.firstAnnouncement$.subscribe(function (product) { return _this.product = product; });
    };
    ProductDisplayComponent.prototype.next = function (event) {
        this.searchproductService.next();
    };
    ProductDisplayComponent.prototype.prev = function (event) {
        this.searchproductService.prev();
    };
    return ProductDisplayComponent;
}());
ProductDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-detail/product-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object])
], ProductDisplayComponent);

var _a;
//# sourceMappingURL=product-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-filter-color/product-filter-color.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 15.5rem;\n    min-height: 15rem;\n}\n\n.mat-button.mat-fab {\n    line-height: 5.6rem;\n    min-width: 0;\n    width: 5.6rem;\n    height: 5.6rem;\n    border-radius: 50%;\n  }\n\n  .example-button-row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-filter-color/product-filter-color.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n      <h4 class=\"card-title\">Colors found</h4>\n      <button mat-mini-fab *ngFor=\"let color of availableColours\"\n       [color]=\"color\"\n       (click)=\"selected($event)\">{{color}}</button>\n    </div> \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/product/product-filter-color/product-filter-color.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterColorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterColorComponent = (function () {
    function ProductFilterColorComponent(searchproductService) {
        this.searchproductService = searchproductService;
        this.availableColours = null;
    }
    ProductFilterColorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchproductService.filteredColoursAnnouncement$.subscribe(function (colours) { return _this.availableColours = colours; });
    };
    ProductFilterColorComponent.prototype.selected = function ($event) {
        this.searchproductService.setColoursSelected($event.target.innerText);
    };
    return ProductFilterColorComponent;
}());
ProductFilterColorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter-color',
        template: __webpack_require__("../../../../../src/app/product/product-filter-color/product-filter-color.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-filter-color/product-filter-color.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object])
], ProductFilterColorComponent);

var _a;
//# sourceMappingURL=product-filter-color.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-filter-cost/product-filter-cost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 15rem;\n    min-height: 15rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-filter-cost/product-filter-cost.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"col-sm-3\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Price someRange</h4>\n          <nouislider #sliderRef   [connect]=\"true\" [min]=\"0\" [max]=\"4500\" [step]=\"50\" \n          [(ngModel)]=\"someRange\" (ngModelChange)=\"onChange($event)\" (mouseup)=\"onChange($event)\"></nouislider>\n          selection : {{sliderRef.slider.get()}}\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/product/product-filter-cost/product-filter-cost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterCostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterCostComponent = (function () {
    function ProductFilterCostComponent(searchproductService) {
        this.searchproductService = searchproductService;
        this.someRange = [0, 4000];
    }
    ProductFilterCostComponent.prototype.ngOnInit = function () {
        //console.log("inside ngOnInit event")
    };
    ProductFilterCostComponent.prototype.onChange = function (event) {
        //console.log("inside onChange event : "+this.sliderRef.slider.get());
        this.searchproductService.setRange(this.sliderRef.slider.get());
    };
    return ProductFilterCostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sliderRef'),
    __metadata("design:type", Object)
], ProductFilterCostComponent.prototype, "sliderRef", void 0);
ProductFilterCostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter-cost',
        template: __webpack_require__("../../../../../src/app/product/product-filter-cost/product-filter-cost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-filter-cost/product-filter-cost.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object])
], ProductFilterCostComponent);

var _a;
//# sourceMappingURL=product-filter-cost.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-filter-text/product-filter-text.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 15rem;\n    min-height: 15rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-filter-text/product-filter-text.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Search with keywords</h4>\n        <input class=\"form-control mr-sm-2\" (blur) = \"searchTextChanged($event.target.value)\" \n        (keyup.enter) = \"searchTextChanged($event.target.value)\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/product/product-filter-text/product-filter-text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterTextComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterTextComponent = (function () {
    function ProductFilterTextComponent(searchproductService) {
        this.searchproductService = searchproductService;
    }
    ProductFilterTextComponent.prototype.ngOnInit = function () {
    };
    ProductFilterTextComponent.prototype.searchTextChanged = function (value) {
        if (typeof value !== 'undefined')
            this.searchproductService.setTextSearched(value);
    };
    return ProductFilterTextComponent;
}());
ProductFilterTextComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter-text',
        template: __webpack_require__("../../../../../src/app/product/product-filter-text/product-filter-text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-filter-text/product-filter-text.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object])
], ProductFilterTextComponent);

var _a;
//# sourceMappingURL=product-filter-text.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-filter-type/product-filter-type.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 15rem;\n    min-height: 15rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-filter-type/product-filter-type.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n          <mat-chip-list class=\"mat-chip-list-stacked\">\n              <mat-chip *ngFor=\"let chips of availableTypes\"\n                  color=\"{{chips}}\"\n                  (click)=\"selectThis($event.target)\">\n                {{chips}}\n              </mat-chip>\n            </mat-chip-list>\n     </div>\n    </div>\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/product/product-filter-type/product-filter-type.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFilterTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductFilterTypeComponent = (function () {
    function ProductFilterTypeComponent(searchproductService) {
        this.searchproductService = searchproductService;
        this.availableTypes = [];
    }
    ProductFilterTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchproductService.filteredAvailableTypesAnnouncement$.subscribe(function (types) {
            //console.log(types);
            //console.log("************-----------");
            types.forEach(function (item) { return _this.availableTypes.push(item); });
            //console.log(this.availableTypes);
        });
    };
    ProductFilterTypeComponent.prototype.selectThis = function (event) {
        //console.log(event)
        if (typeof event.textContent !== 'undefined' && event.textContent !== null)
            this.searchproductService.setTypeSelected(new String(event.textContent).trim());
    };
    return ProductFilterTypeComponent;
}());
ProductFilterTypeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-filter-type',
        template: __webpack_require__("../../../../../src/app/product/product-filter-type/product-filter-type.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-filter-type/product-filter-type.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object])
], ProductFilterTypeComponent);

var _a;
//# sourceMappingURL=product-filter-type.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product-overview/product-overview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-overview{\n    min-height: 18rem;\n    min-width: 40rem;\n}\n.card{\n    min-height: 18rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product-overview/product-overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row product-overview\">\n  <div class=\"col-sm-3\" *ngFor=\"let product of trimmedProducts;\">\n    <div class=\"card theCardClass\">\n      <img class=\"card-img-top\" [src]=\"product.photoURL\" (click)=\"triggerDetailSelection($event)\"\n      class=\"img-rounded\"  width=\"70%\" height=\"70%\" [alt]=\"product.id\" \n          [id]=\"product.id\" style=\"cursor: pointer;\"/>\n      \n      <div class=\"card-block\">\n          <h4 class=\"card-title\">{{product.headerText}}</h4>\n          <p class=\"card-text\">{{product.bodyText.slice(0,30)}}</p> \n        </div>\n      </div>\n    </div>\n  </div>\n\n    "

/***/ }),

/***/ "../../../../../src/app/product/product-overview/product-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__ = __webpack_require__("../../../../../src/app/services/searchproduct.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product__ = __webpack_require__("../../../../../src/app/services/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductOverviewComponent = (function () {
    function ProductOverviewComponent(searchproductService, el) {
        this.searchproductService = searchproductService;
        this.products = null;
        this.trimmedProducts = null;
        this.el = el;
    }
    ProductOverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchproductService.filteredListAnnouncement$.subscribe(function (products) {
            _this.products = products;
        });
        this.searchproductService.paginationAnnouncement$.subscribe(function (paginatedInfo) {
            //console.log(paginatedInfo.getStartPage() +" :: "+paginatedInfo.getEndPage());
            _this.trimmedProducts = _this.products.slice(paginatedInfo.getStartPage(), paginatedInfo.getEndPage() + 1).map(function (p) { return new __WEBPACK_IMPORTED_MODULE_2__services_product__["c" /* Product */](p); });
            console.log("the temp ");
            console.log(_this.trimmedProducts);
        });
        this.searchproductService.getAllProducts();
    };
    ProductOverviewComponent.prototype.triggerDetailSelection = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var id = target.id;
        var theSelectedProduct = this.searchproductService.originalProductsList[id];
        this.searchproductService.selectedOverviewManually(theSelectedProduct);
    };
    return ProductOverviewComponent;
}());
ProductOverviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product-overview',
        template: __webpack_require__("../../../../../src/app/product/product-overview/product-overview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product-overview/product-overview.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_searchproduct_service__["a" /* SearchproductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], ProductOverviewComponent);

var _a, _b;
//# sourceMappingURL=product-overview.component.js.map

/***/ }),

/***/ "../../../../../src/app/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <app-product-filter-color></app-product-filter-color>\n    <app-product-filter-cost></app-product-filter-cost>\n    <app-product-filter-type></app-product-filter-type>\n    <app-product-filter-text></app-product-filter-text>\n</div>\n<br>\n<app-product-detail></app-product-detail>\n<br>\n\n<app-product-overview></app-product-overview>\n\n    "

/***/ }),

/***/ "../../../../../src/app/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-product',
        template: __webpack_require__("../../../../../src/app/product/product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/product/product.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductComponent);

//# sourceMappingURL=product.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'https://cdn.rawgit.com/excelsior43/Uxbert/master/assets/sample/sampleProduct.json'; // URL to web api
        this.weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh,ksa&appid=a809c777d6813b6b0905a9a7bf1a8399'; // URL to web api
    }
    ProductService.prototype.getProduct = function () {
        return this.getJSON(this.productUrl);
    };
    ProductService.prototype.getWeather = function () {
        return this.getJSON(this.weatherUrl);
    };
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.getJSON = function (url) {
        return this.http.get(url)
            .map(function (response) {
            //console.log(url+ " ::: " + response.json());
            //console.log(response)
            return response.json();
        });
    };
    return ProductService;
}());
ProductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterCriteria; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaginationInformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Product; });
var FilterCriteria = (function () {
    function FilterCriteria() {
    }
    FilterCriteria.prototype.hasColor = function (color) {
        if (this.coloursSelected == null || typeof this.coloursSelected === 'undefined')
            return false;
        return this.coloursSelected.trim().toLowerCase() == color.trim().toLowerCase();
    };
    FilterCriteria.prototype.hasType = function (type) {
        if (this.typeSelected == null || typeof this.typeSelected === 'undefined')
            return false;
        return this.typeSelected.trim().toLowerCase() == type.trim().toLowerCase();
    };
    FilterCriteria.prototype.setRange = function (range) {
        this.costRange = range;
    };
    FilterCriteria.prototype.setColoursSelected = function (coloursSelected) {
        if (this.hasColor(coloursSelected)) {
            this.coloursSelected = null;
        }
        else
            this.coloursSelected = coloursSelected;
    };
    FilterCriteria.prototype.setTypeSelected = function (typeSelected) {
        if (typeSelected == this.typeSelected) {
            this.typeSelected = null;
        }
        else
            this.typeSelected = typeSelected;
    };
    FilterCriteria.prototype.setTextSearched = function (textSearched) {
        this.textSearched = textSearched;
    };
    FilterCriteria.prototype.getRange = function () {
        return this.costRange;
    };
    FilterCriteria.prototype.getColoursSelected = function () {
        return this.coloursSelected;
    };
    FilterCriteria.prototype.getTypeSelected = function () {
        return this.typeSelected;
    };
    FilterCriteria.prototype.getTextSearched = function () {
        return this.textSearched;
    };
    return FilterCriteria;
}());

var PaginationInformation = (function () {
    function PaginationInformation(startPage, endPage, totalPages) {
        this.hasNextAttribute = false;
        this.hasPrevAttribute = false;
        this.startPage = -1;
        this.endPage = -1;
        this.totalPages = -1;
        this.startPage = startPage;
        this.endPage = endPage;
        this.totalPages = totalPages;
        this.hasNext();
        this.hasPrev();
    }
    PaginationInformation.prototype.getStartPage = function () { return this.startPage; };
    PaginationInformation.prototype.getEndPage = function () { return this.endPage; };
    PaginationInformation.prototype.getTotalPages = function () { return this.totalPages; };
    PaginationInformation.prototype.hasNext = function () {
        this.hasNextAttribute = (this.endPage != -1 && this.endPage < this.totalPages);
        return this.hasNextAttribute;
    };
    PaginationInformation.prototype.hasPrev = function () {
        this.hasPrevAttribute = (this.startPage != -1 && this.startPage > 0);
        return this.hasPrevAttribute;
    };
    PaginationInformation.prototype.next = function () {
        if (this.hasNext()) {
            this.endPage += 1;
            this.startPage = this.startPage + 1;
            return true;
        }
        return false;
    };
    PaginationInformation.prototype.prev = function () {
        if (this.hasPrev()) {
            this.startPage -= 1;
            this.endPage -= 1;
            return true;
        }
        return false;
    };
    return PaginationInformation;
}());

var Product = (function () {
    /*
 getIndex():number{
     return this.index;
 }
 setIndex(index:number):void{
     this.index=index;
 }
*/
    function Product(theData) {
        //(theData);
        //console.log(typeof theData);
        //theData=JSON.parse(theData);
        var _this = this;
        this.photoURL = null;
        this.color = [];
        this.id = theData.id;
        this.headerText = theData.headerText;
        this.bodyText = theData.bodyText;
        this.cost = theData.cost;
        theData.color.forEach(function (element) {
            _this.color.push(element);
        });
        ;
        this.type = theData.type;
        this.photoURL = theData.photoURL;
    }
    Product.prototype.getId = function () { return this.id; };
    Product.prototype.setId = function (theId) { this.id = theId; };
    Product.prototype.getHeaderText = function () { return this.headerText; };
    Product.prototype.getBodyText = function () { return this.bodyText; };
    Product.prototype.getCost = function () { return this.cost; };
    Product.prototype.getColor = function () { return this.color; };
    Product.prototype.getType = function () { return this.type; };
    Product.prototype.getPhotoURL = function () {
        return this.photoURL;
    };
    Product.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/services/searchproduct.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchproductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product__ = __webpack_require__("../../../../../src/app/services/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchproductService = (function () {
    function SearchproductService(productService) {
        this.productService = productService;
        this.originalProductsList = null;
        this.filterCriteria = null;
        this.paginationInformation = null;
        this._filteredListAnnouncement = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.filteredListAnnouncement$ = this._filteredListAnnouncement.asObservable();
        this._filteredAvailableColoursAnnouncement = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.filteredColoursAnnouncement$ = this._filteredAvailableColoursAnnouncement.asObservable();
        this._filteredAvailableTypesAnnouncement = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.filteredAvailableTypesAnnouncement$ = this._filteredAvailableTypesAnnouncement.asObservable();
        this._paginationAnnouncement = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.paginationAnnouncement$ = this._paginationAnnouncement.asObservable();
        this._firstAnnouncement = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.firstAnnouncement$ = this._firstAnnouncement.asObservable();
        this.colorSet = null;
        this.typeSet = null;
    }
    SearchproductService.prototype.initialize = function () {
        var _this = this;
        this.productService.getProduct().subscribe(function (products) {
            _this.originalProductsList = _this.makeListOfProducts(products);
            _this.filterCriteria = new __WEBPACK_IMPORTED_MODULE_3__services_product__["a" /* FilterCriteria */]();
            _this._filteredListAnnouncement.next(_this.originalProductsList.map(function (x) { return Object.assign({}, x); }));
            _this.initAdditionalValues();
        });
    };
    SearchproductService.prototype.getAllProducts = function () {
        if (this.originalProductsList == null) {
            this.initialize();
        }
    };
    SearchproductService.prototype.setRange = function (range) {
        this.filterCriteria.setRange(range);
        this.applyFilter();
    };
    SearchproductService.prototype.setColoursSelected = function (coloursSelected) {
        this.filterCriteria.setColoursSelected(coloursSelected);
        this.applyFilter();
    };
    SearchproductService.prototype.setTypeSelected = function (typeSelected) {
        this.filterCriteria.setTypeSelected(typeSelected);
        this.applyFilter();
    };
    SearchproductService.prototype.setTextSearched = function (textSearched) {
        this.filterCriteria.setTextSearched(textSearched);
        this.applyFilter();
    };
    SearchproductService.prototype.applyFilter = function () {
        var $this = this;
        var theNewList = ($this.originalProductsList.filter(function (product) {
            return $this.checkBetween(product.getCost(), $this.filterCriteria.getRange()) &&
                $this.searchText(product.getHeaderText(), $this.filterCriteria.getTextSearched()) &&
                $this.searchColours(product.getColor(), $this.filterCriteria.getColoursSelected()) &&
                $this.searchType(product.getType(), $this.filterCriteria.getTypeSelected());
        })
            .map(function (product, index) {
            product.setId(index);
            return product;
        }));
        $this._filteredListAnnouncement.next(theNewList);
        this.preparePagination(theNewList);
        var theFirstProduct = theNewList != null && theNewList.length > 0 ? theNewList[0] : null;
        this.captureAndAnnounceForDetail(theNewList);
    };
    SearchproductService.prototype.captureAndAnnounceForDetail = function (list) {
        var product = list != null && list.length > 0 ? list[0] : null;
        this._firstAnnouncement.next(product);
    };
    /**
     *
     * here is the main business logic of the multi property filtering
     * @param header
     * @param searchString
     */
    SearchproductService.prototype.searchType = function (header, searchString) {
        return (typeof searchString === 'undefined') || searchString == null || (header.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);
    };
    SearchproductService.prototype.searchColours = function (color, selectedColours) {
        if (typeof selectedColours === 'undefined' || selectedColours == null)
            return true;
        var fcColours = new Set(selectedColours);
        var prdColours = new Set(color);
        var retVal = false;
        prdColours.forEach(function (elem) {
            retVal = retVal || fcColours.has(elem);
        });
        return retVal;
    };
    SearchproductService.prototype.searchText = function (text, searchString) {
        return (typeof searchString === 'undefined') || searchString === null || text.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;
    };
    SearchproductService.prototype.checkBetween = function (cost, range) {
        return (typeof range === 'undefined') || range == null || (cost > range[0] && cost < range[1]);
    };
    SearchproductService.prototype.initAdditionalValues = function () {
        this.colorSet = new Set();
        this.typeSet = new Set();
        var $this = this;
        this.originalProductsList.forEach(function (product) {
            product.getColor().forEach(function (color) { return $this.colorSet.add(color); });
            $this.typeSet.add(product.getType());
        });
        this._filteredAvailableColoursAnnouncement.next(Array.from(this.colorSet));
        this._filteredAvailableTypesAnnouncement.next(Array.from(this.typeSet));
        this.preparePagination(this.originalProductsList);
        this.captureAndAnnounceForDetail(this.originalProductsList);
    };
    SearchproductService.prototype.preparePagination = function (theList) {
        var total = theList.length;
        this.paginationInformation = new __WEBPACK_IMPORTED_MODULE_3__services_product__["b" /* PaginationInformation */](0, total > 3 ? 3 : total, total);
        this.announce(this.paginationInformation);
        this._firstAnnouncement.next(theList[this.paginationInformation.getStartPage()]);
    };
    SearchproductService.prototype.makeListOfProducts = function (prodJSON) {
        var retList = [];
        prodJSON.forEach(function (prodJsonUnit, index) {
            var p = new __WEBPACK_IMPORTED_MODULE_3__services_product__["c" /* Product */](prodJsonUnit);
            p.setId(index);
            retList.push(p);
        });
        return retList;
    };
    SearchproductService.prototype.announce = function (pinfo) {
        this._paginationAnnouncement.next(pinfo);
    };
    SearchproductService.prototype.next = function () {
        if (this.paginationInformation.next())
            this.paginationAndDetailAnnouncement();
    };
    SearchproductService.prototype.prev = function () {
        if (this.paginationInformation.prev())
            this.paginationAndDetailAnnouncement();
    };
    SearchproductService.prototype.paginationAndDetailAnnouncement = function () {
        this.announce(this.paginationInformation);
        this._firstAnnouncement.next(this.originalProductsList[this.paginationInformation.getStartPage()]);
    };
    SearchproductService.prototype.selectedOverviewManually = function (product) {
        this._firstAnnouncement.next(product);
    };
    return SearchproductService;
}());
SearchproductService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], SearchproductService);

var _a;
//# sourceMappingURL=searchproduct.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/weather.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Weather; });
var Weather = (function () {
    function Weather() {
        this.wind = null;
    }
    Weather.make = function (weatherJson) {
        (weatherJson);
        console.log("here is the weather...");
        var tempWeather = new Weather();
        tempWeather.main = weatherJson.main;
        tempWeather.wind = weatherJson.wind;
        tempWeather.icon = weatherJson.icon;
        tempWeather.cityName = weatherJson.name;
        tempWeather.description = weatherJson.weather[0].description;
        return tempWeather;
    };
    return Weather;
}());

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ "../../../../../src/app/utility/utility-news/utility-news.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 20.75rem;\n    min-height: 18rem;\n    \n}\n.row{\n    min-width: 50rem;\n}\n\n/* Style the tab */\ndiv.tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n}\n\n/* Style the buttons inside the tab */\ndiv.tab button {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 14px 16px;\n    transition: 0.3s;\n}\n\n/* Change background color of buttons on hover */\ndiv.tab button:hover {\n    background-color: #ddd;\n}\n\n/* Create an active/current tablink class */\ndiv.tab button.active {\n    background-color: #ccc;\n}\n\n/* Style the tab content */\n.tabcontent {\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n    min-height: 12rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/utility-news/utility-news.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"\" >\n        <div class=\"card-body\">\n           <div class=\"tab\">\n                <button class=\"tablinks\" (click)=\"trigger(0)\">Programmer</button>\n                <button class=\"tablinks\" (click)=\"trigger(1)\">Developer</button>\n           </div>\n            <div class=\"tabcontent\"  *ngIf=\"body!=null\">\n                <h3>{{heading}} </h3>\n                <p>{{body}}</p>\n              </div>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/utility/utility-news/utility-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityNewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityNewsComponent = (function () {
    function UtilityNewsComponent() {
        this.body = null;
        this.heading = null;
        this.someData = [
            { "tabName": "Programmer", "heading": "Who is a Programmer", "body": "Smart Crazy Chap" },
            { "tabName": "Developer", "heading": "coder", "body": "Very Low IQ" },
            { "tabName": "Myself", "heading": "Who am I", "body": "Thinker, Dreamer, Optimistic Coader" },
        ];
    }
    UtilityNewsComponent.prototype.ngOnInit = function () {
        this.trigger(0);
    };
    UtilityNewsComponent.prototype.trigger = function (index) {
        this.body = this.someData[index].body;
        this.heading = this.someData[index].heading;
    };
    return UtilityNewsComponent;
}());
UtilityNewsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utility-news',
        template: __webpack_require__("../../../../../src/app/utility/utility-news/utility-news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/utility-news/utility-news.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UtilityNewsComponent);

//# sourceMappingURL=utility-news.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 20.75rem;\n    min-height: 18rem;\n}\n\n\n* Style all font awesome icons */\n.fa {\n    padding: 20px;\n    font-size: 30px;\n    width: 50px;\n    text-align: center;\n    text-decoration: none;\n}\n\n/* Add a hover effect if you want */\n.fa:hover {\n    opacity: 0.7;\n}\n\n/* Facebook */\n.fa-facebook {\n    background: #3B5998;\n    color: white;\n}\n\n/* Twitter */\n.fa-twitter {\n    background: #55ACEE;\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <div class=\"card\" >\n        <img class=\"card-img-top\" src=\"\">\n        <div class=\"card-body\">\n          <h4 class=\"card-title\">Social Media</h4>\n          <a href=\"#\" class=\"fa fa-facebook icon\"></a> \n          <a href=\"#\" class=\"fa fa-twitter\"></a>\n          <p class=\"card-text\">\n            Information describes the Social Media Access of out website. \n          </p>\n        \n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitySocialmediaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilitySocialmediaComponent = (function () {
    function UtilitySocialmediaComponent() {
    }
    UtilitySocialmediaComponent.prototype.ngOnInit = function () {
    };
    return UtilitySocialmediaComponent;
}());
UtilitySocialmediaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utility-socialmedia',
        template: __webpack_require__("../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/utility-socialmedia/utility-socialmedia.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UtilitySocialmediaComponent);

//# sourceMappingURL=utility-socialmedia.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/utility-weather/utility-weather.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n    width: 20.75rem;\n    min-height: 18rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/utility-weather/utility-weather.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-3\">\n    <div class=\"card\" >\n        <div class=\"card-body\" *ngIf=\"weather!=null\">\n          <h4 class=\"card-title\">Weather of {{weather.cityName}}</h4>\n          <p class=\"card-text\">\n              Description : <span class=\"label label-info\">{{weather.description}}</span> <br>\n              Temparature : <span class=\"label label-info\">{{weather.main.temp}}</span> <br>\n              Pressure : <span class=\"label label-info\">{{weather.main.pressure}}</span> <br>\n              Humidity : <span class=\"label label-info\">{{weather.main.humidity}}</span> <br>\n              Min Temparature : <span class=\"label label-info\">{{weather.main.temp_min}}</span> <br>\n              Max Temparature : <span class=\"label label-info\">{{weather.main.temp_max}}</span> <br>\n              Wind Speed : <span class=\"label label-info\">{{weather.wind.speed}}</span> <br>\n              Wind Direction : <span class=\"label label-info\">{{weather.wind.deg}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    "

/***/ }),

/***/ "../../../../../src/app/utility/utility-weather/utility-weather.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityWeatherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather__ = __webpack_require__("../../../../../src/app/services/weather.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilityWeatherComponent = (function () {
    function UtilityWeatherComponent(productService) {
        this.productService = productService;
        this.weather = null;
    }
    UtilityWeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.productService.getWeather().subscribe(function (weather) {
                console.log("UREKA");
                console.log(weather);
                _this.weather = __WEBPACK_IMPORTED_MODULE_1__services_weather__["a" /* Weather */].make(weather);
            });
        }, 5000);
    };
    return UtilityWeatherComponent;
}());
UtilityWeatherComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utility-weather',
        template: __webpack_require__("../../../../../src/app/utility/utility-weather/utility-weather.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/utility-weather/utility-weather.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _a || Object])
], UtilityWeatherComponent);

var _a;
//# sourceMappingURL=utility-weather.component.js.map

/***/ }),

/***/ "../../../../../src/app/utility/utility.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".utilitys{\n    min-height: 18rem;\n    min-width: 40rem;\n}\n.card{\n    min-height: 18rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/utility/utility.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"row utilitys\">\n        <app-utility-socialmedia></app-utility-socialmedia>\n        <app-utility-weather></app-utility-weather>\n        <app-utility-news></app-utility-news>\n</div>\n<br>\n<div class=\"row\">\n        <app-email></app-email>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/utility/utility.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilityComponent = (function () {
    function UtilityComponent() {
    }
    UtilityComponent.prototype.ngOnInit = function () {
    };
    return UtilityComponent;
}());
UtilityComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-utility',
        template: __webpack_require__("../../../../../src/app/utility/utility.component.html"),
        styles: [__webpack_require__("../../../../../src/app/utility/utility.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UtilityComponent);

//# sourceMappingURL=utility.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
