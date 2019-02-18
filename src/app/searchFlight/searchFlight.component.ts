import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from './searchFlight-service';
import { Flight } from '../flight';
import { formatDate } from '@angular/common';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'searchFlight',
  templateUrl: './searchFlight.component.html',
  styleUrls: ['./searchFlight.component.css']
})

export class SearchFlightComponent implements OnInit {

  title: String = "List of flights"
  flights: Flight[];

  source: String;
  destination: String;
  users: User = new User();

  constructor(public fs: SearchFlightService, private router: Router) { }

  searchFlightForm = new FormGroup({
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  ngOnInit() {
  }

  submit(source, destination, flightdate) {
    //this.users = JSON.parse(localStorage.getItem('userDetails'))['token'];
    //console.log(this.users.fName);
    let url = "http://localhost:8084/flight/" + source + "/" + destination + "/" + flightdate;
    console.log(url);
    this.fs.retriveFromServer(url).subscribe(
      data => {
        this.flights = data;
        console.log(data);

      });
  }

  divert(flightNumber: number, pricePerSeat: number) {
    sessionStorage.setItem('flightNo', "" + flightNumber);
    sessionStorage.setItem('flight-fare', "" + pricePerSeat);
    if (sessionStorage.getItem('email')!= null) {
      sessionStorage.getItem('email');
      sessionStorage.getItem('password');
      this.router.navigate(["/seats-page"]);
    }
    else {
      this.router.navigate(['/user_login']);
    }
  }

}
