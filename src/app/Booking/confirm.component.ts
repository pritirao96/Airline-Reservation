import { Component } from '@angular/core';
import { ConfirmBooking } from './confirm';
import { ConfirmService } from './confirm-service';
import { Router } from '@angular/router';


 @Component({
    selector : 'confirm',
    templateUrl : './confirm.component.html',
 })
 export class ConfirmBookingComponent{
   confirm: ConfirmBooking[];
   url11 = "http://localhost:8084/";

   constructor(private cs: ConfirmService, private router: Router) {

  }
  
  display(){
     this.cs.retrieveFromServer(this.url11).subscribe(
        data => {
            console.log(data);
            this.confirm =  data;
        });
  }
 
}