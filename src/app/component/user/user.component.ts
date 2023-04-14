import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USERS } from 'src/app/mock/mock-user';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    //  this.getUsers()
  }

  getUsers() {
    this.userService.getUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }
}
