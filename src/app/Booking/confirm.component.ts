import { Component, OnInit } from '@angular/core';
import { ConfirmBooking } from './confirm';
import { ConfirmService } from './confirm-service';
import { Router } from '@angular/router';


@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html',
})
export class ConfirmBookingComponent implements OnInit {
  confirm: ConfirmBooking[];
  url11 = "http://localhost:8084/show/flight/";
  response: string;
  flightNumber: number;
  email: string;
  pricePerSeat: string;
  seats: string;


  constructor(private cs: ConfirmService, private router: Router) {

  }

  ngOnInit() {
    this.flightNumber = +sessionStorage.getItem('flightNo');
      this.email = sessionStorage.getItem('email');
      this.pricePerSeat = sessionStorage.getItem('flight-fare');
      this.seats = sessionStorage.getItem('seats');
    this.cs.retrieveFromServer(this.url11+this.flightNumber).subscribe(
      data => {
        console.log(data);
        this.confirm = data;
      });
  }




  display() {
    // this.router.navigate(['/pass-details']);
  }

}