import { Component, OnInit } from '@angular/core';
import { Accounts } from '../model/accounts';
import * as accountsData from '../model/accounts.json';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accounts: Array<Accounts> = new Array<Accounts>();

  ngOnInit(): void {
    this.accounts = (accountsData as any).default;
    console.log(this.accounts);
  }
}
