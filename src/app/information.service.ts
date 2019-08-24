import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  userName:string;
  phoneNo:number;
  funDate:string;
  loginUrl = 'http://localhost:7100/login';
  bookingUrl='http://localhost:5100/bookings/';
}
