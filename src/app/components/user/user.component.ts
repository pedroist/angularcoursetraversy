import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
  /*
  styles: [`
      h2 {
        color: blue;
      }
    `]
    */
  //template: "<h2>John Doe</h2>"
})
export class UserComponent implements OnInit {
  //Properties
  user: User;

  //methods
  constructor() {}

  ngOnInit() {
    this.user = {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: {
        street: "50 Main st",
        city: "Boston",
        state: "MA"
      }
    };
  }
}
