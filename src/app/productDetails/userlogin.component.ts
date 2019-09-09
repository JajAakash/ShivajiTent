import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';
import { ProductDetailsService } from './product-details.service';
import{ProductDetails} from './productDetails';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  productDetails: ProductDetails[];
  errorMsg: string;
  getbookingForm:FormGroup;
  constructor(private productDetailsService: ProductDetailsService,private formbuilder: FormBuilder,private router:Router,private informationService:InformationService) { }
  
  getBookingDetails(){
      this.informationService.custId=this.getbookingForm.value.custId;
      this.router.navigate(['/booking']);
  }

  ngOnInit() {
    this.getbookingForm=this.formbuilder.group({
      custId: ['',[Validators.required]]
    });
 
  }

}
