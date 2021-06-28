import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";

// describe ini adalah function menerima 2 argumen. 1.Desc(string), 2.Function(arrow)
describe('AppComponent()', () => {
  // ComponentFixture => helper function
  let fixture: ComponentFixture<AppComponent>;

  // function beforeEach(), menerima 2 argumen. 1.String, 2.Function
  // before(), beforeEach(), after, afterEach() dll.
  beforeEach(() => {
    // Membuat sebuah dummy routes
    // TestBed => testing utilities, fungsi nya membuat sebuah modul pengujian
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  });

  // detail, function it(), menerima 2 argumen, 1.String, 2.Function
  it('should create the app', () => {
    // buat component nya
    // fixture => testing utilities
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // Assertion
    expect(app).toBeTruthy();
  });

  it('should have as title "introduction-angular"', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('introduction-angular');
  })
});