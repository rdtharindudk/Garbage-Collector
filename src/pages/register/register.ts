import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  lane_number="100";
  constructor(public navCtrl: NavController, public navParams: NavParams, public authService : AuthService, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(details){
    details.lane_number = this.lane_number;
    
    if(details.fullname == "" || details.address == "" || details.email == "" || details.phn == "" || details.fullname == "" || details.password=="" || details.cpassword == ""){
      this.showerror();
    }
    else if(details.password==details.cpassword){
      details.type = "user";
      this.authService.register(details).subscribe(response => {
        if (response){
          this.showConfirm();
        }
      });
      
    }
    console.log(details);
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
  }
    showerror() {
      let confirms = this.alertCtrl.create({
        title: 'Error',
        message: 'Please Enter Correct Information',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
    confirms.present();
  }
}
