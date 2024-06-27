import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesModule } from "@shared/pages/pages.module";

@NgModule({
  imports: [
    CommonModule,
    PagesModule
  ],
  exports: [PagesModule]
})
export class SharedModule { }
