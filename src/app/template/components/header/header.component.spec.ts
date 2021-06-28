import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeaderComponent } from "./header.component";

describe('HeaderComponent()', () => {

  let fixture: ComponentFixture<HeaderComponent>
  let component: HeaderComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    });

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should have <a> with "Mandiri"', () => {
    const element: HTMLElement = fixture.nativeElement;
    // querySelector = <app-header>
    const anchor = element.querySelector('a');
    expect(anchor.textContent).toEqual('Mandiri');
  });
})