import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TransactionServiceService {

  constructor(private http:HttpClient ) { 

  }

 getdata(){
   return this.http.get('http://localhost:3000/transaction');
 }

}
