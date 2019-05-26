import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {RegestrationService } from "../regestration.service";
import { Router } from '@angular/router';
import {Customer} from '../Customer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: RegestrationService, private router: Router) {
  }
  form = new FormGroup({
  username: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required)
  });
  onSubmit(){
  alert(JSON.stringify(this.form.value));
  }

  tryLogin() {
    this.api.login(
      this.form.value.username,
      this.form.value.password
  ).subscribe(()=>{});
  }
  ngOnInit() {
  }

}
