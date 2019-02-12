import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home/home.service';
import { SearchFlightComponent } from './searchFlight/searchFlight.component';
import { SearchFlightService } from './searchFlight/searchFlight-service';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent,
    SearchFlightComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HomeService, HttpClient,SearchFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
