import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Highlight, HighlightAuto, provideHighlightOptions} from 'ngx-highlightjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {TwentyfiveSidebarModule} from "twentyfive-sidebar";
import { AccordionTablePageComponent } from './pages/accordion-table-page/accordion-table-page.component';
import {TwentyfiveNavbarModule} from "twentyfive-nav";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {TwentyfiveAccordionTableModule} from "twentyfive-accordion-table";
import {HttpClientModule} from "@angular/common/http";
import {NgbNav, NgbNavContent, NgbNavItem, NgbNavLinkButton, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {HighlightPlusModule} from "ngx-highlightjs/plus";

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
    HttpClientModule,
    NgbNav,
    NgbNavOutlet,
    NgbNavItem,
    NgbNavContent,
    NgbNavLinkButton,
    HighlightPlusModule,
    Highlight,
    HighlightAuto
  ],
  providers: [
    provideHighlightOptions({
      fullLibraryLoader: () => import('highlight.js')
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
