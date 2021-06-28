import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser";
import { BsButtonDirective } from "src/app/shared/directives/bs-button/bs-button.directive";
import { TodoFormComponent } from "./todo-form.component"

describe('TodoFormComponent()', () => {

  let fixture: ComponentFixture<TodoFormComponent>;
  let bsButton: DebugElement[]; //cek semua element yang ada di html

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [BsButtonDirective, TodoFormComponent]
    }).createComponent(TodoFormComponent);

    // initial detecChanges;
    fixture.detectChanges();

    bsButton = fixture.debugElement.queryAll(By.directive(BsButtonDirective));
  });

  it('should have one appBsButon element', () => {
    expect(bsButton.length).toBe(1);
  });
})