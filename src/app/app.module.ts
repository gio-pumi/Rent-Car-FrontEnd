import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { PersonalAreaSideBarComponent } from './components/personal-area-side-bar/personal-area-side-bar.component';
import { AddCarTypeComponent } from './components/add-car-type/add-car-type.component';
import { CarThumbnailComponent } from './components/car-thumbnail/car-thumbnail.component'
import { NgxPaginationModule} from 'ngx-pagination';
import { CalculateRentPriceComponent } from './components/calculate-rent-price/calculate-rent-price.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';

@NgModule({
  declarations: [
  LayoutComponent,
  NavBarComponent,
  LogInComponent,
  HomeComponent,
  FooterComponent,
  SearchComponent,
  ContactUsComponent,
  SignUpComponent,
  PageNotFoundComponent,
  PersonalAreaComponent,
  LogOutComponent,
  AddCarComponent,
  PersonalAreaSideBarComponent,
  AddCarTypeComponent,
  CarThumbnailComponent,
  CalculateRentPriceComponent,
  OrdersComponent,
  ManageOrdersComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [
  ],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
