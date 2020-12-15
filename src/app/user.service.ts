import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { LoginDto } from './dto/LoginDto';
import { ApplicationDto } from './dto/ApplicationDto';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  
  url = 'http://localhost:8080/';
  
  loginUser(login : LoginDto){​​​
    return this.http.post(this.url+"userlogin",login, {​​​responseType: 'text'}​​​​​​​​​​);      
  }​​​
 
  registerUser(register : ApplicationDto){​​​
    return this.http.post(this.url+"register",register,{​​​​​​​​​​responseType: 'text'}​​​​​​​​​​); 
  }​​​

}
