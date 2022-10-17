import {Component, Input, OnInit} from "@angular/core"
import {IProduct} from "../../models/product";
import {ProductsService} from "../../services/products.service";


@Component({
  selector:'app-product',
  templateUrl:"./product.component.html",
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() product: IProduct
  products: IProduct[] = []
  loading  = false
  constructor(private productsService: ProductsService) {
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
}

