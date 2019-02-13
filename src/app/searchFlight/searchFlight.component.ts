import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from './searchFlight-service';
import { SearchFlight } from './searchFlight';

@Component({
  selector: 'searchFlight',
  templateUrl: './searchFlight.component.html',
  styleUrls: ['./searchFlight.component.css']
})

export class SearchFlightComponent implements OnInit {

  title: String = "List of flights"
  flights: SearchFlight[]
  constructor(public fs:SearchFlightService) { }

  ngOnInit() {
  }

  submit( source, destination) {
    //  let url="http://localhost:8084/flight/Chennai/Banglore"
   let url = "http://localhost:8084/flight/"+source+"/"+destination;
    console.log(url);
    this.fs.retriveFromServer(url).subscribe(
      data => {
        this.flights = data;
        console.log(this.flights);
      });
  }
}
