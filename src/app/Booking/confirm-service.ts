import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfirmBooking } from './confirm';

@Injectable()
export class ConfirmService {
    confirm: ConfirmBooking[];

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}


    // get products from server
    retrieveFromServer(url11) : Observable <ConfirmBooking[]> {
         return this.http.get<ConfirmBooking[]>(url11);
    }
    
}