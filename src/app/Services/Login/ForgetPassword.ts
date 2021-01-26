import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from '@angular/common/http';
import { email } from "ngx-custom-validators/src/app/email/validator";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ForgetPasswordService
{
      headers = new HttpHeaders();
  host = "http://52.77.189.188:9090";
constructor(private http:HttpClient)
{



};
CheckData(userName:string,corporateId:string,Email:string)
{
     this.headers = this.headers.set('Content-Type', 'application/json').set('Accept','application/json');
return this.http.post<string>(`${this.host}/LTS/security/forgotPassword`,this.SetRequestBody(userName,corporateId,Email),{headers:this.headers})
.catch(this.errorHandeler);
}

errorHandeler(error:HttpErrorResponse)
{
 

return Observable.throwError(error);
}
SetRequestBody(userName:string,corporateId:string,Email:string) : string
{
    return   `{"corporateid" : "${corporateId}","emailaddress": "${Email}","username":"${userName}"}`;
}



}