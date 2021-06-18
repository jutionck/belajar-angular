import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { SharedModule } from 'src/app/shared/shared.module';

const COMPONENTS = [TodoComponent, TodoListComponent, TodoFormComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class TodoModule { }
