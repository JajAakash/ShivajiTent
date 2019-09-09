import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
import { Login } from '../login/login';
import {BookingDetails} from './bookingDetails'
import { Observable, from } from 'rxjs';
import { customerDetails } from './customerDetails';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private infoservive:InformationService,private restservice:RestService) { }

  getBookingdetails():Observable<BookingDetails[]>{
    console.log(this.infoservive.bookingUrl+this.infoservive.custId+'/productdetails')
    return this.restservice.get(this.infoservive.bookingUrl+this.infoservive.custId+'/productdetails')

  }

  getCustomerDetails():Observable<customerDetails[]>{
    return this.restservice.get(this.infoservive.customerDetailsUrl+this.infoservive.custId+'/user')
  }


}
