import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AddmessegePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addmessege',
  templateUrl: 'addmessege.html',
})
export class AddmessegePage {

  lane_number = 100;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddmessegePage');
  }

  register(details){
    details.lane_number = this.lane_number;
    console.log(details);

    this.http.post("http://localhost:1234/api/addmessege",details).subscribe(response => {
      console.log(response);
      this.showConfirm();
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'You have added a messege successfully!',
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
