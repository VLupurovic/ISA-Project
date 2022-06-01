import { ProfileComponent } from './../profile/profile.component';
import { Router } from '@angular/router';
import { RegisteredUser } from './../../models/registered-user';
import { UserService } from 'src/app/services/user.service';
import { LoginRequest } from './../../models/login-request';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  request: LoginRequest = new LoginRequest();
  user: RegisteredUser = new RegisteredUser();
  userTest: RegisteredUser = new RegisteredUser();
  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  requestLogin(){
    this.service.logIn(this.request).subscribe(
      data => {
        this.user = data;
        localStorage.setItem('loggedUser', JSON.stringify(this.user));
        this.router.navigate(['/dashboard']);
      }
    );
  }
}
