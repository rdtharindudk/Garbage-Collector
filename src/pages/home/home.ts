import { ItemListPage } from './../item-list/item-list';
import { AdditemPage } from './../additem/additem';
import { RegisterPage } from './../register/register';
import { LoginPage } from '../login/login';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private storage: Storage) {
    this.storage.remove('token');
  }

  signIn(){
    this.navCtrl.push(LoginPage);
  }
  register(){
    this.navCtrl.push(RegisterPage);
  }
  addItem(){
    this.navCtrl.push(AdditemPage);
  }
  viewItems(){
    this.navCtrl.push(ItemListPage);
  }
}
