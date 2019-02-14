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
    return this.http.get<Flight[]>(url)
  }
}

