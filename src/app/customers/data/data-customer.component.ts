import { Customer } from './../model/customer';
import { CustomerService } from './../service/customer.service';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: "app-data-customer",
  templateUrl: "./data-customer.component.html",
  styleUrls: ["./data-customer.component.scss"]
})
export class DataCustomerComponent implements OnInit{
  dataCustomer = [];
  constructor(private service: CustomerService, private router: Router) {}
  
  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.read().subscribe(response => {
      this.dataCustomer = response['values'];
    });
  }

  update(customer: Customer) {
    this.service.dataEdit = customer;
    this.router.navigate(['/editCustomer']);
  }
  delete(id) {
    if (confirm("anda yakin? ")) {
      this.service.delete(id).subscribe(()=>
        this.loadData()
      );
    }
  }
}
