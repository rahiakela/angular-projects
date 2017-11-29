import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ModelModule} from './model/model.module';
import {CoreModule} from './core/core.module';
import {MessageModule} from './message/message.module';
import { OndemandModule } from "./ondemand/ondemand.module";
import { AppComponent } from './app.component';
import {routing} from './routes/app-routing';
import {TermsGuard} from './routes/terms-guard';
import { LoadModuleGuard } from "./routes/load-module-guard";

@NgModule({
  imports: [
    BrowserModule,
    ModelModule,
    CoreModule,
    MessageModule,
    routing
  ],
  declarations: [AppComponent],
  providers: [TermsGuard, LoadModuleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
