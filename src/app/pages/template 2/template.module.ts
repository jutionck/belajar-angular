import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

const LAYOUTS = [];
const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...LAYOUTS, ...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, ...LAYOUTS, ...COMPONENTS]
})
export class TemplateModule { }

