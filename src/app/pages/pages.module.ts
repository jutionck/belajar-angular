import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import TemplateModule from '../template/template.module';
import { PagesRoutingModule } from './pages-routing.module';
import { UsersModule } from './components/users/users.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TemplateModule.forRoot(),
    UsersModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
