import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin_login.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginStatus } from '../login-status';
import { Login } from '../login';

@Component({
  selector: 'adminLogin',
  templateUrl: './admin_login.component.html',
  styleUrls: ['./admin_login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admins: Login= new Login();
  response: LoginStatus;
  constructor(private rs: AdminLoginService, private router: Router) { }

  adminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    console.log(this.admins)
    //window.localStorage.setItem('adminDetails',JSON.stringify({token: this.admins , name:'adminDetails'}))
    this.rs.retriveFromServer(this.admins).subscribe(data => {
      
      this.response = data;
      //var check=this.response;
      console.log(this.response.status)
      if(this.response.status == "Verified") {
        this.router.navigate(['./admin_dashBoard']);
      }
      else{
        localStorage.removeItem('userDetails');
        this.router.navigate(['./admin_login']);
      }
    });
  }
}
