import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  baseUrl= "http://localhost:3000/vendas"

  constructor(private snackBar: MatSnackBar,private http:HttpClient) { }
  showMessage(msg:string): void{
    this.snackBar.open(msg,'X',{
      duration:3000,
      horizontalPosition:"center",
      verticalPosition:"top"
    })
  }
  createVendas(vendas:any): Observable<any[]> {
    return this.http.post<any>(this.baseUrl,vendas)
  }

  read():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl)
  }
  readById(id: any):Observable<any>{
    const url=`${this.baseUrl}/${id}` 
    return this.http.get<any[]>(url)
  }
  update(vendas:any):Observable<any[]>{
   const url=`${this.baseUrl}/${vendas.id}`
   return this.http.put<any[]>(url,vendas)

  }
  delete(id:any): Observable<any[]> {
   const url=`${this.baseUrl}/${id}`
    return this.http.delete<any>(url)
  }
 

}

