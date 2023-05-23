import { Component } from '@angular/core';
import { GetTransactionServiceService } from './get-transaction.service.service';
@Component({
  selector: 'app-get-transaction',
  templateUrl: './get-transaction.component.html',
  styleUrls: ['./get-transaction.component.css']
})
export class GetTransactionComponent {
history:any

  constructor(private gettransactionservice:GetTransactionServiceService){}

  onGetTransaction(toAcc: string) {
    this.gettransactionservice.getData(toAcc).subscribe(data => {
      this.history= data;

      console.log()
    })
  }
}
