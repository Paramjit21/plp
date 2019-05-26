import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CapStore';
  form = new FormGroup({
 username: new FormControl('', Validators.required),
 password: new FormControl('', Validators.required)
});
onSubmit(){
  alert(JSON.stringify(this.form.value));
}
}
