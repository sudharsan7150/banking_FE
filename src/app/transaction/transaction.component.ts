import { Component } from '@angular/core';
import { TransactionServiceService } from './transaction.service.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

transaction:any

constructor (private transactionservice:TransactionServiceService){}


getAllData(){
 this.transactionservice.getdata().subscribe(data=> {
  this.transaction=data;


  });

}

}
