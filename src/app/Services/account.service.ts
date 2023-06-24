import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { enviroment } from 'src/enviroments/enviroment';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';
import { AccountDetailed } from '../model/accountdetailed';
// import * as data from '../model/accounts.json'
@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private url: string = enviroment.BaseURLApi;
    constructor(private http: HttpClient) {
    }
    getAllAccounts(): Observable<Account[]> {
         return this.http.get<Account[]>('https://jsonplaceholder.typicode.com/users');
    }
    getAccountById(id: number): Observable<Account>{
      return this.http.get<Account>(`https://jsonplaceholder.typicode.com/users/${id}`);
    }
    getTransactionDetailsByAccountId(id: number):Observable<Transaction[]>{
      return this.http.get<Transaction[]>(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);
    }
    createAccount(account: AccountDetailed):Observable<{name: string}>{
      return this.http.post<{name: string}>('https://angularbyprocademy-1af76-default-rtdb.firebaseio.com/accounts.json',account);
    }
    getAccountTempById(id: string): Observable<AccountDetailed>{
      return this.http.get<AccountDetailed>(`https://angularbyprocademy-1af76-default-rtdb.firebaseio.com/accounts/${id}.json`);
    }       
}
