import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroments/enviroment';
import { Account } from '../model/account';
import { Transaction } from '../model/transaction';
import { AccountDetailed } from '../model/accountdetailed';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private url: string = enviroment.BaseURLApi;
  constructor(private http: HttpClient) {
  }
  getAllAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(this.url);
  }
  getAccountById(id: number): Observable<Account> {
    return this.http.get<Account>(`${this.url}/avatar/${id}`);
  }
  getTransactionDetailsByAccountId(id: number, page: number, pageSize: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.url}/${id}/transactions?page=${page}&pageSize=${pageSize}`);
  }
  createAccount(account: AccountDetailed): Observable<number> {
    return this.http.post<number>(`${this.url}`, account);
  }
}
