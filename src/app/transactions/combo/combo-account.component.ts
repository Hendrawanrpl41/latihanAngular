import { AccountService } from './../../accounts/service/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combo-account',
  templateUrl: './combo-account.component.html',
  styleUrls: ['./combo-account.component.scss']
})
export class ComboAccountComponent implements OnInit {
  accountNumber: number ;
  dataAccount = [];
  constructor(private service: AccountService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.read().subscribe(response => {
      this.dataAccount = response['values'];
    });
  }

}
