import { TitleCasePipe } from "@angular/common";
import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { of } from "rxjs";
import { UserService } from "src/app/pages/users/service/user.service";
import { CustomeDatePipe } from "src/app/shared/pipes/custome-date.pipe";
import { Todo } from "../../model/todo";
import { TodoService } from "../../service/todo.service";
import { TodoComponent } from "../../todo.component";
import { TodoListComponent } from "./todo-list.component"

describe('TodoListCoomponent', () => {

  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [TodoListComponent] });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  // That test fails, because createComponent() doesn't bind data;
  // it('should display original title', () => {
  //   expect(h1.textContent).toContain(component.title);
  // });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  // so, solution: use detectChanges()
  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });
});

describe('TodoListComponent With DI', () => {
  let component: TodoListComponent;
  let todoServive: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        TodoListComponent,
        {
          provide: TodoService
        }
      ],
    });

    component = TestBed.inject(TodoListComponent);
    todoServive = TestBed.inject(TodoService);
  });

  it('should showing task list after create compnent', () => {
    expect(component.tasks).toEqual([]);
  });

  it('should showing task after onInit', fakeAsync(() => {
    const mock: Todo[] = [
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
    component.ngOnInit();
    expect(component.loading).toBe(true);
    const mockTask = todoServive.getTaskObservable();
    mockTask.subscribe((tasks) => {
      // waktu tunggu 3 detik masuk sini
      component.tasks = tasks;
      expect(component.tasks).toEqual(mock);
      expect(component.tasks.length).toEqual(mock.length);
    });
    tick(3000);
  }));
});