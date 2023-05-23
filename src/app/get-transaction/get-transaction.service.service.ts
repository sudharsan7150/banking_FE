import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetTransactionServiceService {

  constructor(private http:HttpClient) {


   }

     getData(toAcc:any){
   return this.http.get('http://localhost:3000/get_transaction?toAcc='+ toAcc);
}
}