import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';
import { Transaction } from '../Models/transaction';

enum TransactionType{CREDIT, DEPIT}
@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})

export class AccountTransactionComponent implements OnInit {

  constructor(private accountService: AccountService){}

  transactionIndex: number = 0;

  accountTransactionList: Transaction[] = [];
  typeValue: string = '';
  dateFrom: string = '';
  dateTo: string = '';
 
 
  ngOnInit(): void {
    this.accountService.onShowTransactionDetailsClicked.subscribe((accountTransactions: Transaction[])=>{
      this.accountTransactionList = accountTransactions;
      this.accountTransactionList.sort((transactionA, transactionB) => Number(transactionA.date) - Number(transactionB.date));
    })
    console.log(this.typeValue);
  }
  

 
}
