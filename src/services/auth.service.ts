import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { JwtHelper } from 'angular2-jwt';
import { Storage } from '@ionic/storage';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Injectable()
export class AuthService {

  constructor(private http : Http, private storage: Storage) { }

  login(credentials){
    return this.http.post('http://localhost:1234/users/login',credentials)
    .map(response => {
      let result = response.json();
      console.log(result);
      if (result.error===0 && result.token){ 
        this.storage.set('token',result.token).then(()=>{
         return response.json();
        }).catch((e) =>{
          console.log(e);
        });
      } 
      return response.json();
    });
  }

    
  register(data){
    return this.http.post("http://localhost:1234/users/register",data).map(response => {
      if (response){
        console.log(response);
        return true;
      }
      else {
        return false;
      }
    })
  }

  sendRequest(data){
    return this.http.post("http://localhost:1234/api/request",data).map(response => {
      if (response){
        console.log(response);
        return true;
      }
      else {
        return false;
      }
    })
  }
}
