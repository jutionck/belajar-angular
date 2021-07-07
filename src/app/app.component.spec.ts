import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { IncrementDecrementService } from "./increment-decrement.service";

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let incrementDecrementService: IncrementDecrementService;
  let incrementSpy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [IncrementDecrementService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    debugElement = fixture.debugElement;

    incrementDecrementService = debugElement.injector.get(IncrementDecrementService);
    incrementSpy = spyOn(incrementDecrementService, 'increment').and.callThrough();
  }));

  it('should call increment on the service', () => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    expect(incrementDecrementService.value).toBe(1);
    expect(incrementSpy).toHaveBeenCalled();
  });

  it('should increment in template', () => {
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const value = debugElement.query(By.css('h1')).nativeElement.innerText;

    expect(value).toEqual('1');
  });

  it('should stop at 15 and show maximum message', () => {
    incrementDecrementService.value = 15;
    debugElement
      .query(By.css('button.increment'))
      .triggerEventHandler('click', null);

    fixture.detectChanges();

    const value = debugElement.query(By.css('h1')).nativeElement.innerText;
    const message = debugElement.query(By.css('p.message')).nativeElement.innerText;

    expect(value).toEqual('15');
    expect(message).toContain('Maximum');
  });
});