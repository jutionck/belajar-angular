import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './components/list/list-user.component';
import { UserService } from './service/user.service';
import { FormUserComponent } from './components/form/form-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ListUserComponent, FormUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
