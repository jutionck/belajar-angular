import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import { BsButtonDirective } from "src/app/shared/directives/bs-button/bs-button.directive"
import { TodoFormComponent } from "./todo-form.component"

describe('TodoFormComponent', () => {

  let fixture: ComponentFixture<TodoFormComponent>
  let bsBtn: DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent]
    }).createComponent(TodoFormComponent);

    // initial binding
    fixture.detectChanges();

    // all element with an attached BsButtonDirective
    bsBtn = fixture.debugElement.queryAll(By.directive(BsButtonDirective));
  })

  // button tests
  it('should have one appBsButton elements', () => {
    expect(bsBtn.length).toBe(1);
  });
})