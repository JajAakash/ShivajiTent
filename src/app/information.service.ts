import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProductDetails } from './productDetails/productDetails';

@Injectable({
  providedIn: 'root'
})
export class InformationService {


  
  userName:string;
  custId:string;
  phoneNo:number;
  funDate:string;
  data:FormGroup;
  loginUrl = 'http://localhost:7100/login';
  bookingUrl='http://localhost:4100/booking';
  productDetailsUrl:'http://localhost:5100/booking/';
  customerDetailsUrl='http://localhost:7100/login/'
}
