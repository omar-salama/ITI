import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeUsersService } from 'src/app/Services/fake-users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private fakeUser: FakeUsersService, uri: ActivatedRoute) {
    this.id = uri.snapshot.params.id;
  }
  id: number;
  user: any;
  ngOnInit(): void {
    this.fakeUser.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
        console.log(res);
      },
      (fail) => {
        console.log(fail);
      }
    );
  }
}
