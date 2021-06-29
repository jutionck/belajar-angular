import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { constants } from 'buffer';
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
})
export class TodoFormComponent implements OnInit {

  @Output() outputTask: EventEmitter<boolean> = new EventEmitter();

  todoForm: FormGroup = new FormGroup({
    label: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

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
