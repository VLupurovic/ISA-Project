import { UserService } from './../../services/user.service';
import { RegisteredUser } from './../../models/registered-user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  loggedUser: RegisteredUser = new RegisteredUser();
  x: any;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.parseUser();
  }

  private parseUser(){
    this.x = localStorage.getItem('loggedUser');
    this.loggedUser = JSON.parse(this.x);
    console.log(this.loggedUser);
  }

  public updateUser(){
    this.service.update(this.loggedUser).subscribe();
  }

  public logOutUser(){
    localStorage.removeItem('loggedUser');
  }
  
  public deleteUser(){
    localStorage.removeItem('loggedUser');
    this.service.delete(this.loggedUser.id).subscribe;
  }
}
