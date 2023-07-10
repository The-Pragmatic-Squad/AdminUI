import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AccountTransactionComponent } from './account-transaction/account-transaction.component';
import { DateFilterPipe } from './Pipes/datePipe.pipe';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { PaginationService } from './Services/pagination.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccountsComponent,
    AddAccountComponent,
    AccountDetailsComponent,
    AccountTransactionComponent,
    DateFilterPipe,
    PopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    MatDialogModule,
    
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
