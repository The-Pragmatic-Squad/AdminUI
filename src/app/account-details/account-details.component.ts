import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Accounts } from '../model/accounts';
import { AccountService } from '../Services/account.service';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account!:Account;
  transactionList:Transaction[]= [];
  constructor(private activeRoute: ActivatedRoute, private accountService: AccountService) { 
  
  }
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => {
      
      this.accountService.getAccountById(res['id']).subscribe(res => this.account = res)
       this.accountService.getTransactionDetailsByAccountId(res['id']).subscribe(res => {
        this.transactionList = res;
        console.log(this.transactionList);
       })  
          
    })
  }
  
}
