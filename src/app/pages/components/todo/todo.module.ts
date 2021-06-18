import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoService } from './service/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringService } from 'src/app/shared/services/string.service';

const COMPONENTS = [TodoComponent, TodoListComponent, TodoFormComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ...COMPONENTS
  ],
  providers: [
    TodoService,
    StringService
  ]
})
export class TodoModule { }
