import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TemplateModule } from '../template/template.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TodoModule } from './components/todo/todo.module';

const COMPONENTS = [PagesComponent, CarouselComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    TemplateModule,
    TodoModule
  ],
  exports: [...COMPONENTS]
})
export class PagesModule { }
