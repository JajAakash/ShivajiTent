import { Injectable } from '@angular/core';
import { Login } from './login';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private informationService: InformationService,private restService:RestService) { }


  login(data:Login): Observable <boolean>{
    return this.restService.post(this.informationService.bookingUrl,data); 

  }
}
