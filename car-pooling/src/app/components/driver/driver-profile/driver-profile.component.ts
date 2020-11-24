import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-driver-profile',
  templateUrl: './driver-profile.component.html',
  styleUrls: ['./driver-profile.component.scss']
})
export class DriverProfileComponent implements OnInit {
  driver: any;
  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.driver = this.tokenStorage.getUser();
  }

}
