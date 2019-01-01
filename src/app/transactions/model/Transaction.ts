import { Account } from './../../accounts/model/Account';
export class Transaction {
    id :number;
    type: String;
    amount: String;
    amountSign: String;
    accountNumber: number;
    account: Account;

}