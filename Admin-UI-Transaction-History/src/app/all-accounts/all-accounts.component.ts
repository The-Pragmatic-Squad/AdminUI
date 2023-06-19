import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Account } from '../Models/account';

@Component({
  selector: 'app-all-accounts',
  templateUrl: './all-accounts.component.html',
  styleUrls: ['./all-accounts.component.css']
})
export class AllAccountsComponent implements OnInit {
  constructor(private accountService: AccountService){}
  accounts: Account[] = [];
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  showDetails(accountId: number){
    let account = this.accountService.getAccountById(accountId);
    console.log(account);
    if(account !== null){
      this.accountService.showAccountDetails(account);
    }
    let accountTransactions = this.accountService.getAccountTransactions(accountId);
    console.log(accountTransactions);
    if(accountTransactions.length !== 0){
      this.accountService.showAccountTransactionDetails(accountTransactions);
    }
  }

}
