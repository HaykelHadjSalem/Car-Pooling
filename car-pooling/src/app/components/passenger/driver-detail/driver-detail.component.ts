import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';
import { DriverService } from 'src/app/services/driver.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.component.html',
  styleUrls: ['./driver-detail.component.scss']
})
export class DriverDetailComponent implements OnInit {
Driver : any;
  constructor(private driverService : DriverService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  ngOnInit(): void {
this.getDriver()
  }
  
getDriver(){
  const id = +this.route.snapshot.paramMap.get('id');
  console.log(id)
  this.driverService.getDriver(id).subscribe(hero =>  this.Driver = hero);

}

goBack(): void {
  this.location.back();
}

}
