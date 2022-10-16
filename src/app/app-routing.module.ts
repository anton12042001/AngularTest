import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {UsersinfoComponent} from "./components/home/usersinfo/usersinfo.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {path: ':id', component: UsersinfoComponent}]
  },
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
