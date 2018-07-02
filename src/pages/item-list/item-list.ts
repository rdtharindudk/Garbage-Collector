import { CommentsPage } from './../comments/comments';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the ItemListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-list',
  templateUrl: 'item-list.html',
})
export class ItemListPage {

  items = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http.get("http://localhost:1234/api/getItems").subscribe(response => {
      this.items = response.json().data;
      console.log(this.items);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemListPage');
  }

  comments(i){
    console.log(i);
    this.navCtrl.push(CommentsPage,{id:i});
  }

}
