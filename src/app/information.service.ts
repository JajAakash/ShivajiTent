import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor() { }
  loginUrl = 'http://localhost:8000/login';
}
