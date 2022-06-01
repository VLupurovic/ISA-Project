import { RegistrationRequest } from './../../models/registration-request';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register-from',
  templateUrl: './register-from.component.html',
  styleUrls: ['./register-from.component.css']
})
export class RegisterFromComponent implements OnInit {
  request: RegistrationRequest = new RegistrationRequest();
  confirmPassword: string;
  registerForm: FormGroup;
 
  constructor(private service: UserService, private fb: FormBuilder) { }


  ngOnInit(): void {

  }

  submitRegistration(){
      this.service.register(this.request).subscribe();
  }

}
