import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchFlightService } from './searchFlight/searchFlight-service';
import { AdminDashBoardComponent } from './adminDashBoard/adminDashBoard.component';
import { RouterModule } from '@angular/router';
import { SearchFlightComponent } from './searchFlight/searchFlight.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationService } from './registration/registration.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent, SearchFlightComponent, AdminDashBoardComponent, RegistrationComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'registration', component: RegistrationComponent },
      { path: 'login', component: LoginComponent },

    ])
  ],
  providers: [HttpClient, SearchFlightService, RegistrationService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
