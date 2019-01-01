import { CustomerService } from './../../service/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-input-customer',
  templateUrl: './input-customer.component.html',
  styleUrls: ['./input-customer.component.scss']
})
export class InputCustomerComponent implements OnInit {
  fg: FormGroup;
  customer = new Customer();
  constructor(private fb: FormBuilder,private service: CustomerService ,private router: Router) { }
  create(){
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      this.customer[key] = this.fg.controls[key].value;
    });
    this.service.create(this.customer).subscribe(
      (response) => {
        console.log(response);
        alert('data created');
        this.router.navigate(['/dataCustomer']);
      }
    );
  }
  
  ngOnInit() {
    this.fg = this.fb.group({
      firstName: [],
      lastName: [],
      birthDate: [],
      phoneType: [],
      phoneNumber: [],
      username: [],
      password: [],
      customerNumber: [],
    });
  }

}
