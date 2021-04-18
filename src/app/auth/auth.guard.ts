import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthLoginService } from './auth-login.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {
  constructor(
    private authLoginService: AuthLoginService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authLoginService.userIsAuthenticated) {
      this.router.navigateByUrl('/auth');
    }
    return this.authLoginService.userIsAuthenticated;
  }
}
