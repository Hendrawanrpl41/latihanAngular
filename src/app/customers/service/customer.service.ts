import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  dataEdit: any;
  constructor(private http: HttpClient) { }
  read() {
    return this.http.get('http://localhost:3000/customers');
  }
  create(customer: Customer) {
    return this.http.post('http://localhost:3000/customer', customer);
  }
  update(customer: Customer) {
    return this.http.put('http://localhost:3000/customer', customer);
  }
  delete(customer: String) {
    return this.http.delete('http://localhost:3000/customer/'+ customer);
  }
  
}
