import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css'],
})
export class NewUserComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit(): void {}
  newUser = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    }),
    phone: new FormControl(''),
  });
  onSubmit() {
    this.userService.addUser(this.newUser.value).subscribe({
      next: () => {
        this.router.navigate(['/users']);
      },
    });
  }
}
