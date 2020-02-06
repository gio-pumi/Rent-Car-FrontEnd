import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CarBrandsService } from 'src/app/services/carBrands.service';
import { CarBrand } from 'src/app/models/carBrand';

@Component({
  selector: 'app-add-car-type',
  templateUrl: './add-car-type.component.html',
  styleUrls: ['./add-car-type.component.css']
})
export class AddCarTypeComponent{

  constructor(private carService: CarBrandsService,private router: Router) { }

  public carBrand = new CarBrand()
  
    public addcarBrand(): void {
      this.carService.addCarBrand(this.carBrand)
          .subscribe(c =>
             {
              alert(""+c)
             this.router.navigate(['home'])
            },
          err => alert(err.message));     
}
}
