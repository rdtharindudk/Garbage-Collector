import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JwtHelper } from 'angular2-jwt';
import { HomePage } from '../home/home';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  fullname;
  lane_number;
  phn;
  address;
  email;
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http : Http, public alertCtrl: AlertController) {
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
        this.id = details.id;
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  update(details){
    
    details.name = this.fullname;
    details.email = this.email;
    this.http.post("http://localhost:1234/api/updateprofile",details).subscribe(response => {
      console.log(response);
      this.showConfirm();
    
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Update',
      message: 'You have updated your profile. Please login again',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.logout();
          }
        }
      ]
    });
    confirm.present();
  }

  logout(){
    this.storage.remove('token').then(()=>{
      this.navCtrl.setRoot(HomePage);
    }).catch((e) =>{
      console.log(e);
    });
  }

}
