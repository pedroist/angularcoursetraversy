import { Component, OnInit } from "@angular/core";

import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: "Karolina",
        lastName: "Wasavaska",
        age: 70,
        address: {
          street: "50 Main st",
          city: "Boston",
          state: "MA"
        },
        image: "http://lorempixel.com/600/600/people/7",
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: "Kevin",
        lastName: "Johnson",
        age: 34,
        address: {
          street: "20 School st",
          city: "Lynn",
          state: "MA"
        },
        image: "http://lorempixel.com/600/600/people/2",
        isActive: false,
        registered: new Date('03/11/2017 06:20:00'),
        hide: true
      },
      {
        firstName: "Karen",
        lastName: "William",
        age: 26,
        address: {
          street: "50 Mill st",
          city: "Miami",
          state: "FL"
        },
        image: "http://lorempixel.com/600/600/people/9",
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;

    /*      this.addUser({
          firstName: "David",
          lastName: "Jackson"
        }); */

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser() {
    /* Extra Imagens PTC */
    let randomNumb: number = null;
    randomNumb = Math.floor(Math.random() * 10) + 1;
    this.user.image = "http://lorempixel.com/600/600/people/" + randomNumb;
    /*End Extra Imagens PTC */

    this.user.isActive = true;
    this.user.registered = new Date();
    this.user.hide = true;
    this.users.unshift(this.user); //The same as push put adds to the beggining of array

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
  }
  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

  // toogleHide(user: User) {
  //   user.hide = !user.hide;
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
