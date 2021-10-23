import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SharedDialogComponent } from '../comman/shared-dialog/shared-dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if(this.loginService.validateUser(this.userName, this.password)){
      this.router.navigateByUrl("/admin");
    }
    else{
      this.dialog.open(SharedDialogComponent, {
          disableClose: true,
          data:{
            message: "username or password is invalid please try again !!!",
            title: "Warning",
            buttonText: { cancel: 'OK' }
          }
        }
      ).afterClosed().subscribe(res => {

      });
    }
  }
}
