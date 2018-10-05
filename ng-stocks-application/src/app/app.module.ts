import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [AppComponent, SummaryComponent, DashboardComponent, ManageComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutes],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
