import {Component, OnInit} from '@angular/core';
import {IProduct} from "./models/product";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  template:`<div><router-outlet></router-outlet></div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }


}
