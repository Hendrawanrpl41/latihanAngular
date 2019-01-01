import { ComboAccountComponent } from './transactions/combo/combo-account.component';
import { EditTransactionComponent } from './transactions/form/edit/edit-transaction.component';
import { InputTransactionComponent } from './transactions/form/input/input-transaction.component';
import { ComboCustomerComponent } from './accounts/combo/combo-customer.component';
import { EditAccountComponent } from './accounts/form/edit/edit-account.component';
import { InputAccountComponent } from './accounts/form/input/input-account.component';
import { DataAccountComponent } from './accounts/data/data-account.component';
import { EditCustomerComponent } from './customers/form/edit/edit-customer.component';
import { InputCustomerComponent } from './customers/form/input/input-customer.component';
import { DataCustomerComponent } from './customers/data/data-customer.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataTransactionComponent } from './transactions/data/data-transaction.component';

const routes: Routes = [
  // customer
  {
    path: 'dataCustomer',
    component: DataCustomerComponent
  },
  {
    path: 'inputCustomer',
    component: InputCustomerComponent
  },
  {
    path: 'editCustomer',
    component: EditCustomerComponent
  },
  // account
  {
    path: 'dataAccount',
    component: DataAccountComponent
  },
  {
    path: 'inputAccount',
    component: InputAccountComponent
  },
  {
    path: 'editAccount',
    component: EditAccountComponent
  },
  {
    path: 'comboAccount',
    component: ComboCustomerComponent
  },
  // transaction
  {
    path: 'dataTransaction',
    component: DataTransactionComponent
  },
  {
    path: 'inputTransaction',
    component: InputTransactionComponent
  },
  {
    path: 'editTransaction',
    component: EditTransactionComponent
  },
  {
    path:'comboTransaction',
    component: ComboAccountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
