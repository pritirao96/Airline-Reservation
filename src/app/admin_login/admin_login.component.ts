import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from './admin_login.service';
import { Admin } from '../admin';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'adminLogin',
  templateUrl: './admin_login.component.html',
  styleUrls: ['./admin_login.component.css']
})
export class AdminLoginComponent implements OnInit {
  admins: Admin = new Admin();
  constructor(private rs: AdminLoginService) { }

  adminForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  ngOnInit() {
  }

  login() {
    let url = "http://localhost:8084/admin/verify";
    this.rs.retriveFromServer(url, this.admins).subscribe(data => {
      alert(data);
    });
    //console.log("verified");
  }
}
