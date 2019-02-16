import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html' ,
  styles: []
})
export class AppComponent implements OnInit{
  title = 'Breeze Airlines';
  msg='login';
  users: User= new User();
  
  ngOnInit(){
    if(JSON.parse(localStorage.getItem('userDetails'))['token']!=null){
     this.users = (JSON.parse(localStorage.getItem('userDetails'))['token']);
    }
  }
}
