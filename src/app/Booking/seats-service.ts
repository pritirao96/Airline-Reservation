import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SeatService {
    
constructor(private http:HttpClient){

}
sendToServer(url,seats){
    //our code to be communicated with the server will be here
     return this.http.post(url,seats) ;
  }
}