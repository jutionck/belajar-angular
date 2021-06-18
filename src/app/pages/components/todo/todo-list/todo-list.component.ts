import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  sampleDate: Date = new Date();
  sampleDate2 = '12 Juni 2021';

  ngOnInit(): void {
  }

}
