import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the UpdateitemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-updateitem',
  templateUrl: 'updateitem.html',
})
export class UpdateitemPage {
  details ;
  item_name;
  description;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public http :Http) {
    this.details=this.navParams.get("details");
    this.item_name = this.details.item_name;
    this.description = this.details.description;
    console.log(this.description);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateitemPage');
  }

  update(){
    this.details.item_name = this.item_name;
    this.details.description = this.description;
    var id = this.details.id;

    this.http.post("http://localhost:1234/api/deleteitem",{id : id}).subscribe(response => {
      this.http.post("http://localhost:1234/api/addItem",this.details).subscribe(response => {
        console.log(response);
        this.showConfirm();
      });
        
    });
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Registration',
      message: 'You have added a item successfully!',
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
