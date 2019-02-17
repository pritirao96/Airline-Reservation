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
import { HeaderComponent } from './header/header.component';
import { ConfirmBookingComponent } from './Booking/confirm.component';
import { SeatBookingComponent } from './Booking/seats.component';
import { UserBookingComponent } from './Booking/booking.component';
import { PassengerService } from './Booking/booking-service';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmService } from './Booking/confirm-service';
import { ThankyouComponent } from './thankyou/thankyou.component';

@NgModule({
  declarations: [
    AppComponent, SearchFlightComponent, AdminDashBoardComponent, RegistrationComponent, UserLoginComponent, AdminLoginComponent, HeaderComponent,UserBookingComponent,
    SeatBookingComponent, ConfirmBookingComponent, PaymentComponent, ThankyouComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: SearchFlightComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: 'user_login', component: UserLoginComponent },
      { path: 'admin_login', component: AdminLoginComponent },
      { path: 'admin_dashBoard', component: AdminDashBoardComponent },
      { path: 'seats-page', component: SeatBookingComponent},
      { path: 'confirm-page', component: ConfirmBookingComponent},
      { path: 'booking', component: UserBookingComponent},
      { path: 'payment', component: PaymentComponent},
      { path: 'seats-user', component: SeatBookingComponent},
      { path: 'searchFlight', component: SearchFlightComponent},
      { path: 'thankyou', component: ThankyouComponent}
      
    ])
  ],
  providers: [HttpClient, SearchFlightService, RegistrationService, UserLoginService, PassengerService,  AdminLoginService,
  AdminDashBoardService,ConfirmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
