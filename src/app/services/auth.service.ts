import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import * as jwtDecode from "jwt-decode";

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

    let decoded = jwtDecode(token);
    if (!decoded.exp) {
      return true;
    }
    var current_time = Date.now().valueOf() / 1000;
    if (decoded.exp < current_time) {
      return false;
    }
  }
}
