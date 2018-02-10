import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {CardPage} from '../card/card'
import {FabPage} from '../fab/fab'
import {GesturePage} from '../gesture/gesture'
import {GirdPage} from '../gird/gird'
import {FromPage} from  '../from/from'
import {ToastPage} from '../toast/toast'
import {SignUpPage} from '../sign-up/sign-up'
import {IconPage} from  '../icon/icon'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonPage;
  listPage;
  CardPage;
  FabPage;
  GesturePage;
  GirdPage;
  FromPage;
  ToastPage;
  SignUpPage;
  IconPage;
  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.CardPage=CardPage;
    this.FabPage=FabPage;
    this.GesturePage=GesturePage;
    this.GirdPage=GirdPage;
    this.FromPage=FromPage;
    this.ToastPage=ToastPage;
    this.SignUpPage=SignUpPage;
    this.IconPage=IconPage;
  }

}
