import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { By } from "@angular/platform-browser"
import { BsButtonDirective } from "src/app/shared/directives/bs-button/bs-button.directive"
import { Todo } from "../../model/todo"
import { TodoService } from "../../service/todo.service"
import { TodoFormComponent } from "./todo-form.component"

describe('TodoFormComponent', () => {
  let fixture: ComponentFixture<TodoFormComponent>
  let bsBtn: DebugElement[];
  let component: TodoFormComponent;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [TodoService]
    });

    fixture = TestBed.createComponent(TodoFormComponent);

    // initial binding
    fixture.detectChanges();

    // all element with an attached BsButtonDirective
    bsBtn = fixture.debugElement.queryAll(By.directive(BsButtonDirective));

    //PART Reactive Form
    component = fixture.componentInstance;
    component.ngOnInit();
  })

  // button tests
  it('should have one appBsButton elements', () => {
    expect(bsBtn.length).toBe(1);
  });

  // PART ReactiveForm
  it('form invalid when empty', () => {
    expect(component.todoForm.valid).toBeFalsy();
  });

  it('label field validity', () => {
    let errors = {};
    let label = component.todoForm.controls['label'];
    // expect(label.valid).toBeFalsy();

    // Label field is required
    errors = label.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set label to something
    label.setValue("Cry");
    errors = label.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set label to something correct
    label.setValue("Swimming");
    errors = label.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form emits a label', async () => {
    expect(component.todoForm.valid).toBeFalsy();
    component.todoForm.controls['label'].setValue("travelling");
    expect(component.todoForm.valid).toBeTruthy();

    let task: Todo = {
      id: 4,
      label: 'travelling',
      checked: false
    }
    // Subscribe to the Observable and store the user in a local variable.
    component.outputTask.subscribe((value) => task = value);

    // Trigger the loading
    expect(component.loading).toBe(false);

    // Trigger the login function
    component.addTask();

    // await todoService.setTask(task)
    //   .then(() => todoService.getTaskPromise())
    //   .then((task) => {
    //     expect(component.loading).toBe(true);
    //     expect(task).toEqual(task);
    //   });
    expect(task.label).toEqual("travelling");
  });
});