import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private authSrvc: AuthService, private custSrvc: CustomerService) { }
  user = '';


  ngOnInit() {
    this.user = this.authSrvc.loggedInUser;
  }

}
