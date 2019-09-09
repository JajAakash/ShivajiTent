import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{Register} from './register';
import { productsDTO } from './products';
import { RegisterService } from './register.service';
import { InformationService } from '../information.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  
export class RegisterComponent implements OnInit {

  prodBooking:products[]=[]
  custBooking:Register[];
  makeBookingForm:FormGroup;
  errorMsg:string;
  

  constructor(private formbuilder: FormBuilder,private registerService:RegisterService,private infoService:InformationService) { }

  
  addProducts(){
    console.log("6666666666666");
    this.prodBooking.push(this.makeBookingForm.value)
    for (let entry of this.prodBooking) {
      console.log(entry.unit);
    return "data added";
  }}
  
  makeBooking(){
    
    
    this.makeBookingForm.value.productName="akash";
    this.makeBookingForm.value.funDate="2019-12-12";
    this.makeBookingForm.value.phoneNo="9739113285";
    // this.makeBookingForm.value.prodBooking=this.prodBooking;console.log("ppppppppppppppppppppppppppppp");
    this.makeBookingForm.value.prodBooking=this.prodBooking
    // this.makeBookingForm.value.prodBooking.unit=10;
    // this.makeBookingForm.value.prodBooking.rate=100
    // this.makeBookingForm.value.prodBooking.totalPrice=1000
    
    // this.custBooking.push(this.prodBooking);
    // this.custBooking.push(this.prodBooking);
    
    this.registerService.makeBooking(this.makeBookingForm.value).subscribe(        
    )};
  

  ngOnInit() {
    this.makeBookingForm=this.formbuilder.group({
      productName: ['Chair',[Validators.required]],
      rate: ['50',[Validators.required]],
      unit: ['',[Validators.required]],
      totalPrice:['5000']
    });
  }
  }


