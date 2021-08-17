import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendasService } from 'src/app/vendas.service';

@Component({
  selector: 'app-venda-update',
  templateUrl: './venda-update.component.html',
  styleUrls: ['./venda-update.component.css']
})
export class VendaUpdateComponent implements OnInit {

  vendas:any={
    "total":"",
    "price":"",
    "value":"",
    "name":"",
    "date":""
  }

  constructor(public vendasservice:VendasService,private router:Router,private route:ActivatedRoute) { }
   

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id')
    this.vendasservice.readById(id).subscribe(vendas => {
      this.vendas=vendas
       
      
    });
  }
  updateVendas(): void {
    this.vendasservice.update(this.vendas).subscribe(()=> {
      //this.produtosService.showMessage('produto atualizado')
      this.router.navigate(["/lervendas"])
    })
  }
  cancel(): void  {
    this.router.navigate(["/lervendas"])
  }


  }


