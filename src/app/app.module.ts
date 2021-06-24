import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BsInputDirective } from './shared/directives/bs-input/bs-input.directive';
import { BsButtonDirective } from './shared/directives/bs-button/bs-button.directive';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    BsInputDirective,
    BsButtonDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
