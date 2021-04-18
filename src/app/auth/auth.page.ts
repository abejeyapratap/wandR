import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLoginService } from './auth-login.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(
    private authLoginService: AuthLoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  onLogin() {
    this.authLoginService.login();
    this.router.navigateByUrl('/welcome');
  }
}
