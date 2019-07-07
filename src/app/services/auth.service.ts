import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
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
    
    return false;
  }
}
