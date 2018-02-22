import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { InlineStyleComponent } from './styling/inline-style/inline-style.component';
import { ExternalStyleComponent } from './styling/external-style/external-style.component';
import { NativeEncapsulationComponent } from './styling/native-encapsulation/native-encapsulation.component';
import { NoEncapsulationComponent } from './styling/no-encapsulation/no-encapsulation.component';
import { HostModule } from './host/host.module';
import { ContentProjectionModule } from './content-projection/content-projection.module';
import { TabsModule } from './tabs/tabs.module';
import { DefaultChangeDetectionComponent } from './change-detection/default-change-detection.component';
import { OnPushChangeDetectionComponent } from './change-detection/on-push-change-detection.component';
import { OnPushDemoComponent } from './change-detection/on-push-demo.component';
import { ObservableChangeDetectionComponent } from './change-detection/observable-change-detection/observable-change-detection.component';
import { ObservablesDemoComponent } from './change-detection/observable-change-detection/observables-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    ExternalStyleComponent,
    NativeEncapsulationComponent,
    NoEncapsulationComponent,
    DefaultChangeDetectionComponent,
    OnPushChangeDetectionComponent,
    OnPushDemoComponent,
    ObservableChangeDetectionComponent,
    ObservablesDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
