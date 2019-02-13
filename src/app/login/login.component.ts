import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User = new User();
  constructor(private rs: LoginService) { }

  ngOnInit() {
  }

  login() {
    let url = "http://localhost:9024/verify";
    this.rs.retriveFromServer(url, this.users).subscribe(data => {
      console.log("verified");
      console.log(data);
    });
    //console.log("verified");
  }
}
