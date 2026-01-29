// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/authservice/auth';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check the signal/status from your AuthService
  if (authService.isLoggedIn()) {
    return true; 
  } else {
    // If not logged in, redirect to login page
    // parseUrl is more efficient for redirects within guards
    return router.parseUrl('/login');
  }
};