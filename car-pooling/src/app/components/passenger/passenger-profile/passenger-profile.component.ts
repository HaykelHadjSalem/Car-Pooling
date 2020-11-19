import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-passenger-profile',
  templateUrl: './passenger-profile.component.html',
  styleUrls: ['./passenger-profile.component.scss']
})
export class PassengerProfileComponent implements OnInit {
  passenger: any;
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getUser() && this.tokenStorage.getUser().type === 'passenger') {
      this.passenger = this.tokenStorage.getUser()
    }
  }

}
