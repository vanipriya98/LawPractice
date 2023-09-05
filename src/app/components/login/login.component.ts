import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email:new FormControl("",[Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    password:new FormControl("",[Validators.required])
  })
  login() {
    console.log('log in clicked:');
   
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
