import { Account } from './../model/Account';
import { AccountService } from './../service/account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: "app-data-account",
  templateUrl: "./data-account.component.html",
  styleUrls: ["./data-account.component.scss"]
})
export class DataAccountComponent implements OnInit {
  dataAccount = [];
  constructor(private service: AccountService, private router: Router) {}

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.read().subscribe(response => {
      this.dataAccount = response["values"];
    });
  }
  selectedData(account: Account) {
    console.log('====================================');
    console.log(account);
    console.log('====================================');
    this.service.dataEdit = account;
    this.router.navigate(['/editAccount']);

  }
  delete(id: number) {
    if(confirm('Delete?')){  
      this.service.delete(id).subscribe(response => {
        alert("data deleted");
        this.loadData();
      });
    }
  }
}
