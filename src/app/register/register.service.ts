import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import{Register} from './register';
import { InformationService } from '../information.service';
import { RestService } from '../rest.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private infoService:InformationService,private restService:RestService) { }

  makeBooking(data:Register):Observable<Register[]>{
    console.log("hete*******here(((((((((((((")
      
    return this.restService.post(this.infoService.bookingUrl,data);

  }
}
