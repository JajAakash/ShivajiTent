import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from './productDetails';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor( private restService:RestService,private infoService:InformationService)  { }
  // getBookingDetails():Observable<ProductDetails[]>{
  //   this.restService.get(this.infoService.bookingUrl+this.infoService.custId+'productDetails')
  //   return ;

  // }
}
