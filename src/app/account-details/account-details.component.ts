import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../Services/account.service';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';
import { PaginationService } from '../Services/pagination.service';
@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  account!: Account;
  transactionList: Transaction[] = [];

  constructor(private activeRoute: ActivatedRoute, private accountService: AccountService, private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(res => {
      this.accountService.getAccountById(res['id']).subscribe(async res => {
        this.account = res;
        await this.fetchTransactions(res['id'], 0);
        console.log("(ONINIT)Account details:  " + res['id']);
        console.log(this.account);
        console.log(this.transactionList);
      });
    });
  }

  public async fetchTransactions(accountId: number, page: number): Promise<void> {


    this.accountService.getTransactionDetailsByAccountId(accountId, page, this.paginationService.pageSize)
      .subscribe(res => {

        console.log("Fetcing transactions: with page: " + page + " and pageSize: " + this.paginationService.pageSize + "");
        let totalTransactions = res['totalElements'];
        this.paginationService.totalTransactions = totalTransactions;
        let transactions = structuredClone(res.content);
        console.log("Total transactions: " + totalTransactions);
        console.log(res.content);
        if (Array.isArray(transactions)) {
          this.transactionList = transactions;
          this.paginationService.totalTransactions = totalTransactions;
          this.transactionList.forEach((transaction) => {
            transaction.date = new Date(transaction.date);
          });
        } else {
          console.error('Invalid transaction data:', res);
        }
      });
  }


  // ngOnInit(): void {
  //   this.activeRoute.params.subscribe(res => {

  //     this.accountService.getAccountById(res['id']).subscribe(res => this.account = res);

  //     this.accountService.getTransactionDetailsByAccountId(res['id'],this.pagination).subscribe(res => {
  //       this.transactionList = res;
  //       // this.allTransactions = res.data;
  //       console.log(this.transactionList);
  //       this.transactionList.forEach((transaction) => {
  //         transaction.date = new Date(transaction.date);

  //       });
  //     })

  //   })
  // }

}
