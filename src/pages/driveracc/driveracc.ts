import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the DriveraccPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driveracc',
  templateUrl: 'driveracc.html',
})
export class DriveraccPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriveraccPage');
  }

  register(details){
    if(details.password==details.cpassword){
      details.type = "driver";
      this.authService.register(details).subscribe(response => {
        if (response){
          this.showConfirm();
        }
      })
      
    }
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'You have registered successfully!. Please sign in.',
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
