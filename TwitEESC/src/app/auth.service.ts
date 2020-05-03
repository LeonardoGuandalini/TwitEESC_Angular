import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);
  private loggedOut = new BehaviorSubject<boolean>(true);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
    
  }

  get isLoggedOut() {
    return this.loggedOut.asObservable();
  }

  constructor( 
    private router: Router
  ) { }


  login() {
    this.loggedIn.next(true);
    this.loggedOut.next(false);
    this.router.navigate(['feed']);
  }

  logout() {
    this.loggedIn.next(false);
    this.loggedOut.next(true);
    this.router.navigate(['']);
  }
}
