import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-lerprodutos',
  templateUrl: './lerprodutos.component.html',
  styleUrls: ['./lerprodutos.component.css']
})
export class LerprodutosComponent implements OnInit {

  produtos: any 
  
   
  displayedColumns = [ 'id',  'name',  'price',  'value',  'total',  'action'];

  constructor(private produtoservice:ProdutoService) { }

  ngOnInit(): void {
    this.produtoservice.read().subscribe(produtos => {
      this.produtos=produtos
      console.log(produtos)
    })
    }
  }


