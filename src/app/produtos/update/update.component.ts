import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  produtos: any ={
    "name":"",
    "price":"",
    "value":"",
    "total":""
    
  }   

  constructor(private produtosService:ProdutoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {   
      const id=this.route.snapshot.paramMap.get('id')
       this.produtosService.readById(id).subscribe(produtos => {
         this.produtos=produtos
          
         
       });
      }
     updateProduto(): void {
       this.produtosService.update(this.produtos).subscribe(()=> {
         this.produtosService.showMessage('produto atualizado')
         this.router.navigate(["/lerprodutos"])
       })
     }
     cancel(): void  {
       this.router.navigate(["/lerprodutos"])
     }
   
  }


