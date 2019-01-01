import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataCustomerComponent } from './customers/data/data-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputCustomerComponent } from './customers/form/input/input-customer.component';
import { EditCustomerComponent } from './customers/form/edit/edit-customer.component';
import { DataAccountComponent } from './accounts/data/data-account.component';
import { EditAccountComponent } from './accounts/form/edit/edit-account.component';
import { InputAccountComponent } from './accounts/form/input/input-account.component';
import { ComboCustomerComponent } from './accounts/combo/combo-customer.component';
import { DataTransactionComponent } from './transactions/data/data-transaction.component';
import { InputTransactionComponent } from './transactions/form/input/input-transaction.component';
import { EditTransactionComponent } from './transactions/form/edit/edit-transaction.component';
import { ComboAccountComponent } from './transactions/combo/combo-account.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCustomerComponent,
    InputCustomerComponent,
    EditCustomerComponent,
    DataAccountComponent,
    EditAccountComponent,
    InputAccountComponent,
    ComboCustomerComponent,
    DataTransactionComponent,
    InputTransactionComponent,
    EditTransactionComponent,
    ComboAccountComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
