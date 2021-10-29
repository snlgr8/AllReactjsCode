import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userIsAuthenticated = true;
  loggedInUser = '';
  constructor() { }
  login(username, password) {
    this.loggedInUser = username;
    this.userIsAuthenticated = true;
  }
  logout() {
    this.userIsAuthenticated = false;
  }
}
