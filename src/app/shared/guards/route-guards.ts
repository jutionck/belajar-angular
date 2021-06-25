import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { FlashMessageService } from '../services/flash.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild {

  constructor(
    private readonly router: Router,
    private readonly flash: FlashMessageService
  ) { }

  protected authorize(
    activatedRoute: ActivatedRouteSnapshot,
    activatedState: RouterStateSnapshot): boolean {
    const credentials = sessionStorage.getItem('credentials');

    if (!credentials) {
      // sessionStorage.setItem('redirectBackUrl', activatedState.url)
      this.flash.set(activatedState.url);
      this.router.navigateByUrl('/login');
    }

    return true;

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authorize(route, state);
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authorize(childRoute, state);
  }

}
