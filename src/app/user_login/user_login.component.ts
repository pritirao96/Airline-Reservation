import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from './user_login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'userLogin',
  templateUrl: './user_login.component.html',
  styleUrls: ['./user_login.component.css']
})
export class UserLoginComponent implements OnInit {
  users: User = new User();
  response: string;
  constructor(private rs: UserLoginService, private router: Router) { }

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    window.localStorage.setItem('userDetails',JSON.stringify({token: this.users , name:'userDetails'}))
    console.log(this.users);
    this.rs.retriveFromServer(this.users).subscribe(data => {
      console.log(data);
      this.response = data.toString();
      var check=this.response;

      if(check == "true") {
        this.router.navigate(['./']);
      }
      else{
        this.router.navigate(['./user_login']);
      }
    });
  }
}
