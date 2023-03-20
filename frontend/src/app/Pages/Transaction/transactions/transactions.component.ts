import { Component } from '@angular/core';
import { Transaction } from 'src/app/Models/Transaction';
import { TransactionService } from 'src/app/Services/Transaction/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent {
// creating a parameterized constructor to get product services
constructor(private transactionService: TransactionService) {}

// declaring and initializing the variables
transactions: Transaction[] = [];
id?: string;

// function to get all the products from service layer and store it in products array
getAllTransactions(): void {
  this.transactionService.getAllTransactions().subscribe(transactions => this.transactions = transactions);
}

// function to delete the product 
deleteTransaction(id: string): void {
  this.transactionService.deleteTransaction(id).subscribe(() => this.getAllTransactions());
}

// calling the ngOnit lificycle hook to load all the products
ngOnInit(): void {
  this.getAllTransactions();
}
}

