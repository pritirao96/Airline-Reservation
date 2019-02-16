import { Component, OnInit } from '@angular/core';
import { SearchFlightService } from './searchFlight-service';
import { Flight } from '../flight';
import { formatDate } from '@angular/common';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'searchFlight',
  templateUrl: './searchFlight.component.html',
  styleUrls: ['./searchFlight.component.css']
})

export class SearchFlightComponent implements OnInit {

  title: String = "List of flights"
  flights: Flight[];

  source: String;
  destination: String;
  users: User= new User();

  constructor(public fs: SearchFlightService, private router: Router) { }

  ngOnInit() {
  }

  submit(source, destination, flightdate) {
    //this.users = JSON.parse(localStorage.getItem('userDetails'))['token'];
    //console.log(this.users.fName);
    let url = "http://localhost:8084/flight/" + source + "/" + destination + "/" + flightdate;
    console.log(url);
    this.fs.retriveFromServer(url).subscribe(
      data => {
        this.flights = data;
        console.log(data);
        
      });
  }

  divert(){
    if(localStorage.getItem('userDetails')!=null){
      this.router.navigate(['./admin_dashBoard']);
    }
    else{
      this.router.navigate(['./user_login']);
    }
  }

}
