import { DisplayCar } from './../../models/displayCar';
import { CarsService } from 'src/app/services/cars.service';
import { SearchService } from '../../services/search.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SearchCar } from 'src/app/models/SearchCar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchCar = new SearchCar();
  public displayCar: DisplayCar[];
  public cars: number;
  public Images: File[];

  constructor(private searchService: SearchService, private carService: CarsService) { }

  ngOnInit() {
    this.carService.getAllCar()
      .subscribe(cars => {
        this.displayCar = cars;
        this.cars = cars.length;
      },
        err => alert(err.message));
  }

  public search(): void {
    this.searchService.searchCar(this.searchCar)
      .subscribe(cars => {
        this.displayCar = cars;
        this.cars = cars.length;
      },
        err => alert(err.message));
  }
}
