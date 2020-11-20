import { Component, OnInit,HostListener } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';
import {RideService} from 'src/app/services/ride.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  data:any;
  obj = {
    departure:"",
  destination :"", 
  date :"", seats: null, price : null, time : "", driverId : null, stop1 : null, stop2: null, stop3:null};
  constructor(private tokenStorage: TokenStorageService, private rideService: RideService) { }

  ngOnInit(): void {
    this.data = this.tokenStorage.getUser();
    console.log(this.data)
  }


  

  onSubmit(form: NgForm) {
    console.log(this.obj)
    this.obj.departure= form.value['departure'];
    this.obj.destination = form.value['departure'];
    this.obj.date = form.value['date'];
    this.obj.seats= form.value['seats'];
    this.obj.time = form.value['time']
    this.obj.price = form.value['price'];
    this.obj.stop1 = form.value['stop1'];
    this.obj.driverId = this.data.id
    this.rideService.addRide(this.obj).subscribe((ride)=>{
      console.log(ride)
    })
 
}
 
}
