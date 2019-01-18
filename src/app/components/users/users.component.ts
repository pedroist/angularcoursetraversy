import { Component, OnInit, ViewChild } from "@angular/core";
import { DataService } from '../../services/data.service';
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
    email: ''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  currentClasses = {};
  currentStyles = {};
  showUserForm: boolean = false;
  @ViewChild('userForm') form: any;
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      console.log(data);
    })

    this.dataService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });

    /*      this.addUser({
          firstName: "David",
          lastName: "Jackson"
        }); */

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  // addUser() {
  //   /* Extra Imagens PTC */
  //   let randomNumb: number = null;
  //   randomNumb = Math.floor(Math.random() * 10) + 1;
  //   this.user.image = "http://lorempixel.com/600/600/people/" + randomNumb;
  //   /*End Extra Imagens PTC */

  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.user.hide = true;
  //   this.users.unshift(this.user); //The same as push put adds to the beggining of array

  //   //Important!!: we need to reset user, otherwise, changing the inputs will change the values already saved in array
  //   this.user = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //   }
  // }
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

  onSubmit({ value, valid }: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      /* Extra Imagens PTC */
      let randomNumb: number = null;
      randomNumb = Math.floor(Math.random() * 10) + 1;
      value.image = "http://lorempixel.com/600/600/people/" + randomNumb;
      /*End Extra Imagens PTC */

      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      //this.users.unshift(value); //substituído pelo Service

      this.dataService.addUser(value);

      //Important!!: we need to reset user, otherwise, changing the inputs will change the values already saved in array
      this.form.reset();

    }
  }
}
