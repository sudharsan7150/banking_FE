import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAccountComponent } from './all-account/all-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';

const menu: Routes = [
  {path:'all-account',component: AllAccountComponent},
  {path:'get-account',component: GetAccountComponent},
  {path:'transaction',component: TransactionComponent},
  {path:'transfer',component: TransferComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(menu)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
