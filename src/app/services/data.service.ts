import { Injectable } from '@angular/core';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];

  constructor() {
    this.users = [
      {
        firstName: "Karolina",
        lastName: "Wasavaska",
        email: 'karolina@gmail.com',
        image: "http://lorempixel.com/600/600/people/7",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        email: 'kevin@yahoo.com',
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "William",
        email: 'karen@gmail.com',
        image: "http://lorempixel.com/600/600/people/9",
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
