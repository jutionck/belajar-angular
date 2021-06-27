import { TitleCasePipe } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CustomeDatePipe } from "src/app/shared/pipes/custome-date.pipe";
import { TodoListComponent } from "./todo-list.component"

describe('TodoListCoomponent', () => {

  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>
  let h1: HTMLElement;
  const titleCase: TitleCasePipe = new TitleCasePipe();

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

  it('transforms "abc" to "Abc"', () => {
    expect(titleCase.transform('abc')).toBe('Abc');
  });

  it('transforms "abc def" to "Abc Def"', () => {
    expect(titleCase.transform('abc def')).toBe('Abc Def');
  });

  // ... more tests ...
  it('leaves "Abc Def" unchanged', () => {
    expect(titleCase.transform('Abc Def')).toBe('Abc Def');
  });

  it('transforms "abc-def" to "Abc-def"', () => {
    expect(titleCase.transform('abc-def')).toBe('Abc-def');
  });

  it('transforms "   abc   def" to "   Abc   Def" (preserves spaces) ', () => {
    expect(titleCase.transform('   abc   def')).toBe('   Abc   Def');
  });
})