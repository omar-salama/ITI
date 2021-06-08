import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: '[app-table-row]',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css'],
})
export class TableRowComponent implements OnInit {
  users!: any;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {

  }
  deleteUser(id: number, name: string) {
    if (confirm('Are you sure you want to delete ' + name))
      this.usersService.deleteUser(id).subscribe(
        (data) => {
          console.log(data);
          // reload after deletion
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      );
  }
  @Input() userDetails: any;
}
