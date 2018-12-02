import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { UserVideoListComponent } from './user-video-list/user-video-list.component';
import { AdminVideoListComponent } from './admin-video-list/admin-video-list.component';

// const routes: Routes = [
//  // { path: 'userVideoList', component: [UserVideoListComponent] },

// ];

@NgModule({
  declarations: [
    AppComponent,
    UserVideoListComponent,
    AdminVideoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      [
        {path:'user-video-list',component: UserVideoListComponent},
        {path:'admin-video-list',component: AdminVideoListComponent}  
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
