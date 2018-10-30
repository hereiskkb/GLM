import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  menuData = [
    { title: 'Our menu', pic: 'assets/img/soup1.jpg', pushPage: 'MenuPage' },
  ];
  constructor(public navCtrl: NavController) {

  }

}
