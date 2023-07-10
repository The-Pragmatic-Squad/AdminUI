import { Component } from '@angular/core';
import { AccountDetailed } from '../model/accountdetailed';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AccountService } from '../Services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  accountForm!: FormGroup;
  constructor(private fb: FormBuilder, private accountService: AccountService, private dialogRef: MatDialog) {
    this.accountForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      username: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
      password: ["", [Validators.required, Validators.minLength(8)]],
      phone: ["", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      balance: ["", [Validators.min(0)]],
      type: ["STANDARD", [Validators.required]]
    })

  }
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
  resId:number=0;
  accountStatus: string = 'Successfully';


  addAccount() {
    this.account.username = this.accountForm.get('username')?.value;
    this.account.email = this.accountForm.get('email')?.value;
    this.account.password = this.accountForm.get('password')?.value;
    this.account.phone = this.accountForm.get('phone')?.value;
    this.account.creditNumber = this.accountForm.get('credit')?.value;
    this.account.balance = this.accountForm.get('balance')?.value;
    this.account.type = this.accountForm.get('type')?.value;
    console.log(this.account);
    this.save(this.account);
  }
  save(account: AccountDetailed) {
    this.accountService.createAccount(account).subscribe(
      (res) => {
        this.resId = res;
        console.log(this.resId);
        this.accountStatus = 'Successfully';
        this.openDialog();
        
      },
      (err: HttpErrorResponse) => {
        this.accountStatus = 'Failed';
        this.openDialog();
        console.log(err);

      });
  }
  openDialog(){
    this.dialogRef.open(PopUpComponent,{
      data:{
        status: this.accountStatus
      }
    });
  }

}
