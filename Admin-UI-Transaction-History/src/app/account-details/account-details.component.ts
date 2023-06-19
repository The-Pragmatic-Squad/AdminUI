import { Component, OnInit } from '@angular/core';
import { AccountService } from '../Services/account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit{
  
  constructor(private accountService: AccountService){}
  account:{id: number, userName: string, email: string, balance: number, createdAt: Date, lastTransactionDate: Date, isActive: boolean, type: string}={
    id: 0,
    userName: '',
    email: '',
    balance: 0.0,
   createdAt: new Date(),
   lastTransactionDate: new Date(),
   isActive: true,
   type:''
  };

  ngOnInit(): void {
    this.accountService.onShowDetailsClicked.subscribe((data: {id: number, userName: string, email: string, balance: number, createdAt: Date, lastTransactionDate: Date, isActive: boolean, type: string})=>{
      this.account = data;
    })
  }

}
