import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
// creating a parametrized constructor to call the employee service, location
constructor(private userService: UserService , private location: Location) {}

// creating an employee object to store data
user: User = {
  userId: 0,
  username: '',
  password: ''
};

// function to go back to previous page
goBack(): void {
  this.location.back();
}

// function to call edit product from service layer
addUser(user: User): void {
  this.userService.addUser(user).subscribe(() => this.goBack());
}
}
