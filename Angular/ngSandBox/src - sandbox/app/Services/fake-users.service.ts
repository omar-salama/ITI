import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FakeUsersService {
  apiURL: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private myClient: HttpClient) {}

  getAllUsers() {
    return this.myClient.get(this.apiURL);
  }

  getUserById(id: number) {
    return this.myClient.get(`${this.apiURL}/${id}`);
  }
}
