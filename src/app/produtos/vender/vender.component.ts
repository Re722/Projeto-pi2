import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-vender',
  templateUrl: './vender.component.html',
  styleUrls: ['./vender.component.css']
})
export class VenderComponent implements OnInit {

  produtos: any ={
    "name":"",
    "price":"",
    "value":"",
    "total":"",
    "Qtotal":"",
    "pricetotal":"",
    "client":""
    

    
  } 

  constructor(private produtosService:ProdutoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    this.produtosService.readById(id).subscribe(produtos => {
      this.produtos=produtos
       
      
    });
  }
  venderProduto(total:any,pricetotal:any): void {
    this.produtos.total=total
    //this.produtos.Qtotal=Qtotal
    this.produtos.pricetotal=pricetotal
    this.produtosService.update(this.produtos).subscribe(()=> {
      this.produtosService.showMessage('Venda Incluida')
      //incluir o update em produto passando os valores da tabela produto e a
      //quantidade nova que é quantidade estoque - q vendida.Passar todos os valores da tabela produto.
      
      this.router.navigate(["/listarvendas"])
    });
  }
  cancel(): void  {
    this.router.navigate(["/lerprodutos"])
  }
  
  

  } 
  
  
 


