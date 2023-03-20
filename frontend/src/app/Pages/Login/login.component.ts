import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Login } from 'src/app/Models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private location: Location, private routes: Router) {}

  login: Login = {
    username: '',
    password: ''
  };

  loginUser(login : Login): void {
    this.authService.login(login).subscribe(data => {
      this.authService.storeToken(data.token)
      this.routes.navigate([''])
    })
    
  }
}

