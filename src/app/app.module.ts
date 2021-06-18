import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PagesModule } from './pages/pages.module';
import { TemplateModule } from './template/template.module';
import { BsInputDirective } from './shared/directives/bs-input/bs-input.directive';
import { BsButtonDirective } from './shared/directives/bs-button/bs-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    BsInputDirective,
    BsButtonDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PagesModule,
    TemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
