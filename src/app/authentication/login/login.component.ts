
import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NotifierService,NotifierModule } from 'angular-notifier';
import { NotifierComponent } from 'src/app/component/notifier/notifier.component';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from 'src/app/Services/Login/ForgetPassword';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
userName:string="";;
email:string="";
Corporate:string="";
valid:any;


constructor (private service : ForgetPasswordService,public toastService: ToastrService)
{
}
  ngOnInit(): void {

  }

Submit()
{

  this.service.CheckData(this.userName,this.Corporate,this.email).subscribe(
    data => {this.showSuccessMsg(data)},
  error=> this.showErrorMsg());

  
}
showStandard() {
 
  }
  
showSuccessMsg(data:any)
{
console.log(data.success);
if(data.success == true && data.success_message == 'Email sent successfully. Please check your inbox')
{
  this.toastService.success(data.success_message);
}
  else
  {

    this.toastService.error(data.success_message);

  }
}

showErrorMsg()
  {
    this.toastService.error('something unexpected happend');
  }











  loginform = true;
  recoverform = false;
  formItems:any;
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }



  
}


