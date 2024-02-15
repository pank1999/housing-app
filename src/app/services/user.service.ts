import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/users';
  async getAllUser(): Promise<User[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getUserById(id: number): Promise<User> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  async deleteUserById(id: number) {
     return await fetch(`${this.url}/${id}`, {
       method: 'Delete',
     });
  }
}
