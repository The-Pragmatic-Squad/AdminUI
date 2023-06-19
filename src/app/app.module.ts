import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransactionsHistoryComponent } from './account-transactions-history/account-transactions-history.component';
import { AccountsService } from './Services/accounts.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    AddAccountComponent,
    AccountTransactionsHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [AccountsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
