import { DisplayCar } from '../models/displayCar';
import { Car } from 'src/app/models/car';
import { CarBrand } from '../models/carBrand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  public addCar(car: Car): Observable<string> {
    const url = "http://localhost:58161/api/cars";
    return this.httpClient.post<string>(url, car);
  }

  public getAllCar(): Observable<DisplayCar[]> {
    const url = "http://localhost:58161/api/cars";
    return this.httpClient.get<DisplayCar[]>(url);
  }

  public getCar(carId: number): Observable<DisplayCar> {
    const url = "http://localhost:58161/api/cars";
    return this.httpClient.get<DisplayCar>(url + "/" + carId);
  }
}
