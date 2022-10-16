import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductComponent} from  './components/product/product.component'
import {HttpClientModule} from "@angular/common/http";
import { UsersinfoComponent } from './components/usersinfo/usersinfo.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'userinfo', component: UsersinfoComponent},
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersinfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
