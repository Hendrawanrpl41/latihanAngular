import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../model/Transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  dataEdit: any;
  constructor(private http: HttpClient) { }
  read(){
    return this.http.get('http://localhost:3000/transactions');
  }
  create(transaction : Transaction) {
    return this.http.post('http://localhost:3000/transaction', transaction);
  }
  update(transaction : Transaction) {
    return this.http.put('http://localhost:3000/transaction', transaction);
  }
  delete(id: number) {
    return this.http.delete('http://localhost:3000/transaction/' + id);
  }
}
