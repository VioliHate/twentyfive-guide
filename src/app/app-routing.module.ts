import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccordionTablePageComponent} from "./pages/accordion-table-page/accordion-table-page.component";

const routes: Routes = [
  {path: 'accordion-table', component: AccordionTablePageComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
