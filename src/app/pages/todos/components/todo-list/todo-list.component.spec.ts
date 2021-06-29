import { ComponentFixture, fakeAsync, TestBed, tick } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
import { Todo } from "../../model/todo";
import { TodoService } from "../../service/todo.service";
import { TodoListComponent } from "./todo-list.component";

describe('TodoListComponent()', () => {
  let fixture: ComponentFixture<TodoListComponent>
  let component: TodoListComponent;
  let element: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListComponent],
      imports: [SharedModule]
    });
    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement.querySelector('h1');
  });

  // fail, because -> detecChanges();
  // it('should display original title', () => {
  //   expect(element.textContent).toEqual(component.title);
  // });

  it('no title in the DOM after createComponent', () => {
    expect(element.textContent).toEqual('');
  })

  // detecChanges();
  it('should display original title after use detecChanges()', () => {
    fixture.detectChanges();
    expect(element.textContent).toEqual(component.title);
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