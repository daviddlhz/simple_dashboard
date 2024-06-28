import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from "@shared/pages/pages.module";
import { DataTableComponent } from './components/data-table/data-table.component';
import {FormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@NgModule({
  imports: [
    CommonModule,
    PagesModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [PagesModule, DataTableComponent],
  declarations: [
    DataTableComponent
  ]
})
export class SharedModule { }
