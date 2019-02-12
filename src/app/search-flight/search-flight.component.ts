import { Component, OnInit } from '@angular/core';
import { searchFlightService } from './search-flight-service';
import { SearchFlight } from './search-flight';

@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})

export class SearchFlightComponent implements OnInit {

  title: String = "List of flights"
  flights: SearchFlight[]
  constructor(public fs:searchFlightService) { }

  ngOnInit() {
  }

  submit( source, destination) {
    let url = "http://localhost:9024/searchFlight";
    console.log(url);
    this.fs.retriveFromServer(url).subscribe(
      data => {
        this.flights = data;
        //console.log(data);
      });
  }
}
