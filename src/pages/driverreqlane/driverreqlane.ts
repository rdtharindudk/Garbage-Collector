import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the DriverreqlanePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverreqlane',
  templateUrl: 'driverreqlane.html',
})
export class DriverreqlanePage {
  lane_number="100";
  requests = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http,public alertCtrl: AlertController) {
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 100}).subscribe(response =>{
      this.requests[0] = response.json().data.length;
      console.log(this.requests[0]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 101}).subscribe(response =>{
      this.requests[1] = response.json().data.length;
      console.log(this.requests[1]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 102}).subscribe(response =>{
      this.requests[2] = response.json().data.length;
      console.log(this.requests[2]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 103}).subscribe(response =>{
      this.requests[3] = response.json().data.length;
      console.log(this.requests[3]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 104}).subscribe(response =>{
      this.requests[4] = response.json().data.length;
      console.log(this.requests[4]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 105}).subscribe(response =>{
      this.requests[5] = response.json().data.length;
      console.log(this.requests[5]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 106}).subscribe(response =>{
      this.requests[6] = response.json().data.length;
      console.log(this.requests[6]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 107}).subscribe(response =>{
      this.requests[7] = response.json().data.length;
      console.log(this.requests[7]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 108}).subscribe(response =>{
      this.requests[8] = response.json().data.length;
      console.log(this.requests[8]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 109}).subscribe(response =>{
      this.requests[9] = response.json().data.length;
      console.log(this.requests[9]);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverreqlanePage');
  }

  completed(){
    this.http.post("http://localhost:1234/api/requestlanedone",{lane_number:this.lane_number}).subscribe(response => {
      this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 100}).subscribe(response =>{
      this.requests[0] = response.json().data.length;
      console.log(this.requests[0]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 101}).subscribe(response =>{
      this.requests[1] = response.json().data.length;
      console.log(this.requests[1]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 102}).subscribe(response =>{
      this.requests[2] = response.json().data.length;
      console.log(this.requests[2]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 103}).subscribe(response =>{
      this.requests[3] = response.json().data.length;
      console.log(this.requests[3]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 104}).subscribe(response =>{
      this.requests[4] = response.json().data.length;
      console.log(this.requests[4]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 105}).subscribe(response =>{
      this.requests[5] = response.json().data.length;
      console.log(this.requests[5]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 106}).subscribe(response =>{
      this.requests[6] = response.json().data.length;
      console.log(this.requests[6]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 107}).subscribe(response =>{
      this.requests[7] = response.json().data.length;
      console.log(this.requests[7]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 108}).subscribe(response =>{
      this.requests[8] = response.json().data.length;
      console.log(this.requests[8]);
    });
    this.http.post("http://localhost:1234/api/lanerequest",{lane_number : 109}).subscribe(response =>{
      this.requests[9] = response.json().data.length;
      console.log(this.requests[9]);
    });
    });

  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.completed();
          }
        }
      ]
    });
    confirm.present();
  }
}
