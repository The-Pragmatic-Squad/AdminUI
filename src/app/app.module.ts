import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { DateFilterPipe } from './Pipes/datePipe.pipe';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    AddAccountComponent,
    AccountDetailsComponent,
    AccountTransactionComponent,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
