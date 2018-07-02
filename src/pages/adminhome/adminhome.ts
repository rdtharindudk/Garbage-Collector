import { DeclinedpagesPage } from './../declinedpages/declinedpages';
import { DriveraccPage } from './../driveracc/driveracc';
import { RequestsPage } from './../requests/requests';
import { UsersPage } from './../users/users';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AddmessegePage } from '../addmessege/addmessege';

/**
 * Generated class for the AdminhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-adminhome',
  templateUrl: 'adminhome.html',
})
export class AdminhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  items = ['Registered Users', 'Declined Requests', 'Garbage Collection Requests', 'Drivers Portal Accounts','Add a messege to Users'];

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

  logout() {
    this.storage.remove('token').then(() => {
      this.navCtrl.setRoot(HomePage);
    }).catch((e) => {
      console.log(e);
    });
  }

  itemSelected(item) {
    if (item === 'Registered Users') {
      this.navCtrl.push(UsersPage);
    }
    else if (item === 'Garbage Collection Requests') {
      this.navCtrl.push(RequestsPage);
    }
    else if (item === 'Drivers Portal Accounts') {
      this.navCtrl.push(DriveraccPage);
    }
    else if (item === 'Add a messege to Users') {
      this.navCtrl.push(AddmessegePage);
    }
    else if (item === 'Declined Requests') {
      this.navCtrl.push(DeclinedpagesPage);
    }
  }
}
