import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../../services/token-storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  data:any;
selectedFile: File = null ;
  constructor(private tokenStorage: TokenStorageService, private router : Router) { }

  ngOnInit(): void {
this.data = this.tokenStorage.getUser();
console.log(this.data.firstName)

  }

  onFileselected(event){
    this.selectedFile = <File>event.target.files[0];
  }

  logout() {
    this.tokenStorage.signOut()
    this.router.navigate(['home']);
  }

}
