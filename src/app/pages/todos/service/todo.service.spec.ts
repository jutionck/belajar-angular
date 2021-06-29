import { TestBed } from "@angular/core/testing";
import { Todo } from "../model/todo";
import { TodoService } from "./todo.service"

describe('TodoService()', () => {

  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have method getTaskPromise()', () => {
    expect(service.getTaskPromise).toBeTruthy();
  });

  it('should have method getTaskObservable()', () => {
    expect(service.getTaskObservable).toBeTruthy();
  });

  it('should have method getTaskObservable()', () => {
    expect(service.getTaskObservable).toBeTruthy();
  });

  it('should have method watch', () => {
    expect(service.watch).toBeTruthy();
  });

  it('should have method setTask', () => {
    const mockTask: Todo = {
      id: 4,
      label: 'Task 4',
      checked: true
    };
    expect(service.setTask(mockTask)).toBeTruthy();
  });
});