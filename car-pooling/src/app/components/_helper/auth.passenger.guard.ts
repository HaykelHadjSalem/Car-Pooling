import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthPassengerGuard implements CanActivate {

  constructor(private router: Router, private token: TokenStorageService) {}

  canActivate() : boolean {
  if(this.token.loggedIn() && this.token.getUser().type === 'passenger'){
    return true
  } else{
     this.router.navigate(['home'])
      return false ;
  }
  }
  
}
