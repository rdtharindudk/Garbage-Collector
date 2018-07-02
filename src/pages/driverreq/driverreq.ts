import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the DriverreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverreq',
  templateUrl: 'driverreq.html',
})
export class DriverreqPage {

  requests;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http) {
    this.http.get("http://localhost:1234/api/getRequests").subscribe(response => {
      this.requests = response.json().data;
      console.log(this.requests);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverreqPage');
  }

  completed(r){
    this.http.post("http://localhost:1234/api/requestDone",{date : r.date}).subscribe(response => {
      console.log("response is :" +response);

      this.http.get("http://localhost:1234/api/getRequests").subscribe(response => {
      this.requests = response.json().data;
      this.requests.date = new Date(this.requests.date);
      console.log(this.requests);
    });
    });
    
  }

  decline(r){

    this.http.post("http://localhost:1234/api/requestDecline",{date : r.date}).subscribe(response => {
      console.log("response is :" +response);

      this.http.get("http://localhost:1234/api/getRequests").subscribe(response => {
      this.requests = response.json().data;
      this.requests.date = new Date(this.requests.date);
      console.log(this.requests);
    });
    });

  }

}
