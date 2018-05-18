import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PageHeaderComponent, FooterComponent, SidebarComponent, NavbarComponent, MainComponent],
  exports: [PageHeaderComponent, FooterComponent, SidebarComponent, NavbarComponent, MainComponent]
})
export class CoreModule { }
