import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home/home.service';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { searchFlightService } from './search-flight/search-flight-service';
import { AdminDashBoardComponent } from './adminDashBoard/adminDashBoard.component';



@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, SearchFlightComponent, AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeService, HttpClient,searchFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
