import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { DisplayCar } from 'src/app/models/displayCar';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {

  constructor(private ordersService: OrdersService) { }

  public date: Date = new Date;
  public daysOfLate: number;
  public usersOrder: User = (JSON.parse(localStorage.getItem("user"))) as User;
  public orderedCar: DisplayCar = new DisplayCar();
  public orderId: number;
  public avilable: boolean = false;
  public meessage: boolean = false;
  public totalDays: number;
  public orderPaid: boolean = false;

  ngOnInit() {
  }

  public getOrder() {
    this.ordersService.getOrder(this.orderId)
      .subscribe(order => {
        this.orderedCar = order;
        if (order) {
          this.avilable = true;
          this.meessage = false;
          this.daysOfLate = Math.floor((this.date.getTime() - new Date(order.carOrder.rentEndDate).getTime()) / (1000 * 60 * 60 * 24));
          this.totalDays = (new Date(order.carOrder.rentEndDate)
            .getTime() - new Date(order.carOrder.rentStartDate)
              .getTime()) / (1000 * 60 * 60 * 24);
        }
        else {
          this.avilable = false;
          this.meessage = true;
        }
      }),
      err => alert(err.message);
  }

  payment() {
    this.ordersService.deleteOrder(this.orderId)
      .subscribe(order => {
        this.orderPaid = order;
      }),
      err => alert(err.message);
  }
}
