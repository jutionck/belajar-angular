import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

// Layouting
const LAYOUT: any = [];
const COMPONENTS: any = [HeaderComponent, LayoutComponent, FooterComponent];

@NgModule({
  declarations: [...LAYOUT, ...COMPONENTS],
  imports: [
    CommonModule
  ],
  exports: [CommonModule, ...LAYOUT, ...COMPONENTS]
})
export class TemplateModule { }
