import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../user';
import { LoginStatus } from '../login-status';


@Injectable()
export class UserLoginService{
    
    users: User[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(users:User) : Observable<LoginStatus>{
      let url = "http://localhost:8084/user/verify";
      return this.http.post<LoginStatus>(url, users);
    }
}