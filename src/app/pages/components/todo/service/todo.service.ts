import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { StringService } from 'src/app/shared/services/string.service';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  tasks: Todo[] = [];
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

  async getTask(): Promise<Todo[]> {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.tasks), 3000);
    })
  }

  public watch(): Observable<boolean> {
    return this.taskNotifier.asObservable();
  }

}
