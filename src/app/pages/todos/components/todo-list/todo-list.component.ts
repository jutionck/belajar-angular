import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators'
import { Todo } from '../../model/todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
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
    this.loading = true;

    // Ketika ada variable yang ditempel tanda $ dia berarti Observable
    const taskO: Observable<Todo[]> = this.todoService.getTaskObservable();
    const taskP = this.todoService.getTaskPromise();

    taskO.subscribe(
      (tasks) => {
        console.log('after subcribed to get task');
        this.tasks = tasks;
        console.log(tasks);

      },
      (error) => console.error(error)
    )

    const users: Observable<any> = this.todoService.getUser();
    users.subscribe((data) => {
      console.log(data);
    }, (error) => console.error(error));

    /**
     * Fungsi pipe:
     * 1. Delay saat request
     * 2. Mengulang request ketika gagal
     * 3. Mengecek apakah observable berjalan atau tidak, tap
     * 4. Mapping data, atau menguba suatu data, map
     * 5. Menangkap error, catchError
     */
    // const labels: Observable<string[]> = this.todoService
    //   .getTaskObservable()
    //   .pipe(
    //     tap(() => console.log('tes todoLabels...')),
    //     map<Todo[], string[]>((tasks) => {
    //       return tasks.map((todo) => todo.label);
    //     })
    //   );

    // labels.subscribe((data) => console.log('method 1', data));
    // labels.subscribe((data) => console.log('method 2', data));
  }

}
