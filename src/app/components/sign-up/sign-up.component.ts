import { Router } from '@angular/router';
import { UsersService } from './../../services/users.service';
import { User } from './../../models/user';
import { Component} from '@angular/core';
import { ImagesService } from 'src/app/services/Images.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  public user = new User();
  

  constructor(private uploadImageService: ImagesService,private usersService: UsersService,private router: Router) { }

    public onFileSelect(args): void {
        const file = args.target.files[0];
        this.uploadImageService.uploadImage(file)
            .subscribe(
                () => alert("Done."),
                err => alert("Error: " + err.message)
            );}

  public addUser(): void {
    this.usersService.addUser(this.user)
        .subscribe(
            m =>
          {
            alert(" "+ m),
            this.router.navigate(['home'])
          }   
        ),
        err => alert(err.message);
  }
}