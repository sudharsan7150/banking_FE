import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AllAccountServiceService {

  constructor(private http:HttpClient) {

   }

getData(){
   return this.http.get('http://localhost:3000/all_account');
}

}
