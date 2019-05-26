import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

{path: "merchant",component:MerchantComponent},
{path: "login",component:LoginComponent},
{path: "user",component:UserComponent},
{path: "forgotpassword",component:ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
