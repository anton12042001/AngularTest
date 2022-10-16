import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angular app';
  products: IProduct[] = []
  loading  = false
  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.loading = true
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}
