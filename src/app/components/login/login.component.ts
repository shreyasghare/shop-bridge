import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  checkLogin(){
    this.loginService.validateUser(this.userName, this.password);
    this.router.navigateByUrl("/admin");
  }
}
