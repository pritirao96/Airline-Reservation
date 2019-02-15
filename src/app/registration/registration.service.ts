import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { User } from '../user';
import { Observable } from 'rxjs';


@Injectable()
export class RegistrationService{
    
    users: User[];
    url: String;
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(users:User) : Observable<object>{
      let url = "http://localhost:8084/addUser";
      return this.http.post(url, users);
      
    }
}