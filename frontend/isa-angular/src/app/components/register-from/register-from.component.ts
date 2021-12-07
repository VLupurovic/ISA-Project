import { RegistrationRequest } from './../../models/registration-request';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {
  request: RegistrationRequest = new RegistrationRequest();
  confirmPassword: string;
 
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  submitRegistration(){
      this.service.register(this.request).subscribe();
  }



}
