import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas.service';

@Component({
  selector: 'app-lervendas',
  templateUrl: './lervendas.component.html',
  styleUrls: ['./lervendas.component.css']
})
export class LervendasComponent implements OnInit {

  vendas:any

  displayedColumns = ['id',  'total',    'price',    'value',  'name',  'date',   'action'];


  constructor(private vendasService:VendasService) { }

  ngOnInit(): void {
    this.vendasService.read().subscribe(vendas => {
      this.vendas=vendas
      console.log(vendas)
    })
    }
  }


