import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserserviceService } from '../service/userservice.service';

@Component({
  selector: 'app-request-car',
  templateUrl: './request-car.component.html',
  styleUrls: ['./request-car.component.scss']
})
export class RequestCarComponent implements OnInit {
  custId!:any;
  ans:any;
  closePopup=true;
  constructor(private fb: FormBuilder,private http:HttpClient,private customerService:UserserviceService,private _snackBar:MatSnackBar) {}
  rentForm = this.fb.group({
    carType: ['', Validators.required],
    days: ['', Validators.required],
    requestDate: ['', Validators.required],

  });
  ngOnInit(): void {
this.customerService.Customersubject.subscribe(res=>{
  if(res){
    this.custId=res.userId;
  }
})
  }
  applyForCar() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    let  ans1=new Date(this.rentForm.get('requestDate')?.value) 
 
    let body={
      customerId:this.custId,
      carType:this.rentForm.get('carType')?.value,
      days:this.rentForm.get('days')?.value,
      requestDate:ans1.toJSON().slice(0,10) ,
      status: 'not approved',
    }
    if (this.rentForm.valid) {
      this.http.post<any>('http://localhost:3000/carRequest',body,httpOptions).subscribe((res:any)=>{
      if(res){
        this._snackBar.open("Rent Applied successfully", 'close', {
          horizontalPosition: 'start',
          verticalPosition: 'top',
        })
       this.closePopup=false;
      }
      else{
       console.log('err');

      }
      })
    }
  }
}
