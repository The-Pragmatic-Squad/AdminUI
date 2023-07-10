import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  pageSize: number = 5; // Number of items per page
  currentPage: number = 0; // Current page number
  totalTransactions: number = 0; // Total number of transactions
  constructor() { }
}
