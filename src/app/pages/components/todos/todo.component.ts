import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  tasks: Todo[] = [];
  ngOnInit(): void {
  }

  onAddTask(todo: Todo): void {
    todo.id = this.tasks.length + 1;
    this.tasks.push(todo);
    console.log(todo);
  }


}
