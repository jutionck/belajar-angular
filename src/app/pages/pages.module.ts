import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/component/list/users.component';
import { HomeComponent } from './home/home.component';
import { TemplateModule } from './template/template.module';

const COMPONENTS = [UsersComponent, HomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS]
})
export class PagesModule { }
