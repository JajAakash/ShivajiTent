import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import{BookingDetails} from './bookingDetails';
import { InformationService } from '../information.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingDetails: BookingDetails[];
  errorMsg: string;
  name:string;
  funDate:string;
  phoneNo:number;
  constructor(private bookingService:BookingService,private infoservice:InformationService) { }
  getBookingdetails(){
    this.name=this.infoservice.userName;
    this.phoneNo=this.infoservice.phoneNo;
    this.funDate=this.infoservice.funDate;
    this.bookingService.getBookingdetails().subscribe(
    
      item=>this.bookingDetails=item,
      error => this.errorMsg = error

    );
    console.log("44444444444444444444444444");
  }

  ngOnInit() {
    
    this.getBookingdetails();
  }

}
