import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeService } from './home/home.service';
import { SearchFlightService } from './searchFlight/searchFlight-service';
import { AdminDashBoardComponent } from './adminDashBoard/adminDashBoard.component';
import { RouterModule } from '@angular/router';
import { SearchFlightComponent } from './searchFlight/searchFlight.component';



@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, SearchFlightComponent, AdminDashBoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'registration', component: HomeComponent},
      {path: 'login', component: SearchFlightComponent},

    ])
  ],
  providers: [HomeService, HttpClient,SearchFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
