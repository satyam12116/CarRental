import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { AdminAuthComponent } from './admin-auth/admin-auth.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { RequestCarComponent } from './request-car/request-car.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { UserRentStatusComponent } from './user-rent-status/user-rent-status.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserAuthComponent,
    AdminAuthComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    RequestCarComponent,
    HomeComponent,
    CustomerListComponent,
    EditCustomerComponent,
    UserRentStatusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
   MatFormFieldModule,
   HttpClientModule,
   MatInputModule,
   MatDialogModule,
   MatCardModule,
   MatButtonModule,
   MatNativeDateModule,
   MatIconModule,
   ReactiveFormsModule,
   MatDatepickerModule,
   MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
