import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { StringService } from 'src/app/shared/services/string.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Todo[] = [
    {
      id: 1,
      label: 'Task 1',
      checked: true
    },
    {
      id: 2,
      label: 'Task 2',
      checked: false
    },
    {
      id: 3,
      label: 'Task 3',
      checked: false
    }
  ];
  taskNotifier: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly stringService: StringService,
  ) { }

  async setTask(task: Todo): Promise<void> {
    task.label = this.stringService.upperCase(task.label);
    this.tasks = this.tasks.concat(task);

    return new Promise((resolve) => {
      setTimeout(() => {
        this.taskNotifier.next(true);
        resolve();
      }, 3000);
    })
  }

  async getTaskPromise(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.tasks), 3000);
    })
  }

  public getTaskObservable(): Observable<Todo[]> {
    // of, from, new Observabble -> Create Observable
    return new Observable((observer) => {
      setTimeout(() => {
        console.log('get tasks observable');
        observer.next(this.tasks)
      }, 3000);
    })
  }

  public watch(): Observable<boolean> {
    return this.taskNotifier.asObservable();
  }
}
