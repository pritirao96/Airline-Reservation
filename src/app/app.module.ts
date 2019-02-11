import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './User/Register/register.component';
import { RegisterService } from './User/Register/register-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'register', component: RegisterComponent}
    ])
  ],
  providers: [RegisterService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
