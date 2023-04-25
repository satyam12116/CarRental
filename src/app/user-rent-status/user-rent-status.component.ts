import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-user-rent-status',
  templateUrl: './user-rent-status.component.html',
  styleUrls: ['./user-rent-status.component.scss']
})
export class UserRentStatusComponent implements OnInit {
carRent!:any;
custId!:any;
  constructor(private http:HttpClient,private customerService:UserserviceService) { }

  ngOnInit(): void {
    this.customerService.Customersubject.subscribe(res=>{
      if(res){
        this.custId=res.userId;
      }
    })
    this.http.get<any>(`http://localhost:3000/carRequest/${this.custId}`).subscribe(res=>{
      this.carRent=res;
    })
  }

}
