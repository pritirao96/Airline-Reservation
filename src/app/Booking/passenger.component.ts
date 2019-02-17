import { Component } from '@angular/core';
import { ConfirmBooking } from './confirm';
import { ConfirmService } from './confirm-service';
import { Router } from '@angular/router';
import { Passenger } from './passenger';
import { PassengerDisplayService } from './passenger-service';


 @Component({
    selector : 'confirm-passenger',
    templateUrl : './confirm.component.html',
 })
 export class PassengerDetailsComponent{

    passenger: Passenger[];
    url11 = "http://localhost:8084/show/passengers";

    constructor(private ps: PassengerDisplayService, private router: Router) {

   }
   
   display(){
    this.ps.retrieveFromServer(this.url11).subscribe(
       data => {
           console.log(data);
           this.passenger =  data;
       });
   }
}