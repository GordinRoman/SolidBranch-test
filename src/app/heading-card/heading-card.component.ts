import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-heading-card',
  templateUrl: './heading-card.component.html',
  styleUrls: ['./heading-card.component.scss'],
})
export class HeadingCardComponent implements OnInit {
  constructor(private transactionServise: TransactionService) {}

  transactions: Transaction[] = [];

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionServise
      .getTransactions()
      .subscribe((transactions) => (this.transactions = transactions));
  }
}
