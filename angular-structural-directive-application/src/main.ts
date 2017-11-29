/**
 * Application Bootstrap
 * Author:Rahi Akela
 * Date  :10/04/2017
 * Description:The bootstrap process tells Angular about the component and creates the bridge between the functionality
 * provided by the Angular framework and the custom code in the application.
 * */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
