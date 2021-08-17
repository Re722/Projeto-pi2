import { AuthGuardService } from './auth-guard.service';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { UpdateComponent } from './produtos/update/update.component';
import { LerprodutosComponent } from './lerprodutos/lerprodutos.component';
import { DeleteComponent } from './produtos/delete/delete.component';
import { VenderComponent } from './produtos/vender/vender.component';
import { ListarvendasComponent } from './produtos/listarvendas/listarvendas.component';
import { ComprasComponent } from './compras/compras.component';
import { VendasComponent } from './vendas/vendas.component';
import { LervendasComponent } from './lervendas/lervendas.component';
import { VendaUpdateComponent } from './vendas/venda-update/venda-update.component';

const routes: Routes = [ 

  {path : 'login', component :LoginComponent},  
  {path : 'menu' ,component :MenuComponent,canActivate:[AuthGuardService]},
  {path : 'produtos' , component :ProdutosComponent,canActivate:[AuthGuardService]},
  {path : 'produtos/update/:id', component:UpdateComponent,canActivate:[AuthGuardService]},
  {path : 'lerprodutos', component:LerprodutosComponent,canActivate:[AuthGuardService]},
  {path : 'produtos/delete/:id',component:DeleteComponent,canActivate:[AuthGuardService]},
  {path : 'produtos/vender/:id',component:VenderComponent,canActivate:[AuthGuardService]},
  {path : 'produtos/listarvendas',component:ListarvendasComponent,canActivate:[AuthGuardService]},
  {path : 'clientes' , component :ClientesComponent,canActivate:[AuthGuardService]},
  {path : 'compras' , component :ComprasComponent,canActivate:[AuthGuardService]},
  {path : 'vendas' , component :VendasComponent,canActivate:[AuthGuardService]},
  {path : 'lervendas', component:LervendasComponent,canActivate:[AuthGuardService]},
  {path :'vendas/venda-update/:id',component:VendaUpdateComponent,canActivate:[AuthGuardService]},  
  {path : '',component:AppComponent,canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
