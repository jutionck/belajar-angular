import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import TemplateModule from '../template/template.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersModule } from './users/users.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TemplateModule.forRoot(),
    UsersModule,
    SharedModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
