import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  get() {
    throw new Error('Method not implemented.');
  }

  baseUrl= "http://localhost:3000/produtos";
  

  constructor(private snackBar: MatSnackBar,private http:HttpClient) { }
  showMessage(msg:string):void{
    this.snackBar.open(msg,'XX',{
      duration:5000,
      horizontalPosition:"center",
      verticalPosition:"top",
    })
  }
   createProduto(produtos:any): Observable<any[]> {
     return this.http.post<any[]>(this.baseUrl,produtos)
   }

   read():Observable<any[]>{
     return this.http.get<any[]>(this.baseUrl)
   }
   readById(id: any):Observable<any>{
     const url=`${this.baseUrl}/${id}` 
     return this.http.get<any[]>(url)
   }
   update(produtos:any):Observable<any[]>{
    const url=`${this.baseUrl}/${produtos.id}`
    return this.http.put<any[]>(url,produtos)

   }
   delete(produtos:any):Observable<any[]> {
    const url=`${this.baseUrl}/${produtos.id}`
     return this.http.delete<any[]>(url)
   }
}
