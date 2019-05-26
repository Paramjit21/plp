import { Injectable } from '@angular/core';
import {Customer} from './Customer';
import {Merchant} from './Merchant';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request,Headers, RequestMethod} from '@angular/http';
import { Observable } from 'rxjs/';


@Injectable({
  providedIn: 'root'
})
export class RegestrationService {

  constructor(private http:HttpClient) { }

  handleError(error: Response){
      console.error(error);
      return Observable.throw(error);
  }
  addCustomer(data:Customer){
  {
            let empData = new Customer()
            empData = data
            let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: cpHeaders });
            console.log(empData)
             let msg = this.http.post<any>('http://localhost:8080/CapStoreBoot/customer',empData);
             alert(msg)
             console.log("P")
             return msg;
             }


  }
  login(email: string, password: string): Observable<any>{
    return this.http.post<any>('http://localhost:8080/CapStoreBoot/mlogin', {
      email: email,
      password: password
    });
}

addMerchant(data:Merchant){
{
          let empData = new Merchant()
          empData = data
          console.log(empData)
           let msg = this.http.post<any>('http://localhost:8080/CapStoreBoot/merchant',empData);
console.log(msg)
return msg;
           }
}
}
