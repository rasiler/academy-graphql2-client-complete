import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { IUser } from './user.type';
import { Observable } from 'rxjs';


const BASE_URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class UserService {

  users: IUser[];

  constructor(private serverService: ServerService) { }

  getUsers() {
     this.serverService.get(`${BASE_URL}/users`)
      .subscribe((users: IUser[]) => {
         this.users = users;
      });
  }

  getUser(id: number) {
    if (this.users) {
      return this.users.find(user => user.id === id);
    } else {
      return {};
    }
  }
}
