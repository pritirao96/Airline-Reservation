import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../User/user';

@Injectable()
export class HomeService{
    
    users: User[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(url, user){

      return this.http.post(url, user);
      
    }
}