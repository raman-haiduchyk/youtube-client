import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlreadyAuthGuard implements CanLoad {

  constructor(private router: Router) {}

  public canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guard checked');
    if (localStorage.getItem('auth-token') !== null) {
      return this.router.parseUrl('/main');
    } else {
      return true;
    }
  }
}
