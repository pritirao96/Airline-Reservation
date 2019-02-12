import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { User } from '../User/user';
import { HomeService } from './home.service';

@Component({
  selector: 'home',
  templateUrl:'home.component.html' ,
  styleUrls: ['home.component.css']
})
export class HomeComponent {
  users: User  = new User();

  constructor(public rs:HomeService){

  }

  register(mform){
    let url = "http://localhost:9024/addUser";
    console.log(this.users);
    this.rs.retriveFromServer(url , this.users).subscribe(data => {
      console.log(data);
    });
  }

  login(){
    let url="http://localhost:9024/verify";
    this.rs.retriveFromServer(url,this.users).subscribe(data=> {
      console.log("verified");
      console.log(data);
    });
    //console.log("verified");
  }
}