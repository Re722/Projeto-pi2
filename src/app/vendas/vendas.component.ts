import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  vendas: any ={
    "total":"",
    "value":"",
    "price":"",
    "name":"",
    "date":""
    
  }  

  constructor(private _snackbar:MatSnackBar,private vendasService:VendasService,private router: Router,private produtoservice:ProdutoService) { }

  ngOnInit(): void {
  }
  createVendas(): void {
    this.vendasService.createVendas(this.vendas).subscribe(()=>{
       this.vendasService.showMessage('venda cadastrada!')
       this.router.navigate(['/vendas'])
     })
   }
  
   cancel():void{
     this.router.navigate(['/vendas'])
   }

   verificar():void{    
    
   }

}
