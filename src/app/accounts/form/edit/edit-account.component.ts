import { Account } from './../../model/Account';
import { AccountService } from './../../service/account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customers/model/customer';
import { ComboCustomerComponent } from '../../combo/combo-customer.component';

@Component({
  selector: "app-edit-account",
  templateUrl: "./edit-account.component.html",
  styleUrls: ["./edit-account.component.scss"]
})
export class EditAccountComponent implements OnInit {
  fg: FormGroup;
  @ViewChild(ComboCustomerComponent)comboCustomer: ComboCustomerComponent; 
  account = new Account();
  constructor(
    private fb: FormBuilder,
    private service: AccountService,
    private router: Router
  ) {}

  ngOnInit() {
    this.registryForm();
    this.setForm();
  }
  registryForm(){
    this.fg = this.fb.group({
      accountNumber: [],
      openDate: [],
      balance: [],
      customerNumber: []
    });
  }
  setForm() {
    this.account = this.service.dataEdit;
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      console.log(key);
      this.fg.controls[key].setValue(this.account[key]);
      if(key == "balance")
      this.comboCustomer.customerNumber = this.account.customerNumber;
    });
  }
  update() {
     let customer = new Customer();
     let account = new  Account();
     Object.keys(this.fg.controls).forEach(key => {
       this.fg.get(key);
       console.log(key);
       account[key] = this.fg.controls[key].value;
       if (key == "balance") {
         customer.customerNumber = this.fg.controls["customerNumber"].value;
         account.customer = customer;
       }
     });
     console.log('====================================');
     console.log(account);
     console.log('====================================');
     this.service.update(account).subscribe(response => {
       console.log(JSON.stringify(account));
       alert("data updated");
       this.router.navigate(["/dataAccount"]);
     });
  }
}