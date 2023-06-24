import { Component, OnInit } from '@angular/core';
import { Accounts } from '../model/accounts';
// import * as accountsData from '../model/accounts.json';
import { AccountService } from '../Services/account.service';
import { Account } from '../model/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{
  accounts: Account[] = [];
  accountsFilter: Account[] = [];
  selected_status:string = 'all';
  accountId = -1;

  constructor(private accountService:AccountService){}

  ngOnInit(): void {
    this.accountService.getAllAccounts().subscribe(data=>{
      this.accounts = data;
      this.accountsFilter = data;
    });
  }

  
  onChange(value: any): void {
    this.selected_status = value.target.value;
    console.log(this.selected_status);
    this.filterAccounts();
  } 
 
  filterAccounts(){
    if(this.selected_status === 'all'){
      this.accountsFilter = [...this.accounts];
      console.log(this.accounts);
      
     
    }
    // }else {
    //   this.accountsFilter =  [...this.accounts]
    //     .filter(account => account.status && account!.status.toLowerCase() === this.selected_status.toLowerCase());
    // }
  }
  
 
}
