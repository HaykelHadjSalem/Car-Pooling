import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss']
})
export class PassengerComponent implements OnInit {
  user: any;
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getUser() && this.tokenStorage.getUser().type === 'passenger') {
      this.user = this.tokenStorage.getUser()
    } else {
      this.router.navigate(['home']);
    }
    console.log(this.user)
  }

}
