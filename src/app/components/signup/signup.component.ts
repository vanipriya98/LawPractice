import { Component, NgModule, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  signUpForm=new FormGroup({
    Fullname:new FormControl("", [Validators.minLength(2)]),
    email:new FormControl("",[Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl("",[Validators.minLength(6)])
  })
 
  
  constructor() { }

  ngOnInit(): void {
  }
  

  signup() {
    console.log('Signup clicked:');
   
  }

}
