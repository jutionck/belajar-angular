import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { PagesModule } from './pages/pages.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'introduction-angular'`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('introduction-angular');
  });

  it(`should have a function sum(5, 6), result 11`, () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.sum(5, 6)).toEqual(11);
  })
});

// Testing module
describe('AppModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    })
  });

  it('initializes AppModule', () => {
    const module = TestBed.inject(AppModule);
    expect(module).toBeTruthy();
  })
});

describe('PagesModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PagesModule]
    })
  });

  it('initializes PagesModule', () => {
    const module = TestBed.inject(PagesModule);
    expect(module).toBeTruthy();
  })
})