import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Admin } from '../admin';
import { Observable } from 'rxjs';

@Injectable()
export class AdminLoginService{
    
    admins: Admin[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(admins:Admin) : Observable<object>{
      let url = "http://localhost:8084/admin/verify";

      return this.http.post(url, admins);
      
    }
}