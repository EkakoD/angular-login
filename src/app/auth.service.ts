import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(userInfo: User){
    localStorage.setItem('ACCESS_TOKEN',"access_token");
  }

  public isLoggedIn(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  getTables() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  getUser(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
