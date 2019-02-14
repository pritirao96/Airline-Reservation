import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Flight } from '../flight';
import { Observable } from 'rxjs';

@Injectable()
export class AdminDashBoardService{
    
    flights: Flight[]
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(url):Observable<Flight[]>{

      return this.http.get<Flight[]>(url);
      
    }

    sendtoServer(url,flight){
        return this.http.post(url,flight);
    }
}