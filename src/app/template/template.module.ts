import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TemplateLayoutComponent } from './layouts/template-layout.component';
import { RouterModule } from '@angular/router';

// Layouting
const LAYOUT: any = [TemplateLayoutComponent];
const COMPONENTS: any = [HeaderComponent];

@NgModule({
  declarations: [...LAYOUT, ...COMPONENTS],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CommonModule, ...LAYOUT, ...COMPONENTS]
})
export default class TemplateModule {
  static forRoot(): ModuleWithProviders<TemplateModule> {
    return {
      ngModule: TemplateModule
    }
  }
}
