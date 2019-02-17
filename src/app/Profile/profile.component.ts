import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile-service';
import { User } from '../user';


@Component({
  selector: 'profile-user',
  templateUrl: './profile.component.html'
})

export class UserProfileComponent implements OnInit {
  users: User[];

  url2 = "http://localhost:8084/userRegistration/{email}";

  constructor(private ps: ProfileService) {

  }

  ngOnInit() {
    this.ps.retrieveFromServer(this.url2).subscribe(
      data => {
        console.log(data);
        this.users = data;
      });
  }

}
