import { Injectable } from "@angular/core";
import { User } from '../user';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class RegisterService{
    
    users: User[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(url): Observable<User[]> {

      return this.http.get<User[]>(url);
      
    }
}