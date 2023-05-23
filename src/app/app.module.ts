import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransferComponent } from './transfer/transfer.component';
import { AllAccountComponent } from './all-account/all-account.component';
import { GetAccountComponent } from './get-account/get-account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { GetTransactionComponent } from './get-transaction/get-transaction.component'

@NgModule({
  declarations: [
    AppComponent,
    TransferComponent,
    AllAccountComponent,
    GetAccountComponent,
    TransactionComponent,
    GetTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
