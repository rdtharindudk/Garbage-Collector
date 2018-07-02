import { MessegesPage } from './../messeges/messeges';
import { MyitemsPage } from './../myitems/myitems';
import { AdditemPage } from './../additem/additem';
import { RequestPage } from './../request/request';
import { ProfilePage } from './../profile/profile';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { JwtHelper } from 'angular2-jwt';
/**
 * Generated class for the UserpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userpage',
  templateUrl: 'userpage.html',
})
export class UserpagePage {

  fullname;
  lane_number;
  phn;
  address;
  email;
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
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

  items = ['View my Profile', 'Messeges' ,  'Request to Collect Garbage', 'My Previous Requests', 'Add a Item','My Items'];

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
    if(item==='View my Profile'){
      this.navCtrl.push(ProfilePage);
    }
    else if (item==='Request to Collect Garbage'){
      this.navCtrl.push(RequestPage);
    }
    else if (item==='Add a Item'){
      this.navCtrl.push(AdditemPage);
    }
    else if (item==='My Items'){
      this.navCtrl.push(MyitemsPage);
    } 
    else if (item==='Messeges'){
      this.navCtrl.push(MessegesPage,{"lane_number" : this.lane_number});
    }

    
  }
}
