import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as jwtDecode from "jwt-decode";
import { JwtHelperService } from "@auth0/angular-jwt";
const helper = new JwtHelperService();

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = "http://localhost:3000/authenticate"
  constructor(private client: HttpClient) { }


  login(credentials) {
    console.log(credentials);
    return this.client.post(this.url,
      JSON.stringify(credentials), httpOptions).pipe(
        map(res => {
          if (res && res['token']) {
            localStorage.setItem("token", res['token']);
            return true;
          } else {
            return false;
          }
        })
      )
  }

  logout() {
    localStorage.removeItem("token");
  }

  isLoggedIn() {
    let token = localStorage.getItem('token');
    if (!token)
      return false;
    const decodedToken = helper.decodeToken(token);
    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);
    return true; //until the expiration time is implemented on the server side
  }
  get currentUser() {
    let token = localStorage.getItem("token");
    if (!token)
      return null;

    const decodedToken = helper.decodeToken(token);
    return decodedToken;
  }
}
