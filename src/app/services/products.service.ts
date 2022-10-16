import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IProduct} from "../models/product";

@Injectable({
  providedIn:"root"
})

export class ProductsService {
  constructor(private http:HttpClient) {
  }

  getAll(): Observable<IProduct[]> {
   return this.http.get<any>('https://reqres.in/api/users').pipe(map((res) => res.data))
  }
}
