import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {TwentyfiveSidebarModule} from "twentyfive-sidebar";
import { AccordionTablePageComponent } from './pages/accordion-table-page/accordion-table-page.component';
import {TwentyfiveNavbarModule} from "twentyfive-nav";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TwentyfiveAccordionTableModule} from "twentyfive-accordion-table";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccordionTablePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TwentyfiveSidebarModule,
    TwentyfiveNavbarModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    TwentyfiveAccordionTableModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
