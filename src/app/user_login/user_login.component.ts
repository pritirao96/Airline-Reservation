import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserLoginService } from './user_login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'userLogin',
  templateUrl: './user_login.component.html',
  styleUrls: ['./user_login.component.css']
})
export class UserLoginComponent implements OnInit {
  users: User = new User();
  constructor(private rs: UserLoginService) { }

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    let url = "http://localhost:8084/user/verify";
    this.rs.retriveFromServer(url, this.users).subscribe(data => {
      //console.log(data);
    });
    //console.log("verified");
  }
}
