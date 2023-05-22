import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransferServiceService {

  constructor(private http:HttpClient) { }


  putData(toAcc:any,fromAcc:any,amount:any){

 const body = { title: 'app-transfer' };
   return this.http.put<any>('http://localhost:3000/transfer?toAcc='+ toAcc +'&fromAcc='+ fromAcc +'&amount='+ amount ,body );
   
}
}
