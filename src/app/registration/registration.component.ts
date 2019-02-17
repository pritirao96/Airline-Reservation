import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from './registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User = new User();
  response: string;
  array = { password: "", msg: "" };
  confirmPassword: string;


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  constructor(public rs: RegistrationService, private router: Router) { }

  regForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirm_password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    dob: new FormControl('', Validators.required),
    phone_no: new FormControl('', Validators.required)

  })

  ngOnInit() {
  }

  
    pswdCheck(){
    let confirm = true;
    if (this.confirmPassword != this.users.password) {
      confirm = false;
      this.array['password'] = "Password does not match";
    }
  }
    register(pform) {
    // console.log(this.users);
      this.rs.retriveFromServer(this.users).subscribe(data => {
        console.log(data);
        this.response = data.toString();
        var check = this.response;

        if (check == "true") {
          this.router.navigate(['./user_login']);
        }
        else {
          this.router.navigate(['./registration']);
        }
      });
    }

  }



