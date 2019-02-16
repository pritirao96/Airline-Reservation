import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';

@Injectable()
export class PassengerDisplayService {

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}


    // get products from server
    retrieveFromServer(url11) : Observable <Passenger[]> {
         return this.http.get<Passenger[]>(url11);
    }
}