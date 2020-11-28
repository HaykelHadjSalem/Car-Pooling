import { Component, OnInit } from '@angular/core';
import { DriverService } from 'src/app/services/driver.service';
import { ActivatedRoute, Router  } from '@angular/router';


@Component({
  selector: 'app-passenger-detail',
  templateUrl: './passenger-detail.component.html',
  styleUrls: ['./passenger-detail.component.scss']
})
export class PassengerDetailComponent implements OnInit {

  constructor(private driverService : DriverService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
const id = +this.route.snapshot.paramMap.get('id');
  }

}
