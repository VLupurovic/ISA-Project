import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;

  constructor() {}

  ngOnInit(): void{
    if(localStorage.getItem('loggedUser') == null){
      this.loggedIn = false;
    }else if(localStorage.getItem('loggedUser') != null){
      this.loggedIn = true;
    }
  }
}
