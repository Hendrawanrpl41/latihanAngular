import { CustomerService } from './../../customers/service/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-combo-customer",
  templateUrl: "./combo-customer.component.html",
  styleUrls: ["./combo-customer.component.scss"]
})
export class ComboCustomerComponent implements OnInit {
  customerNumber: number;
  dataCustomer = [];
  constructor(private service: CustomerService) {}
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.read().subscribe(response => {
      this.dataCustomer = response["values"];
    });
  }
}
