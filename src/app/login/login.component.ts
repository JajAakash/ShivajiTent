import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { InformationService } from '../information.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submit: boolean;
  errorMsg: string;
  loginForm: FormGroup;

  constructor(private formbuilder: FormBuilder,private router:Router,private informationService:InformationService,private loginService:LoginService ) {}
  login(){
    
    this.submit=true;
      this.loginService.login(this.loginForm.value).subscribe(        
        data=>{
          if(data){
            this.informationService.userName=this.loginForm.value.name;
            this.informationService.phoneNo=this.loginForm.value.phoneNo;
            this.informationService.funDate=this.loginForm.value.funDate;
            this.router.navigate(['/booking'])
          }
          else{
            this.errorMsg='Invalid Phone number or Function Date';
            this.submit=false;
          }
        },
        error=>{
          this.errorMsg=error;
          this.submit=false;
        }
      )
   }
  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      phoneNo: ['',[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
      name: ['',[Validators.required]],
      funDate: ['',[Validators.required]]
    });
  }
}
