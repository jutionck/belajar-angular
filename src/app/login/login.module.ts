import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SessionStorageService } from '../shared/services/session-storage.service';
import { LoginService } from './components/service/login.service';
import { FlashMessageService } from '../shared/services/flash.service';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [LoginComponent],
  providers: [SessionStorageService, LoginService, FlashMessageService]
})
export class LoginModule { }
