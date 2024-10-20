import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
