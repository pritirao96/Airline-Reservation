import { Component, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../flight';

@Component({
  selector: 'searchFlight',
  templateUrl: './searchFlight.component.html'
})

@Injectable()
export class SearchFlightService {
  flights: Flight[]

  constructor(private http: HttpClient) {

  }

  retriveFromServer(url): Observable<Flight[]> {
    console.log(this.http.get<Flight[]>(url));
    return this.http.get<Flight[]>(url);

  }
}

