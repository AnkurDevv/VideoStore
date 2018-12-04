import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserVideoListComponent } from './user-video-list/user-video-list.component';
import { AdminVideoListComponent } from './admin-video-list/admin-video-list.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { UpdateVideoComponent } from './update-video/update-video.component';
import { ReserveVideoComponent } from './reserve-video/reserve-video.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { LoginComponent } from './login/login.component';

// const routes: Routes = [
//  // { path: 'userVideoList', component: [UserVideoListComponent] },

// ];

@NgModule({
  declarations: [
    AppComponent,
    UserVideoListComponent,
    AdminVideoListComponent,
    AdminLoginComponent,
    CustomerListComponent,
    UpdateVideoComponent,
    ReserveVideoComponent,
    AddVideoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path:'',component: LoginComponent},
        {path:'user-video-list',component: UserVideoListComponent},
        {path:'admin-video-list',component: AdminVideoListComponent},
        {path:'admin-login',component: AdminLoginComponent},
        {path:'customer-list',component: CustomerListComponent},
        {path:'add-video',component: AddVideoComponent},
        {path:'reserve-video',component: ReserveVideoComponent}, 
        {path:'update-video',component: UpdateVideoComponent}
       ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
