import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUserComponent } from './components/list/list-user.component';
import { UserService } from './service/user.service';


@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
