import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
})
export class UpdateUserComponent implements OnInit {
  id!: number;
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService
      .getUserById(this.id)
      .subscribe((res) => this.updateUser.patchValue(res));
  }
  updateUser = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      zipcode: new FormControl('', Validators.required),
    }),
    phone: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.userService.updateUser(this.id, this.updateUser.value).subscribe({
      next: () => this.router.navigate(['/users']),
    });
  }
}
