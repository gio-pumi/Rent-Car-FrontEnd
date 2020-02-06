import { DisplayCar } from './../../models/displayCar';
import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-car-thumbnail',
  templateUrl: './car-thumbnail.component.html',
  styleUrls: ['./car-thumbnail.component.css']
})
export class CarThumbnailComponent implements OnInit {

  @Input()
  public car: DisplayCar;

  @Input()
  public image: string;
  constructor() { }

  ngOnInit() {
  }

}
