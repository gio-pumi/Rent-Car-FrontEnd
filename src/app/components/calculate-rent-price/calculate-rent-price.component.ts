import { User } from './../../models/user';
import { CarOrder } from './../../models/carOrder';
import { CarsService } from 'src/app/services/cars.service';
import { DisplayCar } from './../../models/displayCar';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-calculate-rent-price',
  templateUrl: './calculate-rent-price.component.html',
  styleUrls: ['./calculate-rent-price.component.css']
})
export class CalculateRentPriceComponent implements OnInit {
  public car: DisplayCar;
  public order = new CarOrder();
  public totalDays: number;
  public avilable: boolean
  public carAvilableBanner: boolean =true;
  public user: any = localStorage.getItem("user");
  public usersOrder: User = (JSON.parse(localStorage.getItem("user"))) as User;

  constructor(private carService: CarsService, private route: ActivatedRoute, private orderService: OrdersService) { }

  ngOnInit() {
    this.carService.getAllCar()
      .subscribe(cars => {
        this.car = cars.find(c => c.id == this.route.snapshot.params['id']);
        this.order.idOfCarFleet = this.car.id;
      },
        err => alert(err.message));
  }

  public CheckCarAvailability(): void {
    this.orderService.CheckCarAvailability(this.order)
      .subscribe(avilable => {
        this.avilable = avilable;
        this.carAvilableBanner = avilable;   
        this.totalDays = (new Date(this.order.rentEndDate)
          .getTime() - new Date(this.order.rentStartDate)
            .getTime()) / (1000 * 60 * 60 * 24) 
        if (this.usersOrder != null)
          this.order.idOfUser = this.usersOrder.IdOfUser;
      },
        err => alert(err.message));
  }

  public addOrder(): void {
    this.orderService.addOrder(this.order)
      .subscribe(orderRespond => {
        this.order.id = orderRespond;
      },
        err => alert(err.message));
  }
}
