import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Transaction } from 'src/app/Models/Transaction';
import { TransactionService } from 'src/app/Services/Transaction/transaction.service';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent {
  constructor(private transactionService: TransactionService, private location: Location) {}

  // creating an employee object to store data
  transaction: Transaction = {
    Id: '',
    TransactionCode: '',
    TransactionDescription: '',
    TransactionValue: 0
  };

  // function to go back to previous page
  goBack(): void {
    this.location.back();
  }

  // function to call edit product from service layer
  addTransaction(transaction: Transaction): void {
    this.transactionService.addTransaction(transaction).subscribe(() => this.goBack());
  }
}
