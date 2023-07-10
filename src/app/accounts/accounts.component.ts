import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Account } from '../model/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Account[] = [];
  accountsFilter: Account[] = [];
  selected_status: string = 'all';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(data => {
      this.accounts = data;
      this.accountsFilter = data;
      this.accounts.forEach((account) => {
        console.log(account.lastTransaction);
      });
    });
  }
  onChange(value: any): void {
    this.selected_status = value.target.value;
    // console.log(this.selected_status);
    this.filterAccounts();
  }
  filterAccounts() {
    if (this.selected_status === 'all') {
      this.accountsFilter = [...this.accounts];
    } else if (this.selected_status === 'active') {
      this.accountsFilter = this.accounts.filter(account => account.active === true);
    } else if (this.selected_status === 'not active') {
      this.accountsFilter = this.accounts.filter(account => account.active === false);
    }
  }
}
