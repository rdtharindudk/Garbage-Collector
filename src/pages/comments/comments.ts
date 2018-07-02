import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the CommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comments',
  templateUrl: 'comments.html',
})
export class CommentsPage {

  comments=[];
  id;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.id = navParams.get('id');
    this.http.post("http://localhost:1234/api/comments",{id :this.id}).subscribe(response => {
      this.comments = response.json().data;
      console.log(response);
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommentsPage');
  }

  register(details){
    details.id = this.id;
    this.http.post("http://localhost:1234/api/addcomment",details).subscribe(response => {
      console.log(response);
      this.http.post("http://localhost:1234/api/comments",{id :this.id}).subscribe(response => {
      this.comments = response.json().data;
      console.log(this.comments);
    });
    })
  }

}
