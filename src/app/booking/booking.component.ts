import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import{BookingDetails} from './bookingDetails';
import { InformationService } from '../information.service';
import { customerDetails } from './customerDetails';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  bookingDetails: BookingDetails[];
  customerDetails: customerDetails[];
  errorMsg: string;
  errorMsg2: string;
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
    this.getCustomerDetails();
  }
  getCustomerDetails(){
    this.bookingService.getCustomerDetails().subscribe(
      customerDetails=>this.customerDetails=customerDetails,
      error => this.errorMsg2 = error
    )
  }



  ngOnInit() {
    
    this.getBookingdetails();
  }

}
