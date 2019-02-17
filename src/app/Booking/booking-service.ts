
import { Injectable,  OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Passenger } from './passenger';

@Injectable()

export class PassengerService {
    seats: number;
    pass : Passenger[];
    
constructor(private http:HttpClient){

}
    sendToServer(url,passenger){
        //our code to be communicated with the server will be here
     return this.http.post(url,passenger);
     
      }
    
}