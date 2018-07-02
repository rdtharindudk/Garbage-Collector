import { DriverhomePage } from './../driverhome/driverhome';
import { UserpagePage } from '../userpage/userpage';
import { AdminhomePage } from './../adminhome/adminhome';
import { AuthService } from '../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { JwtHelper } from 'angular2-jwt';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  details;
  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService, public alertCtrl: AlertController, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(details) {
    this.authService.login(details).subscribe(response => {

      if (response.error == 0) {
        this.storage.get('token').then(token => {
          if (token) {
            let jwthelper = new JwtHelper();
            details = jwthelper.decodeToken(token).payload;
            this.navigate(details);
          }
        });
        this.navigate(details);
        this.log(details);
        return;

      }
       else {
        this.showAlert();
      }

    });
  }

  log(details){
    this.authService.login(details).subscribe(response => {

      if (response.error == 0) {
        this.storage.get('token').then(token => {
          if (token) {
            let jwthelper = new JwtHelper();
            details = jwthelper.decodeToken(token).payload;
            this.navigate(details);
          }
        });
        this.navigate(details);
        return;
      }
       else {
        this.showAlert();
      }

    });
  }
  navigate(details){

    if (details.type === 'admin') {
      this.navCtrl.setRoot(AdminhomePage);
    }
    else if (details.type === 'user') {
      this.navCtrl.setRoot(UserpagePage);
    }
    else if (details.type === 'driver') {
      this.navCtrl.setRoot(DriverhomePage);
    }
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Incorrect Username or Password',
      buttons: ['OK']
    });
    alert.present();
  }


}
