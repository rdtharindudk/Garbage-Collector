import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';

/**
 * Generated class for the AdditemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additem',
  templateUrl: 'additem.html',
})
export class AdditemPage {

  fullname;
  lane_number;
  phn;
  address;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http : Http,public alertCtrl: AlertController, public storage : Storage) {
    this.storage.get('token').then(token => {
      if (token) {
        let jwthelper = new JwtHelper();
        let details = jwthelper.decodeToken(token).payload;
        console.log(details);
        this.fullname = details.fullname;
        this.lane_number = details.lane_number;
        this.phn = details.phn;
        this.email = details.email;
        this.address = details.address;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditemPage');
  }

  register(details){
    details.date = new Date();
    details.username = this.fullname;
    details.phn = this.phn;
    
    this.http.post("http://localhost:1234/api/addItem",details).subscribe(response => {
      console.log(response);
      this.showConfirm();
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'You have added a item successfully!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }

}
