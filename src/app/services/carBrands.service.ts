import { CarBrand } from '../models/carBrand';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class CarBrandsService {

  constructor(private httpClient: HttpClient) { }

  public addCarBrand(carBrand: CarBrand): Observable<string> {
    const url = "http://localhost:58161/api/carBrands";
    return this.httpClient.post<string>(url, carBrand);
  }

}
