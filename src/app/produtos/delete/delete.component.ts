import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from 'src/app/produto.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  produtos: any={
    "name":"",
    "price":"",
    "value":"",
    "total":"",
    "Qtotal":""
  } 

  constructor(private produtosService:ProdutoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    this.produtosService.readById(id).subscribe(produtos => {
      this.produtos=produtos
       
      
    });
  }

    delete():void {
    this.produtosService.delete(this.produtos).subscribe(()=> {
      this.produtosService.showMessage('PRODUTO EXCLUIDO')
      this.router.navigate(["/lerprodutos"])
    })
  }

  cancel(): void  {
    this.router.navigate(["/lerprodutos"])
  }

  

  }


