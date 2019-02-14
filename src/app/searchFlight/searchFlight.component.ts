import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from './searchFlight-service';
import { Flight } from '../flight';
import { formatDate } from '@angular/common';

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

  constructor(public fs:SearchFlightService) { }

  ngOnInit() {
  }

  submit(source, destination,flightdate) {
   let url = "http://localhost:8084/flight/"+source+"/"+destination+"/"+flightdate;
    console.log(url);
    this.fs.retriveFromServer(url).subscribe(
      data => {
        this.flights = data;

      });
  }

}
