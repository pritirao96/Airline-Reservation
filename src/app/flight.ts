import { FlightPrice } from './flightprice';
import { Time } from '@angular/common';

export class Flight {
  constructor(private flightNumber: number,
    private source: String,
    private destination: String,
    private arrivalTime: Time,
    private departureTime: Time,
    private flightdate:String,
    private duration: Time,
    //private flightPrice: FlightPrice
    ) {

  }
}