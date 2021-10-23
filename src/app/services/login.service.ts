import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { adminList } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  currentUser: any;

  validateUser(userName:string, password:string):boolean{
    // api call to check user is valid or not
    let userDetails = adminList.find(user => user.userName === userName && user.password === password);
    if(userDetails?.userId) this.setCurrentUser = userDetails;
    return userDetails?.userId ? true : false;
  }

  get getCurrentUser(){
    return this.currentUser;
  }
  set setCurrentUser(userDetails:{userId:number, userName: string, password: string}){
    this.currentUser = userDetails;
  }

  isUserLoggedIn(){
    return this.currentUser && this.currentUser.userId;
  }

}
