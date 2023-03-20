import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/Transaction/transaction.service';
import { Transaction } from 'src/app/Models/Transaction';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent {
  constructor(private transactionService: TransactionService, private location: Location, private route: ActivatedRoute) {}

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

  // function to call edit employe from service layer
  editTransaction(transaction: Transaction): void {
    this.transactionService.updateTransaction(transaction).subscribe(() => this.goBack());
  }

  // function to get a particular employee by id and storing its data in employee object
  getTransactionById(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.transactionService.getTransactionById(id).subscribe(transaction => {
      this.transaction.Id = transaction.Id,
      this.transaction.TransactionCode = transaction.TransactionCode,
      this.transaction.TransactionDescription = transaction.TransactionDescription,
      this.transaction.TransactionValue = transaction.TransactionValue
    });
  }

  // calling the ngOnit lificycle hook to load get employee by id
  ngOnInit(): void {
    this.getTransactionById();
  }
}
