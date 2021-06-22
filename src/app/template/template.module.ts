import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';

// Layouting
const LAYOUT: any = [];
const COMPONENTS: any = [HeaderComponent, LayoutComponent, FooterComponent];

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
