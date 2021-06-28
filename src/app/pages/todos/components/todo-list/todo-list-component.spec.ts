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

describe('TodoListComponent with Dependency', () => {
  let comp: TodoListComponent;
  let todoService: TodoService;
  const taskMock: Todo[] = [
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      providers: [
        TodoListComponent,
        {
          provide: TodoService
        }
      ]
    });
    // inject both the component and the dependent service.
    comp = TestBed.inject(TodoListComponent);
    todoService = TestBed.inject(TodoService);
  });

  it('should not have task list after construction', () => {
    expect(comp.tasks).toEqual([]);
  });

  it("should showing tasks after Angular calls ngOnInit with observable", fakeAsync(() => {
    comp.ngOnInit();
    expect(comp.loading).toBe(true);
    const taskList = todoService.getTaskObservable();
    taskList.subscribe((tasks) => {
      comp.tasks = tasks;
      expect(comp.tasks).toEqual(todoService.tasks);
      // expect(comp.tasks.length).toEqual(tasks.length);
    });

    tick(5000);
  }));

  it("should showing tasks after Angular calls ngOnInit convert Observable toPromise", () => {
    comp.ngOnInit();
    expect(comp.loading).toBe(true);
    todoService.getTaskObservable().toPromise();
    expect(taskMock).toEqual(todoService.tasks);
  });
});