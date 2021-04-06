import { Component, OnInit } from '@angular/core';
// import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';
import { TRANSACTIONS } from '../transactions';

@Component({
  selector: 'app-type-card',
  templateUrl: './type-card.component.html',
  styleUrls: ['./type-card.component.scss'],
})
export class TypeCardComponent implements OnInit {
  transactions = TRANSACTIONS;
  // transactions: Transaction[] = [];

  constructor() {}

  ngOnInit(): void {
    // this.getTransactions();
    // this.totalNumberIncome = this.getTotalNumber('income');
    // this.getTotalNumber('outcome');
    // this.getTotalNumber('investment');
    // this.getTotalNumber('loan');
    // this.getTotalNumber('income')
  }

  getTotalNumber(type: string): any {
    if (this.transactions.length !== 0) {
      const totalNumber = this.transactions.filter((item) => item.type === type)
        .length;

      return totalNumber;
    }
  }

  // getTransactions(): void {
  //   this.transactionServise
  //     .getTransactions()
  //     .subscribe((transactions) => (this.transactions = transactions));
  // }

  totalNumberIncome = this.getTotalNumber('income');
  totalNumberOutcome = this.getTotalNumber('outcome');
  totalNumberInvestments = this.getTotalNumber('investment');
  totalNumberLoans = this.getTotalNumber('loan');

  types = [
    { type: 'income', amount: this.totalNumberIncome, id: 0 },
    { type: 'outcome', amount: this.totalNumberOutcome, id: 1 },
    { type: 'loans', amount: this.totalNumberLoans, id: 2 },
    { type: 'investments', amount: this.totalNumberInvestments, id: 3 },
    ,
  ];
}
