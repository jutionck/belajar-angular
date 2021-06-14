import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';

// Layouting
const LAYOUT: any = [];
const COMPONENTS: any = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...LAYOUT, ...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, ...LAYOUT, ...COMPONENTS]
})
export class TemplateModule { }
