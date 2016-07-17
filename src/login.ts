import {Component} from 'angular2/core';

@Component({
  selector: 'login',
  templateUrl: './templates/login.html'
})

export class LoginComponent{
  public username:string;
  public password:string;

  constructor(){
    // this.username = "Troy";
    // this.password = "my secret";
  }

  onSubmit(){
    console.log(JSON.stringify(this));
  }
}
