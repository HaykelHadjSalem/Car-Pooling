import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private tokenStorage: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
    if(this.tokenStorage.getUser()) {
      this.user = this.tokenStorage.getUser()
    }
  }

  logout(): void {
    this.tokenStorage.signOut()
    this.router.navigate(['home']);
  }

  checkProfile(): void {
    this.router.navigate([`${this.user.type}/profile`]);
  }

}
