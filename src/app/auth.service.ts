import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './login/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutentificado:boolean = false;

  constructor(private router:Router) { }
  login(usuario:Usuario){
    if(usuario.nome === 'admin' && usuario.senha === 'admin') {

      this.usuarioAutentificado= true
      alert('Dados validos ')
      this.router.navigate(['/menu'])
    }else{
      this.usuarioAutentificado= false 
      alert('Dados Invalidos')
    }
  }
  usuarioEstaAutentificado(){
    return this.usuarioAutentificado;
  }

  logout() {                            
    this.usuarioEstaAutentificado;
    this.router.navigate(['/login']);
  }
}

 






