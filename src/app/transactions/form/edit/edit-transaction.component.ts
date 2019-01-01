import { ComboAccountComponent } from './../../combo/combo-account.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TransactionService } from '../../service/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../../model/Transaction';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Account } from 'src/app/accounts/model/Account';

@Component({
  selector: "app-edit-transaction",
  templateUrl: "./edit-transaction.component.html",
  styleUrls: ["./edit-transaction.component.scss"]
})
export class EditTransactionComponent implements OnInit {
  fg: FormGroup;
  @ViewChild(ComboAccountComponent)comboAccount: ComboAccountComponent;
  constructor(private service: TransactionService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.registryForm();
    this.setForm();
  }
  setForm() {
    let transaction: Transaction = this.service.dataEdit;
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      this.fg.controls[key].setValue(transaction[key]);
      if(key == "amountSign"){
        this.comboAccount.accountNumber = transaction.accountNumber;
      }
    })
  }
  registryForm() {
    this.fg = this.fb.group({
      id: [],
      type: [],
      amount: [],
      amountSign: []
    });
  }
  update() {
    let transaction = new Transaction();
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      console.log(key);
      transaction[key] = this.fg.controls[key].value;
      if (key == "amountSign") {
        let account = new Account();
        account.accountNumber = this.comboAccount.accountNumber;
        transaction.account = account;
      }
    });
    this.service.update(transaction).subscribe(response => {
      alert("data updated");
      this.router.navigate(["/dataTransaction"]);
    });
  }
}
