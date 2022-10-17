import {Component, OnInit} from "@angular/core"
import {IProfile} from "../../models/profile";
import {BackHttpService} from "../API/BackHttpService";
import {StorageService} from "../API/StorageService";


@Component({
  selector: 'app-product',
  templateUrl: "./product.component.html",
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: IProfile[] = []
  loading = false

  constructor(private backHttpService: BackHttpService,
              private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.backHttpService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }

  onClickByButton(product: IProfile) {
    this.storageService.setData(product);
  }

  onClickDelete(id: number) {
    console.log(id)
    let newProducts: IProfile[] = []
      this.backHttpService.deleteUserById(id).subscribe(() => {
        for (let i = 0; i <= this.products.length; i++) {
          if (this.products[i].id !== id) {
            newProducts.push(this.products[i])
          }
        }
        this.products = newProducts
        console.log(this.products)
      })
  }
}

