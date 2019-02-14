import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import { Admin } from '../admin';

@Injectable()
export class AdminLoginService{
    
    admins: Admin[];
    
    constructor(private http:HttpClient) {

    }
    retriveFromServer(url, admin){

      return this.http.post(url, admin);
      
    }
}