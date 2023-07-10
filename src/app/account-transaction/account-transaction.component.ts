import { Component, Input } from '@angular/core';
import { Transaction } from '../model/transaction';
import { PaginationService } from '../Services/pagination.service';
import { Account } from '../model/account';
import { AccountDetailsComponent } from '../account-details/account-details.component';


@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})

export class AccountTransactionComponent{
  account!: Account;
  @Input() accountTransactionList: Transaction[] = [];
  typeValue: string = '';
  dateFrom: string = '';
  dateTo: string = '';
  constructor(public paginationService: PaginationService,private accountDetailsComponent: AccountDetailsComponent) { }
  
  renderPage(event: number): void {
    this.paginationService.currentPage = event;
    // Assuming the account object has an 'id' property
    this.accountDetailsComponent.fetchTransactions(this.account.id);
  }
}
