import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
customer!:any;
  constructor(private customerService:UserserviceService,private http:HttpClient,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.customerService.Customersubject.subscribe(res=>{
      if(res){
      this.http.get<any>(`http://localhost:3000/signup/${res.userId}`).subscribe(res=>{
      this.customer=res;
      })
    }
    })
  }
  approve(customer: any) {
    const dialogRef = this.dialog.open(EditCustomerComponent, {
      data: customer,
      panelClass: 'editComp',
      height: '600px',
      width: '550px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
