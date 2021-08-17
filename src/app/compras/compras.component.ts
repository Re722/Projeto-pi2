import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  compras:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.compras);
  }
  cancel(){
    console.log(this.compras);
  }

}
