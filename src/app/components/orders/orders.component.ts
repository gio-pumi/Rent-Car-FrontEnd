import { CarOrder } from './../../models/carOrder';
import { DisplayCar } from './../../models/displayCar';
import { OrdersService } from 'src/app/services/orders.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  public usersOrder: User = (JSON.parse(localStorage.getItem("user"))) as User;
  public cars: DisplayCar[] = new Array()
  public userId: number = this.usersOrder.IdOfUser;

  ngOnInit() {

    this.ordersService.getOrdersOfUser(this.userId)
      .subscribe(orderedCars => {
        for (var car of orderedCars) {
          this.cars.push(car);
        }
      }
      ),
      err => alert(err.message);
  }
}
  /*ngOnInit() {

  this.ordersService.getOrder(this.userId)
    .subscribe(orders => {
      this.myOrders = orders;
      for (var order of this.myOrders) {
        alert("" + JSON.stringify(order.id));
        this.carsService.getCar(order.idOfCarFleet)
          .subscribe(car => {
            alert("" + JSON.stringify(order.id));
             // alert("" + JSON.stringify(car));
            this.cars.push(car);
          },
            err => alert(err.message))
      }
    }
    ),
    err => alert(err.message);
}*/
