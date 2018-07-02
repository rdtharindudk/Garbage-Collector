import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requests',
  templateUrl: 'requests.html',
})
export class RequestsPage {

  requests;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.http.get("http://localhost:1234/api/getRequests").subscribe(response => {
      this.requests = response.json().data;
      console.log(this.requests);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestsPage');
  }

}
