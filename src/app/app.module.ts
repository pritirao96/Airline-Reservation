import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchFlightService } from './searchFlight/searchFlight-service';
import { AdminDashBoardComponent } from './adminDashBoard/adminDashBoard.component';
import { RouterModule } from '@angular/router';
import { SearchFlightComponent } from './searchFlight/searchFlight.component';
import { RegistrationComponent } from './registration/registration.component';
import { RegistrationService } from './registration/registration.service';
import { UserLoginComponent } from './user_login/user_login.component';
import { UserLoginService } from './user_login/user_login.service';
import { AdminLoginComponent } from './admin_login/admin_login.component';
import { AdminLoginService } from './admin_login/admin_login.service';
import { AdminDashBoardService } from './adminDashBoard/adminDashBoard.service';

@NgModule({
  declarations: [
    AppComponent, SearchFlightComponent, AdminDashBoardComponent, RegistrationComponent, UserLoginComponent, AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'registration', component: RegistrationComponent },
      { path: 'user_login', component: UserLoginComponent },
      { path: 'admin_login', component: AdminLoginComponent },
      { path: 'search_flight', component: SearchFlightComponent },
      { path: 'admin_dashBoard', component: AdminDashBoardComponent },
    ])
  ],
  providers: [HttpClient, SearchFlightService, RegistrationService, UserLoginService, AdminLoginService,
  AdminDashBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
