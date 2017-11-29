import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Angular2SocialLoginModule } from "angular2-social-login";

import { AppComponent } from './app.component';

const providers = {
  'google': {
    'clientId': '937434695670-1l0r52i8dk1c4m39hg1fa93jbs3ebp3v.apps.googleusercontent.com'
  },
  'linkedin': {
    'clientId': '81xmih7jo94hfi'
  },
  'facebook': {
    'clientId': '481051235617450',
    'apiVersion': 'v2.8'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    Angular2SocialLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}

Angular2SocialLoginModule.loadProvidersScripts(providers);
