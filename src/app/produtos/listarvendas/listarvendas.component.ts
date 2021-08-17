import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-listarvendas',
  templateUrl: './listarvendas.component.html',
  styleUrls: ['./listarvendas.component.css']
})
export class ListarvendasComponent implements OnInit {

  produtos: any 
  
   
  displayedColumns = [ 'id',  'name',  'price',  'Qtotal',  'pricetotal', 'client',  'action'];

  constructor(private produtoservice:ProdutoService) { }

  ngOnInit(): void {
    this.produtoservice.read().subscribe(produtos => {
      this.produtos=produtos
      console.log(produtos)
    })
    }
  }


