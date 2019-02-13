import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { RegistrationService } from './registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  users: User = new User();
  constructor(private rs: RegistrationService) { }

  ngOnInit() {
  }

  register(mform) {
    let url = "http://localhost:9024/addUser";
    console.log(this.users);
    this.rs.retriveFromServer(url, this.users).subscribe(data => {
      console.log(data);
    });
  }
}
