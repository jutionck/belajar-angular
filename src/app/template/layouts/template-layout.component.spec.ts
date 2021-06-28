import { ComponentFixture, TestBed } from "@angular/core/testing"
import { TemplateLayoutComponent } from "./template-layout.component"

describe('TemplateLayoutComponent()', () => {

  let fixture: ComponentFixture<TemplateLayoutComponent>
  let component: TemplateLayoutComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateLayoutComponent]
    });

    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  // nativeElement
  it('should have <app-header>', () => {

    // HTMLElement => nativeElement, debugElement..
    const templateElement: HTMLElement = fixture.nativeElement;
    // querySelector = <app-header>
    const appHeader = templateElement.querySelector('app-header');
    expect(appHeader).toBeTruthy();
  });
})