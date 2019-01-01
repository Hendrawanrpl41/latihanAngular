import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../model/Account';

@Injectable({
  providedIn: "root"
})
export class AccountService {
  dataEdit: any;
  constructor(private http: HttpClient) {}
  read() {
    return this.http.get("http://localhost:3000/accounts");
  }
  create(account: Account) {
    return this.http.post("http://localhost:3000/account", account);
  }
  update(account: Account) {
    return this.http.put("http://localhost:3000/account", account);
  }
  delete(id: number) {
    return this.http.delete("http://localhost:3000/account/" + id);
  }
}
