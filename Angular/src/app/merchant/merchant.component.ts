import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {RegestrationService } from "../regestration.service";

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

    form = new FormGroup({
   name: new FormControl('', Validators.required),
   email: new FormControl('', [
     Validators.required,
     Validators.email
   ]),
   password: new FormControl('', [
     Validators.required,
     Validators.minLength(6)
 ]),
  mobileNo : new FormControl('', [
     Validators.required,
     Validators.minLength(10),
     Validators.maxLength(10)
 ]),
   address: new FormControl('',[]),

  });
   constructor(private router: Router,private registerService: RegestrationService) {

   }


   ngOnInit() {
   }

   onSubmit(){
     alert(JSON.stringify(this.form.value));
     this.registerService.addMerchant(this.form.value).subscribe();
     this.router.navigateByUrl('/login')
   }


}
