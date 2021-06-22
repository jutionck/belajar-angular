import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import TemplateModule from '../template/template.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TodoModule } from './components/todo/todo.module';
import { PagesRoutingModule } from './pages-routing.module';

const COMPONENTS = [PagesComponent, CarouselComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TemplateModule.forRoot(),
  ],
  exports: [...COMPONENTS]
})
export class PagesModule { }
