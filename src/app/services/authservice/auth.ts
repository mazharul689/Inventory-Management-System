import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // A private signal to hold the login state
  private _isLoggedIn = signal<boolean>(this.checkToken());

  // A public read-only version of the signal
  isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(private router: Router) {}

  // Check if a token exists in local storage (to keep user logged in on refresh)
  private checkToken(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  login(token: string) {
    localStorage.setItem('auth_token', token);
    this._isLoggedIn.set(true);
    this.router.navigate(['/dashboard']); // Move to your inventory home
  }

  logout() {
    localStorage.removeItem('auth_token');
    this._isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}