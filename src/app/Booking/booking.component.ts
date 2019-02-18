import { Component, OnInit } from '@angular/core';
import { Passenger } from './passenger';
import { PassengerService } from './booking-service';
import { store } from '@angular/core/src/render3';
import { Router } from '@angular/router';

@Component({
  selector: 'booking-user',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class UserBookingComponent implements OnInit {

  passengers: Passenger[];
  seats: number[];
  //  response: string;

  constructor(public pr: PassengerService, public r: Router) {

  }

  ngOnInit() {
    this.seats = new Array(this.pr.seats);
    this.passengers = new Array(this.pr.seats);
    let counter = 0;
    for (let i = 0; i < this.pr.seats; i++)
      this.passengers[counter++] = new Passenger();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  store() {
    let user_id = +sessionStorage.getItem('userId');
    let url = 'http://localhost:8084/book/flight/passenger/';
    for(let p of this.passengers){
      console.log(p);
    }
    this.r.navigate(['confirm-page']);
    this.pr.sendToServer(url+user_id, this.passengers).subscribe(data => {
    });
  }
}
