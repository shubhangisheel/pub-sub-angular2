/**
 * Created by shubhangisheel on 2016-10-11.
 */
import {Component} from '@angular/core';

@Component({
  selector: 'user-login',
  templateUrl: '../html/user-login.component.html',
  styleUrls: ['../css/user-login.component.css']
})
export class UserLoginComponent{
    public userName: string;
    public loginPassword: any;
    public firstName: string;
    public lastName:string;
    public email: string;
    public reEnterEmail:string;
    public signUpPassword:any;

  onLogin(){

  }

  onSignUp(){

  }
}
