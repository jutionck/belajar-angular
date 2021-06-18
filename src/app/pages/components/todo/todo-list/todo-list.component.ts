import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() updated: boolean;

  tasks: Todo[] = []
  title = "My Todo List";
  loading = false;

  constructor(
    private readonly todoService: TodoService
  ) { }

  ngOnInit(): void {

    console.log(this.updated);
    if (this.updated) {

    }

    this.loading = true;
    this.todoService.getTask()
      .then((tasks) => {
        this.tasks = tasks;
        this.loading = false
      })

    // this.todoService.watch()
    //   .subscribe((update) => {
    //     if (update) {
    //       this.loading = true;

    //     }
    //   })
  }

}
