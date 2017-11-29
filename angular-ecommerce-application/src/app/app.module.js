"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var http_1 = require("@angular/http");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
// Importing Custom Modules
var category_module_1 = require("./category/category.module");
var product_module_1 = require("./product/product.module");
var cart_module_1 = require("./cart/cart.module");
// Importing Components
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var footer_component_1 = require("./footer/footer.component");
var welcome_component_1 = require("./welcome/welcome.component");
var checkout_view_component_1 = require("./checkout/checkout-view.component");
// Importing Routing
var app_routes_1 = require("./app.routes");
// Importing In-Memory Database
var in_memory_data_service_1 = require("./database/in-memory-data-service");
var angularfire2_1 = require("angularfire2");
// Initialize Firebase
exports.firebaseConfig = {
    apiKey: 'AIzaSyAc83LuVBKWtcwhq2Qa4TTVQJnfkN9zpms',
    authDomain: 'angular-ecommerce-application.firebaseapp.com',
    databaseURL: 'https://angular-ecommerce-application.firebaseio.com',
    projectId: 'angular-ecommerce-application',
    storageBucket: 'angular-ecommerce-application.appspot.com',
    messagingSenderId: '47684682419'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
            app_routes_1.routing, category_module_1.CategoryModule, product_module_1.ProductModule, cart_module_1.CartModule, angularfire2_1.AngularFireModule.initializeApp(exports.firebaseConfig)
        ],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavbarComponent, footer_component_1.FooterComponent, welcome_component_1.WelcomeComponent, checkout_view_component_1.CheckoutViewComponent],
        providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map