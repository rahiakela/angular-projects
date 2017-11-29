"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Application Bootstrap
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The bootstrap process tells Angular about the component and creates the bridge between the functionality
 * provided by the Angular framework and the custom code in the application.
 * */
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app/app.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map