import { DeclinedpagesPage } from './../pages/declinedpages/declinedpages';
import { MessegesPage } from './../pages/messeges/messeges';
import { AddmessegePage } from './../pages/addmessege/addmessege';
import { UpdateitemPage } from './../pages/updateitem/updateitem';
import { MyitemsPage } from './../pages/myitems/myitems';
import { CommentsPage } from './../pages/comments/comments';
import { ItemListPage } from './../pages/item-list/item-list';
import { AdditemPage } from './../pages/additem/additem';
import { DriverreqlanePage } from './../pages/driverreqlane/driverreqlane';
import { DriverreqPage } from './../pages/driverreq/driverreq';
import { DriveraccPage } from './../pages/driveracc/driveracc';
import { UserinfoPage } from './../pages/userinfo/userinfo';
import { DriverhomePage } from './../pages/driverhome/driverhome';
import { RequestsPage } from './../pages/requests/requests';
import { UsersPage } from './../pages/users/users';
import { RequestPage } from './../pages/request/request';
import { ProfilePage } from './../pages/profile/profile';
import { RegisterPage } from './../pages/register/register';
import { UserpagePage } from '../pages/userpage/userpage';
import { AuthService } from '../services/auth.service';
import { AdminhomePage } from '../pages/adminhome/adminhome';
import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    AdminhomePage,
    UserpagePage,
    RegisterPage,
    ProfilePage,
    RequestPage,
    UsersPage,
    RequestsPage,
    DriverhomePage,
    UserinfoPage,
    DriveraccPage,
    DriverreqPage,
    DriverreqlanePage,
    AdditemPage,
    ItemListPage,
    CommentsPage,
    MyitemsPage,
    UpdateitemPage,
    AddmessegePage,
    MessegesPage,
    DeclinedpagesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    AdminhomePage,
    UserpagePage,
    RegisterPage,
    ProfilePage,
    RequestPage,
    UsersPage,
    RequestsPage,
    DriverhomePage,
    UserinfoPage,
    DriveraccPage,
    DriverreqPage,
    DriverreqlanePage,
    AdditemPage,
    ItemListPage,
    CommentsPage,
    MyitemsPage,
    UpdateitemPage,
    AddmessegePage,
    MessegesPage,
    DeclinedpagesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
  ]
})
export class AppModule {}
