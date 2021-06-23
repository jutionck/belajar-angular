import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { constants } from 'buffer';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() outputTask: EventEmitter<boolean> = new EventEmitter();

  todoForm: FormGroup = new FormGroup({
    label: new FormControl('')
  })

  loading = false;

  constructor(
    private readonly todoService: TodoService
  ) { }

  addTask(): void {
    console.log(this.todoForm.value);
    const { id, label, checked }: Todo = this.todoForm.value;
    const todo: Todo = {
      id,
      label,
      checked
    };

    this.loading = true;
    this.todoService.setTask(todo)
      .then(() => this.todoService.getTaskPromise())
      .then((task) => {
        console.log(task);
        this.loading = false;
      })
  }

  ngOnInit(): void {
  }

}
