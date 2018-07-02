import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the UserinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
})
export class UserinfoPage {

  fullname;
  phn;
  address;
  email;
  lane_number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.fullname = navParams.get('user').fullname;
    this.email = navParams.get('user').email;
    this.address = navParams.get('user').address;
    this.lane_number = navParams.get('user').lane_number;
    this.phn = navParams.get('user').phn;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserinfoPage');
  }

  deleteUser() {
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete User',
      message: 'You are about to delete this user. are you sure?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.http.post('http://localhost:1234/users/deleteUser', { fullname: this.fullname }).subscribe(response => {
              console.log(response.json());
              this.navCtrl.pop();
            });
          }
        },
        {
          text: 'Cancel',
          handler: () => {
            }
          }
      ]
    });
    confirm.present();
  }

}
