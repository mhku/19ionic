import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SignUpPage} from '../sign-up/sign-up';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  SignUpPage;
  constructor(public navCtrl: NavController) {
    this.SignUpPage=SignUpPage;
  }

}
