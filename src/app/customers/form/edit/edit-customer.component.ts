import { CustomerService } from './../../service/customer.service';
import { Customer } from './../../model/customer';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {
 fg: FormGroup;
  constructor( private fb: FormBuilder, private service: CustomerService, private router: Router) { }
  ngOnInit() {   
    this.regisForm();
    this.setForm();
  }
  regisForm(){
    this.fg = this.fb.group({
      customerNumber: [],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      birthDate: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      phoneType: ["", Validators.required],
      phoneNumber: ["", Validators.required]
    });
  }
  setForm() {
    let customer: Customer = this.service.dataEdit;
    Object.keys(this.fg.controls).forEach(key => {
      let nameControl = this.fg.get(key);
      console.log(key);
      this.fg.controls[key].setValue(customer[key]);
    });
  }

  updateCustomer(){
    let customer = new Customer();
    Object.keys(this.fg.controls).forEach(key => {
      this.fg.get(key);
      customer[key] = this.fg.controls[key].value;
    });
    this.service.update(customer).subscribe(
      (response) => {
        console.log(JSON.stringify(response));
        alert('data updated');
        this.router.navigate(['/dataCustomer']);
      }
    );
  }
}