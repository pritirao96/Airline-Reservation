
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable()
export class ProfileService {
    users: User[];
    from: string;
    to: string;

    // injecting Angular's HttpClient API
    constructor(private http: HttpClient) {}


    // get products from server
    retrieveFromServer(url2) : Observable <User[]> {
         return this.http.get<User[]>(url2);
    }
    
}