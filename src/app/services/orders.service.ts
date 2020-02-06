import { CarOrder } from './../models/carOrder';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { DisplayCar } from '../models/displayCar';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  constructor(private httpClient: HttpClient) { }

  public CheckCarAvailability(order: CarOrder): Observable<boolean> {
    const url = "http://localhost:58161/api/orders";
    return this.httpClient.post<boolean>(url, order);
  }

  public addOrder(order: CarOrder): Observable<number> {
    const url = "http://localhost:58161/api/orders/addOrder";
    return this.httpClient.post<number>(url, order);
  }

  public getOrdersOfUser(userId: number): Observable<DisplayCar[]> {
    const url = ("http://localhost:58161/api/orders/getOrders");
    return this.httpClient.get<DisplayCar[]>(url + "/" + userId);
  }

  public getOrder(orderId: number): Observable<DisplayCar> {
    const url = ("http://localhost:58161/api/orders/getOrder");
    return this.httpClient.get<DisplayCar>(url + "/" + orderId);
  }

  public deleteOrder(orderId: number): Observable<boolean> {
    const url = ("http://localhost:58161/api/orders/deleteOrder");
    return this.httpClient.delete<boolean>(url + "/" + orderId);
  }
}



