import { Component } from '@angular/core';
import { AllAccountServiceService } from './all-account.service.service';
@Component({
  selector: 'app-all-account',
  templateUrl: './all-account.component.html',
  styleUrls: ['./all-account.component.css']
})
export class AllAccountComponent {
allaccount:any
 
constructor(private _allaccountservice:AllAccountServiceService){}


getAllData(){
 this._allaccountservice.getData().subscribe(data=> {
  this.allaccount=data;


  });

}
}
