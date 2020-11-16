import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
selectedFile: File = null ;
  constructor() { }

  ngOnInit(): void {
  }

  onFileselected(event){
    this.selectedFile = <File>event.target.files[0];
  }

}
