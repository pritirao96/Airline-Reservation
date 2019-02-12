import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './User/Register/register.component';
import { RegisterService } from './User/Register/register-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeService } from './home/home.service';
import { SearchFlightComponent } from './search-flight/search-flight.component';
import { searchFlightService } from './search-flight/search-flight-service';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    RegisterComponent, SearchFlightComponent
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
