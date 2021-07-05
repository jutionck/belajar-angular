import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { BsButtonDirective } from "src/app/shared/directives/bs-button/bs-button.directive";
import { Todo } from "../../model/todo";
import { TodoFormComponent } from "./todo-form.component"

describe('TodoFormComponent()', () => {

  let fixture: ComponentFixture<TodoFormComponent>;
  let bsButton: DebugElement[]; //cek semua element yang ada di html
  let component: TodoFormComponent;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent],
      imports: [ReactiveFormsModule, FormsModule]
    }).createComponent(TodoFormComponent);

    // initial detecChanges;
    fixture.detectChanges();
    bsButton = fixture.debugElement.queryAll(By.directive(BsButtonDirective));

    // PART ReactiveForm
    component = fixture.componentInstance;
  });

  it('should have one appBsButon element', () => {
    expect(bsButton.length).toBe(1);
  });

  // PART ReactiveForm
  describe('#ReactiveForm', () => {
    it('label field validity', () => {
      let error = {};
      let label = component.todoForm.controls['label'];
      expect(label.valid).toBeFalsy();

      // label field is required
      error = label.errors || {};
      expect(error['required']).toBeTruthy();
      // set label
      // toBeFalse => cek value
      // toBeFalsy => cek variable
      label.setValue('Reading');
      error = label.errors || {};
      expect(error['required']).toBeFalsy();
      expect(error['minlength']).toBeFalsy();
    });

    it('submiting a form emits a label', () => {
      expect(component.todoForm.valid).toBeFalsy();
      component.todoForm.controls['label'].setValue('Traveling')
      expect(component.todoForm.valid).toBeTruthy();
      // component.addTask(); -> Component with Dependency
      expect(component.outputTask).toBeTruthy();
    });
  });
});