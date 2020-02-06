import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-personal-area-side-bar',
  templateUrl: './personal-area-side-bar.component.html',
  styleUrls: ['./personal-area-side-bar.component.css']
})
export class PersonalAreaSideBarComponent implements DoCheck {

  public firstName: string;
  public lastName: string;
  public email: string;
  public isUser: boolean;
  public isEmployee: boolean;
  public isAdmin: boolean;

  constructor() {
    let user: any = localStorage.getItem("user");
    user = JSON.parse(user);

    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;

  };

  public ngDoCheck(): void {
    let user: any = localStorage.getItem("user");
    user = JSON.parse(user);

    if (user.role === "admin") {
      this.isAdmin = true;
      return;
    }

    if (user.role === "employee") {
      this.isEmployee = true;
      return;
    }

    if (user.role === "user") {
      this.isUser = true;
      return;
    }


  }
}
