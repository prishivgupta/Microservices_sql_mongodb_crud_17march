import { Component } from '@angular/core';
import { User } from 'src/app/Models/User';
import { UserService } from 'src/app/Services/User/user.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  constructor(private userService: UserService, private location: Location, private route: ActivatedRoute) {}

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

  // function to call edit employe from service layer
  editUser(user: User): void {
    this.userService.updateUser(user).subscribe(() => this.goBack());
  }

  // function to get a particular employee by id and storing its data in employee object
  getUserById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUserById(id).subscribe(user => {
      this.user.userId = user.userId,
      this.user.username = user.username,
      this.user.password = user.password
    });
  }

  // calling the ngOnit lificycle hook to load get employee by id
  ngOnInit(): void {
    this.getUserById();
  }
}
