import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {map , take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router:Router,
    private authService:AuthService
  ) { }
    canActivate(
      //next: ActivatedRouteSnapshot,
      route:ActivatedRouteSnapshot,
      state:RouterStateSnapshot
      
    ) :Observable<boolean> | boolean {

      if(this.authService.usuarioEstaAutentificado()){

        return true;
      }
      this.router.navigate(['/login']);

      return false;
    }

    }
    
  
  
