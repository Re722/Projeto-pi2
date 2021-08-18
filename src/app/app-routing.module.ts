import { AuthGuard} from './auth-guard';
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
  {path : 'menu' ,component :MenuComponent,canActivate:[AuthGuard]},
  {path : 'produtos' , component :ProdutosComponent,canActivate:[AuthGuard]},
  {path : 'produtos/update/:id', component:UpdateComponent,canActivate:[AuthGuard]},
  {path : 'lerprodutos', component:LerprodutosComponent,canActivate:[AuthGuard]},
  {path : 'produtos/delete/:id',component:DeleteComponent,canActivate:[AuthGuard]},
  {path : 'produtos/vender/:id',component:VenderComponent,canActivate:[AuthGuard]},
  {path : 'produtos/listarvendas',component:ListarvendasComponent,canActivate:[AuthGuard]},
  {path : 'clientes' , component :ClientesComponent,canActivate:[AuthGuard]},
  {path : 'compras' , component :ComprasComponent,canActivate:[AuthGuard]},
  {path : 'vendas' , component :VendasComponent,canActivate:[AuthGuard]},
  {path : 'lervendas', component:LervendasComponent,canActivate:[AuthGuard]},
  {path :'vendas/venda-update/:id',component:VendaUpdateComponent,canActivate:[AuthGuard]},  
  {path : '',component:AppComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
