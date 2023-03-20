import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
// creating a parameterized constructor to get product services
constructor(private userService: UserService) {}

// declaring and initializing the variables
users: User[] = [];
id?: number;

// function to get all the products from service layer and store it in products array
getAllUsers(): void {
  this.userService.getAllUsers().subscribe(users => this.users = users);
}

// function to delete the product 
deleteUser(id: number): void {
  this.userService.deleteUser(id).subscribe(() => this.getAllUsers());
}

// calling the ngOnit lificycle hook to load all the products
ngOnInit(): void {
  this.getAllUsers();
}
}

