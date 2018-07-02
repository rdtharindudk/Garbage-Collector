import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DeclinedpagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-declinedpages',
  templateUrl: 'declinedpages.html',
})
export class DeclinedpagesPage {

  drequests;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.http.get("http://localhost:1234/api/getdRequests").subscribe(response => {
      this.drequests = response.json().data;
      console.log(this.drequests);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeclinedpagesPage');
  }

}
