import { UpdateitemPage } from './../updateitem/updateitem';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the MyitemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myitems',
  templateUrl: 'myitems.html',
})
export class MyitemsPage {

  fullname;
  lane_number;
  phn;
  address;
  email;
  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public http : Http, public storage :Storage) {
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
        this.http.post("http://localhost:1234/api/getitemsuser",{username : this.fullname}).subscribe(response => {
          this.items = response.json().data;
          console.log(this.items);
    });
        
      }
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyitemsPage');
  }

  update(i){
    this.navCtrl.push(UpdateitemPage,{"details" : i})
  }

  delete(i){
    this.http.post("http://localhost:1234/api/deleteitem",{id : i.id}).subscribe(response => {
          console.log(this.items);
          this.http.post("http://localhost:1234/api/getitemsuser",{username : this.fullname}).subscribe(response => {
            this.items = response.json().data;
            console.log(this.items);
      });
    });
  }
}
