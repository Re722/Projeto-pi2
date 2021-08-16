import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor( private router:Router,
    private authService:AuthGuardService) { }
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

