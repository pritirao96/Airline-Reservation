import { Component, OnInit } from '@angular/core';
import { Passenger } from './passenger';
import { PassengerService } from './booking-service';
import { store } from '@angular/core/src/render3';
import { Router } from '@angular/router';

 @Component({
    selector : 'booking-user',
    templateUrl : './booking.component.html'
 })

 export class UserBookingComponent implements OnInit {

   passengers: Passenger[];
   seats: number[];

     constructor( public pr:PassengerService, public r: Router){

   }
   
   ngOnInit() {
    this.seats = new Array(this.pr.seats);
    this.passengers = new Array(this.pr.seats);
    for(let i of this.seats)
      this.passengers[i-1] = new Passenger();
  }

   keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
      store(){
      let url='http:localhost:8084/book/flight/passenger'
      console.log(this.passengers)
      this.pr.sendToServer(url,this.passengers).subscribe(data=>{
        
      });
      this.r.navigate(['confirm-page']);

          }
      
}
