import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { ImagesService } from 'src/app/services/Images.service';
import { Car } from 'src/app/models/car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  constructor(private router: Router, private carsService: CarsService, private uploadImageService: ImagesService) { }

  imageUrl: string = "/assets/images/default-images.png";
  fileToUpload: File = null;

  public car = new Car();

  public handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  public addcar(): void {
    this.uploadImageService.uploadImage(this.fileToUpload)
      .subscribe(imageName => {
        this.fileToUpload = null;
        this.car.image = imageName;
        this.carsService.addCar(this.car)
          .subscribe(car => {
            alert("" + car)
            this.router.navigate(['/home'])
          },
            err => alert(err.message))
      },
        err => alert(err.message),
      );
  }
}
