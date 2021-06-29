import { Location } from "@angular/common"
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { Router } from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing"
import { LandingComponent } from "./components/landing/landing.component";
import { LandingRoutingModule } from "./landing-routing.module";

describe('LandingRouting', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:
        [
          RouterTestingModule.withRoutes([]), LandingRoutingModule
        ]
    });
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(LandingComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      tick(50);
      expect(location.path()).toBe('/home');
    });
  }));
});