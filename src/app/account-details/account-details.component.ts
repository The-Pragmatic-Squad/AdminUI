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
      this.accountService.getAccountById(res['id']).subscribe(res => {
        this.account = res;
        this.fetchTransactions(res['id']);
      });
    });
  }

  public fetchTransactions(accountId: number): void {
    this.accountService.getTransactionDetailsByAccountId(accountId, this.paginationService.currentPage, this.paginationService.pageSize)
      .subscribe(res => {
        if (Array.isArray(res)) {
          this.transactionList = res;
          // Set the totalTransactions property
          this.paginationService.totalTransactions = res.length;
          // console.log(this.transactionList);
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
