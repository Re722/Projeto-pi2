import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: any = {
    "name":"",
    "price":"",
    "value":"",
    "total":"",
    "Qtotal":""
    
    
  }   

  constructor(public produtoService:ProdutoService,private router: Router) { }

  ngOnInit(): void {

  }
  createProduto(): void {
    
    this.produtoService.createProduto(this.produtos).subscribe(()=>{
       this.produtoService.showMessage('produto cadastrado!')
       this.router.navigate(['/lerprodutos'])
     })
   }
   cancel():void{
     this.router.navigate(['/menu'])
   }

}
