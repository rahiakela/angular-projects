"use strict";
var router_1 = require("@angular/router");
var login_component_1 = require("./login-component");
var private_component_1 = require("./private-component");
// declaring application routes
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: private_component_1.PrivateComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
// Routes Provider
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map