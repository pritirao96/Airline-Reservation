import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from './user_login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../login';
import { LoginStatus } from '../login-status';

@Component({
  selector: 'userLogin',
  templateUrl: './user_login.component.html',
  styleUrls: ['./user_login.component.css']
})
export class UserLoginComponent implements OnInit {
  users: Login = new Login();
  response: LoginStatus;
  constructor(private rs: UserLoginService, private router: Router) { }

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    console.log(this.users);
    this.rs.retriveFromServer(this.users).subscribe(data => {
      console.log(data);
      this.response = data;

      
      if(this.response.status == "Verified"){
        sessionStorage.setItem('email', this.users.email);
        sessionStorage.setItem('password', this.users.password);
        sessionStorage.setItem('name',this.response.name);
        sessionStorage.setItem('userId',this.response.userid);
        
        this.router.navigate(["/seats-page"]);
      }
      else{
         this.router.navigate(["/user_login"]);
      }
    });
  }
}
