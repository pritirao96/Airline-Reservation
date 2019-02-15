import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { AdminDashBoardService } from './adminDashBoard.service';
import { FlightPrice } from '../flightprice';

@Component({
  selector: 'app-adminDashBoard',
  templateUrl: './adminDashBoard.component.html',
  styleUrls: ['./adminDashBoard.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  flights: Flight[];
  constructor(private as: AdminDashBoardService) { }

  ngOnInit() {
    let url="http://localhost:8084/flight"
    this.as.retriveFromServer(url).subscribe(data=>{
      this.flights=data;
    });
    //return this.flights;
  }

  add(pform){
    let url="http://localhost:8084/addFlight"
    this.as.sendtoServer(url,this.flights).subscribe(data=>{
      console.log(data);
    })
  }

  delete(flight_id){
    let url="http://localhost:8084/flight/"+flight_id;
    this.as.sendtoServer(url,this.flights).subscribe(data=>{
      alert("hi");
      console.log(data);
    })
  }
}
