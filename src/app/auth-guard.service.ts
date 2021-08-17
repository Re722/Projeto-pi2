import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {


  constructor( private router:Router, private authService:AuthService) { }
    canActivate(
      //next: ActivatedRouteSnapshot,
      route:ActivatedRouteSnapshot,
      state:RouterStateSnapshot
      
    ) :Observable<boolean> | boolean {

      if(this.authService){

        return true;
      }
      this.router.navigate(['/login']);

      return false;
    }

    }

