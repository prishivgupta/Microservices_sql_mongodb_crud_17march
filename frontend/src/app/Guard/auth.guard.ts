import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/Auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes: Router, private authService: AuthService) {}

  canActivate(): boolean {

    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      alert("Please Login!")
      this.routes.navigate(['login'])
      return false;
    }
    
  }
}

