import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/component/list/users.component';



@NgModule({
  declarations: [PostComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
