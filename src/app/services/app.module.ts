import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductComponent} from '../components/product/product.component'
import {HttpClientModule} from "@angular/common/http";
import {UsersinfoComponent} from '../components/usersinfo/usersinfo.component';
import {NotFoundComponent} from '../components/not-found/not-found.component';
import {HomeComponent} from '../components/home/home.component';
import {ColorComponent} from "../components/color/color.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    UsersinfoComponent,
    NotFoundComponent,
    HomeComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
