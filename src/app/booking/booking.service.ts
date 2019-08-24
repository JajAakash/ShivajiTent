import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Login } from '../login/login';
import {BookingDetails} from './bookingDetails'
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private infoservive:InformationService,private restservice:RestService) { }

  getBookingdetails():Observable<BookingDetails[]>{
    return this.restservice.get(this.infoservive.bookingUrl+this.infoservive.userName+'/productdetails')

  }


}
