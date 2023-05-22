import { Component } from '@angular/core';
import { ServiceGetAccountService } from './service.get-account.service';
@Component({
  selector: 'app-get-account',
  templateUrl: './get-account.component.html',
  styleUrls: ['./get-account.component.css']
})
export class GetAccountComponent {
  list:any

 constructor(private _servicegetaccount:ServiceGetAccountService){}


onGetAccount(accno:string){
this._servicegetaccount.getData(accno).subscribe(data=> {
  this.list=data;

console.log()
})
}
}
