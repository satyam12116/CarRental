
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';
import { RequestCarComponent } from './request-car/request-car.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserRentStatusComponent } from './user-rent-status/user-rent-status.component';


const routes: Routes = [
  
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin-auth',
    component: AdminAuthComponent,
  },
  {
    path: 'user-auth',
    component: UserAuthComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'car-Request',
    component: RequestCarComponent,
  },
  {
    path: 'cust-list',
    component: CustomerListComponent,
  },
  {
    path: 'user-rent',
    component: UserRentStatusComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
