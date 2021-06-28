import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { TemplateLayoutComponent } from "./template-layout.component"

describe('TemplateLayoutComponent', () => {

  let component: TemplateLayoutComponent;
  let fixture: ComponentFixture<TemplateLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        declarations: [TemplateLayoutComponent],
      });
    fixture = TestBed.createComponent(TemplateLayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  // nativeELement
  it('should have <app-header>', () => {
    // buat variabel untuk deteksi tag html
    const templateElement: HTMLElement = fixture.nativeElement
    const appHeader = templateElement.querySelector('app-header');
    expect(appHeader).toBeTruthy();
  });

  it('should have <p> with "Template Layout Works!"', () => {
    // buat variabel untuk deteksi tag html
    const templateElement: HTMLElement = fixture.nativeElement;
    const p = templateElement.querySelector('p');
    expect(p.textContent).toEqual('Template Layout Works!');
  });

  // debugElement
  it('should have <p> with "Template Layout Works!" use debugElement', () => {
    // buat variabel untuk deteksi tag html
    const templateDebug: DebugElement = fixture.debugElement;
    const templateElement: HTMLElement = templateDebug.nativeElement;
    const p = templateElement.querySelector('p');
    expect(p.textContent).toEqual('Template Layout Works!');
  });
})