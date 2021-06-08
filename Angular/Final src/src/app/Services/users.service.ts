import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient: HttpClient) { }
  private BaseUrl = "http://localhost:3000/users";
  getAllUsers() {
    return this.myClient.get(this.BaseUrl);
  }
  getUserById(id: number) {
    return this.myClient.get(`${this.BaseUrl}/${id}`)
  }
  deleteUser(id: number) {
    return this.myClient.delete(`${this.BaseUrl}/${id}`)
  }
  addUser(user: any) {
    return this.myClient.post(this.BaseUrl, user);
  }
  updateUser(id: number, data: any) {
    return this.myClient.patch(this.BaseUrl+ '/' + id, data);
  }
}
