import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AllAccountsComponent } from './all-accounts/all-accounts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { FormsModule } from '@angular/forms';
import { TypeFilterPipe } from './Pipes/typePipe.pipe';
import { DateFilterPipe } from './Pipes/datePipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccountDetailsComponent,
    AllAccountsComponent,
    NavbarComponent,
    AccountTransactionComponent,
    TypeFilterPipe,
    DateFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: 'view-details', 
        component: AccountDetailsComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
