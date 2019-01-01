import { Customer } from 'src/app/customers/model/customer';
import { Account } from './../../model/Account';
import { AccountService } from './../../service/account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Key } from 'protractor';
import { ComboCustomerComponent } from '../../combo/combo-customer.component';

@Component({
  selector: 'app-input-account',
  templateUrl: './input-account.component.html',
  styleUrls: ['./input-account.component.scss']
})
export class InputAccountComponent implements OnInit {
  fg: FormGroup;
  account = new Account();
  @ViewChild(ComboCustomerComponent)comboCustomer: ComboCustomerComponent;
  constructor(private fb: FormBuilder, private service: AccountService, private router: Router) { }
  
  ngOnInit() {
   this.registryForm();
  }
  registryForm() {
     this.fg = this.fb.group({
       accountNumber: [],
       openDate: [],
       balance: []
     });
  }
  create() {
    console.log(this.comboCustomer.customerNumber);
    let customer = new Customer();
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      console.log(key);
      this.account[key] = this.fg.controls[key].value;
      if(key == "balance"){
        this.account.customerNumber = this.comboCustomer.customerNumber;
        customer.customerNumber = this.comboCustomer.customerNumber;
        this.account.customer = customer;
      }
    });
    this.service.create(this.account).subscribe(response => {
      console.log(JSON.stringify(this.account));
      alert('data created');
      this.router.navigate(['/dataAccount']);
    });
  }
  

}
