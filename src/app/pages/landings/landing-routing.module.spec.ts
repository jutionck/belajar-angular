import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { routes } from "./landing-routing.module";
import { RouterTestingModule } from "@angular/router/testing";
import { LandingComponent } from "./components/landing/landing.component";
import { Location } from "@angular/common";
import { AppComponent } from "src/app/app.component";

describe('Router: Landing()', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [LandingComponent, AppComponent]
    });

    router = TestBed.inject(Router); // yang lama pakai get
    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it("fakeAsync works", fakeAsync(() => {
    let promise = new Promise(resolve => {
      setTimeout(resolve, 10);
    });
    let done = false;
    promise.then(() => (done = true));
    tick(50);
    expect(done).toBeTruthy();
  }));

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      tick(50);
      //ini harus ada, Simulates the asynchronous passage of time for the timers in the fakeAsync zone.
      expect(location.path()).toBe("/home");
    });
  }));
})