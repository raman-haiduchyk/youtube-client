import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public logIn(userName: string): void {
    localStorage.setItem('auth-token', userName);
  }

  public logOut(): void {
    localStorage.removeItem('auth-token');
  }

}
