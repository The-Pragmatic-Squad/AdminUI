import { Component, OnInit } from '@angular/core';
import { Accounts } from '../model/accounts';
import * as accountsData from '../model/accounts.json';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accounts: Accounts[] = [];
  accountsFilter: Accounts[] = [];
  selected_status = 'all';
  
  ngOnInit(): void {
    this.loadAccounts().then(() => {
      this.filterAccounts();
    });
  }
  
  loadAccounts(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.accounts = (accountsData as any).default;
        resolve();
      }, 0);
    });
  }
  onChange(value: any): void {
    this.selected_status = value.target.value;
    this.filterAccounts();
  } 
  filterAccounts(): void {
    if(this.selected_status === 'all'){
      this.accountsFilter = this.accounts;
    }else {
      this.accountsFilter =  this.accounts
        .filter(account => account.status.toLowerCase() === this.selected_status.toLowerCase());
    }
  } 
}
