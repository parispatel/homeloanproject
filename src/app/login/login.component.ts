import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDto } from '../dto/LoginDto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login : LoginDto;

  constructor(private service : UserService, private router : Router) {​​
  this.login = new LoginDto;

}​​



  ngOnInit(): void {​​ 
    sessionStorage.clear();
  }​​

  loginClick(){​​

    this.service.loginUser(this.login).subscribe((data) => {​​

      sessionStorage.setItem("logindata", JSON.stringify(data));

     // console.log(data)

      if(data!= null) {​​

        this.router.navigate(["/"]);

      }​​

  }​​, (err) => {​​

     alert("Invalid Credentials");

      console.log(err);

  }​​)

  }​​



}
