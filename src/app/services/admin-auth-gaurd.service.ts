import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGaurd implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(){
    if(this.authService.currentUser.admin) return true;
    else{
      this.router.navigate(['/no-access'])
      return false;
    }
  }
}
