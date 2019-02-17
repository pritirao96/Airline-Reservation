import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight';
import { AdminDashBoardService } from './adminDashBoard.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminDashBoard',
  templateUrl: './adminDashBoard.component.html',
  styleUrls: ['./adminDashBoard.component.css']
})
export class AdminDashBoardComponent implements OnInit {

  flights: Flight[];
  flight: Flight = new Flight();

  constructor(private as: AdminDashBoardService) { }

  addFlightForm = new FormGroup({
    flightNo: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required),
    arrTime: new FormControl('', Validators.required),
    deparTime: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required)

  })

  ngOnInit() {
    let url="http://localhost:8084/flight"
    this.as.retriveFromServer(url).subscribe(data=>{
      this.flights=data;
    });
    //return this.flights;
  }

  add(pform){
    console.log(this.flight);
    let url="http://localhost:8084/addFlight"
    this.as.sendtoServer(url,this.flight).subscribe(data=>{
      console.log(data);
    })
  }

  delete(flight_id){
    let url="http://localhost:8084/flight/"+flight_id;
    this.as.sendtoServer(url,this.flight).subscribe(data=>{
      alert("hi");
      console.log(data);
    })
  }

  
}
