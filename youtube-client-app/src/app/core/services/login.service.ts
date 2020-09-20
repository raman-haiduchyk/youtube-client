import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
@Injectable()
export class LoginService {

  public subject: BehaviorSubject<string>;

  constructor() {
    this.subject = new BehaviorSubject<string>(localStorage.getItem('auth-token'));
  }

  public logIn(userName: string): void {
    localStorage.setItem('auth-token', userName);
    this.subject.next(userName);
  }

  public logOut(): void {
    localStorage.removeItem('auth-token');
    this.subject.next(null);
  }

}
