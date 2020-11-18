import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router'

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
  verfy:boolean = false;
  constructor(private tokenStorage: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
    console.log(this.tokenStorage.getUser())
    if (this.tokenStorage.getUser()) {
      this.verfy = true
    }
  }
  addRide() {
    //modify ride service to send a post request with information collected from the form to be added in the template 
  }
  logout() {
    this.tokenStorage.signOut()
    this.router.navigate(['home']);
  }

}
