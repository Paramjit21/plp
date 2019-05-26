import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private router: Router) { }
  resetPasswordForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
});
  ngOnInit() {
  }
  onSubmit(){
    alert("Reset Passport Link has been sent to  "+this.resetPasswordForm.value.email);
     this.router.navigateByUrl('/login')
  }
}
