import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {RegestrationService } from "../regestration.service";
import {Customer} from '../Customer';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    form = new FormGroup({
   name: new FormControl('', Validators.required),
   email_id: new FormControl('', [
     Validators.required,
     Validators.email
   ]),
   password: new FormControl('', [
     Validators.required,
     Validators.minLength(6)
 ]),
  mobile : new FormControl('', [
     Validators.required,
     Validators.minLength(10),
     Validators.maxLength(10)
 ]),
   address: new FormControl('',[])


  });
   constructor(private router: Router,private registerService: RegestrationService) { }

   msg = '';
   customer = Customer
   ngOnInit() {
   }
   handleSuccessfulResponse(response)
  {
    this.customer = response;
  }
   onSubmit(){
     alert(JSON.stringify(this.form.value));
     this.registerService.addCustomer(this.form.value).subscribe();
     this.router.navigateByUrl('/login')
   }


}
