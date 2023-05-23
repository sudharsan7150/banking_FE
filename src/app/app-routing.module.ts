import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAccountComponent } from './all-account/all-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransferComponent } from './transfer/transfer.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component';

const menu: Routes = [
  {path:'all-account',component: AllAccountComponent},
  {path:'get-account',component: GetAccountComponent},
  {path:'transaction',component: TransactionComponent},
  {path:'transfer',component: TransferComponent},
  {path:'get-transaction',component:GetTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(menu)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
