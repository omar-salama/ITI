import { Component, OnInit } from '@angular/core';
import { FakeUsersService } from 'src/app/Services/fake-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private fakeUsers: FakeUsersService) {}
  users: any;
  ngOnInit(): void {
    this.fakeUsers.getAllUsers().subscribe(
      (res) => {
        this.users = res;
      },
      (fail) => {
        console.log(fail);
      }
    );
  }
}
