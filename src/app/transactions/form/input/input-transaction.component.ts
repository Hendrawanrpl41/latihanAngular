import { ComboAccountComponent } from './../../combo/combo-account.component';
import { Account } from './../../../accounts/model/Account';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from '../../service/transaction.service';
import { Transaction } from '../../model/Transaction';

@Component({
  selector: 'app-input-transaction',
  templateUrl: './input-transaction.component.html',
  styleUrls: ['./input-transaction.component.scss']
})
export class InputTransactionComponent implements OnInit {
  fg: FormGroup;
  @ViewChild(ComboAccountComponent)comboAccount: ComboAccountComponent;
  constructor(private fb: FormBuilder, private router: Router,private service: TransactionService) { }

  ngOnInit() {
    this.registryForm();
  }
  registryForm(){
    this.fg = this.fb.group({
      id:[],
      type:[],
      amount:[],
      amountSign:[],
      accountNumber:[],
    });
  }
  create(){
    let transaction = new Transaction();
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      console.log(key);
      transaction[key] = this.fg.controls[key].value;
      if(key == "amountSign") {
        let account = new Account();
        account.accountNumber = this.comboAccount.accountNumber;
        transaction.account = account;
      }
    });
    this.service.create(transaction).subscribe(response => {
        alert('data created');
        this.router.navigate(['/dataTransaction']);
    });
  }

}
