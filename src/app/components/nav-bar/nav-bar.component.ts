import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements DoCheck {

  constructor() { }

  public isSignUp: boolean;
  public isLoggedIn: boolean;
  public isUser: boolean;
  public isEmployee: boolean;
  public isAdmin: boolean;

  public ngDoCheck(): void {

    let user: any = localStorage.getItem("user");

    if (user === null) {
      this.isSignUp = true;
      this.isLoggedIn = false;
      this.isUser = false;
      this.isEmployee = false;
      this.isAdmin = false;
      return;
    }

    user = JSON.parse(user);

    if (user.role === "user") {
      this.isSignUp = false;
      this.isLoggedIn = true;
      this.isUser = true;
      this.isEmployee = false;
      this.isAdmin = false;
      return;
    }

    if (user.role === "employee") {
      this.isSignUp = false;
      this.isLoggedIn = true;
      this.isUser = false;
      this.isEmployee = true;
      this.isAdmin = false;
      return;
    }

    if (user.role === "admin") {
      this.isSignUp = false;
      this.isLoggedIn = true;
      this.isUser = false;
      this.isEmployee = false;
      this.isAdmin = true;
      return;
    }
  }
}
