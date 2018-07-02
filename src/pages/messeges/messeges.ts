import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MessegesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messeges',
  templateUrl: 'messeges.html',
})
export class MessegesPage {

  messeges;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http :  Http) {
    console.log(this.navParams.get("lane_number"));
    this.http.post("http://localhost:1234/api/getmesseges",{lane_number : this.navParams.get("lane_number") }).subscribe(response => {
      this.messeges = response.json().data;
      console.log(this.messeges);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessegesPage');
  }

}
