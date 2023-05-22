import { Component,Input} from '@angular/core';
import { TransferServiceService } from './transfer.service.service';
import { query } from 'express';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
 
transfer:any;


constructor(private service:TransferServiceService){}

onTransferAccount(toAcc,fromAcc,amount:string){
this.service.putData(toAcc,fromAcc,amount).subscribe(data=> {
  this.transfer=data;

console.log(fromAcc,amount)
})
}
}

