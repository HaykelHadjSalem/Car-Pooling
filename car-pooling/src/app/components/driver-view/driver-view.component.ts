import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-driver-view',
  templateUrl: './driver-view.component.html',
  styleUrls: ['./driver-view.component.scss']
})
export class DriverViewComponent implements OnInit {
  test : Date = new Date();
  focus;
  focus1;
  focus2;
  constructor() { }

  ngOnInit(): void {
  }

}
