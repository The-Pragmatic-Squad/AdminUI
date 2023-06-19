import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from '../model/accounts';
import { Observable } from 'rxjs';
// import * as data from '../model/accounts.json'
@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private accountsUrl: string;
  constructor(private http: HttpClient) { 
    this.accountsUrl = '../model/accounts.json';
  }
  getAllAccounts(): Observable<Accounts[]>{
    return this.http.get<Accounts[]>(this.accountsUrl);
  }
  // getAccountById(id: number): Observable<Accounts[]> | undefined {
  //   return this.http.get<Accounts[]>(account => account.id === id);
  // }
}
