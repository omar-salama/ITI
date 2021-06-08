import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(private userService: UsersService, private actR: ActivatedRoute) {
    this.id = actR.snapshot.params.id;
  }
  id: number;
  user: any;
  ngOnInit(): void {
    this.userService.getUserById(this.id).subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
