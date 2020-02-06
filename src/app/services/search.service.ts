import { SearchCar } from '../models/searchCar';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DisplayCar } from '../models/displayCar';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private httpClient: HttpClient) { }

  public searchCar(searchCar: SearchCar): Observable<DisplayCar[]> {
    const url = "http://localhost:58161/api/searchCar";
    return this.httpClient.post<DisplayCar[]>(url, searchCar);
  }
}



