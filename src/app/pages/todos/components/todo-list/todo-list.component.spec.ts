import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SharedModule } from "src/app/shared/shared.module";
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
})