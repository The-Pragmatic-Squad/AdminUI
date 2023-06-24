import { Component } from '@angular/core';
import { AccountDetailed } from '../model/accountdetailed';
import { NgForm } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Account } from '../model/account';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  constructor(private accountService: AccountService){}
  account: AccountDetailed = {
    username: '',
    email: '',
    password: '',
    phone: '0',
    creditNumber: '',
    balance: 0,
    createdAt: new Date(),
    lastTransaction: null,
    type: 'STANDARD',
    active: true
  };
  accountTmp:Account = {
    id: 0,
    username: '',
    email: ''
  }
  resTemp: any = '';
  addAccount(accountForm: NgForm){
    this.account.phone = "0" + this.account.phone ; 
    this.accountService.createAccount(this.account).subscribe(
      (res)=>{
        this.resTemp = res.name;
        console.log(res);
        console.log(res.name);
      },
      (err: HttpErrorResponse)=>{
        console.log(err);
        
      });
  }

}
