import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RestService } from './rest.service';
import { LoginService } from './login/login.service';
import { InformationService } from './information.service';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserloginComponent,
    RegisterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    RestService,
    LoginService,
    InformationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
