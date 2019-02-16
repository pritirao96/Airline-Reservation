import { FlightPrice } from './flightprice';

export class Flight {
  constructor(private flightNumber: number,
    private source: String,
    private destination: String,
    private arrivalTime: String,
    private departureTime: String,
    private flightDate:Date,
    private duration: String,
    private flightPrice: FlightPrice
    ) {

  }
}