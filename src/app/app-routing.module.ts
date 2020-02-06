import { ManageOrdersComponent } from './components/manage-orders/manage-orders.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CalculateRentPriceComponent } from './components/calculate-rent-price/calculate-rent-price.component';
import { AddCarTypeComponent } from './components/add-car-type/add-car-type.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { PersonalAreaComponent } from './components/personal-area/personal-area.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './services/login-guard.service';
import { AdminGuardService } from './services/admin-guard.service';


const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "search", component: SearchComponent },
  { path: "contactUs", component: ContactUsComponent },
  { path: "signUp", component: SignUpComponent },
  { path: "login", component: LogInComponent },
  { path: "logout", component: LogOutComponent },
  { path: "MyOrders", component: OrdersComponent },
  { path: "manageOrders", component: ManageOrdersComponent },
  { path: "user", canActivate: [LoginGuardService], component: PersonalAreaComponent },
  {
    path: "admin", canActivate: [AdminGuardService], component: PersonalAreaComponent,
    children: [
      {
        path: 'app-add-car-brand',
        component: AddCarTypeComponent,
        outlet: 'addCarBrandOraddCar'
      },
      {
        path: 'app-add-car',
        component: AddCarComponent,
        outlet: 'addCarBrandOraddCar'
      }
    ]
  },
  { path: "employee", component: PersonalAreaComponent },
  { path: "calculationCarPrice/:id", component: CalculateRentPriceComponent },

  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
