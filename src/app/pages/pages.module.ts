import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { TemplateModule } from '../template/template.module';
import { CarouselComponent } from './home/carousel/carousel.component';

const COMPONENTS = [PagesComponent, CarouselComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    TemplateModule
  ],
  exports: [...COMPONENTS]
})
export class PagesModule { }
