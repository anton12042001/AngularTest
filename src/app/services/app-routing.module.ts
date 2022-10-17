import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "../components/home/home.component";
import {UsersinfoComponent} from "../components/usersinfo/usersinfo.component";
import {NotFoundComponent} from "../components/not-found/not-found.component";
import {ProductComponent} from "../components/product/product.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: ProductComponent},
      {path: ':id', component: UsersinfoComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
