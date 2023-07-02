import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../model/transaction';

@Component({
  selector: 'app-account-transaction',
  templateUrl: './account-transaction.component.html',
  styleUrls: ['./account-transaction.component.css']
})

export class AccountTransactionComponent{

  @Input() accountTransactionList: Transaction[] = [];
  typeValue: string = '';
  dateFrom: string = '';
  dateTo: string = '';
}
