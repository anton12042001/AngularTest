import {Component, Input, OnInit} from "@angular/core"
import {IProfile} from "../../models/profile";
import {BackHttpService} from "../API/BackHttpService";
import {StorageService} from "../API/StorageService";


@Component({
  selector:'app-product',
  templateUrl:"./product.component.html",
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit{
  @Input() product: IProfile
  products: IProfile[] = []
  loading  = false
  constructor(private productsService: BackHttpService,
              private storageService: StorageService) {
  }
  ngOnInit(): void {
    this.productsService.getAll().subscribe(products => {
      this.products = products
      this.loading = false
    })
  }
  onClickByButton(product:IProfile){
    this.storageService.setData(product);
  }
}

