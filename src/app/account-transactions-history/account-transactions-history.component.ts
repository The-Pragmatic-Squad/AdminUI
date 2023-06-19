import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-transactions-history',
  templateUrl: './account-transactions-history.component.html',
  styleUrls: ['./account-transactions-history.component.css']
})
export class AccountTransactionsHistoryComponent {
  accountId = -1;
  constructor(private route:ActivatedRoute){
    this.accountId = Number(this.route.snapshot.params['id']);
  }
}
