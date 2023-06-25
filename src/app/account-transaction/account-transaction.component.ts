import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';
import { AccountService } from '../Services/account.service';

enum TransactionType { DEPOSIT, WITHDRAWAL }
enum TransactionStatus { PENDING, SUCCESS, FAILED }
@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})

export class AccountTransactionComponent implements OnInit {
  TransactionStatus!: TransactionStatus;
  account: any;
  TransactionType!: TransactionType;

  constructor(private accountService: AccountService) { }

  transactionIndex: number = 0;

  @Input() accountTransactionList: Transaction[] = [];
  typeValue: string = '';
  dateFrom: string = '';
  dateTo: string = '';



  ngOnInit(): void {
    //  log all accountTransactionList


    // console.log(this.accountTransactionList);

  }
}
