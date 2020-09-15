import { Injectable } from '@angular/core';
import { UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) {}

  public canLoad(route: Route): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log('guard checked');
    if (localStorage.getItem('auth-token') !== null) {
      return true;
    } else {
      return this.router.parseUrl('/login');
    }
  }
}
