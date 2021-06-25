import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TodoService } from './service/todo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StringService } from 'src/app/shared/services/string.service';
import { TodoRoutingModule } from './todo-routing.module';

const COMPONENTS = [TodoComponent, TodoListComponent, TodoFormComponent]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TodoRoutingModule
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
