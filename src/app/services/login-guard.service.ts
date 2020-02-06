import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

    public constructor(private router: Router){}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let user: any = localStorage.getItem("user");
        
        if(user === null) {
            this.router.navigate(["/login"]);
            return false;
        }

        user = JSON.parse(user);

        if(user.role !== "user") {
          this.router.navigate(["/login"]);
          return false;
      }
        return true;
    }
}
