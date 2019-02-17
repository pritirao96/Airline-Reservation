import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin_login.service';
import { Admin } from '../admin';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'adminLogin',
  templateUrl: './admin_login.component.html',
  styleUrls: ['./admin_login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admins: Admin = new Admin();
  response: string;
  constructor(private rs: AdminLoginService, private router: Router) { }

  adminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    window.localStorage.setItem('adminDetails',JSON.stringify({token: this.admins , name:'adminDetails'}))
    this.rs.retriveFromServer(this.admins).subscribe(data => {
      console.log(data);
      this.response = data.toString();
      var check=this.response;

      if(check == "true") {
        this.router.navigate(['./admin_dashBoard']);
      }
      else{
        localStorage.removeItem('userDetails');
        this.router.navigate(['./admin_login']);
      }
    });
  }
}
