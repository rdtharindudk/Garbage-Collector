import { AuthService } from './../../services/auth.service';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JwtHelper } from 'angular2-jwt';
/**
 * Generated class for the RequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-request',
  templateUrl: 'request.html',
})
export class RequestPage {

  fullname;
  lane_number;
  phn;
  address;
  email;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage : Storage,public authService : AuthService, public alertCtrl: AlertController) {

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
    console.log('ionViewDidLoad RequestPage');
  }

  sendRequest(){
    let details = {
      'username' : this.fullname,
      'address' : this.address,
      'lane_number' : this.lane_number,
      'date' : new Date()

    }
    this.authService.sendRequest(details).subscribe(response => {
      if (response){
        this.showConfirm();
      }
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'Your request has been successfully recorded.',
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
