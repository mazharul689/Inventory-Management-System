import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/authservice/auth';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  onLogin() {
    // this.router.navigateByUrl(['/dashboard']);
    const mockToken = '12345xyz';
    this.authService.login(mockToken);
  }

}
