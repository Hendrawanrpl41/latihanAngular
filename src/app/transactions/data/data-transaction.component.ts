import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../model/Transaction';

@Component({
  selector: 'app-data-transaction',
  templateUrl: './data-transaction.component.html',
  styleUrls: ['./data-transaction.component.scss']
})
export class DataTransactionComponent implements OnInit {
  dataTransaction = [];
  constructor(private service: TransactionService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.service.read().subscribe(response => {
      this.dataTransaction = response['values'];
    });
  }
  selectedData(transaction: Transaction) {
    this.service.dataEdit = transaction;
    this.router.navigate(['/editTransaction']);
  }
  delete(id){
    if(confirm('Delete?')){
      this.service.delete(id).subscribe(response => {
        alert("data deleted");
        this.loadData();
      });
    } 
    
  }

}
