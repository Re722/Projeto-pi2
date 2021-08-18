import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {FormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { VendasComponent } from './vendas/vendas.component';
import { ComprasComponent } from './compras/compras.component';
import { ClientesComponent } from './clientes/clientes.component';
import { LerprodutosComponent } from './lerprodutos/lerprodutos.component';
import { LervendasComponent } from './lervendas/lervendas.component';
import { VendaUpdateComponent } from './vendas/venda-update/venda-update.component';
import { DeleteComponent } from './produtos/delete/delete.component';
import { ListarvendasComponent } from './produtos/listarvendas/listarvendas.component';
import { UpdateComponent } from './produtos/update/update.component';
import { VenderComponent } from './produtos/vender/vender.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    LoginComponent,
    MenuComponent,
    VendasComponent,
    ComprasComponent,
    ClientesComponent,
    LerprodutosComponent,
    LervendasComponent,
    VendaUpdateComponent,
    DeleteComponent,
    ListarvendasComponent,
    UpdateComponent,
    VenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
