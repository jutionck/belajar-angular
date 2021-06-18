import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  sampleDate: Date = new Date();
  sampleDate2 = '12 Juni 2021';
  sampleData: Promise<String> = Promise.resolve('sample data with promise')

  promise: Promise<any>;
  constructor() {
    this.promise = this.getPromise(); (2)
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve("Promise complete!"), 3000);
    });
  }

  ngOnInit(): void {
  }

}
