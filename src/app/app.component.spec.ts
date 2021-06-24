import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'introduction-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('introduction-angular');
  });

  it('should test some asynchronous code', fakeAsync(() => {
    let flag = false;
    setTimeout(() => { flag = true; }, 100);
    expect(flag).toBe(false); // PASSES
    tick(50);
    expect(flag).toBe(false); // PASSES
    tick(50);
    expect(flag).toBe(true); // PASSES
  }));

});