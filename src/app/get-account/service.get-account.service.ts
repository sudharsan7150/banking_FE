import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceGetAccountService {

  constructor(private http:HttpClient) {

  }
  
  getData(accno:any){
   return this.http.get('http://localhost:3000/get_account?accno='+ accno);
   
}

}
