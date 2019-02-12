import { Component, Injectable } from "@angular/core";
import { SearchFlight } from './search-flight';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector:'search-flight',
    templateUrl:'./search-flight.component.html'
})

@Injectable()
export class searchFlightService{
    flights: SearchFlight[]

    constructor(private http:HttpClient) {

    }

    retriveFromServer(url): Observable<SearchFlight[]> {
        return this.http.get<SearchFlight[]>(url)
    }
}
    
