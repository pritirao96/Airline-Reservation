import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { LoginStatus } from '../login-status';
import { Login } from '../login';

@Injectable()
export class AdminLoginService{
    
    admins: Login[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(admins) : Observable<LoginStatus>{
      let url = "http://localhost:8084/admin/verify";

      return this.http.post<LoginStatus>(url, admins);
      
    }
}