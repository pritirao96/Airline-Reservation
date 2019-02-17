import { Component } from '@angular/core';
import { PassengerService } from './booking-service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Component({
   selector: 'seats-user',
   templateUrl: './seats.component.html',
   styleUrls: ['./seats.component.css']
})
export class SeatBookingComponent {
   seats: number;

   constructor(private passengerService: PassengerService, private router: Router) {

   }

   addPassengers(seats: number) {
      sessionStorage.setItem('seats', "" + seats);
      this.passengerService.seats = this.seats;
      this.router.navigate(['/booking']);
   }


}