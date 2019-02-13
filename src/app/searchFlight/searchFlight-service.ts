import { Component, Injectable } from "@angular/core";
import { SearchFlight } from './searchFlight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'searchFlight',
  templateUrl: './searchFlight.component.html'
})

@Injectable()
export class SearchFlightService {
  flights: SearchFlight[]

  constructor(private http: HttpClient) {

  }

  retriveFromServer(url): Observable<SearchFlight[]> {
    return this.http.get<SearchFlight[]>(url)
  }
}

