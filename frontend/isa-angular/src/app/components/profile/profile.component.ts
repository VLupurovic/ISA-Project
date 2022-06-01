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
  }

  public updateUser(){
    this.service.update(this.loggedUser).subscribe(
      data => {
        this.loggedUser = data;
        localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser))
      }
    );
  }

  public logOutUser(){
    localStorage.removeItem('loggedUser');
  }
  
  public createDeleteRequest(){
    this.logOutUser();
    this.service.createDeleteRequest(this.loggedUser.id).subscribe();
  }
}
