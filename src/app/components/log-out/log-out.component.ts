import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {

  public constructor(private router: Router) { }

  public ngOnInit(): void {
      localStorage.removeItem("user");
      this.router.navigate(["/home"]);
  }

}
