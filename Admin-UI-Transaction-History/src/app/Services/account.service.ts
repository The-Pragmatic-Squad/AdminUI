import { EventEmitter } from "@angular/core";
import { Account } from "../Models/account";
import { Transaction } from "../Models/transaction";

enum TransactionType{CREDIT, DEPIT}
export class AccountService{
    accounts: Account[]=[
        {id: 1, userName: "Naglaa", email: "naglaa@gmail.com", balance: 1000.0, createdAt: new Date(), lastTransactionDate: new Date(), isActive: true, type: 'Normal'},
        {id: 2, userName: "Ali", email: "ali@gmail.com", balance: 1000.0, createdAt: new Date(), lastTransactionDate: new Date(), isActive: true, type: 'Normal'},
        {id: 3, userName: "Ammar", email: "ammar@gmail.com", balance: 1000.0, createdAt: new Date(), lastTransactionDate: new Date(), isActive: false, type: 'Normal'}
    ];
    transactions: Transaction[] = [
        {id: 1, accountId: 1, date: new Date('2023-06-19'), amount: 500, balanceBefore: 1000, balanceAfter: 500, type: TransactionType.DEPIT},
        {id: 2, accountId: 1, date: new Date('2023-06-20'), amount: 500, balanceBefore: 500, balanceAfter: 1000, type: TransactionType.CREDIT},
        {id: 3, accountId: 2, date: new Date('2023-06-19'), amount: 500, balanceBefore: 1000, balanceAfter: 1500, type: TransactionType.CREDIT},
        {id: 4, accountId: 2, date: new Date('2023-06-20'), amount: 500, balanceBefore: 1500, balanceAfter: 2000, type: TransactionType.CREDIT},
        {id: 5, accountId: 3, date: new Date('2023-06-19'), amount: 500, balanceBefore: 1000, balanceAfter: 500, type: TransactionType.DEPIT}
    ]
    getAccountById(id: number){
        for(let i = 0; i < this.accounts.length; i++)
        {
            if(this.accounts[i].id === id)
                return this.accounts[i];
        }
        return null;
    }
    getAccountTransactions(accountId: number){
        let transactionList:Transaction[]=[];
        for(let i = 0; i < this.transactions.length; i++)
        {
            if(this.transactions[i].accountId === accountId)
                transactionList.push(this.transactions[i]);
        }
        return transactionList;
    }

    onShowDetailsClicked = new EventEmitter<Account>();
    showAccountDetails(account:Account){
        this.onShowDetailsClicked.emit(account);
    }
    onShowTransactionDetailsClicked = new EventEmitter<Transaction[]>();
    showAccountTransactionDetails(accountTransactions:Transaction[]){
        this.onShowTransactionDetailsClicked.emit(accountTransactions);
    }
}