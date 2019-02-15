import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable()
export class UserLoginService{
    
    users: User[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(users:User) : Observable<object>{
      let url = "http://localhost:8084/user/verify";
      return this.http.post(url, users);
    }
}