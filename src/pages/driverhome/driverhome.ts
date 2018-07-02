import { DriverreqlanePage } from './../driverreqlane/driverreqlane';
import { DriverreqPage } from './../driverreq/driverreq';
import { UsersPage } from './../users/users';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the DriverhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverhome',
  templateUrl: 'driverhome.html',
})
export class DriverhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
  }

  items = ['Garbage Collection Requests', 'Lane wise Requests'];

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserpagePage');
  }

  logout(){
    this.storage.remove('token').then(()=>{
      this.navCtrl.setRoot(HomePage);
    }).catch((e) =>{
      console.log(e);
    });
  }

  itemSelected(item){
    if(item==='Registered Users'){
      this.navCtrl.push(UsersPage );
    }
    else if (item==='Garbage Collection Requests'){
      this.navCtrl.push(DriverreqPage);
    }
    else if (item==='Lane wise Requests'){
      this.navCtrl.push(DriverreqlanePage);
    }
  }
}
