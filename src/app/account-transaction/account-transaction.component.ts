import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { AccountService } from '../Services/account.service';

enum TransactionType{CREDIT, DEPIT}
@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})

export class AccountTransactionComponent implements OnInit {

  constructor(private accountService: AccountService){}

  transactionIndex: number = 0;

  @Input() accountTransactionList: Transaction[] = [];
  typeValue: string = '';
  dateFrom: string = '';
  dateTo: string = '';

  ngOnInit(): void {
    
      // console.log(this.accountTransactionList);
      // this.accountTransactionList.sort((transactionA, transactionB) => Number(transactionA.date) - Number(transactionB.date));
    
    // console.log(this.typeValue);
  }
}
