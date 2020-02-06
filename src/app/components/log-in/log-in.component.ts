import { Credentials } from '../../models/credentials';
import { UsersService } from './../../services/users.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {

  public credentials = new Credentials();

  constructor(private usersService: UsersService, private router: Router) { }

  public logIn(): void {
    this.usersService.logIn(this.credentials)
      .subscribe(
        user => {
          if (user.nameOfUser === null) {
            alert("User or password is incorrect please try again!")
          }
          else {
            localStorage.setItem("user", JSON.stringify(user));
            if (user.role === "user") {
              this.router.navigate(["/home"]);
            }
            else if (user.role === "employee") {
              this.router.navigate(["/home"]);
            }
            else if (user.role === "admin") {
              this.router.navigate(["/home"]);
            }
          }
        },
        err => alert(err.message),
        () => console.log("Done.")
      );
  }
}
