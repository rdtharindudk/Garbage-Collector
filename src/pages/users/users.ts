import { UserinfoPage } from './../userinfo/userinfo';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  users;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get('http://localhost:1234/users/getUsers').subscribe(response => {
      this.users = response.json().data;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    
  }

  ionViewDidEnter(){
    this.http.get('http://localhost:1234/users/getUsers').subscribe(response => {
      this.users = response.json().data;
    });
  }

  itemSelected(item){
    console.log(item);
    this.navCtrl.push(UserinfoPage,{'user':item});
  }


}
